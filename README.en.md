# how-things-work

A collection of animated explanations. We use animation to make "invisible principles" visible — how mechanisms transmit motion, how chemical bonds break and form, how life unfolds step by step.

📖 **中文版**: [README.md](./README.md).

## Goals

- **Mechanism first**: the animations reveal principle and causal chains, not polished transitions.
- **Step-by-step**: every principle supports step playback, pause and per-step scrubbing so you can think while watching.
- **Self-contained**: each animation avoids heavy build pipelines and runs as soon as you open it.
- **中英双语 · 双主题**: every page exposes 中文/English and dark/light toggles in the top-right corner; choices persist via `localStorage` (theme follows the system by default).

## Content domains

| Domain | Sample topics |
| --- | --- |
| Mechanisms | Lockstitch sewing, four-stroke valve timing, planetary gears, worm self-locking, universal joints, escapements, Watt's governor |
| Chemistry | SN1/SN2/E1/E2 quartet, galvanic ⇄ electrolytic cells, electrophilic addition & Markovnikov's rule, radical chain reactions, benzene aromaticity, conjugation & color, enzyme kinetics, ozone depletion |
| Biology | DNA replication & telomere wear, ATP synthase, glycolysis → TCA → fermentation, cardiac cycle, alveolar gas exchange, nephron counter-current, cochlea & eye, kinesin |
| Physics & space | Motor ⇄ generator, double-slit, laser, EM waves, lens imaging, kinetic theory, entropy & phase change, liquid crystals & LCD |
| Math & CS | Galton board & CLT, Fourier series, Monty Hall & Bayes, gradient descent, sorting race, RSA |
| Cross-discipline & engineering | Activation energy & catalysts, titration curve, osmosis & dialysis, heat pump ⇄ fridge, induction cooktop, wireless charging, corrosion ⇄ electroplating |
| Everyday technology | Microwave oven, capacitive touch, GPS, transistors to adders, fiber optics, camera sensor, ABS, wind turbine, nuclear reactor, MRI, thermostat, hard drive & flash |

## Planned topics

- [x] Lockstitch sewing machine (needle bar + rotary hook + thread take-up timing) ✅ **sewing-machine/**
- [x] SN2 nucleophilic substitution & Walden inversion ✅ **sn2-walden/**
- [x] Le Chatelier's principle (balance shift) ✅ **le-chatelier/**
- [x] Galvanic cell — electrons and ions on separate paths ✅ **galvanic-cell/**
- [x] Enzyme induced fit ✅ **enzyme-induced-fit/**
- [x] Four-stroke engine valve timing (slider-crank + early/late valves + 720° phase diagram) ✅ **four-stroke-engine/**
- [x] Ratchet & pawl one-way clutch (drive on push, slide on return, lock on steep face) ✅ **ratchet-pawl/**
- [x] Cam-follower displacement curves (harmonic / cycloid / uniform + "unrolled" profile) ✅ **cam-follower/**
- [x] DNA semiconservative replication (replication-fork view + Okazaki five-step maturation) ✅ **dna-replication/**
- [x] Na⁺/K⁺-ATPase Post-Albers cycle (E1/E2 alternating access, six steps) ✅ **sodium-potassium-pump/**
- [x] Action potential — depolarization / repolarization (scope trace in phase with channel gating) ✅ **action-potential/**
- [x] Calvin cycle (fixation → reduction → RuBP regeneration) ✅ **calvin-cycle/**
- [x] Li-ion rocking-chair model (charge / discharge + concentration heat map + overcharge easter egg) ✅ **li-ion-battery/**
- [x] SN1 (carbocation intermediate + racemization, paired with SN2) ✅ **sn1-mechanism/**
- [x] Buffer solution (two reserve armies resist acid/base + continuous titration interaction) ✅ **buffer-solution/**
- [x] Water electrolysis (electrolysis = reverse of galvanic cell + 2:1 gas ratio) ✅ **water-electrolysis/**
- [x] Differential gear (planet bevel gears absorb the left/right speed difference, nL + nR = 2nC) ✅ **differential/**
- [x] Geneva drive (continuous rotation → precise indexing + indexing curve unrolled) ✅ **geneva-drive/**
- [x] ATP synthase (proton gradient drives c-ring + γ-shaft rotation, 3 ATP per revolution) ✅ **atp-synthase/**
- [x] Muscle cross-bridge cycle (Ca²⁺ trigger → power stroke → ATP release) ✅ **cross-bridge-cycle/**
- [x] Hemoglobin MWC allostery (T→R switch + sigmoid O₂ binding curve) ✅ **hemoglobin-mwc/**

> The complete topic library, knowledge graph and phase roadmap live in **[ROADMAP.md](./ROADMAP.md)**.

### Phase 1 (close-out + two new domains)

- [x] E2 elimination (anti-periplanar + concerted transition state, paired with SN2) ✅ **e2-elimination/**
- [x] E1 elimination (carbo­cation fork, shared RDS with SN1) ✅ **e1-elimination/**
- [x] Mitochondrial electron transport chain (electrons down, protons up) ✅ **electron-transport-chain/**
- [x] Light reactions & Z-scheme (two photon elevators, mirror of mitochondria) ✅ **photosynthesis-z-scheme/**
- [x] Synaptic transmission (electrical → chemical → electrical at the cleft) ✅ **synaptic-transmission/**
- [x] Transcription (σ factor + open complex) ✅ **transcription/**
- [x] Translation (ribosome codon-by-codon reading) ✅ **translation-ribosome/**
- [x] DC motor ⇄ generator (same machine, two identities) ✅ **motor-generator/**
- [x] Galton board & central limit theorem (the normal grows out of randomness) ✅ **galton-board/**

### Phase 7 · Chemistry mechanisms (8/8)

- [x] Electrophilic addition to alkenes (π bond attacked → carbocation → Br⁻; Markovnikov verified) ✅ **electrophilic-addition/**
- [x] Radical chain reaction (UV splits Cl₂, Cl· abstracts, ·CH₃ hands on, counters show one photon → thousands of turns) ✅ **radical-chain/**
- [x] Chirality (CHFClBr R/S mirror pair, swapping two groups inverts chirality — the Walden inversion) ✅ **chirality/**
- [x] Benzene & aromaticity (six p orbitals merge into two donuts, 4n+2) ✅ **aromaticity/**
- [x] Conjugation & color (chain length → HOMO-LUMO gap → absorption red-shift) ✅ **conjugation-color/**
- [x] Free-radical polymerization (initiate, propagate, terminate; DP drives the material grade) ✅ **polymerization/**
- [x] Michaelis–Menten kinetics (v-[S] dot rides the curve, inhibitor pushes Km up) ✅ **michaelis-menten/**
- [x] Ozone depletion (UV frees Cl· from CFCs; one Cl kills ~100 000 O₃) ✅ **ozone-depletion/**

### Phase 8 · Materials & separation (6/6)

- [x] Hydrogen bonds & water's anomalies (dashed bonds flicker; below 0 °C the lattice OPENS, density drops 9%) ✅ **hydrogen-bond/**
- [x] Soap & micelles (two-faced molecules coat oil; crossing CMC auto-assembles micelles) ✅ **surfactant-micelle/**
- [x] Distillation (bubbles enrich tray by tray; temperature falls, light components climb) ✅ **distillation/**
- [x] Chromatography (three dyes alternate between riding and being held) ✅ **chromatography/**
- [x] Crystal growth (supersaturation parks molecules; concave kinks fill first; heat kicks out vacancies) ✅ **crystal-growth/**
- [x] Liquid crystals & LCD (a 90°-twisted nematic rotates polarization through crossed polarizers) ✅ **liquid-crystal/**

### Phase 12 · Astronomy & space-time (6/6)

- [x] Moon phases & eclipses (three-body view, ecliptic 5° tilt sets the eclipse season) ✅ **moon-phases/**
- [x] Tides (differential pull lifts both near and far bulges, Moon retreats 3.8 cm/year) ✅ **tides/**
- [x] Seasons & obliquity (0° kills seasons, 45° doubles them) ✅ **seasons/**
- [x] Rockets & Tsiolkovsky (logarithmic penalty, 70% → 99.9% fuel, staging is the only way to the Moon) ✅ **rocket-equation/**
- [x] Time dilation & light clocks (γ=7 at 0.99c, muons reach ground, GPS gains 38 µs/day) ✅ **time-dilation/**
- [x] Spacetime curvature (mesh dents, planets follow geodesics; Eddington measured 1.75″ in 1919) ✅ **spacetime-curvature/**

### Phase 13 · Compute & information (8/8)

- [x] Navigation & shortest paths (Dijkstra ripple vs A* heuristic, live traffic reroutes) ✅ **shortest-path/**
- [x] PageRank & Markov chains (surfer particles converge to the iterative ranking) ✅ **pagerank/**
- [x] QR codes & Reed-Solomon error correction (≤(n−k)/2 damage repaired live) ✅ **error-correction/**
- [x] Huffman coding (frequency sets merge order, 232 bits → 109 bits) ✅ **huffman-coding/**
- [x] Bayes screening paradox (1.94% P(disease|+) at 0.1% prevalence — 1000-cell demo) ✅ **bayes-screening/**
- [x] Fractals & recursion (Koch perimeter diverges, Mandelbrot zooms forever) ✅ **fractals/**
- [x] Internet packet switching (numbered packets, out-of-order reassembly, retransmit on timeout) ✅ **packet-switching/**
- [x] Taylor series (tangents grow into the curve; ln(1+x) flies off past its radius) ✅ **taylor-series/**

### Phase 11 · Earth system (10/10)

- [x] Plate tectonics (mantle convection conveyor, ridges birth crust, trenches consume it) ✅ **plate-tectonics/**
- [x] Greenhouse effect (shortwave streams in, longwave is caught by CO₂; Venus 464 °C, Mars −63 °C) ✅ **greenhouse-effect/**
- [x] Atmospheric circulation (Hadley three-cell loops, Coriolis twists winds into trades) ✅ **atmospheric-circulation**
- [x] Lightning (stepped leader gropes down, return stroke fires 30 kA; the rod books it) ✅ **lightning/**
- [x] Aurora (magnetosphere funnels solar wind to poles; oxygen green 557.7 nm, nitrogen red) ✅ **aurora/**
- [x] Earthquake waves (P first, S second; three arcs pin the epicenter) ✅ **earthquake-waves/**
- [x] Volcanoes & viscosity (Hawaiian shield vs Plinian column, SiO₂ slider) ✅ **volcano-viscosity/**
- [x] Thermohaline circulation (North Atlantic sinking, millennial conveyor; melt water stalls it) ✅ **ocean-conveyor/**
- [x] Clouds & rain (parcel climbs, cools adiabatically, condenses on dust; rain shadow on the lee side) ✅ **cloud-formation/**
- [x] Milankovitch cycles (eccentricity + tilt + precession stack into an insolation gauge) ✅ **milankovitch-cycles/**

### Phase 10 · Genes & immunity (7/7)

- [x] Meiosis (homologs pair, chiasmata physically swap red and blue segments) ✅ **meiosis/**
- [x] lac operon (repressor blocks, lactose pops it off, polymerase flows) ✅ **lac-operon/**
- [x] CRISPR-Cas9 (guide RNA scans, PAM checkpoint, paired cuts, NHEJ or HDR repair) ✅ **crispr-cas9/**
- [x] Viral lifecycle (bind, endocytose, uncoat, hijack ribosomes, assemble, lyse) ✅ **virus-lifecycle/**
- [x] Immune response (present, license, clone the army, neutralize, remember — that is vaccination) ✅ **immune-response/**
- [x] Clotting cascade (factor by factor lights up, 1→10⁶ amplification; lose VIII and the chain snaps) ✅ **blood-coagulation/**
- [x] Glucose duet (insulin opens gates, glucagon raids the liver; diabetes is the gate failing) ✅ **insulin-glucagon/**

### Phase 9 · Energy & the body (10/10)

- [x] Glycolysis (6C primed with 2 ATP, splits, ledger returns from −2 to +2) ✅ **glycolysis/**
- [x] Krebs cycle (4C accepts 2C, two carbons leave as CO₂, 3 NADH + 1 FADH₂ + 1 GTP) ✅ **krebs-cycle/**
- [x] Fermentation (oxygen switch forks the path; pyruvate buys back NAD⁺) ✅ **fermentation/**
- [x] Nephron (descending limb leaks water, ascending pumps salt; counter-current builds 1200 mOsm) ✅ **nephron/**
- [x] Alveoli (300 M sacs spread 70 m²; gases diffuse across a 0.5 µm membrane) ✅ **alveoli/**
- [x] Cardiac cycle (Wiggers plot drives four valves; pressure crossings = valve flips) ✅ **heart-cycle/**
- [x] Cochlea (membrane grades stiff to slack; every frequency peaks somewhere — a mechanical Fourier machine) ✅ **cochlea/**
- [x] Eye & vision (ciliary muscles squeeze the elastic lens; presbyopia is squeezing that fails) ✅ **eye-vision/**
- [x] Kinesin (two legs alternate; one ATP per 8 nm step) ✅ **kinesin/**
- [x] Telomeres (lagging end can't be filled; telomerase restores them — cancer's immortality trick) ✅ **telomeres/**

### Phase 14 · Everyday technology (12/12)

- [x] Microwave oven (2.45 GHz flips water dipoles; cavity standing waves create hot/cold spots; turntable evens them) ✅ **microwave-oven/**
- [x] Capacitive touchscreen (crossed ITO electrodes, fingertip draws charge, row-column scans resolve coordinates) ✅ **touch-screen/**
- [x] GPS positioning (four pseudorange spheres, clock bias solved, relativity corrections keep it from drifting) ✅ **gps/**
- [x] Transistors to adders (MOSFET as a gate → logic gates → 4-bit ripple-carry adder) ✅ **transistor-adder/**
- [x] Fiber optics (core-cladding index gap keeps light bouncing; single-mode avoids modal dispersion) ✅ **fiber-optics/**
- [x] Camera sensor (photons through microlenses, Bayer filter and photodiodes become color pixels) ✅ **camera-sensor/**
- [x] Anti-lock brakes (slip 10–20 % keeps grip and steering; 15 Hz pulse-release valve control) ✅ **abs-brakes/**
- [x] Wind turbine (blade lift, Betz limit, pitch and yaw control) ✅ **wind-turbine/**
- [x] Nuclear reactor (control rods tune the fission chain; decay heat still needs cooling after shutdown) ✅ **nuclear-reactor/**
- [x] MRI (proton precession, RF tipping, FID decay, gradient encoding) ✅ **mri/**
- [x] Thermostat (bimetal strip or Curie magnet thermal feedback) ✅ **thermostat/**
- [x] Hard drive & flash (magnetic domains or tunnel electrons into a floating gate) ✅ **hard-drive-flash/**

### Phase 14 deep dives

#### Microwave oven — standing waves and the turntable

- **What you see**: a 2.45 GHz field flips water dipoles to make heat; the metal cavity reflects to build standing waves, hot and cold spots separated by nodes and antinodes, and the turntable sweeps those spots evenly across the food.
- **How to play**: drag the power, toggle the turntable, and watch the cavity field, dipole arrows and butter-temperature difference evolve; press space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Capacitive touchscreen — from a fingertip to coordinates

- **What you see**: transparent row and column electrodes form a mutual-capacitance grid; a fingertip draws charge away, and the scan chip resolves the touched location from row and column responses. Ordinary gloves fail; conductive gloves work.
- **How to play**: adjust the fingertip position and height, add a second finger, switch glove types, and watch the electric-field lines, capacitance heat map and reported coordinates update.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### GPS — four spheres and one fast clock

- **What you see**: pseudorange spheres meet at the receiver from three satellites; the fourth sphere locks the receiver's clock bias. Special and general relativity together require a ~38 µs/day correction — without it the fix drifts by ~10 km/day.
- **How to play**: drag the receiver around, fast-forward time, and toggle the relativity correction to see the error accumulate; press space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Transistors to adders — gates build calculation

- **What you see**: MOSFET channels open and close to make logic gates; gates assemble XOR, the half-adder, and a 4-bit ripple-carry adder, with carries rippling level by level.
- **How to play**: toggle the A and B inputs, run beat-by-beat or auto, and watch the camera fly from the nanoscale transistor to the gate-level circuit and the 5 + 3 = 8 carry chain.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Fiber optics — light bends around corners

- **What you see**: a core-cladding index gap keeps light bouncing inside the fiber; multi-mode paths smear the pulse, while single-mode fibers (and repeaters) keep the signal crisp.
- **How to play**: drag the bend radius, switch between single- and multi-mode, and watch the light pulse ricochet, leak at tight bends, and emerge at the oscilloscope.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Camera sensor — photons become pixels

- **What you see**: photons pass microlenses and Bayer filters, free electrons inside silicon photodiodes that accumulate in wells, then are read out, quantized and demosaicked into color pixels.
- **How to play**: adjust the incoming light and the ISO, and observe the photon rain, electron water level, row-by-row readout, color rebuild and dark-light noise; press space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Anti-lock brakes — keeping the tires on the grip peak

- **What you see**: wheel-speed sensors compute the slip; ordinary braking drives into the lock region where friction drops and steering is lost. ABS modulates pressure at ~15 Hz to keep the dot near the 10–20 % slip peak.
- **How to play**: switch between dry and wet surfaces, tune brake force and steering, and toggle ABS to compare slip, stopping distance and steering retention.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Wind turbine — the way the wind "lifts" the blades

- **What you see**: lift around the airfoil produces a tangential torque; the rotor delivers wind energy to a generator. Past the rated wind speed, pitch is feathered to cap power; the nacelle yaws to face the wind.
- **How to play**: drag wind speed, pitch and yaw, and enable automatic control to watch the power curve plateau past the rated wind speed.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Nuclear reactor — pinning the chain reaction near criticality

- **What you see**: fission releases neutrons, the moderator slows them so they trigger more fission, and control rods absorb the excess to keep the multiplication factor k near 1. Power falls after shutdown, but decay heat keeps coming.
- **How to play**: drag the control rods, toggle the moderator, hit the SCRAM and cooling switches, and watch k, fission power and decay-heat curves on their different timescales.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### MRI — how spin writes down position

- **What you see**: hydrogen nuclei precess at the Larmor frequency in B₀; an RF pulse tips the net magnetization by 90°, the resulting FID decays with T₂*, and gradients encode position into frequency and phase.
- **How to play**: tune B₀, RF pulse, T₂* and gradients; watch the 3D spins tip, relax and rebuild a one-dimensional profile.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Thermostat — thermal feedback without a chip

- **What you see**: a bimetal strip bends because its two metals expand at different rates, breaking the heating circuit at the threshold and resuming once it cools; switch to the Curie-magnet mode to see the rice-cooker style demagnetization trip.
- **How to play**: adjust setpoint, power and hysteresis, then toggle between bimetal and Curie mode to watch the heat / disconnect / cool / reset cycle.
- **URL parameters**: `?t=` `?p=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Hard drive & flash — two ways to keep a bit

- **What you see**: a write head flips nanoscale magnetic domains to store a hard-drive bit, while flash memory tunnels electrons into a floating gate held by an insulator; both turn physical state into 0/1.
- **How to play**: switch between magnetic and floating-gate modes, trigger writes and erases, and watch the domain flip, electron tunneling and retention.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

### Phase 11 · Earth system (10/10)

- [x] Plate tectonics (mantle convection loops, ridges birth crust, trenches consume it, edges flash with quakes) ✅ **plate-tectonics/**
- [x] Greenhouse effect (shortwave streams in, longwave is caught by CO₂; Venus / Earth / Mars slider) ✅ **greenhouse-effect/**
- [x] Atmospheric circulation (six Hadley loops, Coriolis twist, 30° desert band) ✅ **atmospheric-circulation/**
- [x] Lightning (charge separation, stepped leader, 30 kA return stroke; rod books it) ✅ **lightning/**
- [x] Aurora (magnetosphere funnels solar wind; oxygen green 557 nm, nitrogen red) ✅ **aurora/**
- [x] Earthquake waves (P first, S second, three arcs locate the epicenter) ✅ **earthquake-waves/**
- [x] Volcanoes & viscosity (Hawaiian shield vs Plinian column, SiO₂ slider) ✅ **volcano-viscosity/**
- [x] Thermohaline circulation (North Atlantic sinking, millennial conveyor; melt stalls it) ✅ **ocean-conveyor/**
- [x] Clouds & rain (parcel climbs, cools, condenses; rain shadow) ✅ **cloud-formation/**
- [x] Milankovitch cycles (eccentricity + tilt + precession → ice-age arithmetic) ✅ **milankovitch-cycles/**

### Phase 10 · Genes & immunity (7/7)

- [x] Meiosis (homologs pair, chiasmata physically trade red and blue segments, two divisions give four haploid gametes) ✅ **meiosis/**
- [x] lac operon (repressor blocks, lactose pops it off, polymerase flows; CAP throttle with NAD⁺-style feedback) ✅ **lac-operon/**
- [x] CRISPR-Cas9 (crRNA scans → PAM ticket check → base-by-base match → paired cuts → NHEJ or HDR fork) ✅ **crispr-cas9/**
- [x] Viral lifecycle (bind → endocytose → uncoat → hijack ribosomes → assemble → lyse) ✅ **virus-lifecycle/**
- [x] Immune response (present → T license → B clone → antibodies → memory) ✅ **immune-response/**
- [x] Clotting cascade (factor by factor lights up, 1→10⁶ amplification, plug + fibrin mesh) ✅ **blood-coagulation/**
- [x] Glucose duet (insulin vs glucagon ratio, post-meal peak & return, diabetes mode gate failure) ✅ **insulin-glucagon**

### Phase 9 · Energy & the body (10/10)

- [x] Glycolysis (6C primed, halved; ledger goes −2 → +2) ✅ **glycolysis/**
- [x] Krebs cycle (4C accepts 2C, two carbons exit as CO₂, 3 NADH + 1 FADH₂ + 1 GTP) ✅ **krebs-cycle/**
- [x] Fermentation (oxygen switch forks the road; NAD⁺ crashes and is bought back) ✅ **fermentation/**
- [x] Nephron (descending leaks water, ascending pumps salt; counter-current builds 1200 mOsm) ✅ **nephron/**
- [x] Alveoli (300 M sacs spread 70 m²; partial pressure downhill across 0.5 µm) ✅ **alveoli/**
- [x] Cardiac cycle (Wiggers plot drives four valves) ✅ **heart-cycle/**
- [x] Cochlea (basilar membrane as a spectrum analyzer) ✅ **cochlea/**
- [x] Eye & vision (ciliary squeeze the lens; presbyopia and blind spot) ✅ **eye-vision/**
- [x] Kinesin (8 nm stepping, one ATP per step) ✅ **kinesin/**
- [x] Telomeres (the lagging end is never filled; telomerase restores them) ✅ **telomeres/**


## Directory structure

Each topic is a self-contained folder whose entry point is `index.html`; no build step is required.

```
sewing-machine/        Lockstitch mechanism (Three.js, CDN)
sn2-walden/            SN2 substitution & Walden inversion (Three.js, CDN)
le-chatelier/          Balance shift particle simulation (Three.js, CDN)
galvanic-cell/         Cu-Zn galvanic electron & ion paths (Three.js, CDN)
enzyme-induced-fit/    Induced-fit enzyme mechanism (Three.js, CDN)
four-stroke-engine/    Four-stroke valve timing (Three.js, CDN)
ratchet-pawl/          One-way ratchet & pawl clutch (Three.js, CDN)
cam-follower/          Cam-follower displacement curves (Three.js, CDN)
dna-replication/       DNA semiconservative replication & Okazaki fragments (Three.js, CDN)
sodium-potassium-pump/ Na⁺/K⁺-ATPase Post-Albers cycle (Three.js, CDN)
action-potential/      Action potential depolarization / repolarization (Three.js, CDN)
synaptic-transmission/ Synapse: electrical → chemical → electrical (Three.js, CDN)
calvin-cycle/          Calvin cycle (Three.js, CDN)
li-ion-battery/        Li-ion rocking-chair model (Three.js, CDN)
sn1-mechanism/         SN1 carbocation intermediate (Three.js, CDN)
e2-elimination/        E2 anti-periplanar elimination (Three.js, CDN)
e1-elimination/        E1 carbo­cation fork (Three.js, CDN)
buffer-solution/       Buffer resists pH change, interactive titration (Three.js, CDN)
water-electrolysis/    Water electrolysis — reverse of a galvanic cell (Three.js, CDN)
differential/          Differential gear (Three.js, CDN)
geneva-drive/          Geneva indexing drive (Three.js, CDN)
atp-synthase/          ATP synthase rotation catalysis (Three.js, CDN)
electron-transport-chain/ Mitochondrial ETC (Three.js, CDN)
photosynthesis-z-scheme/   Light reactions Z-scheme (Three.js, CDN)
transcription/         RNA polymerase & transcription bubble (Three.js, CDN)
translation-ribosome/  Ribosome codon-by-codon (Three.js, CDN)
motor-generator/       DC motor ⇄ generator (Three.js, CDN)
galton-board/          Galton board → central limit theorem (Three.js, CDN)
carnot-cycle/          Carnot golden loop on a pV diagram (Three.js, CDN)
electromagnetic-induction/ EM induction / Lenz's law (Three.js, CDN)
monty-hall-bayes/      Monty Hall: switch or stay? 2/3 vs 1/3 (Canvas 2D, zero deps)
doppler-effect/        Doppler effect & Mach cone (Three.js, CDN)
activation-energy/     Maxwell-Boltzmann & Arrhenius (Canvas 2D, zero deps)
orbital-mechanics/     Kepler orbits & equal areas (Three.js, CDN)
titration-curve/       Titration curve, buffer plateau & equivalence jump (Canvas 2D, zero deps)
fourier-series/        Fourier series from epicycles (Canvas 2D, zero deps)
cross-bridge-cycle/    Muscle cross-bridge cycle (Three.js, CDN)
hemoglobin-mwc/        Hemoglobin MWC allostery (Three.js, CDN)
angular-momentum/      Angular momentum conservation — three scenes (Three.js, CDN)
gyroscopic-precession/ Gyro precession (Three.js, CDN)
pn-junction/           p-n junction: LED ⇄ solar (Three.js, CDN)
fuel-cell/             PEM fuel cell (Three.js, CDN)
osmosis/               Osmosis & reverse osmosis (Three.js, CDN)
neural-gradient/       Neural-net gradient descent on a 3D loss surface (Three.js, CDN)
sorting-race/          Sorting algorithm race (Three.js, CDN)
rsa-crypto/            RSA cryptography (Canvas 2D, zero deps)
induction-motor/       Three-phase induction motor (Three.js, CDN)
transformer/           Transformer & the grid (Three.js, CDN)
speaker-microphone/    Speaker ⇄ microphone (Three.js, CDN)
wireless-charging/     Wireless charging (Three.js, CDN)
induction-cooktop/     Induction cooktop (Three.js, CDN)
corrosion/             Corrosion & sacrificial anode (Three.js, CDN)
electroplating/        Electroplating (Three.js, CDN)
planetary-gears/       Planetary gear set (Three.js, CDN)
worm-drive/            Worm drive self-locking (Three.js, CDN)
universal-joint/       Universal joint single & double (Three.js, CDN)
four-bar-linkage/      Four-bar linkage & Grashof condition (Three.js, CDN)
clutch-gearbox/        Clutch & manual gearbox (Three.js, CDN)
escapement/            Escapement mechanism (Three.js, CDN)
swashplate/            Helicopter swashplate (Three.js, CDN)
centrifugal-governor/  Watt's centrifugal governor (Three.js, CDN)
double-slit/           Double-slit interference (Three.js, CDN)
standing-waves/        Standing waves & musical timbre (Three.js, CDN)
polarization/          Polarization — Malus's law (Three.js, CDN)
refraction/            Refraction & total internal reflection (Three.js, CDN)
lens-imaging/          Lens imaging & the eye (Three.js, CDN)
laser/                 Laser & cavity (Three.js, CDN)
em-wave/               EM wave propagation (Three.js, CDN)
resonance-beats/       Resonance & beats (Three.js, CDN)
kinetic-theory/        Kinetic theory of gases (Three.js, CDN)
heat-pump/             Heat pump ⇄ refrigerator (Three.js, CDN)
entropy/               Entropy & mixing (Three.js, CDN)
phase-transition/      Phase change & latent heat (Three.js, CDN)
random-walk/           Random walk & diffusion (Three.js, CDN)
radioactive-decay/     Radioactive decay & half-life (Three.js, CDN)
electrophilic-addition/ Alkene electrophilic addition (Three.js, CDN)
radical-chain/         Radical chain reaction (Three.js, CDN)
chirality/             Chirality (Three.js, CDN)
aromaticity/           Benzene & aromaticity (Three.js, CDN)
conjugation-color/     Conjugation & color (Three.js, CDN)
polymerization/        Free-radical polymerization (Three.js, CDN)
michaelis-menten/      Michaelis-Menten kinetics (Three.js, CDN)
ozone-depletion/       Ozone depletion (Three.js, CDN)
hydrogen-bond/         Hydrogen bonds & water (Three.js, CDN)
surfactant-micelle/    Soap & micelles (Three.js, CDN)
distillation/          Distillation (Three.js, CDN)
chromatography/        Chromatography (Three.js, CDN)
crystal-growth/        Crystal growth (Three.js, CDN)
liquid-crystal/        Liquid crystal & LCD (Three.js, CDN)
glycolysis/            Glycolysis (Three.js, CDN)
krebs-cycle/           Krebs cycle (Three.js, CDN)
fermentation/          Fermentation (Three.js, CDN)
nephron/               Nephron (Three.js, CDN)
alveoli/               Alveoli (Three.js, CDN)
heart-cycle/           Cardiac cycle (Three.js, CDN)
cochlea/               Cochlea (Three.js, CDN)
eye-vision/            Eye & vision (Three.js, CDN)
kinesin/               Kinesin (Three.js, CDN)
telomeres/             Telomeres (Three.js, CDN)
meiosis/               Meiosis (Three.js, CDN)
lac-operon/            lac operon (Three.js, CDN)
crispr-cas9/           CRISPR-Cas9 (Three.js, CDN)
virus-lifecycle/       Viral lifecycle (Three.js, CDN)
immune-response/       Immune response (Three.js, CDN)
blood-coagulation/     Clotting cascade (Three.js, CDN)
insulin-glucagon/      Glucose duet (Three.js, CDN)
plate-tectonics/       Plate tectonics (Three.js, CDN)
greenhouse-effect/     Greenhouse effect (Three.js, CDN)
atmospheric-circulation/ Atmospheric circulation (Three.js, CDN)
lightning/             Lightning (Three.js, CDN)
aurora/                Aurora (Three.js, CDN)
earthquake-waves/      Earthquake waves (Three.js, CDN)
volcano-viscosity/     Volcanoes & viscosity (Three.js, CDN)
ocean-conveyor/        Thermohaline circulation (Three.js, CDN)
cloud-formation/       Clouds & rain (Three.js, CDN)
milankovitch-cycles/   Milankovitch cycles (Three.js, CDN)
moon-phases/           Moon phases & eclipses (Three.js, CDN)
tides/                 Tides (Three.js, CDN)
seasons/               Seasons & tilt (Three.js, CDN)
rocket-equation/       Rockets & Tsiolkovsky (Three.js, CDN)
time-dilation/         Time dilation (Three.js, CDN)
spacetime-curvature/   Spacetime curvature (Three.js, CDN)
shortest-path/         Navigation & shortest paths (Three.js, CDN)
pagerank/              PageRank & Markov chains (Three.js, CDN)
packet-switching/      How the internet ships messages (Three.js, CDN)
error-correction/      QR code & Reed-Solomon error correction (Canvas 2D, zero deps)
huffman-coding/        Huffman coding (Canvas 2D, zero deps)
bayes-screening/       Bayes screening paradox (Canvas 2D, zero deps)
fractals/              Fractals & recursion (Canvas 2D, zero deps)
taylor-series/         Taylor series (Canvas 2D, zero deps)
microwave-oven/        Microwave oven (Three.js, CDN)
touch-screen/          Capacitive touch screen (Three.js, CDN)
gps/                   GPS positioning (Three.js, CDN)
transistor-adder/      Transistors to adders (Three.js, CDN)
fiber-optics/          Fiber optics (Three.js, CDN)
camera-sensor/         Camera sensor (Three.js, CDN)
abs-brakes/            ABS anti-lock brakes (Three.js, CDN)
wind-turbine/          Wind turbine (Three.js, CDN)
nuclear-reactor/       Nuclear reactor (Three.js, CDN)
mri/                   MRI (Three.js, CDN)
thermostat/            Thermostat (Three.js, CDN)
hard-drive-flash/      Hard drive & flash (Three.js, CDN)
```

### Phase 2 close-out (3D-first baseline, v2 roadmap first batch)

- [x] Angular momentum conservation (skater / falling cat / neutron star — three scenes for one law; 3D rebuild) ✅ **angular-momentum/**
- [x] Gyroscopic precession (gravity torque ⊥ L; slow the spin and precession speeds up) ✅ **gyroscopic-precession/**
- [x] p-n junction (depletion-layer gate: forward LED ⇄ reverse-bias solar cell; 3D rebuild) ✅ **pn-junction/**
- [x] Fuel cell (membrane passes only H⁺; electrons forced through the load) ✅ **fuel-cell/**
- [x] Osmosis & reverse osmosis (head balances π; pressure past π flips flow — desalination) ✅ **osmosis/**
- [x] Neural network gradient descent (3D loss surface, learning-rate / momentum, click to drop the ball) ✅ **neural-gradient/**
- [x] Sorting algorithm race (bubble / selection / insertion / quicksort / mergesort) ✅ **sorting-race/**
- [x] RSA cryptography (p, q → n, φ → e, d end-to-end real math; 2D whitelist page) ✅ **rsa-crypto/**

> ✅ **Phase 2 complete (8/8)**. From this batch on, new pages use the v2 3D-first baseline (2D reserved for pure diagrams); every page ends with a "related" footer.

### Phase 3 · Inverse & electrical family (7/7)

- [x] Three-phase induction motor (rotating magnetic field drags the cage; one phase out → it just hums) ✅ **induction-motor/**
- [x] Transformer & high-voltage transmission (turns ratio = voltage ratio; ×10 voltage, ÷100 loss) ✅ **transformer/**
- [x] Speaker ⇄ microphone (inverse pair No. 3: same moving-coil head) ✅ **speaker-microphone/**
- [x] Wireless charging (air-core transformer; FoD cuts off when a coin draws flux) ✅ **wireless-charging/**
- [x] Induction cooktop (the pot is its own heating element; aluminum pot fails) ✅ **induction-cooktop/**
- [x] Corrosion & sacrificial anode (rust is a shorted galvanic cell; zinc takes the beating) ✅ **corrosion/**
- [x] Electroplating (corrosion in reverse, paid for; the work piece must be the cathode) ✅ **electroplating/**

### Phase 5 · Waves & light (4/8)

- [x] Double-slit interference (wavefield dot cloud + wavefront arcs + fringes; quantum mode builds them photon-by-photon) ✅ **double-slit/**
- [x] Standing waves & timbre (1st–4th harmonics + nodes; three timbral presets) ✅ **standing-waves/**
- [x] Polarization (E vector through two fences; cos²θ live) ✅ **polarization/**
- [x] Refraction & TIR (water tank critical angle 48.8° + fiber TIR relay) ✅ **refraction/**
- [x] Lens imaging & the eye (real ⇄ virtual flip past 1f + ciliary zoom / myopia correction) ✅ **lens-imaging/**
- [x] Laser (pump inversion + seed-photon avalanche + partial-transmission output) ✅ **laser/**
- [x] EM wave (E⊥B⊥ propagation, wave feeds itself + spectrum bar) ✅ **em-wave/**
- [x] Resonance & beats (forced resonance peak sweep + two-tine beat envelope) ✅ **resonance-beats/**

> ✅ **Phase 5 complete (8/8)**: the wave & light main line (double-slit → standing waves → polarization → refraction → lens → laser → EM → resonance) is closed.

### Phase 4 · Mechanism deep dive (8/8)

- [x] Planetary gears (lock ring 5:1, lock carrier for reverse, lock all for direct — Willis live) ✅ **planetary-gears/**
- [x] Worm drive self-lock (lead angle vs friction angle; reverse push locks) ✅ **worm-drive/**
- [x] Universal joint (single-joint speed ripple + double-joint Z cancellation) ✅ **universal-joint/**
- [x] Four-bar linkage (Grashof jam demo + quick-return K + coupler curve) ✅ **four-bar-linkage/**
- [x] Clutch & manual gearbox (half-clutch slip start + three-step shift + torque⇄rpm balance) ✅ **clutch-gearbox/**
- [x] Escapement (fork releases one tooth and kicks the balance) ✅ **escapement/**
- [x] Helicopter swashplate (collective + cyclic + 90° precession foot-note) ✅ **swashplate/**
- [x] Watt's centrifugal governor (flyballs → sleeve → throttle, −5 % proportional droop) ✅ **centrifugal-governor/**

### Sewing machine — lockstitch formation

- **What you see**: how the top thread loops around the needle, how the rotary hook catches the loop and completes a full revolution around the bobbin, how the bottom thread is captured, how the take-up tightens the knot, and how the feed dog advances the fabric.
- **How to play**: drag to rotate / scroll to zoom; press `space` to play / pause; click a step in the left list to jump to its phase; drag the phase slider to scrub frame by frame.
- **How to open**: open `sewing-machine/index.html` directly in a browser (a one-time internet fetch of the Three.js CDN is required), or serve this directory with a static server:

  ```bash
  python3 -m http.server 8000
  # open http://localhost:8000/sewing-machine/
  ```

- **URL parameters** (debug / share): `?t=0.6` initial phase (0–1), `pause=1` paused, `speed=1.5` rate, `labels=0` hide labels, `housing=0` hide housing, `spin=0` disable auto-orbit, `top=1` top-down view.

### SN2 — Walden inversion

- **What you see**: why the nucleophile can only attack from the back at 180°, what the trigonal-bipyramidal transition state looks like, how three groups umbrella to the other side, and why the product is the mirror image of the starting material. The bottom-right energy curve marks the single transition state (no intermediate).
- **How to play**: same as sewing — `space` play / pause, click steps to jump phase, scrub with the phase slider; toggle the "180° attack axis", "electron flow arrows" and "energy curve".
- **URL parameters**: `?t=` `pause=` `speed=` `labels=` `spin=`, plus `top=1` for the axial view (collinearity check).

### Le Chatelier — shift in equilibrium

- **What you see**: a particle simulation of N₂O₄ ⇌ 2NO₂ — forward and reverse reactions are always happening. After heating, cooling, compression, expansion or adding NO₂, the forward and reverse rates diverge and the population drifts toward whichever direction "cancels" the disturbance; K depends only on temperature while Q updates live. Color darkens with temperature, total molecule count falls on compression — all this emerges naturally from the kinetic model rather than being scripted.
- **How to play**: click a perturbation button and watch the rate bars, Q/K and net-direction hint; the four explanation steps light up automatically (equilibrium → disturbance → shift → new equilibrium).

### Galvanic cell — electrons and ions on separate paths

- **What you see**: zinc anode dissolves, releasing Zn²⁺ and electrons; the electrons travel along the wire through the bulb to the copper electrode; Cu²⁺ plates out and the blue solution fades; K⁺ and Cl⁻ in the salt bridge shuttle both directions to keep the system electrically neutral — the external (electron) and internal (ion) circuits together form a closed loop.
- **How to play**: cycles automatically; click steps to jump to that stage; watch electrodes evolve and solution color change slowly over the cycle.

### Li-ion battery — rocking-chair model

- **What you see**: a red slab on the left (LiCoO₂ cathode) and a dark grey slab on the right (graphite anode), purple balls are Li⁺. On charge Li⁺ leaves the cathode, slips through the separator pores, and packs between the graphite layers (spacing opens ~10 %); on discharge it rocks back the same way and lights the bulb — hence "rocking-chair cell". A live heat map shows Li⁺ concentration in the electrolyte flipping between poor and rich; the separator is an insulator for electrons — ions take the inner circuit, electrons take the outer.
- **How to play**: `space` play / pause; click through the six steps to jump phase; scrub with the phase slider; toggle the "concentration heat map"; try the amber button "What if we overcharge?" to see dendrites pierce the separator (red warning: thermal runaway risk). Esc exits.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=`, plus `spin=1` for auto-orbit.

### SN1 — carbocation intermediate and racemization

- **What you see**: in the rate-determining step C–Br cleaves heterolytically (Br⁻ leaves with the electron pair); the three alkyl groups compress into a plane and the carbon exposes two **empty p-orbitals** above and below — SN1's signature frame. Then H₂O attacks from above or below with 50 % probability each, producing side-by-side R/S mirror images (50:50 racemization). The bottom-right energy curve is a "double peak + intermediate basin"; the dashed grey line overlays SN2's single peak; the rate-determining step shows v = k[RX] — the rate does not depend on the nucleophile.
- **How to play**: `space` play / pause; click through the steps to jump phase; scrub with the phase slider; drag to 30–50 % to inspect the empty p-orbital; a SN2 ⇄ SN1 comparison table sits at the bottom of the panel.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=` `spin=`, plus `top=1` for the top view (verify the three substituents lie in one plane).

### E2 — anti-periplanar concerted elimination

- **What you see**: the base plucks a β-H, the C–H electrons become the π bond and the C–Br electrons leave with Br⁻ — three things change in a single stroke, with one transition state and no intermediate. The energy curve is compared with E1's "double peak + basin" (dashed). The C–C bond starts in a syn conformation and rotates to anti; only when the **H–Cβ–Cα–Br atoms are coplanar and anti (dihedral 180°)** does the reaction unlock, and the Newman projection in the top-right reports the dihedral and "anti" state. Switch to **t-BuO⁻ bulky base**: the inner β-H is crowded out, the base is pushed to the outer methyl and Hofmann 1-butene forms (EtO⁻ small base → Zaitsev 2-butene).
- **How to play**: `space` play / pause; click five steps to jump phase; scrub with the phase slider; tick "conformation explorer" to rotate the C–C bond manually and hunt for anti — rotate less than 180° and the reaction is locked; swap bases to see regio-selectivity invert.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=` `arrows=` `newman=` `base=et|tbu` `spin=`, plus `top=1` axial view (check the anti-periplanarity from the Cα→Cβ axis).

### E1 — the carbocation fork (shared RDS with SN1)

- **What you see**: after C–Br cleaves and Br⁻ leaves, C₂ is flattened with an empty p-orbital — SN1 and E1 share this slowest step completely (v = k[RX]). The fork then appears: the same H₂O solvent grabs the whole group → SN1 (2-butanol, then deprotonation); it grabs only the β-H → E1 (the empty p-orbital is filled by an electron pair to form a π bond, mainly the Zaitsev alkene). The bottom-right energy curve shares ‡₁ and has its own ‡₂, with the other path dashed; a temperature slider rewires the ratio between the two exits (heat favors elimination: entropy, one becomes two). The panel includes the SN1/SN2/E1/E2 four-cell comparison.
- **How to play**: `space` play / pause; click five steps to jump phase; scrub with the phase slider; the "exit" button flips this cycle between SN1 and E1; drag "temperature" and watch the E1/SN1 bars trade places.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=` `arrows=` `energy=` `spin=` `exit=e1|sn1` `temp=25..80`.

### Buffer solution — two reserve armies

- **What you see**: orange CH₃COO⁻ and blue CH₃COOH coexist 1:1 in a beaker; pH sits at pKa 4.76. Added H⁺ is captured instantly by the orange army and turned into CH₃COOH, so pH barely twitches — the right-hand curve shows a buffer plateau while the grey dashed "pure water" reference collapses; switching to NaOH makes the blue HA army ionize to compensate H⁺ and regenerate A⁻. The Henderson–Hasselbalch numbers in the panel update live with the actual particles.
- **How to play**: "Drop HCl / NaOH" single click or hold (shortcuts A / B); drain either reserve (±1.0 equivalent) to trigger a red alert and a pH crash — that is buffer capacity; "Reset" restores the 1:1 balance.
- **URL parameters**: `?acid=` `?base=` pre-drop N drops (e.g. `?acid=30` near exhaustion), `?ref=0` hides the reference line, `?speed=` `pause=` `labels=0`.

### Water electrolysis — the galvanic cell reversed

- **What you see**: a DC source forces electrons from the anode and pumps them to the cathode (electrical → chemical, non-spontaneous); H⁺ migrates to the cathode to gain an electron and form H₂↑; water loses electrons at the anode to form O₂↑. Bubbles nucleate, grow and detach at the surface, rise into inverted collectors — and hydrogen's volume is always twice oxygen's (the 2:1 check). SO₄²⁻ is a "spectator ion" that just carries charge. The panel footers a "galvanic vs electrolytic" comparison: spontaneity, energy direction, electron flow, electrode names.
- **How to play**: `space` play / pause; click six steps to jump phase; scrub with the phase slider; toggle "ion migration" to see H⁺ / SO₄²⁻ head in opposite directions and close the loop.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=`, plus `ion=0` to hide the ions.

### Enzyme — induced fit

- **What you see**: the active site is not a pre-made rigid lock — substrate binding induces two domains to close, bringing catalytic residues from ~8 Å to ~4 Å. The sensitive bond is stretched and activated; once broken, the product no longer fits and is released, the enzyme resets and is ready for the next round.
- **How to play**: `space` play / pause; click through the steps to jump phase; scrub with the phase slider; the panel shows catalytic-group distance and bond length in real time; toggle non-covalent dashes.

### Four-stroke engine — valve timing

- **What you see**: a slider-crank drives the piston; two camshafts at half speed run the intake / exhaust valves — the valves don't open / close exactly at top / bottom dead center but rather **early / late** (intake opens 20° early, closes 50° late; exhaust opens 45° early, closes 15° late); around exhaust TDC the two valves are slightly open together (the "valve overlap"). In-cylinder gas changes color with each stroke; the spark fires 23° before compression TDC. The 720° two-revolution phase diagram in the bottom-right marks IO/IC/EO/EC and the current crank angle.
- **How to play**: `space` play / pause; click through the four-stroke steps to jump phase; scrub with the phase slider; pay attention to phase 0.985 (valve overlap) and the ignition moment.

### Ratchet & pawl — one-way clutch

- **What you see**: each swing of the drive arm pushes the ratchet wheel one tooth (22.5°). On the return stroke the pawl flips open and slides over the gentle slope, while the holding pawl keeps the wheel locked — torque flows only along the green arrow. The contact point at each pawl tip is color-coded (red = push, yellow = slide, orange = seated).
- **How to play**: `space` play / pause; scrub with the phase slider; press the "reverse drive demo" to see why the wheel still won't move.

### Cam & follower — displacement curves

- **What you see**: the cam profile is literally the displacement curve s(α) "rolled up" — the right panel unrolls it into a s–α curve that matches the 3D roller height in real time. The disc colors the rise / dwell-far / return / dwell-near segments; the "theoretical profile" (roller center path) is separated from the "actual profile".
- **How to play**: `space` play / pause; scrub with the phase slider; switch harmonic / cycloid / uniform motion laws and watch the profile and the curve rebuild together; tick "velocity curve" to see the speed discontinuity at the segment endpoints under the uniform law (the rigid impulse).

### Differential — why the two wheels differ in a turn

- **What you see**: drive shaft → bevel ring-and-pinion → differential case. On a straight line the planet gears don't spin and the whole thing acts as a rigid body; in a turn the wheels must differ in speed and the planet bevels start spinning to "absorb" the difference, validated live by nL + nR = 2nC. Inner and outer wheels trace different arcs (the arc-length difference is the source of the speed difference). The extreme: if one wheel lifts off, the unmoving side reads 0 and the airborne side freewheels at twice the case speed — all power lost, which is why limited-slip differentials exist.
- **How to play**: `space` play / pause; click five steps to jump phase; scrub with the phase slider; drag the "steering" slider from straight to hard corner and watch the left/right wheel speeds, planet-gear spin and ground tracks react.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=` `spin=`, plus `steer=` (−1..1 initial steering), `case=0` hide the case, `tracks=0` hide tracks, `read=0` hide readings, `top=1` top-down view of planet-gear mesh.

### Geneva drive — how continuous rotation becomes precise indexing

- **What you see**: the driver rotates a full turn at constant speed; only during 120° of that turn (6 slots) does the pin push the driven wheel through a precise 60°. The remaining 240° the locking arc fits inside the driven wheel's arc seat and locks it dead-still. The pin enters the slot tangentially (no interference), so entry and exit velocities are zero and the acceleration is continuous. The top-right "indexing curve" is the motion diagram — flat, S-curve rise, flat — with angular velocity dashed. Film projectors, clock indices and assembly-line index tables all use it.
- **How to play**: `space` play / pause; click five steps to jump phase; scrub with the phase slider; toggle "4-slot / 6-slot" to watch the indexing angle (90° / 60°) and curve reshape together; tick "overlay angular velocity" and compare peaks (4-slot ω ratio up to 2.4, 6-slot just 1.0).
- **URL parameters**: `?t=` `pause=` `speed=` `labels=` `spin=`, plus `slots=4|6` slot count, `lock=0` turn off lock highlight, `frame=0` hide frame, `front=1` front view, `vc=1` default velocity overlay.

### DNA — semiconservative replication & Okazaki fragments

- **What you see**: a "replication-fork factory" view — the parent strand keeps moving left (⟺ the fork moves right): helicase pries the duplex open, SSB stabilizes single strands; the leading strand runs continuously; on the lagging strand primase lays RNA primers, Pol III extends Okazaki fragments away from the fork, Pol I excises old primer while filling in DNA, ligase seals the last nick. The top-right inset shows the "semiconservative" cartoon: each daughter gets one old and one new strand.
- **How to play**: `space` play / pause; click five steps to jump phase; scrub with the phase slider; one cycle = the full birth of one Okazaki fragment. Toggle "annotations" and "semiconservative inset".
- **URL parameters**: `?t=` `pause=` `speed=` `labels=`, plus `inset=0` hide the inset.

### Na⁺/K⁺ pump — conformational cycle

- **What you see**: the Post-Albers alternating-access six steps — E1 opens toward the cytoplasm and grabs 3 Na⁺ → ATP binds and the γ-phosphate is transferred to the pump (ADP leaves) → conformational change to E1-P → E2-P, opening to the outside (the Na⁺ are briefly "occluded") → 3 Na⁺ released → 2 K⁺ bind and trigger dephosphorylation → conformational return releases K⁺. A badge displays E1/E2 and the opening direction; the bottom-right ticks light up the "net effect": 3 Na⁺ out, 2 K⁺ in, 1 ATP.
- **How to play**: `space` play / pause; click six steps to jump phase; scrub with the phase slider; focus on the moment the opening flips direction at the conformational change and the "occluded" state.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=`, plus `bg=0` hide background ion concentrations, `net=0` hide the net-effect summary.

### Action potential — depolarization / repolarization

- **What you see**: the oscilloscope trace of membrane potential is exactly in phase with the membrane scene below — when the supra-threshold stimulus crosses −55 mV the positive feedback fires: Na⁺ activation gates open, Na⁺ rushes in and reverses the potential to +36 mV; at the peak the inactivation ball (ball-and-chain) blocks the channel and the K⁺ channel opens with a delay; K⁺ outflow repolarizes the cell, briefly overshooting to a hyperpolarized state; finally the gates reset, the pump and leak channels restore the gradient. Charge symbols flip with potential; absolute / relative refractory periods are marked under the trace.
- **How to play**: `space` play / pause; click seven steps to jump phase; scrub with the phase slider; ions keep flowing even when paused (steady-state flux at that phase).
- **URL parameters**: `?t=` `pause=` `speed=` `labels=`, plus `charge=0` hide charge symbols, `refr=0` hide the refractory ruler.

### Light reactions Z-scheme — two photon elevators

- **What you see**: the thylakoid membrane factory — a photon hits P680 of PS II and an electron is hoisted onto the first elevator; water splits at the manganese cluster to refill, O₂ bubbles as a by-product, and H⁺ stays in the lumen; the electron falls through PQ to Cyt b₆f, which pumps H⁺ into the lumen in the process, and PC shuttles it across the lumen face; a second photon hoists it again at PSI — the second peak of the Z-shaped curve; Fd→FNR produces NADPH; the H⁺ in the lumen flows back through ATP synthase to the stroma, generating ATP — **the same machine as in mitochondria, run in reverse**. The "Z-scheme" card in the top-right marks where the electron currently sits between the two elevators.
- **How to play**: `space` play / pause; click five steps to jump phase; scrub with the phase slider; tick "what if we shine green light instead?" — photons bounce off, both elevators stall (chlorophyll looks green precisely because it doesn't absorb it).
- **URL parameters**: `?t=` `pause=` `speed=` `labels=0` `green=1`.

### Synaptic transmission — electrical → chemical → electrical

- **What you see**: an action potential arrives at the axon terminal; voltage-gated Ca²⁺ channels open and fire; SNAREs zipper the vesicle up to the presynaptic membrane, a fusion pore opens, and acetylcholine pours into the ~20 nm cleft; ACh binds ligand-gated receptors, lets Na⁺ through and produces an EPSP — the postsynaptic potential is drawn live on a small card top-right; AChE cleaves ACh into acetate + choline, clearing the cleft instantly, and choline is taken back up and reloaded.
- **How to play**: `space` play / pause; click six steps to jump phase; scrub with the phase slider; try the two toxicology easter eggs — "botulinum toxin" cleaves SNARE (no fusion, postsynaptic membrane silent → flaccid paralysis) and "organophosphate" inhibits AChE (transmitter never cleared, receptors stay open → sustained depolarization, convulsions).
- **URL parameters**: `?t=` `pause=` `speed=` `labels=0` `botox=1` `op=1`.

### Transcription — RNA polymerase and the open complex

- **What you see**: the holoenzyme scans along the DNA; the σ factor recognizes the −35 / −10 promoter boxes and falls off; ~14 bp of open complex form, the template strand is read 3′→5′ one base at a time, and matching NTPs (A=U / G≡C) are stitched onto the 3′ end — **no primer required**. RNA starts with AUG and grows longer; a GCGC tail folds into a terminator hairpin that yanks the whole strand out, the bubble closes and the polymerase dissociates. The top-right counters ("transcribed nt" and "current pairing") update live. The sequence is real: TACGGGCCATATCGCG → AUGCCCGGUAUAGCGC.
- **How to play**: `space` play / pause; click five steps to jump phase; scrub with the phase slider; turn off the "coding strand letters" to test yourself against the template.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=0`.

### Translation — the ribosome reads codon by codon

- **What you see**: the ribosome settles and the mRNA slides — AUG positions P-site (fMet-tRNA, anticodon UAC); EF-Tu escorts the aminoacyl-tRNA into the A site, and **a matching codon–anticodon is required to hydrolyze GTP and lock in** (in the second round a wrong one is kicked out on the spot); peptidyl transferase moves the polypeptide from P to A, EF-G translocates one codon, and the empty tRNA exits via E; when UAA reaches the A site no tRNA can pair, release factors enter, the polypeptide drops, the subunits fall apart. tRNAs are like train car couplings that join amino acids into a chain.
- **How to play**: `space` play / pause; click four steps to jump phase; scrub with the phase slider; watch for the "mismatch kick-out" moment in round two.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=0`.

### Calvin cycle

- **What you see**: fixation → reduction → RuBP regeneration, full lap — Rubisco attaches CO₂ to 5C RuBP and splits it into two 3-PGAs; ATP and NADPH fly in from "the thylakoid" station (ADP / NADP⁺ fly back); the dot count on each molecule card is its carbon count, so carbon conservation is visible at a glance; 1/6 of the G3P leaves with the carbon, while the bottom-right "carbon ledger" lights up line by line: every 3 CO₂ costs 9 ATP + 6 NADPH and yields 1 G3P.
- **How to play**: `space` play / pause; click six steps to jump phase; scrub with the phase slider.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=`, plus `ledger=0` hide the ledger.

### ATP synthase — rotation catalysis driven by the proton gradient

- **What you see**: H⁺ in the intermembrane space flows down its concentration gradient into the a-subunit half-channel, binds to passing c-subunits, and is carried one full revolution around to the exit on the matrix side — the c-ring is pushed around, and the γ-shaft transmits the torque like a crankshaft into F1, forcing the three β-subunits in turn through Open (bind ADP+Pi) → Loose (clamp substrate) → Tight (compress into ATP) → release. Rotor (c-ring + γ-shaft) is rigidly synchronous, the stator arm holds F1 from rotating with it; the top counter ejects one ATP every 120°, so one full turn = 3 ATP.
- **How to play**: `space` play / pause; click six steps to jump phase; scrub with the phase slider; watch any β-pill as it cycles through letters and cargoes (ADP+Pi / ATP) on the same timeline.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=` `spin=`, plus `protons=0` hide H⁺, `states=0` hide conformational labels, `highlight=0` disable state highlight, `membrane=0` hide the membrane, `top=1` top view.

### Mitochondrial electron transport chain — electrons down, protons up

- **What you see**: the inner-membrane "factory" — NADH delivers 2 e⁻ to complex I (4 H⁺ pumped); ubiquinone CoQ shuttles them to III (4 more H⁺); cytochrome c runs along the intermembrane face to deliver electrons to IV; O₂ enters from above and combines with 4 e⁻ + 4 H⁺ to make 2 H₂O (2 more H⁺ pumped) — "respiration" ends on the right side of the screen. Electrons slide downhill (color darkens), protons get pumped uphill; finally 10 H⁺ flow back through ATP synthase, the rotor ejects an ATP every 120° (~2.5 per NADH; FADH₂ enters at II and skips the 4-H⁺ pump, the math is in step 5). The counter panel shows H⁺ pumped and ATP.
- **How to play**: `space` play / pause; click five steps to jump phase; scrub with the phase slider; be sure to try the DNP uncoupler easter egg — punch a hole in the membrane, the gradient shorts out, ATP stops and heat soars (the brown-fat thermogenesis principle).
- **URL parameters**: `?t=` `pause=` `speed=` `labels=0` `dnp=1`.

### Muscle contraction — the cross-bridge cycle

- **What you see**: Ca²⁺ binds troponin, tropomyosin rotates off and exposes the binding site; the energized myosin head binds as a cross-bridge, releases Pi and triggers the power stroke that pulls the thin filament ~10 nm toward the M line; without ATP the cycle locks in the rigor state (the root of rigor mortis); ATP is what releases the filament — ATP doesn't power the stroke directly, it lets the filament let go.
- **How to play**: `space` play / pause; click six steps to jump phase; scrub with the phase slider.

### Hemoglobin — MWC cooperative O₂ transport

- **What you see**: deoxygenated T-state tetramer is locked by salt bridges; the first O₂ binds with difficulty (Fe²⁺ pulled into the porphyrin plane, prying the F helix), salt bridges snap one by one, α₁β₁ rotates ~13° relative to α₂β₂ into the R state — the other pockets spring open and O₂ 2, 3, 4 slide in easily; the bottom-right S-shaped binding curve reports progress live and contrasts with myoglobin's hyperbola: "fill up in the lung, drop it off at the tissue".
- **How to play**: `space` play / pause; click seven steps to jump phase; scrub with the phase slider.

### DC motor ⇄ generator — two identities of one machine

- **What you see**: a rectangular coil between N/S poles, split-ring commutator, brushes, battery and bulb. **Motor**: close the switch and current enters the coil; the two sides feel opposing Ampère forces (F = BIL) and turn the rotor. Each time the coil passes the vertical neutral plane the commutator half-rings sweep the brushes and flip the current — torque direction stays the same (∝ |cos θ|). **Generator**: fit a crank and drag the coil through the magnetic field; the induced EMF lights the bulb — brightness peaks with |cos θ| twice per turn, and the commutator "rectifies" it into DC, deflecting the galvanometer. The "electrical → kinetic / kinetic → electrical" energy label flips with the identity.
- **How to play**: `space` play / pause; press the "identity" button to swap motor / generator (timeline and steps swap); scrub the phase slider; focus on the moment the commutator crosses the neutral plane.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=0` `spin=0` `mode=motor|gen`.

### Galton board — the normal distribution grows out of randomness

- **What you see**: balls fall from a funnel and bounce left/right 50/50 at every peg. A single ball is unpredictable, but after several hundred the histogram spontaneously bulges into a bell shape — the gold dashed line is the theoretical N(μ, σ²) (μ = R·p), hugging the empirical bell. The statistics panel reports x̄ and σ live.
- **How to play**: `space` play / pause; drag "bias p" (0.15–0.85) and watch the bell shift and slim down — the shape is preserved; press "reset the board" to clear and run again; each run is slightly different but always the same bell.
- **URL parameters**: `?labels=0`.

### Carnot cycle — the ceiling of every heat engine

- **What you see**: a golden loop on the pV diagram — isothermal expansion absorbs Qₕ (red) → adiabatic expansion cools the gas → isothermal compression dumps Q꜀ (blue) → adiabatic compression reheats. The bottom-right piston animation and the pV dot are linked step by step; gas color shifts red/blue with temperature; the panel gives η = 1 − T꜀/Tₕ and the work done this cycle (the loop area).
- **How to play**: `space` play / pause; drag the **Tₕ / T꜀ sliders** and watch the golden loop deform and the efficiency update in real time — raising Tₕ or lowering T꜀ both improve efficiency. That is the Carnot theorem.
- **URL parameters**: `?labels=0`.

### Fourier series — epicycles sum to every waveform

- **What you see**: on the left a chain of "epicycles" (radius = harmonic amplitude, speed = harmonic frequency) is plumbed tip to tip; the pen traces the resulting path on the right — square / sawtooth / triangle drawn point by point. Harmonic count N from 1 to 50, the waveform steps toward the target. Beside the square wave's jump a ~9 % overshoot lingers forever — **the Gibbs ringing**.
- **How to play**: `space` play / pause; switch the target waveform (square / sawtooth / triangle); drag "harmonics N" to see the approximation; uncheck "show epicycles" to view only the result.
- **URL parameters**: `?labels=0`.

### Electromagnetic induction — Lenz's "welcome opposes, parting holds back"

- **What you see**: push a bar magnet in and out of a coil — when inserted the flux Φ increases, at rest dΦ/dt = 0, on pull-out the flux reverses; the galvanometer needle swings with e = −dΦ/dt in both directions and the current dots on the wire flow the right way. The polarity badges on the coil terminals demonstrate Lenz's law: **N approaches → the coil's left end becomes N and repels; N leaves → becomes S and holds**.
- **How to play**: `space` play / pause; the "magnet speed" slider doubles the speed of the in-out motion — the needle swings harder (e is proportional to the rate of change); "flip magnet polarity" mirrors everything.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=0`.

### Monty Hall — switch or stay

- **What you see**: a three-door demo plays automatically — you pick door 1, the host (who knows where the car is) opens a goat door; switch and stay are recorded per round; the top-right Bayesian three-branch card explains the two paths under "switch → win"; the two win-rate curves converge to **2/3 vs 1/3** as the rounds pile up — the law of large numbers on stage.
- **How to play**: `space` play / pause; the "batch" slider runs many rounds; "reset" starts over.
- **URL parameters**: `?labels=0`.

### Doppler effect — the sound barrier and the Mach cone

- **What you see**: the source walks while shouting; the wavefronts spread at the speed of sound — squeezed ahead (higher pitch), stretched behind (lower pitch). Raise the Mach number and watch the wavefronts stack into the "sound barrier" at Mach = 1 and into a **Mach cone** at supersonic speeds (half-angle = asin(1/M)) — the sonic boom is the cone sweeping past; the statistics panel reports the frequency ratios heard in front and behind.
- **How to play**: `space` play / pause; drag "source Mach number" from 0 to 1.6 to walk through subsonic → transonic → supersonic; "replay wavefronts" relays the rings.
- **URL parameters**: `?labels=0`.

### Activation energy — why reactions are slow

- **What you see**: molecular energies follow the Maxwell-Boltzmann distribution — most sit in the middle, a few are very hot; only collisions with energy ≥ Ea count (red shading). Drag "temperature" and the curve flattens right, the fraction with enough energy grows exponentially; tick "add catalyst" to halve the Ea hill — the endpoint is unchanged, only the path is lower; the panel's "relative rate" is the Arrhenius formula k = A·e^(−Ea/RT) recomputed live.
- **How to play**: `space` play / pause; first drag "temperature", then enable "catalyst" — compare the two speedup shapes; the "activation energy Ea" slider moves the threshold directly.
- **URL parameters**: `?labels=0`.

### Kepler orbits — ellipse, equal areas, T²∝a³

- **What you see**: the star sits at a focus of the elliptical orbit; the **gold-orange sector** demonstrates Kepler's second law live — fast at perihelion, slow at aphelion, but the swept area per unit time is constant (the conservation readout in the panel); the eccentricity slider squeezes the circle into a comet; planet 2 with semimajor axis ×1.5 measures a period of ≈1.84× — the third law T² = a³ is verified live (Kepler equations are solved numerically so you can drag any phase).
- **How to play**: `space` play / pause; drag "eccentricity e" and watch the orbit flatten; tick "planet 2" to contrast the third law; watch the sector narrow and widen.
- **URL parameters**: `?labels=0`.

### Titration curve — buffer plateau and equivalence jump

- **What you see**: 0.1 M NaOH titrates 25 mL of acid — weak acid (HAc, solid) shows a **buffer plateau** at the half-equivalence point pH = pKa = 4.76 (the buffer page's home turf); within two drops of the equivalence point (25 mL) the pH jumps from 4 to 10. The strong acid (HCl, dashed) has no plateau and equivalence at pH 7. The indicator color bands (vertical) animate the beaker color; the current pH dot rides the curve.
- **How to play**: `space` play / pause; drag "titration progress" to step through the jump; switch phenolphthalein / methyl orange / litmus — only the indicator whose window covers the jump is suitable.
- **URL parameters**: `?labels=0`.

### Angular momentum — skater · falling cat · neutron star

- **What you see**: three scenes for one conservation law. **Skater** — drag "tuck"; the masses pull toward the axis, I = Σmr² plummets, ω = L/I explodes; the conservation bar at the bottom-right shows L = Iω never moves while KE = L²/2I rises (the tucking muscles do work). **Falling cat** — in free fall ΣL = 0; the front half curls and spins fast, the rear half extends and counter-rotates a little; the two halves sum to exactly zero, and after the swap the cat finishes the turn and lands feet-down. **Neutron star** — drag "collapse"; the radius drops by four orders of magnitude and the rotation period shrinks from 25 days to about 1 ms; the dual light beams sweep out a pulsar.
- **How to play**: `space` play / pause; for the skater use "tuck" or "auto-tuck/release"; for the neutron star drag "collapse"; the three mode buttons at the top-right switch the scene.
- **URL parameters**: `?mode=skater|cat|star` `?tuck=` `?collapse=` `?pause=` `?speed=` `?labels=0` `?spin=1`.

### Gyroscopic precession — why gravity torque can't tip it over

- **What you see**: a single-point-supported spinning wheel — when ω = 0 gravity's torque τ = mgd just flips it over. "Lift and hold", spin it fast, and on release τ ⊥ L only changes the direction of angular momentum: the axle tip traces a horizontal circle, Ω = mgd / Iω. **Slow the spin and precession speeds up** (Ω ∝ 1/ω); below a critical spin rate the gyroscopic term can no longer support gravity and the axle tilts down. With bearing friction on you can watch a full life: precession → ever-faster precession → collapse.
- **How to play**: `space` play / pause; the "spin ω" slider + the two buttons "Lift & hold" / "Release!"; toggle L / τ / mg vectors, axle-tip trail, bearing friction — turn friction off for endless precession.
- **URL parameters**: `?omega=` `?pause=` `?speed=` `?labels=0` `?vectors=0` `?trail=0` `?friction=0`.

### p-n junction — one slider from LED to solar cell

- **What you see**: a 3D lattice carrier simulation — holes from the p-side and electrons from the n-side diffuse into each other, leaving behind immobile fixed ions, and the depletion layer and built-in field appear. **Forward bias** narrows the gate; carriers flood the junction, recombine and emit photons — the LED glows and the bulb lights. **Reverse bias + light** — photons punch out electron–hole pairs and the built-in field pulls them apart to the two ends — the solar cell generates power, the source is being "charged". The dot on the bottom-right I-V curve tracks the slider.
- **How to play**: `space` play / pause; drag "bias V" from −2 V to +1 V and watch the depletion width, field strength and current direction change continuously; "illumination" switches between single-cell and dark.
- **URL parameters**: `?v=` `?light=0` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Fuel cell — a galvanic cell you keep feeding

- **What you see**: a PEM sandwich — H₂ from the left tank enters the anode catalyst where platinum rips it into 2 H⁺ + 2 e⁻; the proton-exchange membrane is an insulator for electrons, so H⁺ crosses the membrane while electrons climb the terminal, ride through the wire and light the bulb; the three flows (H⁺, e⁻, O₂) meet at the cathode catalyst to make water, which drops into the reservoir with a counter that ticks up. Occasionally a "lost" electron hits the membrane and bounces back — "✗ no electrons allowed".
- **How to play**: `space` play / pause; drag the load and watch flow and brightness respond; **turn off the H₂ supply** — the anode's local stock runs out, current drops to zero, the bulb dies and water stops. Turn it back on and the flame lights again. A battery stores reactants in its electrodes; a fuel cell must be fed. That is the essential difference.
- **URL parameters**: `?load=` `?fuel=0` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Osmosis & reverse osmosis — at pressure past π the net flow flips

- **What you see**: a 3D two-chamber particle simulation with a semi-permeable membrane that passes only water — sugars and salts stay on the right; some of the right-side water is "tied up" by the solute, so the net flow goes from the pure side into the solution side and the right level rises. The head difference builds a hydrostatic pressure ρgΔh, and **at Δh = π the net flow is exactly zero** (dynamic equilibrium). Drag "applied pressure" past π and the flow flips — pure water is squeezed out of the solution, sugar and salt stay behind; the right chamber gets more concentrated and π rises, so continuous desalination needs continuous pressure.
- **How to play**: `space` play / pause; drag "applied pressure P" (0→2.5π) and watch the flow arrows flip at ±π; "jump to equilibrium" lands on Δh = π; "reset levels" reruns.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Neural-net gradient descent — how a ball rolls to the minimum loss

- **What you see**: on the 3D loss surface (height = error) a ball rolls down the negative gradient θ ← θ − η∇L; the red arrow points along the steepest descent in real time. A learning rate η too small crawls, a sweet spot converges, a too-large rate zig-zags and even shoots off the surface (auto-reset). Momentum β accumulates past velocity so the ball can roll over small basins and head for the global minimum — the green dot marks the global minimum; watch which basin your ball lands in.
- **How to play**: `space` play / pause; **click anywhere on the surface to drop a ball**; drag "learning rate" from 0.006 to 0.9 (log), drag "momentum" from 0 to 0.95; "throw to the other ridge" demonstrates momentum carrying the ball over.
- **URL parameters**: `?lr=` `?mom=` `?pause=` `?speed=` `?labels=0` `?spin=1`.

### Sorting race — one shuffle, five fates

- **What you see**: bubble / selection / insertion / quicksort / mergesort take the **same shuffle** (column height = value) and race on five lanes; white flash = a comparison, red flash = a write, and a counter above each lane accumulates — quicksort / mergesort cross first (🏁), bubble / selection grind on; the final tally: selection ~231 comparisons vs quicksort ~73, a ×3.2 difference — and that is only for n = 22.
- **How to play**: `space` play / pause; "steps per frame" speeds things up; "reshuffle and rerun" shows another race (distributions change, ordering doesn't); "run to completion" jumps to the final state.
- **URL parameters**: `?speed=` `?pause=` `?labels=0` `?spin=1`.

### RSA — easy to multiply, hard to undo

- **What you see**: end-to-end real math on small numbers — pick primes p = 61, q = 53 → n = 3233 (public), φ = 3120 (secret) → e = 17, d = 2753 (e·d ≡ 1 mod φ) → encrypt c = 65¹⁷ mod 3233 = 2790 (with the square-and-multiply steps shown) → decrypt back to 65. The right-hand "clock mod 3233" plots the squaring chain as it jumps round and round — there is no rewind. The "brute-force try to factor n" counter hits 53 × 61 instantly while a real 2048-bit n takes ~10³⁰⁸ attempts.
- **How to play**: `space` play / pause; change the prime pair from the dropdown, drag the plaintext m; "encrypt with public key →" and "← decrypt with private key" let you follow the clock; "brute-force try to factor n" runs the adversary's job.
- **URL parameters**: `?labels=0` `?pause=`.

### Three-phase induction motor — the rotating field drags the cage

- **What you see**: three stator windings (A/B/C) 120° apart in space with currents 120° apart in time — the resulting six-pole N/S pattern slides around like a zoetrope (the field itself rotates, no mechanical part moves). The squirrel-cage rotor cuts field lines, induces currents (the greater the slip, the brighter the bars), and Ampère force drags it around. Drag "load" and watch the speed drop and slip grow. **Cut one phase** — the rotating field collapses to a pulsating one, the forward and backward components cancel, starting torque is zero and the motor just hums.
- **How to play**: `space` play / pause; drag "load" to see the slip readout; click "cut one phase" then "restore three"; click steps to jump scene.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Transformer & the grid — the turns ratio is the voltage ratio

- **What you see**: two modes. **The transformer** — AC in the primary makes an alternating flux in the iron core (a bright dot runs around the magnetic loop) and each secondary turn picks up the same voltage: V₂ = (N₂/N₁)·V₁. Drag the turns-ratio slider past 1.0 and step-up ⇄ step-down flips. **The grid** — a 100 MW plant steps up to hundreds of kV and the line current plummets, line loss I²R collapses (the wire's red heat shell goes dark); the local substation then steps back down: ×10 voltage, ÷100 loss.
- **How to play**: `space` play / pause; in transformer mode drag "turns ratio"; in grid mode drag "transmission voltage" from 500 kV down to 12 kV — the three wires glow red and the power reaching town goes to zero.
- **URL parameters**: `?mode=bench|grid` `?ratio=` `?pause=` `?speed=` `?labels=0`.

### Speaker ⇄ microphone — the same moving-coil head

- **What you see**: two identical moving-coil heads face each other — voice coil in the magnetic gap and a conical diaphragm. Plug the left into an amp: current feels Ampère force F = BIL, the diaphragm pushes air, and sound waves spread in rings to the right. Plug the right into a mic preamp: sound waves push the diaphragm, the coil cuts field lines and generates e = BLv; the small waveform window shows the output sine tracking the input. Press "swap roles" — same pair, right speaks, left listens.
- **How to play**: `space` play / pause; drag "frequency" and watch the rings tighten (higher frequency = denser rings); drag "volume"; press "swap roles".
- **URL parameters**: `?freq=` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Wireless charging — an air-core transformer

- **What you see**: a transmitter coil on the pad carries high-frequency AC; green flux tubes rise upward. The phone's receiver coil sits inside the flux and picks up a current, filling the battery bar. Coupling k decays exponentially with offset and gap — halve k and the power falls to a quarter. **Drop a coin on the pad**: it sits in the flux and eddy currents heat it like a resistor (the thermometer rockets); the Qi pad notices the power mismatch and the FoD shuts the pad off.
- **How to play**: `space` play / pause; drag "offset / gap" to watch k and power collapse; "drop a coin" and click again to retrieve it.
- **URL parameters**: `?off=` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Induction cooktop — the pot is its own heating element

- **What you see**: a high-frequency coil under the glass top pushes flux into the pot base, where it induces eddy-current rings (blue); I²R heats the metal right there — the pot cooks itself, no flame or heating coil involved. Ferromagnetic pots channel flux and match the circuit; power transfer 92%. **Switch to aluminum**: eddy strength is actually higher (94%) but power drops to 14% — "no flux channeling, no matching" — and that is why aluminum pots fail. Lift the pot and pan detection shuts the cooktop off.
- **How to play**: `space` play / pause; drag "power"; compare three materials and watch pot and panel temperature (the panel stays almost cool).
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Corrosion — a shorted galvanic cell

- **What you see**: a steel plate in seawater develops its own anode and cathode regions — at the anode Fe → Fe²⁺ + 2e⁻ dissolves (green ions leave), electrons run through the steel body to the cathode (yellow dots), and at the cathode O₂ + H₂O + e⁻ → OH⁻ (blue ions form). Fe²⁺ meets OH⁻ and grows into reddish-brown rust. Drag salinity up and watch the rust speed climb. **Weld on a zinc block**: the more reactive zinc takes over as the anode and the steel is forced into the cathode — corrosion drops 0.15 → 0.01 mm/year; the zinc block slowly dissolves away.
- **How to play**: `space` play / pause; drag "salinity"; toggle "weld on / cut off the zinc block" to compare two fates.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Electroplating — pay for it, run corrosion in reverse

- **What you see**: a DC source forces current — the anode copper plate dissolves to feed the bath (Cu → Cu²⁺ + 2e⁻, visibly thinning); Cu²⁺ swims across the electrolyte and is reduced onto the cathode spoon as a copper layer (thickness ∝ current × time, Faraday's law live). **Swap the polarity**: the spoon becomes the anode and dissolves itself — the first iron rule of plating: the workpiece must be the cathode.
- **How to play**: `space` play / pause; drag "current" to watch plating speed; press "swap polarity" then again to revert.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Planetary gears — fix a member, fix the ratio

- **What you see**: a 12-tooth sun gear input, three 18-tooth planets pinned by the carrier, and an outer 48-tooth ring — fixing the ring gives the carrier 5:1 forward reduction; **fixing the carrier flips the ring to −4:1 (reverse!)**; locking everything is a 1:1 direct. Willis's formula (ωs−ωc)·Zs = −(ωr−ωc)·Zr waits in the top bar.
- **How to play**: `space` play / pause; three mode buttons are the gears; drag "input speed".
- **URL parameters**: `?fix=ring|car|lock` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Worm drive self-locking — lead angle vs friction angle

- **What you see**: a single-thread worm with a 20:1 reduction lifts a weight. **Hold "reverse crank"**: with lead angle 6° < friction angle 8.5° the worm-gear tooth slopes are held by friction and only heat up (red ring) without turning — geometric self-locking. Drag the lead angle to 22° past the friction angle and the weight drops, back-driving the worm so the handwheel spins.
- **How to play**: `space` play / pause; drag "lead angle γ" across the 8.5° threshold; hold the "reverse test" button.
- **URL parameters**: `?lead=` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Universal joint — single joint pulses, double joint cures it

- **What you see**: a constant input axis with a single Hooke joint lets the driven axis bend by 28° but the angular velocity pulses twice per turn (ω₂ = ω₁ cos α / (1 − sin²α·cos²θ)) — the bottom-right curve and rpm readout show it. **Add a second joint**: with both yokes Z-phased on the intermediate shaft, the two ripples cancel and the output is uniform — every day of a rear-wheel-drive car's driveshaft.
- **How to play**: `space` play / pause; drag "bend angle α" to amplify the ripple; toggle "add a second joint" for comparison.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Four-bar linkage — Grashof condition and quick return

- **What you see**: the crank (blue) makes a uniform full turn while the coupler (green) and the rocker (orange) oscillate; the tracing point on the coupler extension draws a six-degree curve. **Shorten the rocker past the Grashof boundary**: the three links go collinear and jam, the crank can only knock between walls (red warning). Quick-return K is computed live — work stroke slow and powerful, return stroke fast.
- **How to play**: `space` play / pause; drag "rocker length" across the boundary; three preset buttons for different scenarios.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=1`.

### Clutch & manual gearbox — half-clutch start and shifts

- **What you see**: engine flywheel → clutch friction disc → gearbox two pairs of gears → wheels. **Half-clutch**: lift the pedal halfway, friction disc and flywheel slip, torque flows gently to a stationary car (red slip ring flashes); when fully engaged slip is zero and the two plates lock. **Three steps of a shift**: depress → synchronizer ring matches speeds → dogs engage. 1st gear multiplies torque 4.2× while slowing the wheels — the same physics as a step-up transformer stepping voltage down.
- **How to play**: `space` play / pause; "1st / 2nd" switch; drag "clutch pedal" from disengage to fully engaged; drag "throttle".
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Escapement — slicing the spring's force into tick-tock

- **What you see**: spring barrel → intermediate wheel → 15-tooth escape wheel → pallet fork (with twin ruby pallets) → balance wheel + hairspring. The balance oscillates isochronously; the pallet flips each half cycle, the escape wheel advances by one 12° step and kicks the balance — energy is sliced into equal portions, the red flash is every "refill". Tick-tock counts and remaining spring tension drop in real time.
- **How to play**: `space` play / pause; drag "visual cycle" from a slow 3 s teaching tempo to near-real 1.5 s.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Helicopter swashplate — how collective and cyclic pitch work

- **What you see**: a lower ring tilts with the control stick and an upper ring rotates with the shaft — that's the swashplate. **Collective**: all three blades add the same pitch → lift exceeds weight → climb. **Cyclic**: a region of high pitch is locked to a heading, every blade pitches up wherever it is, the integrated thrust disc tilts and the body follows. The 90° precession footnote links back to the gyro page; the tail rotor accounts for the anti-torque.
- **How to play**: `space` play / pause; drag "collective" to climb, drag "cyclic" to tilt forward; blade-tip color shows local pitch.
- **URL parameters**: `?col=` `?cyc=` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Watt's centrifugal governor — the first negative-feedback controller

- **What you see**: fly-ball angle reads speed → sleeve moves → linkage presses the steam throttle → steam drives the flywheel → the belt drives the governor — the loop is closed. **Sudden load**: speed drops → balls fly inward → valve opens → speed recovers — the triangle chases a new −5 % equilibrium (proportional control's offset). The steam-era feedback thought runs straight through thermostats, glucose regulation and cruise control.
- **How to play**: `space` play / pause; "sudden load / sudden unload" to watch the chase; drag "load level" for fine tuning.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Double-slit interference — path difference decides bright or dark

- **What you see**: laser → double-slit barrier → screen. The two slits send out wavefronts in phase; the dot cloud between them is the interference field — bright bands where the path difference is an integer number of wavelengths (constructive), dark gaps where it's a half integer (destructive). On the screen Δy = λL/d responds live to the wavelength and slit-separation sliders. **Quantum mode** fires one photon at a time; the hits look random at first, but after a few hundred the fringes emerge.
- **How to play**: `space` play / pause; drag "wavelength / slit separation" to see the fringe spacing change; "fire one at a time" accumulates the probability wave; "clear and accumulate".
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=1`.

### Standing waves & timbre — timbre is a recipe of harmonics

- **What you see**: a string fixed at both ends only hosts λ = 2L/n; drag "harmonic n" and watch the 1st–4th standing wave patterns, red nodes locked in place and antinodes oscillating wildly; the five bars at the bottom are the harmonic recipe — switch "guitar / piano" presets and the waveform and bars change in sync: same A4, different recipe, different timbre.
- **How to play**: `space` play / pause; drag "harmonic n"; switch the three timbre presets; enable "envelope" to see nodes and antinodes.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=1`.

### Polarization — light is a transverse wave; the fence passes one side

- **What you see**: three stages of E-vector waveform — source (two chaotic components) → polarizer (the fence passes vertical only) → analyzer (axis at angle θ). Malus's law is live: amplitude left = cos θ, intensity left = cos²θ; rotate to 90° (crossed) and it goes fully black — where did the light go? It became heat in the analyzer. Sunglasses, LCDs, 3D glasses all use this kind of fence.
- **How to play**: `space` play / pause; drag "analyzer angle θ" from 0° to 90° to walk through Malus.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Refraction & total internal reflection — the critical-angle choice

- **What you see**: two modes. **Pool**: an underwater lamp aims at the surface; the moment the incidence angle crosses the 48.8° critical angle the refracted light disappears and all the energy reflects back — the water surface becomes a mirror. **Fiber**: light bounces inside a curved core by TIR relay and never leaks, even around bends — the backbone of the global internet.
- **How to play**: `space` play / pause; drag "incidence angle" across the critical angle to see the state flip; switch to "fiber" mode for TIR relay.
- **URL parameters**: `?mode=pool|fiber` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Lens imaging — drag object distance past 1f

- **What you see**: two modes. **Optics bench**: three special rays (parallel → through focus; through optical center straight on; through focus becomes parallel) locate the image in real time; drag object distance through 1f and the inverted real image flips to an upright enlarged virtual one (dashed extensions appear). **Eye & glasses**: ciliary muscle zooms; myopia focuses in front of the retina; drag "lens power" and watch the concave lens pre-bend rays back to the retina.
- **How to play**: `space` play / pause; in bench mode drag "object distance u" through 1f / 2f; in eye mode drag "ciliary muscle" and "lens power".
- **URL parameters**: `?mode=bench|eye` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Laser — the photon copier and the cavity

- **What you see**: ruby rod + fully reflecting / partial mirrors. Turn on the pump: the lamp raises atoms to the high level (blue → red) and population inversion builds. **Inject a seed photon**: every pass through the medium triggers stimulated emission — cloning itself into a chain of same-phase, same-frequency photons, snow-balling inside the cavity, with the partial mirror leaking some out each time — a coherent beam shoots to the right and the power meter soars.
- **How to play**: `space` play / pause; "pump on" → "inject a seed photon" to watch the avalanche; drag "pump intensity".
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### EM wave — E⊥B⊥ propagation, the wave feeds itself

- **What you see**: a dipole antenna's charge oscillates up and down → the alternating E-field (blue) births an in-phase B-field (orange) → the newborn B in turn induces a new E further away — the wave feeds itself, running at the speed of light. E⊥B⊥propagation is three-way perpendicular; the spectrum bar slides with "visual frequency" — the same wave from radio to γ-rays is only a frequency difference.
- **How to play**: `space` play / pause; drag "visual frequency" to see wavelength change and the spectrum shift; turn off the B-field to view E alone.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Resonance & beats — match the frequency, then it really pushes

- **What you see**: two modes. **Forced resonance**: the drive pendulum pushes the resonant pendulum; sweep the drive frequency and amplitude explodes when you cross the natural 0.4 Hz, the response curve's peak + a cursor on screen — the Tacoma Narrows lesson. **Beats**: 80 Hz and a tunable fork strike together; two waves superimpose into a slow envelope, beat frequency = |f₁−f₂| live.
- **How to play**: `space` play / pause; sweep the drive to find the peak, adjust damping to watch the peak widen; in beats mode drag "second fork" to tune the beat out.
- **URL parameters**: `?mode=res|beat` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Kinetic theory — pressure is impact

- **What you see**: 150 molecules in a glass box pound a piston — pressure equals the impulse delivered per unit time; drag "temperature" and the molecules as a whole speed up (color goes red); drag the piston in to compress the volume and collisions get denser, pressure rises. **Freeze a frame** and color by speed: a few red ones are very fast, slower ones too — the Maxwell distribution in the wild; the pV product is approximately conserved and is verified live.
- **How to play**: `space` play / pause; drag "temperature / volume" and watch the pV reading; "freeze frame" to inspect the speed distribution.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Refrigerator ⇄ heat pump — two faces of the same machine

- **What you see**: a three-stage stage (indoor | wall | outdoor); refrigerant flows around the loop, color-coded by state (red-hot after compression, blue-cold after throttling). **Cooling mode**: the indoor unit acts as an evaporator and absorbs heat to cool the room. **Flip the four-way valve**: the indoor coil becomes the condenser and dumps heat — pulling heat from the cold outside air to warm the house in winter. COP > 1 — heat is moved, not created.
- **How to play**: `space` play / pause; toggle "cool / heat" to watch the roles swap; drag "compressor power" to change the speed at which room temperature responds.
- **URL parameters**: `?mode=cool|heat` `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Entropy & mixing — uniform arrangements are overwhelmingly more

- **What you see**: blue and orange gas sit on their own sides of a partition. **Pull the partition**: particles stream across and the gases mix forever, the mixing-entropy meter leaps up and never falls; **time-reverse experiment**: every velocity flipped exactly — the laws don't forbid it, but the probability is so small the universe will not live long enough. The second law is statistics, not a prohibition.
- **How to play**: `space` play / pause; try "pull partition" → "time-reverse experiment" once each; drag "particle count" to see fluctuations tighten.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Phase change — latent heat hides in breaking the structure

- **What you see**: the Bunsen burner keeps pouring energy into the beaker — solid lattice jitter grows → melting plateau (temperature stops, energy all breaks the lattice) → liquid slides around → boiling plateau → gas flies free; the temperature curve meditates at the transitions, the energy curve never stops. Run it backwards and freezing returns the latent heat.
- **How to play**: `space` play / pause; drag "heating power" to speed up or slow down; "rewind to ice and reheat".
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Random walk — ten thousand drunks walk out a normal

- **What you see**: a thousand particles start at the center and wander equally in all four directions; one step is unpredictable, but the ensemble melts into a Gaussian bell. Cyan rings are the √t formula's σ and 2σ and the cloud edges always hug them. A blue "star" particle carries its trail — one particle vs the crowd, two views of the same law.
- **How to play**: `space` play / pause; "re-cluster at the center" reruns; "follow the star" watches one particle's fate; drag "particle count" to see fluctuations tighten.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Radioactive decay — half-life grows out of the law of large numbers

- **What you see**: a cubic sample of 1728 nuclei, each rolling the same die every second — decay pops open with an orange particle and the nucleus turns green; the law of large numbers drives the whole population onto a precise exponential curve: the green line is the theory, the gold dots are the measurements, and four half-life markers are laid out. Individual random, population predetermined.
- **How to play**: `space` play / pause; drag the "half-life" slider to change the tempo; "refill" rerolls the dice; watch the dots cling to the theory line.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Alkene electrophilic addition — elimination run in reverse

- **What you see**: ethylene's π cloud (two yellow rings above and below) is attracted by HBr's H^δ+, the π bond opens, H lands on one carbon and the other becomes a **planar carbocation** (sp², empty p-orbital), and Br⁻ finishes the addition. Switch to propene and Br clearly lands on the more substituted middle carbon — the electronic origin of **Markovnikov's rule** (secondary carbocations are more stable).
- **How to play**: `space` play / pause; "play reaction" walks through the four acts; drag the "phase slider" for frame-by-frame; "switch to propene" to see regio-selectivity.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Radical chain — one photon, a thousand transformations

- **What you see**: a UV lamp splits Cl–Cl into two Cl· radicals (highlighted red). Cl· hits CH₄, abstracts an H to form HCl and itself becomes ·CH₃ — one radical becomes another. ·CH₃ then takes a Cl from Cl₂ to make CH₃Cl, releasing **a fresh Cl·** — the cycle restarts. Two radicals colliding annihilate each other and terminate. The right-hand counter reports Cl· count, cycle count and CH₃Cl — see "one trigger, a thousand transformations" in real time.
- **How to play**: "turn on UV (initiate)" to ignite; watch the cycle counter climb; "free-radical quench (terminate)" collides the radical pairs; drag the speed slider.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Chirality — mirror molecules that cannot overlap

- **What you see**: an R-configuration and an S-configuration of CHFClBr face each other with a pushable mirror between them. No matter how you rotate, two groups always refuse to match — **they cannot be superimposed**. "Swap two groups" lets S overlap R, the stats say "overlapping"; a single swap flips chirality, which is the very mechanism of the SN2 Walden inversion.
- **How to play**: "push mirror" slides the mirror through the molecule; "swap two groups" experiences the flip; drag "synchronized rotation" to compare poses.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Benzene & aromaticity — the donut of electrons

- **What you see**: six sp² carbons in a flat regular hexagon, each with one vertical p-orbital. In "Kekulé flicker" the double-bond positions flicker between the two drawings — proving the drawings are both wrong. In "delocalized truth" the six electrons are shared around the ring, forming **two yellow donuts** above and below; C–C bonds are all equal length (bond order 1.5). The Hückel 4n+2 criterion is displayed live — that is why benzene prefers substitution and refuses addition.
- **How to play**: two mode buttons for comparison; drag "electron cloud animation" to see the donuts breathe; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Conjugation & color — longer chains, more red

- **What you see**: an alternating single/double-bond chain — π electron waves on the chain form standing waves; yellow is HOMO, dashed blue is LUMO. Drag "conjugated bonds n" and stretch the chain from ethylene to lycopene (11 double bonds); the absorption band at the top slides red (171 nm → 474 nm) and the color panel shows the actual **complement**: colorless → pale yellow → orange-red. A longer box gives a denser ladder of states and a smaller gap — color as a direct reading of quantum size.
- **How to play**: drag the n slider and watch the chain grow and the color change; click a step to jump to a typical molecule; `space` to play / pause.
- **URL parameters**: `?pause=` `?n=11` `?labels=0` `?spin=0`.

### Free-radical polymerization — from monomer to plastic

- **What you see**: vinyl monomers drift around the beaker. "Add initiator" cracks an O–O bond and a red radical is born; the radical grabs a double bond, the π becomes σ, and the radical moves to the tail — the chain grows bead by bead. The right-hand panel tracks **active chains, average degree of polymerization, monomers consumed**; the material-grade indicator switches with the degree: waxy (soft) → general-purpose plastic (bottles, films) → high-strength (fibers). "Terminate (quench)" makes two active ends collide and lock the molecular weight.
- **How to play**: add initiator and watch the chain grow; drag "monomer concentration" to change the supply tempo; after quenching, read the material grade for the final DP.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Michaelis-Menten kinetics — the v-[S] curve

- **What you see**: the green sphere is the enzyme, the dent is the active site. Yellow substrate slides in to form an ES complex (gold flash) and is catalyzed out as a blue product. The top-right chart plots the v-[S] scatter and the Michaelis-Menten curve live — at low concentrations it climbs linearly; at high [S] it saturates at Vmax; **Km is the substrate concentration at half-Vmax**. Click "add a competitive inhibitor" and the red inhibitor preempts the active site; the curve shifts right (Km↑) while the ceiling (Vmax) stays put.
- **How to play**: drag "substrate concentration [S]" from sparse to dense and watch the rate climb and saturate; toggle the inhibitor to compare Km; read "catalytic cycle count" to see how busy the enzyme is.
- **URL parameters**: `?pause=` `?s=95` `?labels=0` `?spin=0`.

### Ozone depletion — one chlorine destroys a hundred thousand

- **What you see**: an ozone band at 25 km altitude absorbs 97 % of the UV (purple beams from above). "Release a can of CFC" — CFCs rise into the stratosphere where UV cleaves them into green Cl·. Cl· attacks O₃ and takes an oxygen (ClO + O₂); ClO meets a free oxygen atom, hands it over and gets Cl· back — the **catalyst returns unchanged**, the cycle repeats. "Antarctic spring" bursts the reservoir (HCl + ClONO₂) on polar stratospheric clouds; Cl· numbers spike and the ozone layer halves — that is the September hole; a counter says one Cl kills ~100 000 O₃ in the real world.
- **How to play**: release CFCs to see one cycle at a time; raise UV intensity to accelerate photolysis; press "Antarctic spring" for the chain collapse; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Hydrogen bonds & water's anomalies — why ice floats

- **What you see**: 40 water molecules (pink O, white H) brownian-drift in a box; the dashed blue lines between neighboring O…H flicker on and off — those are hydrogen bonds. Drag the temperature below 0 °C and the molecules get locked into an **open hexagonal lattice**; the network spreads and density drops 9 %. The bottom-right density curve shows the 4 °C maximum and the current temperature. The 0–4 °C anomalous expansion, the 4 °C lake floor, water's enormous specific heat — all are the ledger of this dashed network.
- **How to play**: drag "temperature" from −20 to 100 °C and watch freeze / melt cycle; toggle "show H-bonds"; `space` to play / pause.
- **URL parameters**: `?pause=` `?t=-15` `?speed=` `?labels=0`.

### Soap & micelles — half hydrophilic, half lipophilic

- **What you see**: amphiphilic molecules (blue head, orange tail). At low concentration they coat an oil droplet (head in water, tail in oil). Push the concentration past **CMC (20)** and the extra molecules self-assemble into micelles with their tails inside. The surface tension curve on the bottom-right plateaus exactly at CMC. "Drop some grease" and watch the molecules wrap the oil — every secret of emulsification.
- **How to play**: drag "soap concentration" across CMC; the drop / clean-water buttons show oil and micelles trading places; `space` to play / pause.
- **URL parameters**: `?pause=` `?c=45` `?speed=` `?labels=0` `?spin=0`.

### Distillation — one vaporization is never enough

- **What you see**: A/B mixture boils in the kettle; vapor bubbles enriched in A rise and hit each tray, doing a local vapor-condense-revaporize cycle that enriches A one more time — every tray's liquid color climbs from blue (B rich) at the bottom to orange (A rich) at the top, and the wall's glow from red-hot to blue-cold pulls a **temperature gradient** alongside the **concentration gradient**. Vapor from the top hits the condenser and drips into the receiver; the panel reports the top A%, kettle A% and distillate rate live.
- **How to play**: drag "tray count" from 1 to 6 and watch the top purity jump; drag "heating power" to change bubble tempo; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Chromatography — how three bands get pulled apart

- **What you see**: three dyes are injected into the top of the packed column at once. Each molecule repeatedly partitions between "riding the mobile phase" and "being held by the stationary phase". Red sticks the least and sprints ahead; yellow middles; blue sticks hard and trails; thousands of partitions magnify a tiny initial velocity difference into three fully separated bands. The detector at the bottom draws the **retention-time peaks** (red 8 s → yellow 10 s → blue 12 s) — the common principle behind HPLC, GC and paper chromatography.
- **How to play**: "inject" reruns; drag "mobile-phase flow rate" to scale the retention times; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Crystal growth — laying down order layer by layer

- **What you see**: a seed crystal sits in solution; supersaturation drives purple solute molecules to land. The yellow-outlined **kink site** (concave corner) grips bonds from three directions at once — most wanted — so the step fills in and regrows, the crystal face rises like a uniformly built wall. Drag "temperature" up and thermal motion kicks seated molecules back out, leaving vacancy defects — that is the principle behind zone-melting ultrapurification of silicon. Cell count / kink sites / growth rate update live.
- **How to play**: drag "supersaturation" to change the driving force; drag "temperature" to make defects; "re-nucleate" for a fresh start; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Liquid crystal & LCD — a voltage-controlled blind

- **What you see**: a liquid-crystal cell between two crossed polarizers P1 (vertical) and P2 (horizontal). Rod molecules are aligned by glass grooves into a **90° twist**; a photon's polarization follows the molecules and gets rotated to horizontal — which exactly matches P2's axis, so the photon passes and the pixel is bright. Press "pixel voltage on" and the polar molecules stand at attention, the twist disappears, polarization is no longer rotated, the vertical light is entirely extinguished at P2 — the pixel goes dark. Transmittance is live; mid-voltages give grayscales.
- **How to play**: "pixel voltage on / off" for the bright/dark flip; drag "fine voltage" to find the threshold and the grayscales; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Glycolysis — six carbons split, the ATP ledger goes positive

- **What you see**: a glucose chain labeled 1–6 spends 2 ATP to prime, reaches aldolase and splits in half; each three-carbon end runs to pyruvate kinase and turns pink — the ATP ledger crawls from −2 back to +2, with NADH logged in sync. No oxygen required.
- **How to play**: "eat a glucose" runs the whole path; drag the "phase progress" to scrub frame by frame through the split; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Krebs cycle — one lap, back to the start

- **What you see**: eight intermediates sit on the cycle. The 4C oxaloacetate catches the 2C acetyl (orange ball flies in) and becomes 6C citrate; two decarboxylations release CO₂ bubbles and NADH / FADH₂ / GTP collect in the center; the carbon count returns to 4C and the receiver resets. The ledger reports 2 / 1 / 1 + 2 CO₂.
- **How to play**: "send in an acetyl-CoA" runs a lap; drag "cycle progress" to step through intermediates; `space` to play / pause.
- **URL parameters**: `?pause=` `?p=0.3` `?speed=` `?labels=0` `?spin=0`.

### Fermentation — without oxygen, buy back NAD⁺

- **What you see**: glucose is turned into pyruvate on the left (glycolysis), reaching a fork. With oxygen the path goes up into the mitochondrion (full output); without it the path goes down — muscle mode makes lactate, yeast mode makes ethanol + CO₂. The bottom-right NAD⁺ pool bar crashes to 3 when the switch flips, then fermentation buys it back up to 8 step by step — glycolysis never stops.
- **How to play**: toggle the "oxygen switch" to watch the NAD⁺ pool crash and recover; compare muscle and yeast fermenters; `space` to play / pause.
- **URL parameters**: `?pause=` `?o2=1` `?speed=` `?labels=0` `?spin=0`.

### Nephron — the U-shaped tube that concentrates urine

- **What you see**: a filtrate blob starts at the glomerulus; the descending limb leaks water (blue balls escape) and the ascending limb pumps salt (orange balls enter the medulla) — the medullary color band deepens from the cortex's 300 mOsm down to the tip, and **counter-current multiplication** lifts the tip gradient to 1200 mOsm. Press ADH and the collecting duct leaks water across its whole length, so urine osmolality approaches the medullary tip.
- **How to play**: toggle "ADH on / off" to compare dilute vs concentrated urine; watch the gradient band rise and fall; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Alveoli & the respiratory membrane — a 0.5 µm gas station

- **What you see**: a cluster of alveoli inflates and deflates with the breathing rhythm; red cells circle around the capillary ring outside. O₂ orange particles flow "downhill" into the blood and CO₂ green ones flow the other way; the partial pressure table shows 100→40 / 45→40 mmHg live. Switch to altitude and the slopes halve, loading slows.
- **How to play**: drag "breathing rate" to pant; "switch to altitude" to see the compensation limit; `space` to play / pause.
- **URL parameters**: `?pause=` `?rate=24` `?speed=` `?labels=0` `?spin=0`.

### Cardiac cycle — four valves driven by pressure

- **What you see**: the left atrium, left ventricle and aorta arch inflate and deflate in real time. The bottom-right Wiggers diagram plots LV / Ao / LA pressure curves plus the two valve open/close bands; the yellow cursor is the current phase. The instant the cursor crosses a pressure crossover, the valves flip and heart sounds land.
- **How to play**: drag "cycle progress" frame by frame through isovolumetric contraction; drag "heart rate" from 40 to 150; `space` to play / pause.
- **URL parameters**: `?pause=` `?hr=100` `?speed=` `?labels=0` `?spin=0`.

### Cochlea — a Fourier machine written in place

- **What you see**: inside the spiral cochlea the basilar membrane grades from narrow & stiff to wide & slack. Drag the frequency slider and the yellow peak of the traveling wave slides along the membrane — high frequency lights the base, low frequency reaches the apex; hair cells fire at the peak; "unroll the spiral" straightens the cochlea for a better view.
- **How to play**: drag "input frequency" from 20 Hz to 20 kHz; unroll / roll the spiral; `space` to play / pause.
- **URL parameters**: `?pause=` `?f=440` `?speed=` `?labels=0` `?spin=0`.

### Eye & vision — a camera that zooms by itself

- **What you see**: three special rays cross cornea and lens and converge to a red dot — the "look near" button lets the ciliary ring contract and the lens bulge, pulling the focus back onto the retina (sharp ✓); when accommodation can't keep up the focus lands behind the retina (presbyopia). The yellow ring is the fovea; the pink patch is the blind spot of the optic disc.
- **How to play**: near / far buttons compare lens shape; drag "object distance" to find the near point; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Kinesin — an 8-nanometer stepper

- **What you see**: a two-legged walker advances along a scale-marked microtubule: an ATP yellow ball flies in → the neck linker swings → the trailing leg arcs 16 nm over the leading leg and lands on the next site. The camera follows the truck along the road; "slow motion" breaks the gait into four beats; one step, one ATP.
- **How to play**: drag "ATP supply rate" for walking speed; "slow motion" for per-beat inspection; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Telomeres — every copy wears a little off the end

- **What you see**: the top strand is the pre-replication chromosome (blue genes + yellow telomeres); after the replication cone sweeps through, the right end of the daughter strand is missing one yellow bead — telomeres are the sacrificial buffer. Repeatedly click "replicate one generation" and watch the yellow beads disappear one by one; when they run out the Hayflick limit triggers. Turn on telomerase and a tiny robot flies to the end and paints the beads back — cancer's immortality trick.
- **How to play**: repeatedly click "replicate one generation" to watch the wear; toggle "telomerase on / off" to contrast cell fates; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Meiosis — crossovers are why siblings differ

- **What you see**: paternal (red) and maternal (blue) homologs pair precisely into a synaptonemal complex; at the crossover point the middle beads **physically swap color** — red takes a blue segment, blue takes a red segment, that is recombination. Two successive divisions pull the homologous pair apart then the sisters apart, producing four different haploid gametes.
- **How to play**: drag "division progress" through pairing → swap → two divisions; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### lac operon — express only what's needed

- **What you see**: the CAP site, promoter, operator and three genes line up on the DNA. By default the repressor sits on the operator and the polymerase hits a wall. Drop in lactose and the repressor pops off allosterically, the polymerase flows, mRNA beads fly off and β-galactosidase piles up; drop glucose and the purple CAP ball lands and floors the accelerator — full induction.
- **How to play**: toggle "drop in lactose"; toggle "glucose: present / absent"; `space` to play / pause.
- **URL parameters**: `?pause=` `?lac=1` `?speed=` `?labels=0` `?spin=0`.

### CRISPR-Cas9 — guides find the spot, paired scissors cut

- **What you see**: Cas9 (green) carrying a crRNA guide (yellow) slides along the genome; the red bead is PAM — only here does it stop, unwind the duplex and verify base by base. When all 20 letters match, the dual scissors cut and the strand breaks; the repair fork: NHEJ stitches it back with missing bases (knockout) or HDR rewrites faithfully against a purple template.
- **How to play**: "inject the Cas9-guide complex" runs the path; count scanning sites and hits; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Viral lifecycle — the factory becomes an assembly line

- **What you see**: a spike-coated virus binds the cell, is endocytosed, and uncoats in an acid vesicle; the RNA slips into the nucleus and **the ribosome production line flips** — blue dots (cellular proteins) stand down, purple dots (viral parts) ramp up, gathering at assembly points into new viruses; once 16 have accumulated, the cell lyses and they pour out.
- **How to play**: "release a virus" reruns the path; watch the production line label flip top-right; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Immune response — clonal selection and the second-strike

- **What you see**: pathogen invasion → APC presents → T cell licenses → matching B cells clone into an army within seconds → Y-shaped antibodies chase down and tag the pathogen → titer curve climbs; after the pathogen is cleared the antibodies slowly decay. "Re-infect" bypasses the long process and ramps production directly — the second peak is fast and high. That is how vaccines work.
- **How to play**: compare "first infection" vs "re-infection" titer curves; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Clotting cascade — a one-link-at-a-time amplification waterfall

- **What you see**: cut a vessel, factor beads light up (grey → gold) from XII onward, each step amplifying — overall gain 10⁶. Platelets form a loose plug, fibrin white threads net the breach, flow slows. Switch to "hemophilia" mode and the cascade stalls at VIII (red flash); thrombin refuses to rise.
- **How to play**: "cut the vessel" starts it; "hemophilia" reveals the stall; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Glucose duet — insulin lowers, glucagon raises

- **What you see**: eat a big meal — yellow balls flood the blood, glucose rises above the target band → β cells release blue insulin → cell sugar gates (green blocks) open wide, sugar pours in → the curve slides back into 70–110. Fasting / exercise is the reverse: red glucagon forces the liver to dump sugar. Pull "diabetes mode" up and insulin knocks but the gate doesn't open, so the curve stays high.
- **How to play**: meal / fast buttons contrast; drag "diabetes mode" to see the gate fail; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Plate tectonics — the mantle is a conveyor

- **What you see**: a mantle cross-section with two convection particle loops rotating slowly; mid-ocean ridges (central orange mouth) keep growing new crust and pushing the two plates apart; at the trenches the old crust bends down and subducts to melt; boundaries flash white at random = earthquakes. Plate drift and seafloor age are linked — farther from a ridge the rock is older, but the oldest seafloor is only ~200 Myr (older crust has long since been recycled).
- **How to play**: drag "convection speed" to accelerate the conveyor; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Greenhouse effect — shortwave in, longwave stuck

- **What you see**: yellow shortwave photons from the Sun reach the planet's surface; the red longwave emitted by the surface is repeatedly caught by the atmosphere and half is radiated back down. Compare Venus / Earth / Mars on one Sun: surface temperatures −63 / 15 / 464 °C — the difference is purely the thickness of the atmospheric blanket. Drag the "greenhouse gas multiplier" up and the escape rate falls, the equilibrium temperature rises.
- **How to play**: slider focuses on each planet; raise the multiplier to thicken the blanket; `space` to play / pause.
- **URL parameters**: `?pause=` `?p=0` `?speed=` `?labels=0` `?spin=0`.

### Atmospheric circulation — three bent loops

- **What you see**: six Hadley particle loops rotate along meridians — rise at the equator (orange), sink at 30° (blue); latitude bands mark the equatorial wet belt and the 30° desert belt; surface wind arrows bend from straight north–south toward trades and westerlies as "rotation speed" rises. Drag rotation to zero and a windless Earth with no trades.
- **How to play**: drag "rotation speed" to feel the Coriolis turning on; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Lightning — stepped leader and return stroke

- **What you see**: charge separates inside the cloud (red + / blue −); once the voltage hits 60 MV, the stepped leader gropes downward in zig-zag steps; as it nears the ground a streamer rises to meet it and the return stroke flashes white, the counter increments by one; turn on a lightning rod and the strike is invited to the purple tip.
- **How to play**: "charge the cloud" pressurizes the strike; "lightning rod" tames the bolt; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Aurora — solar wind as a particle rain

- **What you see**: a golden particle stream from the Sun hits the magnetosphere and most is deflected; some leaks down the field lines into the poles — a green curtain (oxygen 557.7 nm) and a red top (nitrogen) pulse over the polar regions. Crank up the solar wind and the aurora brightens, activity rises to "storm level".
- **How to play**: drag "solar-wind strength" and watch the particle rain and curtain brightness respond; `space` to play / pause.
- **URL parameters**: `?pause=` `?wind=100` `?speed=` `?labels=0` `?spin=0`.

### Earthquake waves — P first, S second, arcs locate the epicenter

- **What you see**: trigger a quake; a red ring (P) spreads fast, a blue ring (S) slower. Three seismograph stations shake as S arrives. Five seconds later each station draws its distance circle; the three circles meet at a red point — the epicenter is locked; the S–P time difference is converted to distance live.
- **How to play**: "trigger a quake" randomizes the epicenter; compare the time gap with the distance; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Volcanoes & viscosity — gentle shield vs explosive strato

- **What you see**: drag "SiO₂ content" and the cone reshapes in real time — low viscosity: a wide shield, lava flows quietly; high viscosity: steep strato with ash columns (Plinian-style) and gas locks until it bursts. Eruption style and gas release switch with the viscosity band.
- **How to play**: sweep from basalt to rhyolite; "start eruption" to see both extremes; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Thermohaline circulation — a thousand-year deep conveyor

- **What you see**: red and blue tubes circle the Earth — surface warm currents head north, give up heat, and the cold salty North Atlantic surface water sinks (the global drain). Deep cold water crawls around Antarctica for a millennium before rising. "Inject fresh water" stops the sinking and the conveyor slows to a halt; northern Europe loses its heat, ice sheets expand — the Younger Dryas hypothesis, live.
- **How to play**: "inject fresh water" sees it stall; press again to restore; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Clouds & rain — climb the slope, cool to the dew point, rain

- **What you see**: a blue parcel is pushed up the mountain, temperature drops at 10 °C/km; the moment it touches the yellow dew-point line the parcel turns white, clouds form on the slope, rain drops fall. On the lee side the air turns tan — rain-shadow desert. Drag "starting humidity" to change the cloud base height.
- **How to play**: drag "starting humidity" to move the cloud base; the parcel cycles uphill again; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Milankovitch cycles — three pens drawing the ice-age clock

- **What you see**: Earth runs along its orbit as the orbit breathes with eccentricity, the axis tilts and the tip precesses in a cone. The bottom-right has three colored thin curves (the three cycles) and a thick gold curve for the stacked high-latitude summer insolation — when the cursor sweeps a trough the polar ice cap expands (glacial), at a peak it retreats (interglacial).
- **How to play**: drag "time axis" a thousand years at a time; compare the three curves with the composite insolation; `space` to play / pause.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?spin=0`.

### Moon phases & eclipses — three bodies, one phase game

- **What you see**: Sun (left), Earth (center, orbiting the Sun) and Moon (around Earth) — three-body view. The Moon is tidally locked, always showing Earth the same face. Drag "moon-phase position" and the Moon cycles through new / first quarter / full / last quarter — the lit half keeps changing. The lunar orbit is 5° off the ecliptic; new moon + alignment = solar eclipse, full moon + alignment = lunar eclipse.
- **How to play**: drag the moon-phase slider; watch the bottom-left "solar / lunar eclipse" marker; `space` to play / pause.
- **URL parameters**: `?pause=` `?p=0.5` `?speed=` `?labels=0` `?spin=0`.

### Tides — the Moon pulls two bulges out of the sea

- **What you see**: ocean water deforms on Earth — the near-side bulge follows the Moon; the far-side bulge, "left in place", is also a bulge. Arrows mark the bulge direction, polar caps change with the lunar phase; alignment = spring, 90° = neap.
- **How to play**: drag the lunar phase to see the tide height; contrast spring / neap; `space` to play / pause.
- **URL parameters**: `?pause=` `?p=0` `?speed=` `?labels=0` `?spin=0`.

### Seasons & obliquity — how 23.5° chops a year into four

- **What you see**: the Sun sits in the center and Earth runs through 12 months of orbit — the tilt slides the sub-solar point between ±23.5°, so the Northern Hemisphere rolls through spring equinox → summer solstice → autumn equinox → winter solstice. Drag "axial tilt" to 0° and the seasons vanish; to 45° and they become extreme.
- **How to play**: drag "month" through a year; drag "axial tilt" to play with the experiment; `space` to play / pause.
- **URL parameters**: `?pause=` `?m=6` `?speed=` `?labels=0` `?spin=0`.

### Rockets & Tsiolkovsky — 90 % of a rocket is fuel

- **What you see**: Δv = ve·ln(m0/mf) with the fuel-ratio bar showing the exponential penalty: Δv = 12 km/s needs ~70 % fuel; Δv = 45 km/s needs ~96 %; Δv = 120 km/s needs 99.9 %. "Drop a stage" makes Δv addable; three stages are needed to reach that far.
- **How to play**: drag the slider to enlarge Δv and watch the fuel share explode; "drop a stage" to compare; `space` to play / pause.
- **URL parameters**: `?pause=` `?dv=45` `?speed=` `?labels=0` `?spin=0`.

### Light clocks & time dilation — light slows on a diagonal

- **What you see**: a stationary light clock's photon goes straight up and down; in a moving clock the photon goes diagonally — the diagonal is always longer than the vertical, so one second stretches. Drag the slider to 0.99c and γ = 7.09 (that is why muons reach the ground); GPS satellites gain 38 µs per day.
- **How to play**: drag "light clock speed" and watch γ track the diagonal length; `space` to play / pause.
- **URL parameters**: `?pause=` `?v=0.99` `?speed=` `?labels=0` `?spin=0`.

### Spacetime curvature — the mesh sags, planets follow geodesics

- **What you see**: the dynamic mesh sinks into a bowl around the Sun's mass; planets glide along the straightest "geodesics" and orbit naturally, very close to the Newtonian result. "Send a starlight beam" sends light on a slanted path through the Sun's neighborhood — the beam bends into a parabola inside curved spacetime (gravitational lensing). Drag "solar mass" to deepen the well.
- **How to play**: drag the mass slider to deepen the well; "send a starlight beam" to see the lens effect; `space` to play / pause.
- **URL parameters**: `?pause=` `?mass=200` `?speed=` `?labels=0` `?spin=0`.

### Navigation & shortest paths — Dijkstra ripple vs A* heuristic

- **What you see**: a 12×9 city street grid, intersections are nodes, segments are weighted edges (minutes, the redder the slower); Dijkstra sends isochrone ripples from the start, settling the smallest-d intersection each step and relaxing — each settled node lights up, and once the goal is settled the route is back-traced through the predecessor pointers. One click adds the A* heuristic (f = g + h, admissible ⇒ still optimal): the wavefront heads straight for the goal, with the explored-node count compared top-right and usually 30–60 % fewer. "Live traffic" raises the cost of random segments 3–4×; the shortest path reroutes on the spot while the old route fades to a dashed dim red.
- **How to play**: click any intersection to swap start / goal; `space` to play / pause; drag the "progress" slider to replay step by step; tap "live traffic" a few times to see detours under different congestion patterns.
- **URL parameters**: `?astar=1` `traffic=20` `src=` `dst=` `seed=42` `t=` `pause=` `speed=` `labels=` `spin=`.

### PageRank — random clicks reveal importance

- **What you see**: hundreds of particles act as random surfers: 85 % of the time they follow a link, 15 % they jump randomly; each node's dwell share (blue bars) settles onto the theoretical iterative value (orange line) — Monte Carlo and the closed-form rank meet. Click "add a dead-end page" and the dangling node swallows every particle — Σ drops from 1 to ~0.55 and the ranking collapses; tick "fix" to revive the rank the Google way.
- **How to play**: space to play / pause; drag "damping factor d" to see the ranking reshuffle; "progress" slider to fast-forward; "add a dead-end page" → "fix dead-end" to see the leak and the remedy.
- **URL parameters**: `?pause=` `?speed=` `?labels=0` `?t=pre-clicks` `?d=0.50~0.99` `?n=120~700` `?dead=1` `?fix=1` `?spin=1`.

### How the internet ships messages — packet switching

- **What you see**: a message is split into 5 numbered colored packets; each picks its own route and is store-and-forwarded hop by hop — out-of-order arrival is normal, the reassembly buffer lights up slot by slot, and once all are in the message returns. Click "drop a packet" to see a flash-red vanish → timeout → ↻ retransmit. Switch to "circuit switching": the dedicated line lights up, it stays reserved even when silent, third-party packets pile up at host A; utilization ~50 % vs ~19 %, queue 0 vs 20+.
- **How to play**: `space` to play / pause; click "drop a packet" to experience the timeout and retransmit; switch to "circuit switching" to compare utilization and queue; drag the progress slider to fast-forward; click steps to jump phase.
- **URL parameters**: `?mode=packet|circuit` `?loss=1` `?t=` `?pause=` `?speed=` `?labels=0` `?gray=0` `?spin=0`.

### Reed-Solomon error correction — why damaged QR codes still scan

- **What you see**: a real RS(26, k) encode/decode — k data codewords plus a generator-polynomial-divided n−k check codewords, laid out in a true 21×21 QR v1 matrix. Stains grow from 0 to 35 %, the decoder computes every frame, damage ≤ t is corrected and the message is read out; the instant you cross t = (n−k)/2 it flips red and says "decode failed". Switch to "noise" mode to see scattered damage hit harder than block stains; the side column demonstrates Hamming (7,4) parity-check pinpointing a single-bit error as a precursor.
- **How to play**: `space` to play / pause; drag "stain ratio" to see the limit flip; switch L / M / Q / H error-correction levels and compare stain / noise modes; "🎲 redeal" shuffles stain positions; click Hamming cells to flip bits manually.
- **URL parameters**: `?ec=H` `?f=0.2` `?dmg=noise` `?seed=42` `?t=0.6` `?pause=1` `?speed=2` `?labels=0`.

### Huffman coding — high frequency, short code

- **What you see**: a sample sentence counts each letter's frequency; every beat picks the two smallest frequency nodes from the forest and merges them into a new one, gradually building a tree. Read the codes left 0 right 1 along the tree: high-frequency letters are shallow with short codes, low-frequency letters deep with long codes. The bit stream and an 8-bit ASCII baseline sit side by side: 29 characters 232 → 109 bits (53 % saved) — and the entropy floor 108 bits and fixed-length floor 116 bits are marked. Huffman beats even the fixed-length floor.
- **How to play**: `space` to play / pause; ← → step through the tree-building one merge at a time; click a step on the left to jump phase; drag the progress bar to scrub; `?text=` swaps your own sentence.
- **URL parameters**: `?t=seconds|end` `pause=1` `speed=0.2~4` `labels=0` `freq=0` `text=English sentence`.

### Bayes screening paradox — positive ≠ sick

- **What you see**: 1000 cells = 1000 people — at 0.1 % prevalence one cell turns red (a real patient); a 99 % sensitivity test catches them, but a 5 % false-positive rate also tints ~50 of the 999 healthy people. Out of 51 positives only one cell is green, P(sick|+) ≈ 1.94 %. Raise the prevalence and the green share visibly recovers: positive = prevalence × sensitivity + population × FPR — the base rate decides.
- **How to play**: `space` to play / pause and ←→ to jump phase; click the left five steps for direct navigation; drag the three sliders (prevalence / sensitivity / FPR) — cells, readout and formula update live.
- **URL parameters**: `?t=` `pause=` `speed=` `labels=` `formula=`, plus `prev=` `sens=` `fpr=` to preset the three sliders (percent).

### Fractals & recursion — simple rules, infinite complexity

- **What you see**: the Koch snowflake replaces every edge with 4 edges at each level, perimeter ×4/3 — after 6 levels the perimeter is 5.62× the initial and heading to infinity, while the area plateaus at 8/5× the initial triangle; Sierpinski removes the middle quarter at each level, remaining area decays (3/4)ⁿ → 0, dimension ln3/ln2 ≈ 1.585 — between a line and a plane; the Mandelbrot set z → z² + c has a boundary that is infinitely wrinkled, zoom and the detail never repeats.
- **How to play**: `space` to play / pause; drag "recursion depth" 0 → 6 and watch the readings split — perimeter diverges, area converges; switch to "Mandelbrot" and click the boundary to zoom level by level, Shift+click to zoom out.
- **URL parameters**: `?mode=koch|sierp|mandel` `t=0..6` `pause=1` `speed=2` `labels=0` `iter=224` `re=-0.7436` `im=0.1319`.

### Taylor series — tangent at a point, segment-by-segment match

- **What you see**: pull N from 0 to 12 and the polynomial grows from a flat line into the tangent, then picks up curvature step by step — from "tangent at one point" to matching the whole function. The red-green error band |f − Pₙ| tightens with N. Switch to ln(1+x): inside the convergence disk |x − x₀| < R the blue and orange overlap perfectly, outside it the polynomial flies off and diverges — the singularity at x = −1 is the root cause. The small top-right table lists f⁽ᵏ⁾(x₀) for k = 0..N — matching all derivatives is the soul of Taylor.
- **How to play**: `space` to play / pause (auto-advances N from 0 to 12); drag the yellow point to move the expansion center x₀; ← → fine-tunes x₀, ↑ ↓ changes N; the four function keys switch the comparison.
- **URL parameters**: `?f=sin|cos|exp|ln` `?x0=` `?n=`/`?t=` `?pause=1` `?speed=` `?labels=0` `?band=0`.

## License

[MIT](./LICENSE)
