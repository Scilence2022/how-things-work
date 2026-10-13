#!/usr/bin/env node
// 一致性校验：docs/ 文件夹 ↔ data/topics.json ↔ docs/index.html ↔ README 登记。
// 零依赖，Node 标准库。用法：node scripts/check-sync.mjs
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warns = [];
const bad = m => errors.push(m);

const data = JSON.parse(readFileSync(join(root, 'data/topics.json'), 'utf8'));
const jsonSlugs = data.topics.map(t => t.slug);

// 1. JSON 自身
const sectionIds = new Set(data.sections.map(s => s.id));
if (new Set(jsonSlugs).size !== jsonSlugs.length) bad('topics.json: slug 有重复');
for (const t of data.topics) {
  if (!sectionIds.has(t.section)) bad(`topics.json: ${t.slug} 分区 ${t.section} 不存在`);
  if (!/^[a-z0-9][a-z0-9-]*$/.test(t.slug)) bad(`topics.json: slug 不合法 ${t.slug}`);
  for (const k of ['titleZh', 'titleEn', 'descZh', 'descEn']) {
    if (!t[k]) bad(`topics.json: ${t.slug} 缺 ${k}`);
  }
}

// 2. docs/ 文件夹 ↔ JSON
const dirs = readdirSync(join(root, 'docs')).filter(d =>
  /^[a-z0-9][a-z0-9-]*$/.test(d) && existsSync(join(root, 'docs', d, 'index.html')));
const dirSet = new Set(dirs);
for (const s of new Set(jsonSlugs)) if (!dirSet.has(s)) bad(`有 JSON 无文件夹: ${s}`);
for (const d of dirs) if (!jsonSlugs.includes(d)) bad(`有文件夹无 JSON: ${d}`);

// 3. 首页链接 ↔ JSON
const home = readFileSync(join(root, 'docs/index.html'), 'utf8');
const homeSlugs = [...home.matchAll(/<a class="card" href="\.\/([^/"]+)\/">/g)].map(m => m[1]);
if (homeSlugs.length !== jsonSlugs.length) {
  bad(`首页卡片数 ${homeSlugs.length} ≠ JSON 主题数 ${jsonSlugs.length}`);
}
for (const s of homeSlugs) if (!jsonSlugs.includes(s)) bad(`首页链接了未知主题: ${s}`);
const orderKey = t => t.slug;
if (homeSlugs.map(s => s).join() !== [...data.topics].map(orderKey).join()) {
  warn('首页卡片顺序与 topics.json 不一致（生成器输出是否最新？跑 node scripts/build-homepage.mjs）');
}

// 4. 文档登记覆盖：slug 以 `xxx/` 形式被提及（词边界）
const mentioned = (file, s) =>
  existsSync(join(root, file)) &&
  new RegExp(`(?<![a-z0-9-])${s}/(?![a-z0-9-])`).test(readFileSync(join(root, file), 'utf8'));
for (const [file, hard] of [['README.md', true], ['README.en.md', false], ['ROADMAP.md', false]]) {
  const missing = [...new Set(jsonSlugs)].filter(s => !mentioned(file, s));
  if (missing.length === 0) continue;
  const msg = `${file} 未登记 ${missing.length} 个: ${missing.slice(0, 8).join(', ')}${missing.length > 8 ? ' …' : ''}`;
  (hard ? bad : warns).push(msg);
}

// 5. 分区计数快报
const bySection = {};
for (const t of data.topics) bySection[t.section] = (bySection[t.section] ?? 0) + 1;
console.log(`主题 ${jsonSlugs.length} ·`, data.sections.map(s => `${s.zh} ${bySection[s.id] ?? 0}`).join(' · '));
for (const w of warns) console.log('WARN:', w);
if (errors.length) {
  for (const e of errors) console.error('ERROR:', e);
  process.exit(1);
}
console.log('check-sync: 全部通过');
