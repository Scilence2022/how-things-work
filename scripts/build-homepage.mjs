#!/usr/bin/env node
// 由 data/topics.json 生成 docs/index.html：顶部快捷计数、八分区标题计数与全部卡片。
// 零依赖，Node 标准库。用法：node scripts/build-homepage.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(readFileSync(join(root, 'data/topics.json'), 'utf8'));
const tpl = readFileSync(join(root, 'scripts/homepage.template.html'), 'utf8');

const enc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const bySection = new Map(data.sections.map(s => [s.id, []]));
for (const t of data.topics) {
  if (!bySection.has(t.section)) throw new Error(`未知分区: ${t.section} (${t.slug})`);
  bySection.get(t.section).push(t);
}

const nav = data.sections.map(s => {
  const n = bySection.get(s.id).length;
  return `    <a href="#${s.id}"><span data-zh="${enc(s.zh)}" data-en="${enc(s.en)}">${enc(s.zh)}</span><span class="n">${n}</span></a>`;
}).join('\n');

const sections = data.sections.map(s => {
  const list = bySection.get(s.id);
  const cards = list.map(t => {
    const te = t.subtitleEn ? `<div class="te">${enc(t.subtitleEn)}</div>` : '';
    return `    <a class="card" href="./${t.slug}/"><div class="t" data-zh="${enc(t.titleZh)}" data-en="${enc(t.titleEn)}">${enc(t.titleZh)}</div>${te}<div class="d" data-zh="${enc(t.descZh)}" data-en="${enc(t.descEn)}">${enc(t.descZh)}</div><span class="go" data-zh="打开 →" data-en="Open →">打开 →</span></a>`;
  }).join('\n');
  return `  <h2 id="${s.id}"><span data-zh="${enc(s.zh)}" data-en="${enc(s.en)}">${enc(s.zh)}</span><span class="en">${enc(s.en)}</span><span class="cnt">${list.length}</span></h2>\n  <div class="grid">\n${cards}\n  </div>`;
}).join('\n');

const out = tpl.replace('<!-- @NAV -->', nav).replace('<!-- @SECTIONS -->', sections);
if (out.includes('<!-- @NAV -->') || out.includes('<!-- @SECTIONS -->')) {
  throw new Error('模板占位符未被完全替换');
}
writeFileSync(join(root, 'docs/index.html'), out);
console.log(`docs/index.html 已生成: ${data.topics.length} 张卡片 ·`,
  data.sections.map(s => `${bySection.get(s.id).length}`).join('/'));
