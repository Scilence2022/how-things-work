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
| Mechanisms | Lockstitch sewing, four-stroke valve timing, planetary gears, worm self-locking, universal joints, escapements, Watt's governor, ball screw, derailleur, flywheel KERS, the CVT, the diesel engine, Ackermann steering, harmonic drive, chain drive & chordal action, differential chain hoist, reaction wheels |
| Chemistry | SN1/SN2/E1/E2 quartet, galvanic ⇄ electrolytic cells, electrophilic addition & Markovnikov's rule, radical chain reactions, benzene aromaticity, conjugation & color, enzyme kinetics, ozone depletion, the catalytic converter, the nitrogen cycle, supercooling & nucleation, radiocarbon dating, flame colors & atomic spectra, crystal-field colors, the mass spectrometer |
| Biology | DNA replication & telomere wear, ATP synthase, glycolysis → TCA → fermentation, cardiac cycle, the ECG, alveolar gas exchange, nephron counter-current, cochlea & eye, kinesin, antibiotic resistance, the reflex arc, phototropism, transpiration, root-nodule nitrogen fixation, bone remodeling, antibody diversity (V(D)J), allergic reactions |
| Physics & space | Motor ⇄ generator, double-slit, laser, EM waves, lens imaging, kinetic theory, entropy & phase change, liquid crystals & LCD, the tropical cyclone, exoplanet transits, the harmonic oscillator, Foucault's pendulum, the inverter, thermoelectrics, piezoelectricity, Rayleigh scattering, thin films, glaciers, tidal locking, quantum tunneling, superfluidity, the skin effect, gravitational lensing, the Hohmann transfer, eclipses & the Saros cycle, blackbody radiation & thermal imaging, the photoelectric effect, geysers, the gravity assist |
| Math & CS | Galton board & CLT, Fourier series, Monty Hall & Bayes, gradient descent, sorting race, RSA, information entropy, the Game of Life, Monte Carlo, photolithography, the Kalman filter, simulated annealing, blockchain & proof of work |
| Cross-discipline & engineering | Activation energy & catalysts, titration curve, osmosis & dialysis, heat pump ⇄ fridge, induction cooktop, wireless charging, corrosion ⇄ electroplating |
| Everyday technology | Microwave oven, capacitive touch, GPS, transistors to adders, fiber optics, camera sensor, ABS, wind turbine, nuclear reactor, MRI, thermostat, hard drive & flash, elevators & counterweights, the quartz watch, hydro & pumped storage, LiDAR, the buck converter, e-ink, xerography, tire hydroplaning, the pressure cooker, maglev, the PET scan |
| Fluids & flight | Wing lift & stall, turbofan engines, buoyancy & ship stability, terminal velocity, propeller pitch, submarine ballast, hot-air balloons, Reynolds number, helicopter anti-torque, Venturi tube & flow, Pascal's press, sailing upwind, water hammer, the siphon, the Magnus effect, cavitation & supercavitation, tsunami & shallow-water waves, sonic boom & the Mach cone, the Kármán vortex street, Stokes settling & the centrifuge, capillarity & surface tension, Kelvin–Helmholtz billows, Poiseuille flow, the hydrofoil, swell & deep-water waves, the centrifugal pump & cavitation, non-Newtonian fluids, the boundary layer & separation, the de Laval nozzle, Rayleigh–Bénard convection, river meanders, flapping flight, atmospheric reentry, the ramjet, decompression sickness, the cyclone separator |

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

- [x] Moon phases & eclipses (dual view: phase = Sun-Earth-Moon angle, inset renders the lunar face from that same geometry; the 5° orbital tilt gates eclipse seasons, with shadow-cone landing and arc bite) ✅ **moon-phases/**
- [x] Tides (tidal-force vector field dissects the gravity difference into two equal bulges over a mean-sea reference; spring at syzygy, neap at the quarters, tidal friction carries the Moon 3.8 cm/year away) ✅ **tides/**
- [x] Seasons & obliquity (true Kepler orbit + parallel-sunlight terminator; 0°/23.5°/45° tilt slider, annual noon-altitude & day-length curves — Earth is nearest the Sun in January, deep in winter) ✅ **seasons/**
- [x] Rockets & Tsiolkovsky (the Δv=ve·ln(m0/mf) log wall; same propellant across 1/2/3 stages; LEO/Moon/Mars target lines; ignite, drain, drop shells) ✅ **rocket-equation/**
- [x] Time dilation & light clocks (dual clocks + a frozen golden γ right triangle; 0.995c → γ≈10, muons reach ground, GPS ledger +38 µs/day) ✅ **time-dilation/**
- [x] Spacetime curvature (Flamm-dented mesh, geodesic ellipses with perihelion precession, grazing starlight bent 1.75″ — Eddington 1919) ✅ **spacetime-curvature/**

### Phase 13 · Compute & information (8/8)

- [x] Navigation & shortest paths (Dijkstra ripple vs A* heuristic, live traffic reroutes) ✅ **shortest-path/**
- [x] PageRank & Markov chains (surfer particles converge to the iterative ranking) ✅ **pagerank/**
- [x] QR codes & Reed-Solomon error correction (≤(n−k)/2 damage repaired live) ✅ **error-correction/**
- [x] Huffman coding (frequency sets merge order, 232 bits → 109 bits) ✅ **huffman-coding/**
- [x] Bayes screening paradox (1.94% P(disease|+) at 0.1% prevalence — 1000-cell demo) ✅ **bayes-screening/**
- [x] Fractals & recursion (Koch perimeter diverges, Mandelbrot zooms forever) ✅ **fractals/**
- [x] Internet packet switching (numbered packets, out-of-order reassembly, retransmit on timeout) ✅ **packet-switching/**
- [x] Taylor series (tangents grow into the curve; ln(1+x) flies off past its radius) ✅ **taylor-series/**

### Phase 21 · Candidate-pool batch two (6/6)

- [x] Ball screw (recirculating balls, efficiency-vs-lead-angle curves, back-driving and the sliding self-lock contrast, brake) ✅ **ball-screw/**
- [x] Bike derailleur (cable → parallelogram → chain hop, gear ratios, tension pulley + freehub ratchet) ✅ **bike-derailleur/**
- [x] Flywheel & KERS (brake energy banked into a 50k-rpm wheel, E=½Iω², the σ=ρv² material red line and burst) ✅ **flywheel/**
- [x] Defibrillator (VF = crashing waves, the shock = a global reset, sinus node takes over, dosing and movie myths) ✅ **defibrillator/**
- [x] Blood pressure monitor (occlude, bleed, Korotkoff, oscillation envelope computing SYS/MAP/DIA live) ✅ **blood-pressure/**
- [x] 3D printing (slice, extrude, stack; the 45° overhang rule and supports; layer-height trade-off) ✅ **3d-printing/**

### Phase 21 deep dives

#### Ball screw: grinding rotation into translation

- **What you see**: a motor spins the threaded shaft while 40 steel balls recirculate through the nut and loop back through the return tube; the efficiency-vs-lead-angle chart shows rolling (ρ≈0.2°) against sliding (ρ≈11.3°); drag the table backwards and the ball screw back-drives instantly — vertical axes need a brake; swap to the sliding screw and, at the same lead, λ<ρ locks solid until you stretch the lead past the friction angle.
- **How to play**: drag speed/lead, switch drive/push/brake/sliding modes, follow the dot on the chart; space to play / pause.
- **URL parameters**: `?rpm=` `?pitch=` `?drive=` `?push=` `?brake=` `?slide=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Bike derailleur: ten gears from a fingertip

- **What you see**: cadence drives the 48T ring and the golden chain runs its S-path ring → cog → jockey → tension pulley → back; shifting slides the parallelogram and the chain hops onto the neighboring cog; a bigger cog needs more chain, so the cage swings open; coasting, the freehub ratchet clicks while the wheel keeps spinning.
- **How to play**: shift up/down (↑/↓), drag cadence, toggle coast and slow-mo shift, compare the five cogs in the chart; space to play / pause.
- **URL parameters**: `?gear=` `?cad=` `?coast=` `?slow=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Flywheel & KERS: banking your brakes

- **What you see**: a 24-second scripted loop — cruise, brake, idle, boost; the motor-turned-generator pours 313 kJ of KE into an 8 kg flywheel (steel caps at 48k rpm, overflow goes to heat); the boost hands it back; "brakes only" comparison piles up 910 kJ of heat vs ~60 kJ; overrev pushes the rim past σ=ρv² and it bursts in slow motion; the material slider moves the ceiling between steel/aluminum/carbon fiber.
- **How to play**: scrub the timeline, switch KERS/brakes and materials, press overrev; space to play / pause.
- **URL parameters**: `?t=` `?mode=` `?mat=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Defibrillator: not a restart, a global reset

- **What you see**: the myocardium is an excitable 1,700-vertex mesh — in sinus rhythm one wave sweeps the heart every 0.8 s; induce VF and six rogue foci shatter the waves, pump output collapsing to ~10%; charging banks E=½CV² (150 J ≈ 1732 V) and the shock depolarizes everything at once — after the flat window the sinus node leads again; under 70 J re-fibrillates, over 300 J leaves burn marks; shocking a healthy heart triggers R-on-T.
- **How to play**: induce VF → charge → shock; drag the energy slider across the three dose zones; watch the scrolling ECG; space to play / pause.
- **URL parameters**: `?en=` `?mode=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Blood pressure monitor: two numbers from a squeezed artery

- **What you see**: the cuff inflates past systolic and flattens the brachial artery; bleeding 3 mmHg/s, each pulse peak cracks it open — turbulence knocks Korotkoff sounds and ripples the cuff; the amber envelope peaks at MAP (93) and its shoulders read ~117/79; drag the preset to 150/95 and the whole envelope shifts right.
- **How to play**: press start for the automatic ~30-second cycle, drag systolic/diastolic, watch the gauge and the chart; space to play / pause.
- **URL parameters**: `?sys=` `?dia=` `?auto=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### 3D printing: slicing a model into sheets, stacking them back

- **What you see**: a chess pawn sliced into 60 layers, the gantry laying perimeter + zigzag infill while the slicer window draws the current section; the ball's underside widens faster than 45° — supports OFF and the strands sag red, supports ON and a yellow scaffold carries them; snap the supports off when done; layer height 0.1/0.2/0.3 mm means 90/60/40 layers.
- **How to play**: drag layer height/infill/speed, toggle supports, reprint; space to play / pause.
- **URL parameters**: `?lh=` `?infill=` `?pspd=` `?support=` `?pause=` `?speed=` `?labels=` `?spin=`.

### Phase 22 · Candidate-pool batch three (4/4, pool cleared)

- [x] Tornado (shear builds the mesocyclone, stretching spin-ups via Iω, debris curtain, EF rating, roof off) ✅ **tornado/**
- [x] Rain shadow (dry/moist adiabatic climb, windward rain, foehn wind, desert swaps sides with the wind) ✅ **rain-shadow/**
- [x] Benford's law (log cylinder + digit arcs, ×3.7 scale invariance, fake books rejected by χ²) ✅ **benford/**
- [x] Turing machine (tape + head + rule table, unary add / binary carry / copier, space-time diagram) ✅ **turing-machine/**

### Phase 22 deep dives

#### Tornado: stretching spin out of control

- **What you see**: drag shear past 30% and the whole supercell starts turning, lowering a wall cloud; the updraft stretches the vortex vertically and angular momentum does the rest — 520 debris particles wind into a funnel; past 85% it touches down and grinds up a dust curtain; the v·r≈const hyperbola shows the dot climbing as you stretch; readouts give wind speed, rpm, ΔP≈0.75v² and the EF rating, and at EF3+ the barn roof tears off until you press "fix the barn". "Auto evolve" plays the whole fair → shear → stretch → touchdown life cycle.
- **How to play**: drag shear/stretch, run auto-evolve, fix the barn; space to play / pause.
- **URL parameters**: `?shear=` `?stretch=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Rain shadow: one mountain, two fates

- **What you see**: a blue parcel climbs from the sea — dry-adiabatic cooling at 9.8 °C/km until the LCL, then condensation and latent heat slow the cooling; the rain all falls windward, dyeing that slope green; past the summit the bone-dry air warms by compression into a foehn, landing +3.7 °C hotter, and the lee slope fades to desert; the T-altitude chart draws both adiabats and the parcel's current state. Raise the mountain past the LCL and rainforest and desert appear together; flip the wind and the shadow swaps sides instantly.
- **How to play**: drag height/dew point, flip the wind, try the Himalaya preset; space to play / pause.
- **URL parameters**: `?hmt=` `?td=` `?flip=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Benford's law: leading digits live on a log circle

- **What you see**: 171 country populations scattered on a logarithmic cylinder — the angle is set by the mantissa, so everything starting with 1 crowds into one arc; the nine base arcs are the theory log10(1+1/d) and nine colored bars grow out of them; switching datasets (rivers, Fibonacci, powers of 2) keeps the bars on the white line; "×3.7" spins every dot around the cylinder yet the bars land unchanged; "fabricate a book" flattens the digits and χ² blows past 15.5 — rejected.
- **How to play**: six dataset buttons, ×3.7 for scale invariance, fake books for fraud detection; space to play / pause.
- **URL parameters**: `?ds=` `?pause=` `?labels=` `?spin=`.

#### Turing machine: one tape computes everything computable

- **What you see**: a tape receding into the fog, a read-write head, and a highlighted rule table — each step only reads, writes, moves and changes state; three built-in programs give the same machine three identities: unary addition 111+11→11111, binary increment 1011→1100 (a carry wave moving left), and a copier 11#→11#11 (x/y marks track progress); the space-time diagram draws every tape as growth rings; HALT turns the sign green.
- **How to play**: switch the three programs, step once at a time, drag the speed 0.5–20 steps/s, reset anytime; space to play / pause.
- **URL parameters**: `?p=` `?speed=` `?pause=` `?labels=` `?spin=`.

### Phase 23 · New domain: Fluids & Flight (4/4)

- [x] Wing lift (Bernoulli + Newton, C_L-vs-alpha curve, stall separation and recovery, flaps) ✅ **wing-lift/**
- [x] Jet engine (station thermodynamics, turbojet ⇄ turbofan, afterburner, start sequence) ✅ **jet-engine/**
- [x] Buoyancy & stability (Archimedes draft, the GM·sinθ righting arm, capsize, ballast) ✅ **ship-buoyancy/**
- [x] Terminal velocity (drag catching gravity, the canopy lever, the opening shock) ✅ **terminal-velocity/**

### Phase 23 deep dives

#### Wing lift: angle of attack is everything

- **What you see**: streamline particles sweep past a NACA airfoil — upper tubes squeeze, speed up and warm; drag the angle slider and the green lift vector stretches with C_L; pull past ~15° and the upper flow separates into chaos, the nose buffets and C_L dives; flaps shift the whole curve up and lower the minimum speed. One-click stall and one-click recovery.
- **How to play**: drag angle/speed, toggle flaps, follow the dot on the C_L-α chart; space to play / pause.
- **URL parameters**: `?aoa=` `?spd=` `?flap=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Jet engine: making air push you forward

- **What you see**: particles turn blue → white → orange → red as they pass fan, compressor, burner, turbine and nozzle; the twin spools spin at N1/N2; the chart shows pressure and temperature rising through the compressor, peaking in the burner and bleeding through the turbine; switch to a turbofan for the blue bypass stream and a thrust jump; afterburner re-lights the exhaust; the start sequence replays starter → ignition → idle.
- **How to play**: drag throttle/airspeed, toggle turbofan and afterburner, run the start; space to play / pause.
- **URL parameters**: `?thr=` `?v0=` `?fan=` `?ab=` `?run=` `?start=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Buoyancy & stability: why steel floats and why it capsizes

- **What you see**: a hull cross-section in a tank whose draft follows the cargo (Archimedes solved by bisection); stack containers five high, switch the ballast off, add a storm — GM goes negative, the roll passes the flood angle and she slowly heels to 90°; open the ballast and G drops, GM recovers, and the same storm only rocks her; the GZ=GM·sinθ curve tracks your working point.
- **How to play**: drag cargo/stack, hit a swell or a storm, toggle ballast, reset; space to play / pause.
- **URL parameters**: `?cargo=` `?stack=` `?ballast=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Terminal velocity: gravity is constant, drag calls the shots

- **What you see**: a skydiver exits at 3,000 m and the speed curve settles onto 55 m/s in about 12 s; at the auto altitude the canopy scales CdA from 0.47 to 50, speed snaps to 5 m/s and a ≈3 g red spike marks the opening shock; the altitude ruler and ground slide up as she descends, ending in a soft touchdown.
- **How to play**: jump, open manually or automatically, replay on the timeline; space to play / pause.
- **URL parameters**: `?alt=` `?aop=` `?pause=` `?speed=` `?labels=` `?spin=`.

### Phase 24 · Fluids & flight, continued (5/5)

- [x] Propeller & pitch (blade-element model, why blades twist, fixed pitch ⇄ constant-speed governor, windmill & feather, the η-J curve) ✅ **propeller/**
- [x] Submarine ballast (fixed volume, variable weight: flood & blow, hover trim, dive planes, crush depth) ✅ **submarine-ballast/**
- [x] Hot-air balloon (open mouth equalizes pressure, ρ∝1/T, the ceiling, parachute valve, payload vs temperature) ✅ **hot-air-balloon/**
- [x] Wind tunnel & Reynolds number (four flow regimes, the Kármán street, the drag crisis, fluid/size/speed similarity) ✅ **reynolds-number/**
- [x] Helicopter anti-torque (τ=P/ω and the tail rotor, pedal trim, failure whirl, coaxial/tandem/NOTAR, autorotation) ✅ **helicopter-tail-rotor/**

### Phase 24 deep dives

#### Propeller & pitch: a wing that rotates

- **What you see**: three spanwise-twisted blades orbit the hub while a floating angle triangle hovers at the 75% span — blue axial speed, orange tangential ωr, gold chord line; drag pitch/rpm/airspeed and the green thrust vector stretches while the dot slides along the η-J curve; "feather" snaps the pitch to 90°, rpm falls away and thrust vanishes; push speed with the pitch fixed and the prop windmills (a red negative-thrust warning).
- **How to play**: drag rpm/airspeed/pitch, switch climb prop / cruise prop / constant-speed governor, press "feather" to rehearse an engine-out; space to play / pause.
- **URL parameters**: `?rpm=` `?v=` `?b=` `?mode=` `?feather=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Submarine ballast: fixed volume, variable weight

- **What you see**: water rises and falls in the twin saddle tanks as you flood or blow, bubbles venting at the tops; fully flooded, weight crosses buoyancy and she sinks at ~1 m/s; emergency blow rockets her back to the surface; on the depth-time plot a red dashed line marks crush depth at 350 m; the surface, ruler and crush line slide with depth while the water darkens.
- **How to play**: hold "flood" or "blow", hit "emergency blow!", try depth steering with speed + planes, and see how tight the 78% hover really is; space to play / pause.
- **URL parameters**: `?fill=` `?spd=` `?rud=` `?depth=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Hot-air balloon: lifted by a temperature gap

- **What you see**: 240 particles inside the translucent envelope shift color with temperature — hotter is brighter and rises faster; hold "burn" and flame licks into the mouth, the fabric glows, the altimeter climbs and the sky deepens; pull the parachute valve and the crown disc sinks to vent; the chart tracks altitude against the ceiling for the current temperature and load.
- **How to play**: hold "burn" to climb, toggle the valve to sink, try the autopilot's pulse-burning, drag the payload and watch the ceiling drop; space to play / pause, `B` toggles the burner.
- **URL parameters**: `?h=` `?t=` `?load=` `?vent=` `?auto=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Wind tunnel & Reynolds number: inertia vs viscosity

- **What you see**: 430 tracer particles negotiate a cylinder inside a glass tunnel — fore-aft symmetric at Re≪1, a pair of standing eddies near Re 30, the alternating Kármán street past Re 60 (with the St·v/L shedding frequency labeled), then the turbulent BL, narrow wake and the C_d cliff near Re 5×10⁵; the log-log C_d-Re chart follows live with the crisis zone highlighted; four media (air/water/oil/honey) plus size and speed all funnel into one Re.
- **How to play**: sweep the "Re dial" across seven decades, hit the four presets (microbe swim / singing wire / drag crisis / 1:10 model), then swap media and watch Re recompute; space to play / pause.
- **URL parameters**: `?re=` `?len=` `?vel=` `?med=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Helicopter anti-torque: who holds the fuselage still

- **What you see**: a red arc at the mast = the reaction torque (P/ω), a green arc at the boom tip = tail thrust × arm; zero the pedals and the cabin spins up within seconds; pedal to ~40% and the net torque vanishes; one click of "tail rotor failure" whips her into a whirl, "engine-off" settles into a gentle autorotation; switch to coaxial/tandem to watch counter-rotating pairs cancel, or NOTAR's tail-boom jet.
- **How to play**: drag collective and pedals, press tail failure / engine-off / reset, flip through the four configurations; space to play / pause.
- **URL parameters**: `?cfg=tail|coax|tandem|notar` `?col=` `?ped=` `?fail=` `?eng=` `?pause=` `?speed=` `?labels=` `?spin=`.

### Phase 25 · Fluids & flight, third batch (4/4)

- [x] Venturi tube & flow (continuity Q=Av, the Bernoulli dive, piezometers, atomizer suction, Δp→Q, diffuser recovery) ✅ **venturi-flow/**
- [x] Pascal's hydraulic press (pressure for everyone, F₂=F₁·A₂/A₁, stroke repays force, air-bubble failure, release valve) ✅ **pascal-press/**
- [x] Sailing upwind (sail = vertical wing, apparent wind, lift decomposition, keel side force, the no-go zone, polar) ✅ **sailing-upwind/**
- [x] Water hammer (Δp=ρcΔv, the wave rattling at 4L/c, slow-close relief, air-chamber cushion) ✅ **water-hammer/**

### Phase 25 deep dives

#### Venturi tube: where it narrows, pressure pays for speed

- **What you see**: 380 droplets ride a glass Venturi, colored by local speed — slow blue at the inlet, fast gold at the throat; three piezometer columns read the local static pressure, the two inlet tubes level while the throat column dives, and the diffuser buys ~80% back; open the dye line and push the flow — throat suction lifts orange dye up the side tube and shears it into a spray; the right plot shows speed and pressure along the pipe with a flowing probe dot.
- **How to play**: drag flow Q and throat ratio d₂/d₁, press "open the dye line" + "open the pump: max Q" to run the atomizer live; space to play / pause.
- **URL parameters**: `?q=` `?ratio=` `?dye=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Pascal's hydraulic press: one hand lifts a car

- **What you see**: a small cylinder (10 cm²) and a large one joined by a pipe — the hand force F₁ makes pressure p=F₁/A₁, delivered intact to the big piston where area multiplies it back into F₂=p·A₂; steady pumping lifts a 1.4 t car millimeter by millimeter while the per-stroke readout s₂=s₁·A₁/A₂ shrinks; switch "air in the line" to watch the bubble get squeezed while the force never arrives; "release valve" lets the car settle at your pace.
- **How to play**: drag the area ratio (×1–×100) and hand force, press the one-click lift preset, run the bubble failure, then the release valve; space to play / pause.
- **URL parameters**: `?r=` `?f=` `?bubble=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Sailing upwind: the sail is a vertical wing

- **What you see**: five vector arrows — true wind, apparent wind, lift, drag, drive — moving live; speed the boat up and the apparent wind swings forward; a badly trimmed sail luffs visibly (fill → 0, lift gone); the keel pins the side force while the hull heels; the polar plot of boat speed marks the red no-go zone, and a dot below the curve means your trim is off.
- **How to play**: drag true-wind angle β / sail angle δ / wind speed, press "auto best trim", dive into the no-go zone at β=25°, compare beam reach (fastest) with dead run (slowest); space to play / pause.
- **URL parameters**: `?beta=` `?trim=` `?wind=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Water hammer: slam the valve, the water strikes back

- **What you see**: a 1-D water-hammer solver running live (time slowed ×1/60) — slam the valve and the pressure at the face spikes to ρcΔv (2 m/s is 24 bar), the water turns blue-to-red and the pipe bulges as the wave races to the reservoir, flips sign there, returns and re-reflects off the shut valve, one round per 4L/c; "close slowly" lets the reflected relief wave hold the rise down; hook up the air chamber and the surge squeezes into the tank, flattening the spike.
- **How to play**: drag initial speed and closure time (2L/c = 23 ms is the fast/slow divide), press slam / slow / chamber / reset, and watch the valve-pressure trace against the ρcΔv dashed line; space to play / pause.
- **URL parameters**: `?v=` `?tc=` `?ch=` `?pause=` `?speed=` `?labels=` `?spin=`.

### Phase 26 · Fluids & flight, fourth batch (4/4)

- [x] The siphon (the atmosphere pushes water over the hill, crest absolute-pressure gauge, the 10.07 m snap, level pools stop the flow) ✅ **siphon/**
- [x] The Magnus effect (three arenas: pressure-tinted wind-tunnel rotor, banana kick with no-spin ghost, Flettner rotor ship) ✅ **magnus-effect/**
- [x] Cavitation & supercavitation (the σ criterion, collapse micro-jet pitting, diving to suppress, a gas-fed shroud at 85 m/s) ✅ **cavitation/**
- [x] Tsunami & shallow-water waves (second-order solver, c = √(gh), Green's-law shoaling, drawback then run-up) ✅ **tsunami/**

### Phase 26 deep dives

#### The siphon: air pressure pushes water over the hill

- **What you see**: two pools, one tube over a dam — the atmosphere (101 kPa) pressing on the upper surface pushes water up and over; past the crest gravity takes over and the drop Δh is the only engine, v = C·√(2gΔh); the crest vacuum gauge reads absolute p = p₀ − ρg·h_c − ½ρv²(1+ζ), with the 10.07 m vapor line ruled on the ruler — hoist the crest past it and the column boils apart at the top, air rushes in, flow dies; pool levels drift (time-lapse) until the drop is spent and the flow stops by itself: no perpetual motion.
- **How to play**: drag crest height and pool drop; press prime, "hoist crest to 11.5 m" (watch the gauge snap), and "level the pools" for the self-stop; space to play / pause.
- **URL parameters**: `?hc=` `?dh=` `?prime=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### The Magnus effect: a spinning ball bends the wind

- **What you see**: one force, three arenas — ① a spinning cylinder in a wind tunnel: 420 streamline particles tinted by Bernoulli, the side running with the flow turns red (low pressure), the side against it blue (high), the whole wake shoved aside, the red arrow is F = ρUΓ (Kutta–Joukowski); ② the banana kick: sidespin pushes sideways via F ∝ ω×v — the ball is aimed wide of the wall, lateral speed builds, and the arc bends hard back inside the post while the grey ghost, launched identically without spin, sails straight out; ③ the 1925 Buckau rotor ship: Magnus ⟂ apparent wind, decomposed into forward thrust — best on a beam wind, dead downwind it stalls (exactly like a sail).
- **How to play**: switch wind tunnel / banana kick / rotor ship; drag surface speed, sidespin, wind angle; try "perfect curl" and "spin it backwards"; space to play / pause.
- **URL parameters**: `?mode=wind|kick|ship` `?us=` `?u=` `?spin=` `?v0=` `?beta=` `?wind=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Cavitation & supercavitation: low pressure tears water open

- **What you see**: ① a propeller in a test tank: raise the rpm and suction-side pressure falls below vapor (2.3 kPa) — bubbles are born at the tips, drift downstream, and collapse in flashes, their micro-jets hammering pits into the blades (a running counter); "dive to 40 m" squeezes the bubbles out of existence; ② the supercavitating torpedo: feed gas and the cavity grows aft from the cavitator into a full shroud — wetted area ≈ 4%, the drag curve switches from red to green, and the same thrust now balances at 85 m/s instead of 37 (the Shkval trick).
- **How to play**: drag rpm & depth (propeller) or thrust (torpedo); press max rpm, dive to 40 m, gas feed, full sprint; read the σ-vs-rpm and drag-vs-speed charts; space to play / pause.
- **URL parameters**: `?mode=prop|torp` `?rpm=` `?depth=` `?f=` `?v=` `?gas=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Tsunami & shallow-water waves: a jump in the deep, a wall at the beach

- **What you see**: a second-order 1-D shallow-water solver (Lax-Wendroff with wet/dry isolation, time ×60) — the fault slips and lifts the whole column; in 4000 m of water the crest runs at c = √(gh) = 713 km/h while the surface shows a 1–2 m bump (live DART-buoy reading), unfelt aboard ship; onto the shelf the speed falls 713 → 36 km/h and energy-flux conservation piles the height up by Green's law A ∝ h^(-1/4) (measured 1.9 → 2.5 m across the slope); the trough arrives first — "the sea is draining" — then the crest lands and run-up (≈ 4× the shore height) drives water up the beach and over the huts; the side panel tracks η(x), the bathymetry and the Green's-law prediction live.
- **How to play**: drag fault slip and playback speed; press "trigger quake" and "slow-mo ×15"; watch the crest speed fall from 713 km/h to tens and the height climb from 1 m to 10; space to play / pause.
- **URL parameters**: `?a=` `?speed=` `?pause=` `?labels=` `?spin=`.

### Phase 27 · Fluids & flight, fifth batch (8/8)

- [x] Sonic boom & the Mach cone (wavefronts pile into a cone in the aircraft frame, μ = arcsin(1/M), the sound barrier, see first hear later, the N-wave) ✅ **mach-cone/**
- [x] The Kármán vortex street (alternating shedding f = St·U/d, twin vortices → laminar street → turbulent wake → supercritical, aeolian tones / Tacoma / spoilers) ✅ **vortex-street/**
- [x] Stokes settling & the centrifuge (F = 6πµrv, v_t = 2Δρgr²/9µ, RCF = 1.118×10⁻⁵·r·RPM², blood fractionation) ✅ **stokes-centrifuge/**
- [x] Capillarity & surface tension (Jurin's law h = 2γcosθ/(ρgr), contact angle & meniscus, mercury reversal, halve the radius double the height) ✅ **capillarity/**
- [x] Kelvin–Helmholtz billows (vortex-sheet instability, exponential growth → cat's-eye roll-up → breaking & mixing, billow clouds / Jupiter) ✅ **kelvin-helmholtz/**
- [x] Poiseuille flow (no-slip wall, parabolic profile, Q = πΔp r⁴/(8µL), the tyranny of r⁴, plaque stenosis, dye-line experiment) ✅ **poiseuille/**
- [x] The hydrofoil (foil lift ∝ v², the takeoff hump, drag collapse on foils, the cavitation ceiling) ✅ **hydrofoil/**
- [x] Swell & deep-water waves (ω = √(gk) dispersion, c_p = 2c_g crest overtaking, swell sorting by period, feeling the bottom) ✅ **swell/**

### Phase 27 deep dives

#### Sonic boom & the Mach cone: see first, hear later

- **What you see**: in the aircraft frame the nose emits a spherical wavefront every 0.18 s — each centre slides back at v while the radius grows at the sound speed c: subsonic, the fronts outrun the plane (you hear the engine coming); at M → 1 they pile into a wall at the nose (the sound barrier); past M = 1 their common envelope is the Mach cone of half-angle μ = arcsin(1/M), and a ground observer hears the N-shaped boom only when the cone sweeps over — drag the Mach slider and watch the cone narrow from a near-plane to 30°, while the observer timeline shows the gap between ▲ (overhead) and ● (heard).
- **How to play**: drag the Mach number (0.3–2.0); press subsonic / near-barrier / supersonic / fast presets and "reset observer" to flip the delay from negative (heard first) to positive (seen first); space to play / pause.
- **URL parameters**: `?m=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### The Kármán vortex street: alternating eddies behind a cylinder

- **What you see**: 560 tracer particles flow past a cylinder — below Re 47 a quiet pair of standing vortices clings to the lee side; past 47 they shed alternately into two staggered rows, f = St·U/d with St ≈ 0.2; higher still the wake turns turbulent, and beyond Re ≈ 3.5×10⁵ the boundary layer transitions and the wake narrows (the drag crisis); the cylinder's side-force trace F_y locks to the shedding — the "singing wire" and "Tacoma resonance" presets let lock-in pump the amplitude up, "chimney spoilers" flattens F_y to zero.
- **How to play**: drag the Reynolds number (log 40–10⁶) across the four regimes; switch singing wire / Tacoma resonance / chimney spoilers / reset; space to play / pause.
- **URL parameters**: `?re=` `?preset=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Stokes settling & the centrifuge: a day at 1 g, a minute at 900 g

- **What you see**: the left tube idles at 1 g — red cells sink through viscous plasma at v_t = 2Δρgr²/(9µ) ≈ 3 µm/s while the equivalent clock burns hours; the right tube spins in a swing-out rotor where RCF = 1.118×10⁻⁵·r(cm)·RPM² multiplies effective gravity a hundredfold, and red cells, white cells and platelets race to the bottom in order of size × density, stacking into plasma / buffy coat / red-cell bands; the concentration-profile histogram watches the bands form, and the size slider verifies v ∝ r² live.
- **How to play**: drag rpm (watch RCF climb into thousands of g) and particle size; switch plasma / whole blood / glycerol viscosities; press 3000 rpm / 15000 rpm / stop / reset; space to play / pause.
- **URL parameters**: `?rpm=` `?size=` `?visc=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Capillarity & surface tension: the narrower the tube, the higher the climb

- **What you see**: three glass capillaries stand in a dyed bath, a concave meniscus hauling water up the rim — h = 2γcosθ/(ρgr) is read live: the 0.3 mm tube climbs 4.9 cm, the 1.2 mm only 1.2 cm (halve the radius, double the height); the µN balance between rim pull 2πrγcosθ and column weight ρgπr²h sits in the formula bar; switch to mercury and everything flips — θ = 140°, cosθ < 0, and the convex meniscus presses the level down; the h–r chart redraws its hyperbolas per fluid.
- **How to play**: drag the middle tube radius (0.1–2 mm) and contact angle (0–160°); switch water / ethanol / mercury and watch columns glide and menisci flip; space to play / pause.
- **URL parameters**: `?r=` `?theta=` `?fluid=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Kelvin–Helmholtz billows: when two layers rub the wrong way

- **What you see**: two layers sliding past each other make the interface a vortex sheet — any ripple is amplified exponentially (a straight line on the semi-log A(t) plot), grows steep crests, rolls into a chain of cat's-eye spirals, then shreds and mixes; the density-difference slider (gravity's stabilizer) stretches or kills the whole story; the billow-clouds / ocean wind-shear / Jupiter-bands presets re-run the same equation in three settings.
- **How to play**: drag upper/lower speeds and density difference; press "nudge" and "re-lay the interface" to replay from seed to breaking; space to play / pause.
- **URL parameters**: `?u2=` `?u1=` `?rho=` `?preset=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Poiseuille flow: radius is the gate, r⁴ is the tyranny

- **What you see**: 520 particles ride a parabolic profile through a transparent vessel — the wall layer is "welded" still, the core runs fastest at u_max = 2ū; a bright dye line at the inlet is sheared into the parabola (the classic 1840 experiment, live); drag the radius and watch Q = πΔp r⁴/(8µL) collapse (half → 1/16); "plaque stenosis" pinches the diameter to half — local speed ×4 by continuity, losses pile up, total flow craters; past Re 2300 the status flips to a turbulence warning.
- **How to play**: drag pressure / radius / viscosity (water, plasma, blood); press "re-lay dye line", "stenosis 50%", "restore"; the profile and Q–r⁴ charts follow the dot; space to play / pause.
- **URL parameters**: `?dp=` `?r=` `?mu=` `?sten=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### The hydrofoil: fast enough, the water lifts the boat out

- **What you see**: at low speed the hull floats on Archimedes (draft 0.26 m); as speed builds, foil lift ½ρv²C_L A chases the weight quadratically and the draft reads 0 — the hull clears the water, wetted area shrinks to three foils, and drag first climbs the "takeoff hump" then drops an order of magnitude (2666 N → 701 N); push further and the cavitation ceiling (~30 kn, red line) waits; the D(v) chart and lift share annotate the current regime.
- **How to play**: drag speed / load / foil trim; press "take off", "ease back to displacement", "overload 900 kg" and watch the equilibrium move; space to play / pause.
- **URL parameters**: `?v=` `?load=` `?trim=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Swell & deep-water waves: waves travel in sets

- **What you see**: a Gaussian wave packet walks the sea at the group velocity while individual crests overtake at twice the speed — born at the tail, dying at the head, no single crest crosses the packet; a moored buoy logs η(t) and the orange envelope makes "waves arrive in sets" visible; the period slider rescales L₀ = gT²/2π and c_p = gT/2π (14 s → 306 m, 79 km/h); pull the depth below L/2 and the waves feel the bottom, steepen and break in a burst of foam — the shallow limit is the tsunami page's story.
- **How to play**: drag period T and depth h; switch ocean swell / wind chop / push ashore; read the buoy record and envelope; space to play / pause.
- **URL parameters**: `?T=` `?h=` `?preset=` `?pause=` `?speed=` `?labels=` `?spin=`.

### Phase 28 · Cross-family gap-filling, first batch (8/8)

- [x] Centrifugal pump & cavitation (the impeller throws water, the volute trades velocity for pressure, the H-Q duty point, affinity laws Q∝N H∝N² P∝N³, the NPSH red line) ✅ **centrifugal-pump/**
- [x] Non-Newtonian fluids (τ = Kγ̇ⁿ shear-thinning/thickening, Bingham yield, water/ketchup/oobleck/toothpaste flow curves) ✅ **non-newtonian/**
- [x] Boundary layer & separation (no-slip, δ ∝ √(νx/U), adverse-pressure separation, golf-ball dimples 0.47→0.25, the root of stall) ✅ **boundary-layer/**
- [x] Tropical cyclone: a heat engine (SST ≥ 26.5 °C fuel line, latent-heat chimney, angular-momentum eyewall, WISHE feedback, landfall decay) ✅ **tropical-cyclone/**
- [x] The ECG (the cardiac dipole projected on a lead draws P-QRS-T, the AV delay, AFib loses the P, VT runs wide and bizarre) ✅ **ecg/**
- [x] Exoplanets: the transit method (depth δ = (Rp/R★)² gives the radius, Kepler III turns period into distance, RV gives mass, past i ≈ 89.7° the planet vanishes) ✅ **exoplanet-transit/**
- [x] Information entropy: the compression limit (information = −log₂p, H = Σ −p log₂p, Shannon's L̄ ≥ H, the Huffman tree rebuilt live hugging the line) ✅ **information-entropy/**
- [x] Elevator & counterweight (traction is friction, not a hook; P = Δm·g·v ≈ 0 when balanced; governor + safety gear bite the rails) ✅ **elevator/**

### Phase 28 deep dives

#### Centrifugal pump & cavitation: a pump never sucks

- **What you see**: a transparent volute and a six-blade impeller fling water outward, leaving low pressure at the eye — atmospheric pressure pushes water in; the widening volute channel trades velocity head for pressure. On the H-Q chart the pump curve (lifting with N²) meets the system curve (set by the valve) at the duty point; 1450→2900 rpm measures Q×2, H×4, P×8; when NPSHa = p₀/ρg + h_s − kQ² dips below NPSHr, vapor bubbles erupt at the eye and the head collapses.
- **How to play**: drag RPM to 2900 and watch the curve lift ×4; pull the suction level down and watch cavitation explode; close the discharge valve toward shut-off H₀; space to play / pause.
- **URL parameters**: `?rpm=` `?hs=` `?valve=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Non-Newtonian fluids: thin under a push, hard under a stir

- **What you see**: 350 tracers in a Couette rheometer color by effective viscosity µ_eff = τ/γ̇ — water stays linear; ketchup (power law n ≈ 0.4) pours only after a tap; oobleck (n ≈ 2) sets solid under fast stirring; toothpaste (Bingham, τ_y = 50 Pa) ignores the spinning cylinder until yield. The log-log chart overlays all four τ–γ̇ models with the live duty point.
- **How to play**: switch water / ketchup / oobleck / toothpaste; drag the shear-rate slider (0.01–1000 s⁻¹, log) and watch melting, setting and unlocking; space to play / pause.
- **URL parameters**: `?f=water|ketchup|oobleck|toothpaste` `?rate=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Boundary layer & separation: golf-ball dimples are not decoration

- **What you see**: 450 tracers colored by local speed — the layer touching the wall is frozen (no-slip), and profile stacks show u(y) climbing back to U∞; past the shoulder the adverse gradient reverses the near-wall flow into a wake. Toggle the golf ball: dimples force a turbulent layer, the separation point slides 82°→120°, the wake halves, C_d drops 0.47→0.25; in airfoil mode past ~15° AoA the upper surface separates wholesale — stall.
- **How to play**: switch smooth sphere / golf ball / stall demo; drag wind speed and AoA; "forced turbulence" is a vortex generator; the C_d–Re drag-crisis dot follows live; space to play / pause.
- **URL parameters**: `?mode=smooth|golf|stall` `?u=` `?aoa=` `?turb=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Tropical cyclone: a Carnot heat engine

- **What you see**: the sea recolors from cold blue to hot orange; ragged disturbance particles spiral inward along rainbands and erupt upward in the eyewall — flashing orange at the condensation level (latent heat ignites); aloft they spread into an anvil while the eye itself sinks, calm. Drag SST past 26.5 °C to spin up, back below to kill it; the landfall preset tears the machine apart in a day; within 5° of the equator Coriolis vanishes and nothing organizes. Status reads disturbance → depression → storm → typhoon → severe typhoon while central pressure falls.
- **How to play**: drag SST / latitude / development days; press West Pacific / cold-water stall / landfall / near-equator presets; toggle the cutaway for inflow–updraft–outflow; space to play / pause.
- **URL parameters**: `?sst=` `?lat=` `?day=` `?land=1` `?cut=1` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### The ECG: the dipole's projection draws P-QRS-T

- **What you see**: a 3-D heart with the full conduction system (SA node → AV node → His bundle → Purkinje network); ~3900 myocardial elements light up on precomputed activation times — the atrial wave raises the P, the AV junction deliberately dawdles 0.1 s to let the ventricles fill, the Purkinje network firing all at once erects the QRS, and slower reverse repolarization draws the upright T. The trace is not drawn by hand — it is the live projection of the net dipole on lead II. Switch to AFib: the P vanishes into f-waves and the RR intervals scatter; VT runs wide, bizarre complexes.
- **How to play**: switch sinus / AFib / VT; drag heart rate (40–180); the standard 25 mm/s, 10 mm/mV paper scrolls with auto-labeled waves; space to play / pause.
- **URL parameters**: `?mode=sinus|afib|vt` `?bpm=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Exoplanets: a thousandth of the light tells all

- **What you see**: a planet crosses its star on a Kepler ellipse while a photometer watches; the light curve dips by δ = (Rp/R★)² — the radius; Kepler III turns the period into orbital distance and equilibrium temperature against the green habitable-zone ring; the RV mode shows the star wobbling with spectral lines sliding blue-red, K ∝ Mp·sin i/√P giving the mass — with radius, density settles rock vs gas. Drag the inclination past ~89.7° and the transit vanishes: only edge-on orbits are ever detected.
- **How to play**: drag radius / period / inclination / star luminosity; press hot Jupiter / Earth twin (watch the noise) / TRAPPIST-1 / inclination-miss presets; toggle transit / RV modes; space to play / pause.
- **URL parameters**: `?mode=transit|rv` `?rp=` `?per=` `?inc=` `?lum=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Information entropy: the compression limit

- **What you see**: a golden dome is the entropy surface H(p₁,p₂,p₃) — highest at uniform (log₂3 ≈ 1.585 bit), zero at the corners; beside the four probability bars, stacked cubes show the live-rebuilt Huffman codewords — frequent symbols short, rare ones long; a symbol stream encodes into a 0/1 bit ribbon whose counter converges to L̄, hugging H but never crossing (Shannon: L̄ ≥ H, Huffman within 1 bit). Uniform 4 symbols: H = 2 bit, nothing to squeeze; extreme 97/1/1/1: H ≈ 0.24 yet Huffman still needs 1.05.
- **How to play**: drag p(A)/p(B)/p(C) and watch codewords reshape; press uniform / skewed / extreme / English-frequency presets; the H vs L̄ vs fixed-length bars update live; space to play / pause.
- **URL parameters**: `?pa=` `?pb=` `?pc=` `?preset=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Elevator & counterweight: the motor pushes a balance

- **What you see**: a six-floor shaft cross-section — car and concrete counterweight hang off the same grooved traction sheave: gripped by friction, not hooked. At half load with the 50% counterweight, Δm ≈ 0 and cruise power reads ≈ 0 (a green "balanced" tag) — the motor only pays for acceleration and friction; switch to no-counterweight and the same trip glows red; the overspeed test flings the governor weights open, the linkage yanks the wedge safety gear into the rails with a clang, and the oil buffer waits at the pit.
- **How to play**: call floors 1F–6F; drag load (0–1000 kg); switch counterweight 0/40/50%; the chart records the last trip's power curve with its green ≈0 cruise stretch; space to play / pause.
- **URL parameters**: `?load=` `?cw=` `?floor=` `?mode=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

### Phase 29 · Cross-family gap-filling, second batch (24/24)

- [x] The de Laval nozzle & shock diamonds (throat chokes at M=1, area ratio fixes exit Mach, over/matched/underexpanded plumes) ✅ **laval-nozzle/**
- [x] Rayleigh–Bénard convection (Ra past 1708 breaks the conducting layer into counter-rotating cells) ✅ **rayleigh-benard/**
- [x] River meanders & oxbow lakes (helical flow erodes the outer bank, wavelength locks at ~5 widths, cutoffs) ✅ **river-meander/**
- [x] Flapping flight (the outer wing is a propeller blade: downstroke = lift + thrust, shed vortex rings) ✅ **flapping-flight/**
- [x] The CVT (sliding sheaves glide the ratio continuously, engine pinned at its power peak) ✅ **cvt/**
- [x] The diesel engine (compression is the igniter at ~570 °C, the constant-pressure shoulder, the lean burn) ✅ **diesel-engine/**
- [x] The harmonic oscillator (F = −kx, the phase-plane circle, the damping spiral, resonance at ω₀) ✅ **harmonic-oscillator/**
- [x] Foucault's pendulum (the plane stays inertial, the floor turns at 15°·sin φ) ✅ **foucault-pendulum/**
- [x] The inverter & rectifier (H-bridge + SPWM + LC carve DC into AC; run it backward to rectify) ✅ **inverter/**
- [x] Seebeck ⇄ Peltier (heat to current and current to heat — reverse it and hot/cold swap) ✅ **thermoelectric/**
- [x] Piezoelectricity (squeeze for kV sparks, drive for 40 kHz ultrasound, quartz at 2¹⁵ Hz) ✅ **piezoelectricity/**
- [x] The catalytic converter (Rh splits NOₓ, Pt/Pd oxidizes CO/HC, light-off at 250 °C, the λ=1 window) ✅ **catalytic-converter/**
- [x] The nitrogen cycle (the 945 kJ/mol N≡N door and three keys, fertilizer overload chokes lakes) ✅ **nitrogen-cycle/**
- [x] Antibiotics & resistance (selection is a sieve: sub-doses breed superbugs, full courses clear the field) ✅ **antibiotic-resistance/**
- [x] The spinal reflex arc (one synapse, ~48 ms — the brain is informed at ~600 ms) ✅ **reflex-arc/**
- [x] Phototropism (auxin pumped to the shaded side: the stem is pushed toward the light) ✅ **phototropism/**
- [x] The Roche limit (the tidal differential ∝ 1/d³ tears a moon into a ring) ✅ **roche-limit/**
- [x] Lagrange points (the effective-potential landscape, Coriolis guards L4/L5, JWST station-keeping) ✅ **lagrange-points/**
- [x] Cepheid variables (the κ mechanism, the period–luminosity law, rung one of the distance ladder) ✅ **cepheid/**
- [x] Conway's Game of Life (B3/S23: gliders, guns, logic gates — Turing complete) ✅ **game-of-life/**
- [x] The Monte Carlo method (count hits, π emerges, error obeys 1/√N) ✅ **monte-carlo/**
- [x] The quartz watch (a 2¹⁵ Hz fork divided fifteen times into one tick per second) ✅ **quartz-watch/**
- [x] Hydro & pumped storage (P = ρQghη ≈ 85%, the reversible unit, the grid's biggest battery) ✅ **hydroelectric/**
- [x] LiDAR (ToF point clouds paint the street; fog and black paint are its blind spots) ✅ **lidar/**

### Phase 29 deep dives (condensed)

- **laval-nozzle/** — 380 gas parcels flow a half-cut bell nozzle colored by Mach: the subsonic half accelerates as A shrinks, the throat welds at M = 1.00 capping mass flow, and past it the nozzle widens only to go *faster* — area ratio alone fixes exit Mach. Drag back pressure from sea level to 20 km: the plume pinches under lip shocks (overexpanded), flows clean (matched), then balloons out with pulsing shock diamonds. URL: `?pc= ?pa= ?ar= ?preset= ?pause= ?speed= ?labels= ?spin=`.
- **rayleigh-benard/** — 500 temperature-colored grains between a red-hot floor and cold lid jiggle conductively until Ra crosses 1708, then self-organize into counter-rotating rolls with the Nu jump on the chart. Drag ΔT slowly to watch the instability, re-seed to see cells regrow from noise. URL: `?dt= ?h= ?pause= ?speed= ?labels= ?spin=`.
- **river-meander/** — a near-straight channel grows loops over simulated millennia: the outer bank erodes, point bars build inside, wavelength locks at ~5 widths; a flood cuts the neck and the loop becomes a greening oxbow. Scrub the timeline, force a cutoff, toggle the helical-flow annotation. URL: `?tm= ?er= ?cut=1 ?pause= ?speed= ?labels= ?spin=`.
- **flapping-flight/** — a stylized bird beats time-accurate wings in a particle wind: 3 span stations show lift/thrust arrows growing toward the tip, vortex rings stack behind, hover mode switches to a figure-8 with lift on both strokes. Slow-mo single-cycle dissection with frame stepping. URL: `?f= ?u= ?mode= ?pause= ?speed= ?labels= ?spin=`.
- **cvt/** — two cone pulleys and a 68-plate push-belt; the ratio slider glides both sheaves continuously (0.4–2.6) with zero shifts, and the 0–100 race shows CVT rpm pinned at the power peak versus the manual's sawtooth; overload the belt and it slips red. URL: `?i= ?rpm= ?mode= ?pause= ?speed= ?labels= ?spin=`.
- **diesel-engine/** — a cutaway single cylinder over 720°: compression glows to ~570 °C, the injector fires and fuel self-ignites along the P–V square shoulder; pull the ratio below ~12 and it refuses to fire; full load soots, idle runs λ≈7. URL: `?cr= ?rpm= ?load= ?glow= ?pause= ?speed= ?labels= ?spin=`.
- **harmonic-oscillator/** — a mass on a gold spring with force/velocity arrows and an energy ledger; the phase portrait melts time into a circle that damping spirals inward, and a drive sweep blows up the resonance peak at ω₀. Drag m ×4 and the period exactly doubles. URL: `?m= ?k= ?c= ?x0= ?mode= ?pause= ?speed= ?labels= ?spin=`.
- **foucault-pendulum/** — the swing plane topples 24 pegs as it precesses 15°·sin φ: Paris 31.8 h/circle, pole 24 h, equator never; flip to the space frame and the hall rotates instead. URL: `?lat= ?mult= ?view= ?pause= ?speed= ?labels= ?spin=`.
- **inverter/** — battery, glowing H-bridge, LC choke and a motor follow frequency; the scope stacks square wave → SPWM pulses (dashed average = the sine) → filtered output; rectifier mode runs the same bridge backward with a smoothing capacitor. URL: `?mode=inv|rec ?f= ?c= ?pause= ?speed= ?labels= ?spin=`.
- **thermoelectric/** — one N/P module, two jobs: heat the base and carriers light the bulb (U = αΔT), drive it and carriers pump heat until the cold plate frosts; reverse the current and the faces swap in seconds; ZT ≈ 1 keeps Carnot laughing. URL: `?mode=seebeck|peltier ?th= ?i= ?pause= ?speed= ?labels= ?spin=`.
- **piezoelectricity/** — a magnified quartz lattice: hammer it and charge centers split, faces pile kV and the spark gap fires; drive it with AC and the same slab pumps ultrasound rings, peaking at resonance (40 kHz buzzer, 32768 Hz watch fork). URL: `?mode=squeeze|drive ?f= ?v= ?pause= ?speed= ?labels= ?spin=`.
- **catalytic-converter/** — a honeycomb brick with Rh upstream splitting NOₓ and Pt/Pd downstream oxidizing CO/HC: molecules flash as they convert, the brick "lights off" at 250 °C (cold start = the pollution peak), stray λ starves one bed, lead poisons the sites. URL: `?tp= ?lam= ?lead=1 ?pause= ?speed= ?labels= ?spin=`.
- **nitrogen-cycle/** — a diorama with an N₂ dome, soil cross-section, root nodules, factory and lake: lightning and rhizobia crack the triple bond, soil bacteria nitrate it, denitrification closes the loop; push the fertilizer slider and the lake blooms while fish vanish. URL: `?fert= ?rain= ?preset= ?pause= ?speed= ?labels= ?spin=`.
- **antibiotic-resistance/** — 350 bacteria carry hidden resistance r = 0…3 that "reveals" at first dosing: full course cures, early stop breeds a resistant rebound, low dose sieves to 100%, plasmid conjugation copies resistance, and off-drug fitness cost slowly fades it. URL: `?dose= ?days= ?plasmid=1 ?pause= ?speed= ?labels= ?spin=`.
- **reflex-arc/** — tap the tendon: spindle → 100 m/s Aα fiber → one cord synapse → kick at ~48 ms while the brain-informed lamp waits until 600 ms; withdrawal mode adds interneuron inhibition and crossed extension. URL: `?reflex= ?slow=1 ?brain=1 ?pause= ?speed= ?labels= ?spin=`.
- **phototropism/** — drag the sun around a seedling and the stem chases it over time-lapse days while the cross-section heatmap shows auxin always pooling on the shaded side; darkness etiolates, twin lights cancel, roots brake and bend away. URL: `?az= ?lux= ?day= ?root=1 ?pause= ?speed= ?labels= ?spin=`.
- **roche-limit/** — grab the rubble moon and drag it inside the red ring: it stretches, bursts into a bead chain, and Kepler shear smears the necklace into a ring; fluid vs rigid limits at 2.44 vs 1.26 R. URL: `?d= ?rhom= ?mode= ?pause= ?speed= ?labels= ?spin=`.
- **lagrange-points/** — an effective-potential terrain under the co-rotating Sun-Earth system: drag the probe, watch JWST librate at L2 (and drift when station-keeping is off), scatter 240 Trojans into tadpole orbits, then switch Coriolis off and the hill dumps them all. URL: `?mu= ?preset= ?cor=0 ?pause= ?speed= ?labels= ?spin=`.
- **cepheid/** — a breathing supergiant with its κ-valve, a triple chart (light curve, period–luminosity line, HR instability strip): drag the period 3→50 days and the distance readout leaps from ~4 to ~17 kpc; leave the strip and the pulsation dies. URL: `?P= ?m= ?teff= ?preset= ?pause= ?speed= ?labels= ?spin=`.
- **game-of-life/** — a 72×48 board where B3/S23 births gliders, an endless Gosper gun, and two-glider logic gates (a 64-generation exact annihilation); switch rules to Seeds fireworks or HighLife replicators. URL: `?rule= ?stamp= ?d= ?t= ?speed= ?pause= ?labels= ?spin=`.
- **monte-carlo/** — points rain into a cube until the sphere's silhouette crystallizes and π ≈ 6·N_in/N locks toward 3.14159 under the 1/√N band; Buffon needles and blob integration ride the same loop. URL: `?mode=sphere|circle|buffon|blob ?spd= ?cap= ?pause= ?speed= ?labels= ?spin=`.
- **quartz-watch/** — a movement cutaway: the fork flexes visibly only at ×32768 slow-mo, fifteen divider lamps ripple one carry per second, the stepper ticks 180°, low battery drops to two-second jumps, and the temperature parabola peaks at 25 °C. URL: `?temp= ?slow= ?batt= ?pause= ?speed= ?labels= ?spin=`.
- **hydroelectric/** — 300 water parcels run reservoir → penstock → Francis runner → tailrace at P = ρQghη ≈ 85%; pump mode spins the same runner backwards to fill the mountain lake, and the 24 h demand chart shows hydro covering in seconds what coal ramps in 90 minutes. URL: `?h= ?q= ?mode=gen|pump ?day= ?pause= ?speed= ?labels= ?spin=`.
- **lidar/** — the street starts as ghost wireframe; the spinning head's 12 beams paint a height-colored point cloud while the A-scope shows first/last returns; fog dissolves it into ghosts, black paint starves 905 nm where 1550 nm still sees, and vegetation splits into layers. URL: `?spd= ?dens= ?fog= ?wl= ?preset= ?pause= ?speed= ?labels= ?spin=`.

### Phase 31 · Cross-family gap-filling, batch 3 (8/8)

- [x] Ackermann steering (cot δo − cot δi = B/L, one instant center, the trapezoid synthesizes both angles; parallel steering scrubs, anti-Ackermann races) ✅ **ackermann-steering/**
- [x] The buck converter (Vout = D·Vin, the inductor as a current flywheel, LC smooths the chops; linear mode burns 14 W vs 95% efficiency) ✅ **buck-converter/**
- [x] Rayleigh scattering (σ ∝ 1/λ⁴ gives blue a 4.4× priority; sunset crosses 29 airmasses; Mie clouds stay white) ✅ **rayleigh-sky/**
- [x] Thin-film interference (2nt·cosθ plus the π flip: the rainbow is a thickness map; drainage black spot, Newton's dark center, λ/4n AR coating) ✅ **thin-film/**
- [x] Supercooling & nucleation (the ΔG barrier peaks at r* = 2γ/ΔG_v ≈ 5 nm at 10 K; −40 °C flips on its own; latent heat pins the 0 °C plateau) ✅ **supercooling/**
- [x] Transpiration (leaves pull, roots don't push: −0.5 to −3 MPa tension; capillarity 0.29 m, root pressure 2 m, pull 100 m; cavitation clicks) ✅ **transpiration/**
- [x] Glacier flow (Glen's τ³ law, accumulation vs ablation tug-of-war, crevasses & moraines, the U-valley, a climate dial over centuries) ✅ **glacier-flow/**
- [x] Tidal locking (the bulge leads by δ, a sin2δ brake until spin = orbit; the Moon recedes 3.8 cm/yr; Mercury's 3:2, Io's tidal heat) ✅ **tidal-locking/**

### Phase 31 deep dives (condensed)

- **ackermann-steering/** — a translucent-chassis car drives real arcs while its four wheel trails draw concentric circles around the glowing instant center; in Ackermann mode all four axle lines meet exactly on the rear-axle extension (δ=14° → δi=15.0°/δo=13.1°, L=2.6 m, B=1.5 m verified live), parallel steering misses the point and sparks red scrub at the front patches, anti-Ackermann over-steers the outer wheel like a race car. URL: `?st= ?g=ack|par|anti ?v= ?axes= ?pause= ?speed= ?labels= ?spin=`.
- **buck-converter/** — blue electrons pulse through the MOSFET only on-phase, orange through the freewheel diode only off-phase, while the green flow after the LC runs smooth; the scope stacks the node square wave, the I_L triangle with its ΔI_L band, and a near-flat Vout; linear mode glows red-hot burning 14 W at 42% versus buck's 95%, and a 1→4 A load step shows the inductor ramp and the dip-recover. URL: `?d= ?load= ?mode=lin|buck ?pause= ?speed= ?labels= ?spin=`.
- **rayleigh-sky/** — a single-scattering sky dome turns fire as the sun drags from 75° to 2° (Kasten–Young airmass 28.5× strips blue: T(450)≈0.05% vs T(650)≈18%); aerosols add wavelength-blind Mie white, the Titan preset bakes an orange day, and the beam diagram scatters photons off ~120 molecules with blue flashing 4.35× more often, growing a live 1/λ⁴ histogram. URL: `?el= ?aer= ?h= ?preset=noon|sunset|titan|fog ?diag= ?pause= ?speed= ?labels= ?spin=`.
- **thin-film/** — a living soap bubble whose thickness field (drainage + Marangoni swirls) is colored per-fragment by I=½(1−cos(4πnt·cosθ/λ)) for 650/545/450 nm: the rainbow is a thickness map; the top drains past 25 nm into a black spot and pops into 150 droplets, Newton's rings write lens curvature as fringes with a dark-center proof of the π flip, and MgF₂ λ/4n shows two reflections cancelling. URL: `?mode=bubble|newton ?t0= ?pop=1 ?pause= ?speed= ?labels= ?spin=`.
- **supercooling/** — 400 molecules jiggle uncommitted until "tap it!" fires a glowing crystallization front that snaps them into a hexagonal lattice; the temperature trace dives, snaps vertically to a 0 °C plateau, then resumes; the ΔG(r) barrier flattens as you drag colder (ΔG*/kT: ≈1035 at −10 °C → ≈73 at −40 °C) and dust pre-pays the bill with a ×0.005 heterogeneous barrier. URL: `?tc= ?tap=1 ?seed=1 ?dust=1 ?pause= ?speed= ?labels= ?spin=`.
- **transpiration/** — bead-chain water creeps up six xylem tubes toward a glowing meniscus while vapor leaks from stomata; the ruler shows capillarity 0.29 m and root pressure 2 m against a 100 m canopy; humidity and light drive flow and top tension (down to −3 MPa) as the trunk measurably shrinks, and "cut a conduit" snaps a chain with a click, embolizing it gray while flow reroutes. URL: `?rh= ?lux= ?stoma=0|1 ?cut=1 ?pause= ?speed= ?labels= ?spin=`.
- **glacier-flow/** — a 36-column shallow-ice solver (Glen n=3) drives a firn-white, ice-blue tongue whose debris rocks ride the surface velocity; crevasse lines open at the slope break, dragging climate to +2 °C retreats the snout kilometers in seconds and strands a terminal moraine, and the ELA line plus the b(x) / length-vs-year charts track the tug-of-war. URL: `?clim= ?yr= ?pause= ?speed= ?labels= ?spin=`.
- **tidal-locking/** — a translucent bulge shell leads the planet line by δ while a red torque arc (∝ sin2δ) brakes the spin from ω/n = 2.5 into lock at 1.0 in ~20 s; a dashed ring marks the momentum's new home (3.8 cm/yr of recession, +2.3 ms/century days), and presets stage Mercury's 3:2 capture, Pluto⇄Charon's mutual lock, and Io's perijove heat pulses. URL: `?w= ?e= ?preset=moon|mercury|pluto|io ?pause= ?speed= ?labels= ?spin=`.

### Phase 32 · Cross-family gap-filling, batch 4 (24/24)

- [x] Harmonic Drive (a translucent three-piece cutaway, the elliptical wave travelling around the flex, 2 teeth = 3.6° backwards per revolution, ΔZ=2/4 ratio switch, mesh-zone lens, stall demo) ✅ **harmonic-drive/**
- [x] Chain Drive & Chordal Action (rigid links wrap as a regular polygon, effective radius hops between r and r·cos(π/N), chain speed pulses once per tooth, wear climbs and skips teeth) ✅ **chain-drive/**
- [x] Chain Hoist · Differential Pulley (two sprockets keyed on one axle, one turn lifts the load just π(R−r), F=W(R−r)/(2R) buys 24× force at 24× distance, ratchet + geometry self-lock) ✅ **chain-hoist/**
- [x] Radiocarbon Dating (cosmic rays make ¹⁴C, the living trade carbon, death shuts the gate, a 5730-yr half-life counts down, tree rings calibrate) ✅ **radiocarbon-dating/**
- [x] Flame Colors & Atomic Spectra (3D atom electron jumps fire real-wavelength photons, five elements swap shells/flame/lines, emission vs absorption modes, a Boltzmann temperature slider) ✅ **flame-spectra/**
- [x] Crystal-Field Colors (an octahedral field splits t₂g/e_g by Δ, six real systems from aqua copper to ruby and emerald, absorbed color leaves as its complement) ✅ **crystal-field/**
- [x] Nitrogen Fixation · Root Nodules (flavonoid passwords meet Nod factors, root hairs curl, infection threads escort bacteria, leghemoglobin keeps the cut face pink, NH₃ up and sugar down) ✅ **root-nodule/**
- [x] Bone Remodeling (a trabecular truss heat-mapped by strain, osteoclasts dig and osteoblasts fill, Wolff's law re-orients struts, weightlessness tips the ledger to −1.5%/month) ✅ **bone-remodeling/**
- [x] Antibody Diversity · V(D)J (V/D/J segment bins shuffled by RAG, TdT scribbles the joints, heavy×light pairing yields ~10¹¹ interfaces, clonal selection and affinity maturation) ✅ **antibody-diversity/**
- [x] Quantum Tunneling (a heat-mapped wave shows ψ dying exponentially inside the wall, T≈e^(−2κa) tallies live, STM/flash/α-decay/solar-core presets, single-packet slow-mo) ✅ **quantum-tunneling/**
- [x] Superfluid (the two-fluid split at the λ point, a Rollin film climbs out and empties the beaker, superleaks, a thermomechanical fountain, quantized vortices) ✅ **superfluidity/**
- [x] Skin Effect (a cross-section heat-map squeezes current into a δ=√(2ρ/ωμ) shell from 50 Hz to 10 GHz, Litz wire and hollow-tube fixes, AC resistance climbing as √f) ✅ **skin-effect/**
- [x] Gravitational Lensing (rays bend by α=4GM/c²b, a dragged source blooms into an Einstein ring, doubles and crosses off-axis, an inverse-ray-traced sky window) ✅ **gravitational-lensing/**
- [x] Hohmann Transfer (two tangential burns and a half-ellipse coast, a Δv ledger beating the brute spiral by ~16%, the 44° Mars window arc) ✅ **hohmann-transfer/**
- [x] Eclipses & the Saros Cycle (umbra/penumbra/antumbra cones, a 5.14° tilt rationing eclipse seasons, totality paths swept at ~1 km/s, saros 6585.32 d repeats shifted 120° west) ✅ **eclipse-saros/**
- [x] Photolithography (an eight-step pipeline loops on a zoomed die, wavelength slider moves the diffraction halo from 436 to 13.5 nm, layers grow into a copper city aerial) ✅ **photolithography/**
- [x] Kalman Filter (truth, noisy echoes, drifting extrapolation and the fused estimate on one screen, an error ellipse breathing with P, GPS+IMU dual-rate mode) ✅ **kalman-filter/**
- [x] Simulated Annealing (a Metropolis ball roams hot and settles cold, the greedy gray twin stuck locally, slow cooling reaches the global valley 92% of the time) ✅ **simulated-annealing/**
- [x] E-Ink (8×5 microcapsules flip charged white and black flakes, bistable with the power cut, a full-black ghost-clearing flash, e-ink vs LCD energy curves) ✅ **e-ink/**
- [x] Xerography · Laser Printing (a 128×80 potential-heatmap drum gets corona-charged, laser-written, toner-developed, transferred and fused at 180 °C — one revolution, one page) ✅ **xerography/**
- [x] Tire Hydroplaning (a bow wedge of water lifts the tire, the contact patch shrinks to a sliver, v_H≈6.36√p planing threshold, worn tread drops it to 60 km/h) ✅ **hydroplaning/**
- [x] Atmospheric Reentry (a blunt body keeps >90% of the heat in the shock layer, ablative spall flies, the plasma sheath blacks out telemetry with a countdown, lifting entry halves the g's) ✅ **atmospheric-reentry/**
- [x] Ramjet (shocks trade speed for pressure ∝v², the flame lights past Ma 0.5 with a booster at rest, scram mode burns in milliseconds, three engines share one thrust chart) ✅ **ramjet/**
- [x] Decompression Sickness (a two-compartment diver loads nitrogen at depth, fast ascent nucleates bubbles that jam red cells, a soda bottle mirrors the physics, recompression treats it) ✅ **decompression-sickness/**

### Phase 32 deep dives (condensed)

- **harmonic-drive/** — The outer ring is a fixed internal gear (Zc=202). Inside sits a thin elastic cup with external teeth — the flexspline (Zf=200) — and inside that, the wave generator: an elliptical cam with a thin-section bearing. The cam stretches the cup into an ellipse: full mesh at the two major-axis ends, disengaged at the minor; as the generator turns the mesh zones travel like a wave, forcing the flex to creep 2 teeth = 3.6° backwards per revolution — exactly 100:1; Change the generator speed, switch ΔZ=2/4 to see the ratio recompute; keep the lens on to watch teeth engage and release around the rim; toggle cutaway, slow-mo; then hit Stall: the wave keeps rolling while the output stands perfectly still. URL: `?ratio=2|4` `?cut=1` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **chain-drive/** — A large and a small sprocket carry a loop of rigid links: the yellow polyline is the link envelope — not a circle but a regular polygon whose side is one pitch; the red spoke shows the engaged effective radius, hopping between r and r·cos(π/N) once per tooth; the green arrow is instantaneous chain speed, visibly stretching and shrinking even at constant crank speed, with the pulse traced in the chart; Drag the teeth slider to square or flatten the curve; enable Slow-mo ×10 plus Close-up to watch the chain beat like a pulse; hit Wear +2% to climb the teeth until the chain skips; New chain resets. URL: `?n=` `?ratio=` `?wear=` `?slow=` `?poly=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **chain-hoist/** — On a gantry, one axle carries two keyed sprockets, R=12 cm and r=11 cm, with a red ratchet-and-pawl in front. An orange hand chain loops over the big wheel; the silver load chain drops from it, scoops a blue movable pulley and winds back over the small wheel — its tail shortening into a chain bag. Pull the wheel and the three chain runs flow at different rates; the ruler on the right (1 tick = 1 cm) logs the load's crawling rise; It pulls automatically. URL: `?w=` `?dr=` `?pull=0|1` `?free=1` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **radiocarbon-dating/** — A three-layer scene: cosmic-ray neutrons constantly knock blue nitrogen atoms into amber carbon-14 in the upper atmosphere; a mammoth in the middle layer trades carbon both ways with the air while alive — press Death! and it topples, the green flow stops dead and an isotope clock (5730 yr per notch) appears overhead; in the sample tube 320 nuclei flip one by one from yellow ¹⁴C to gray ¹⁴N as the years roll by, with a stratigraphic column and tree-ring disc alongside; Drag the age slider to run the clock and watch the sample fade; hit Death! for the signature moment, Alive to reset; switch atmosphere/sample views and the calibration overlay; Space = run/pause. URL: `?age=` `?mode=atm|sample` `?cal=1` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **flame-spectra/** — A switchable 3D atom (nucleus + shell rings) sits over a burner. Flame particles collide with the valence electron: it jumps to an outer shell (bright ring flash), falls back, and fires one photon of the right color at the spectrum screen, lighting its line. Pick sodium and the whole flame turns yellow as the 589.0/589.6 doublet flares; in absorption the same positions go dark in a rainbow; Click Na/Li/Sr/Cu/K to swap elements — shells, flame color and line group all change together. URL: `?el=Na|Li|Sr|Cu|K` `?mode=emit|abs` `?T=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **crystal-field/** — A central metal ion carries five translucent d-orbital lobes while six ligand spheres form a slowly rotating octahedron: e_g (orange) faces the ligands and is pushed up, t₂g (teal) slips between them and sinks. The energy-level panel splits live with gap Δ; the spectrum strip shows which slice of white light is eaten and what complement passes — a beam of that complement color shoots toward you: the color of the solution or gem; Drag the field-strength slider: ligands close in or retreat, Δ widens, the absorption band slides and the transmitted color changes on the spot. URL: `?sys=cu|cunh3|fe2|fe3|ruby|emerald` `?field=` `?orb=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **root-nodule/** — A translucent root with hairs buried in soil, rod-shaped rhizobia swimming around. The story advances step by step: the root secretes flavonoid passwords and rhizobia answer with Nod factors; a root hair curls and a glowing infection thread escorts bacteria into the cortex; the nodule swells and its cut face glows pink — oxygenated leghemoglobin holding free O₂ near 20 nM; NH₃ rises in the xylem while sugar pays down the phloem; Open the nodule cutaway for the pink face and nitrogenase splitting N₂; drag the soil-O₂ slider across the bell curve (gray-green when anoxic, poisoned when high); press slow-mo to shadow one N₂ all the way to NH₃; Space runs/pauses. URL: `?view=root|cut` `?o2=` `?sugar=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **bone-remodeling/** — Inside a translucent cortical shell sits a trabecular truss oriented along force lines, coloured by strain: loaded struts glow, idle ones dim; an osteoclast seals a work zone, acidifies it to pH 4.5 and carves a Howship lacuna, then a row of osteoblasts lays glowing osteoid that mineralises. Drag the load direction and the whole lattice re-lays itself along the new force lines; hit weightlessness and struts thin out as the density curve falls; Drag the load-direction knob to re-truss the lattice; slide the load magnitude; toggle weightless / loaded to flip the BMD ledger; slow-mo close-up shows the osteoclast-osteoblast relay; Space runs/pauses. URL: `?load=` `?dir=` `?zero=1` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **antibody-diversity/** — A segmented DNA locus on the left: stacks of green V, orange D and blue J (stand-ins for 40/27/6). RAG scissors cut twice at a random spot and the skipped DNA loops away; the three chosen segments drop onto the bench where TdT dots random red bases into the joints; mRNA streams into the ribosome and folds into a Y-shaped antibody — dashed lines link the chosen segments to the interface. An antigen drifts in, matching clones expand 2-4-8, affinity climbs round by round, golden memory cells file in; Hit Reshuffle to see the same genes assemble a never-repeating interface; drag Selection pressure to change expansion rate and the affinity ceiling; Antigen attack jumps straight to clonal selection; Slow-mo recombine watches the cuts frame by frame. URL: `?shuffle=1` `?ag=1` `?aff=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **quantum-tunneling/** — A wave attacks a glowing barrier from the left: incident plus reflected ripples form a standing pattern, inside the wall the wavefunction decays exponentially (heat-map), and a transmitted wave seeps out the far side. Particles hitting the wall draw lottery tickets; winners flash into existence beyond it. The stats panel gives κ, 2κa, transmission T, the true event rate and the expected wait; the small plot shows the three-region |ψ|² curve and the T-vs-width log cliff; Drag the width slider to feel the cruelty of exponents: double the wall and the transmitted tail visibly wilts. URL: `?a=` `?v=` `?e=` `?preset=stm|flash|alpha|sun` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **superfluidity/** — An open beaker hangs inside a cutaway cryostat, its 800 glowing particles split by temperature into orange (normal: random, viscous) and cyan (superfluid: synchronized, frictionless). Cross 2.17 K and the colors trade places while the chart plots the rising ρs/ρ curve and the heat-capacity λ spike; in film mode a cyan Rollin film creeps up the inner wall, over the rim, and drips into a measuring cup, emptying the beaker; a heated end drives a fountain jet; stirring raises countable quantized vortex filaments; Drag the temperature slider to shift the two-fluid balance; hit the film / fountain / superleak / stir buttons for each demo, or a step (or auto tour) for the full causal chain; Space runs/pauses. URL: `?T=` `?mode=film|fountain|leak|vortex` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **skin-effect/** — A thick copper wire spans the scene with a circular cross-section cut open: vertex colors render a live J(r) current-density heat-map, 800 charge particles ride the shell according to the J·r profile, blue rings pulse with the AC field, and the red arc marks the core's Lenz eddies fighting the change. At low frequency the map fills the section; push f up and the core goes dark, leaving a glowing thin shell; Drag the frequency slider (10 Hz–10 GHz, log) to watch solid turn hollow; drag wire radius to change q=R/δ; toggle Copper/Aluminium and the Litz view (7 insulated strands); Slow one cycle plays an AC period in 9 s; bottom-right panels plot J(r) and R/R_dc vs f. URL: `?f=` `?r=` `?mat=cu|al` `?litz=1` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **gravitational-lensing/** — An observer on the left, a cluster particle ball with a translucent dark halo in the middle, and a field of background galaxies on the right. Glowing rays leave each source, kink at the lens plane, and converge on the observer — the crossing points are the images. The image-plane window inverse-ray-traces the observer's sky live: rings, arcs, doubles or an Einstein cross. Drag the orange source galaxy right behind the lens and watch its image bloom into a full glowing ring; drop the mass and the rays straighten instantly; Drag the orange source galaxy to change alignment; sliders tune lens mass, ellipticity (quads) and dark fraction; buttons switch three viewpoints, replay the 1919 eclipse, or snap to perfect alignment; Space runs/pauses. URL: `?m=` `?align=` `?view=side|image|cluster` `?e=` `?d=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **hohmann-transfer/** — Press Burn (1) and the satellite in the blue parking orbit fires a particle plume, jumping onto a translucent orange transfer ellipse with perigee at r1 and apogee exactly touching the glowing green target ring; it coasts half an ellipse, slowing as it climbs, then one more kick at apogee circularizes it onto the ring. Enable compare mode and a red twin flies a brute-force spiral — its Δv counter races ahead yet pays ~16% more; Click Burn (1), then Burn (2) at apogee, and watch two impulses do the whole job; drag the r2 slider to retarget (the dashed preview redraws); run the brute spiral side by side; switch to follow cam for the coast; step 6 opens the 44 deg Mars window arc. URL: `?r2=` `?mode=hoh|brute` `?cam=far|near` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **eclipse-saros/** — Watch the Sun (left), Earth (right) and the Moon dragging a three-layer cone: umbra for totality, penumbra for partials, antumbra for annular rings. The orbit is tilted 5.14°, so the shadow lands only when new moon meets a node (eclipse seasons, every ~173 days); the umbra sweeps the ground at ~1 km/s, painting a red eclipse path on the globe. Fast-forward 6,585.32 days and the same eclipse returns, shifted ~120 deg west; Set the time warp (0.02-30 days/s); hit jump-to-next-eclipse for totality, switch to the surface view to ride the shadow; press Fast-forward 1 saros for the signature moment; three view buttons (global / cone / surface). URL: `?tf=` `?view=` `?saro=N` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **photolithography/** — Watch a zoomed die cross-section at the centre of a 300 mm wafer: the deposited film gets an amber coat of photoresist, a chrome-patterned mask descends, deep-UV light pours through its openings with a halo that follows the wavelength; developer washes away the exposed resist, plasma etches the pattern into the film, an ion rain dopes it, the resist is stripped. At completion the camera pulls up to an aerial view of eight patterned layers lighting up like copper city blocks; Run the auto pipeline or single-step through each process; drag the wavelength slider and watch the diffraction halo swallow fine lines; drag the layers slider to grow the stack live; toggle wafer/cross-section views; Space runs or pauses. URL: `?step=` `?lam=` `?layers=` `?view=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **kalman-filter/** — A plane traces a closed route: gray is truth, red dots are radar echoes (scattered by sigma), blue is pure constant-velocity extrapolation slowly drifting away, and green is the Kalman fused estimate gliding through the center of the noise cloud. The green error ellipse breathes with variance P — swelling on prediction, snapping tight on update. That rhythm is uncertainty itself; Drag R and Q to trade green between hugging the dots and smooth lag; stretch the sampling interval to inflate the ellipse; try Model-only / Meas-only degenerate modes; switch to GPS+IMU for high-rate propagation plus low-rate fixes. URL: `?r=` `?q=` `?rate=` `?mode=gps` `?trust=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **simulated-annealing/** — An energy landscape colored by height (low = blue-green, high = orange-red) with a gold flag planted in the deepest valley. The green ball hops by the Metropolis rule: lower is always kept, higher passes with p=e^(−ΔE/T), and a rejection makes it bounce in place. Temperature decays as alpha^k from T0 while the glowing trail shifts orange to green. Quench freezes it halfway; slow cooling lets it cross saddles and sink into the global minimum in a burst of gold; Space = run/pause; enable the gray greedy ball to watch it get stuck; drag T0 and alpha to shift between exploring and exploiting; Step (slow-mo) watches each accept/reject; reroll the terrain to test the ending again. URL: `?t0=` `?cool=` `?greedy=1` `?terrain=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **e-ink/** — A reader screen cut open to an 8x5 array of clear microcapsules, each holding white TiO2 and black carbon flakes in oil. Driven by the field, charged particles swim and swap ends to flip pixels black or white; cut the power and they stay jammed against the wall — the image freezes. An always-lit LCD panel sits at right as the control group, while the energy plot shows e-ink hugging zero as LCD climbs linearly; Write text to watch the electrodes repaint HI / a battery / OK pixel by pixel; try Power-cut test — rewriting is refused while off; Full refresh flips every capsule black then back; Slow x100 dives next to one capsule; drag ambient light and page-turn rate to split the energy curves. URL: `?txt=1` `?dark=` `?flash=1` `?off=1` `?lux=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **xerography/** — A cutaway 3D printer: the spinning OPC drum is rendered as a live potential heatmap (blue = charged −600 V, dark = discharged, warm grey = toner). A corona wire charges the drum uniformly; a polygon mirror flings the laser into line-by-line scans — exposed charge escapes and the page hides on the drum as an invisible latent image; charged toner slams onto it and the document appears; a transfer corona pulls toner onto paper, a 180 °C roll fuses it, and blade + erase lamp reset the drum; Space = run/pause; Step advances the six stages; Slow-mo exposure freezes one line being born; the rpm slider sets ppm; switch off the heatmap for the naked-eye view — the latent image vanishes. URL: `?step=` `?slow=1` `?rpm=` `?dpi=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **hydroplaning/** — A grooved tire rolls in place on a wet road (the road scrolls past). At enough speed and water depth, a translucent bow wedge piles up ahead of the contact patch and sprays sideways; in the top-view inset the patch shrinks to a sliver with a red hot leading edge. Contact area, lift/weight and stopping distance update live — past the critical speed the tire visibly floats and the braking strip explodes; Raise speed and watch the patch break loose; hit Brake test to compare gripping vs planing stops; switch Tread to worn and see v_H fall to 60 km/h; Wedge close-up gives a slow-motion view of water digging under the tread. URL: `?v=` `?depth=` `?p=` `?wear=` `?brake=1` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **atmospheric-reentry/** — A bell capsule flies nose-first into layered air (rolling ruler 120 to 0 km): a detached bow shock ignites ahead, compressing gas past 10,000 K; streamlines split around the blunt face carrying over 90% of the heat away; glowing ablation spalls off the charring shield; when the plasma sheath lights up the telemetry wave dies — blackout, with a live countdown; lifting mode stretches the trajectory and halves the g-load; then the main chute opens for an 8 m/s touchdown; Space runs/pauses; drag the entry-angle slider to feel how narrow the corridor is (−1 deg skips back out, −7 deg overloads); drag bluntness or hit Sharp-nose A/B to watch heat arrows slam the hull; toggle Lifting entry to compare loads; click steps to jump; the side chart shows the h-v corridor and shock temperature. URL: `?gamma=` `?rn=` `?sharp=1` `?lift=1` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **ramjet/** — A full cutaway of a ramjet: inlet-cone shocks, diffuser, V-gutter flame holder, Laval nozzle. Flow particles are colour-coded along the whole path: blue = compressed, denser air; orange = heat release; cyan = exhaust accelerated by the nozzle. Turbo mode shows the spinning fan for contrast; scram mode keeps the flow supersonic with cross-flow fuel burning in milliseconds. At rest the flame dies and a red solid booster stands by; Drag the Mach slider to watch pressure ratio and thrust climb, and the engine roar alight past Ma 0.5; pull back to 0 for the flameout alarm, then press Boost &amp; light; Slow flow studies the recirculation behind the V-gutter; switch engines to compare thrust curves. URL: `?mach=` `?mode=turbo|ram|scram` `?thr=` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`
- **decompression-sickness/** — A simple diver descends and ascends through a layered water column; at centre, a cross-sectioned blood vessel (red cells in parabolic flow) beside a tissue block: yellow dots are nitrogen dissolved under pressure, white bubbles are precipitated by supersaturation, green ones are nitrogen exhaled through the lungs. A soda bottle on the right mirrors the physics — pop the cap and it foams. The plot shows the depth-time profile and supersaturation ratio R against the 1.6 nucleation threshold; Set target depth and ascent rate to watch tissues load and off-gas; hit slow-mo nucleation to see bubbles appear from nothing and jam red cells; pop the soda cap for the analogy; run the hyperbaric chamber to recompress; use the safety-stop slider for the 5 m / 3 min demo. URL: `?depth=` `?asc=` `?stay=` `?soda=1` `?t=` `?pause=` `?speed=` `?labels=` `?spin=`

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
- [x] Transistors to adders (MOSFET as a gate → logic gates → 8-bit ripple-carry adder) ✅ **transistor-adder/**
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

- **What you see**: MOSFET channels open and close to make logic gates; gates assemble XOR, the half-adder, and an 8-bit ripple-carry adder, with carries rippling level by level.
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

### Phase 15 · Closing the families, first batch (6/6)

- [x] Fission chain reaction (neutron generations 1→3→9→27; moderator + control rods pin k at 1) ✅ **fission-chain/**
- [x] Rainbow & secondary bow (dispersion inside one drop; 42°/51° extremum arcs, reversed secondary, Alexander's dark band) ✅ **rainbow/**
- [x] Mitosis (spindle captures kinetochores, congression to the plate, synchronous sister split into two identical cells) ✅ **mitosis/**
- [x] Birthday paradox (pairs explode as n(n−1)/2; 50 % at 23 people; Monte Carlo hugs the theory curve) ✅ **birthday-paradox/**
- [x] Thermoregulation (the hypothalamus comparator; shivering/sweating chase a moving set-point; fever steps it up) ✅ **thermoregulation/**
- [x] Sonar & B-mode ultrasound (echo timing c·t/2; the B image assembles line by line; Doppler measures blood flow) ✅ **sonar-ultrasound/**

### Phase 15 deep dives

#### Fission chain reaction — a snowball rolled to just-critical

- **What you see**: a neutron is captured by U-235 into wobbling U-236*, which splits into Ba/Kr fragments with a ~200 MeV flash and 2.43 fresh neutrons on average — generations light up 1→3→9→27, one hue per wave. The moderator brakes fast (orange) neutrons into thermal (cyan) ones, lifting the capture cross-section from ~1 to ~585 barns. Rods in: k<1 and the chain dies within generations; rods out: k>1 with a red runaway alert; just right: k=1, a flat self-sustaining rate.
- **How to play**: drag control-rod depth to find criticality, switch the moderator off to see k cap at 0.84, hit ignite to inject neutrons; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?rods=`.

#### Rainbow & secondary bow — why exactly 42°

- **What you see**: white light enters a raindrop and fans into six colors by real water dispersion (n = 1.331→1.343), reflects internally once or twice, then exits; sweeping the impact parameter b shows the exit directions piling up at the deviation extremum — the scattering angles 42° (primary) and 51° (secondary) are why the bows are bright. In sky mode the 42° bow is red-outside/violet-inside, the 51° secondary is reversed, with Alexander's dark band between.
- **How to play**: drag the b/R slider to watch rays bunch at the extremum, toggle one/two reflections and drop/sky views, tap a wavelength swatch to isolate a color; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?mode=` `?k=` `?b=` `?spin=`.

#### Mitosis — an exact halving of one genome

- **What you see**: in a 2n=4 cell, chromatin is replicated into X shapes (two sister chromatids sharing a centromere), the nuclear envelope dissolves, centrosomes move to the poles and grow spindle fibers; fibers search and capture kinetochores, dragging chromosomes onto the metaphase plate (one laggard is pulled in last — the spindle checkpoint); sisters then split synchronously, envelopes re-form, and the cleavage furrow pinches the cell into two genetically identical daughters.
- **How to play**: scrub the phase slider or jump via the six steps; open the contrast note to compare with meiosis (pairing + crossing-over + two divisions → 4 different cells); space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?note=` `?spin=`.

#### The birthday paradox — why 23 people suffice

- **What you see**: every newcomer must dodge all occupied birthday slots — dodge probabilities multiply while pairs explode as n(n−1)/2; at 23 people the collision chance is 50.7 %, at 57 it is 99 %. Roll random birthdays and collisions flash red, arc-linked on the 365-slot year strip; a 2000-trial Monte-Carlo point converges onto the theory curve.
- **How to play**: drag N (1–80), roll again to hunt collisions, run Monte Carlo ×2000 to watch the law of large numbers; step 5 auto-demos the repeated collisions at N=23; space to play / pause.
- **URL parameters**: `?n=` `?t=` `?pause=` `?speed=` `?labels=`.

#### Thermoregulation — the body tunes itself

- **What you see**: the hypothalamus is a comparator — the mismatch between core temperature and set-point drives everything. Cool the environment: skin vessels constrict and blue, muscles shiver for heat. Warm it: vessels dilate red, sweat evaporates away heat. Toggle fever: the set-point steps 37→39 °C while the core is still 37, so you shiver chasing it; on recovery the set-point drops and sweating chases down. A mismatch meter and the core-vs-set-point chart track it all; push the extremes to saturate the loop — hypothermia / heat stroke.
- **How to play**: drag ambient temperature (−10…45 °C), toggle fever and exercise; step 5 replays the set-point chase live; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?env=` `?spin=`.

#### Sonar & B-mode ultrasound — assembling echoes into an image

- **What you see**: a piezo element turns a voltage pulse into sound; the packet travels down at constant speed and every acoustic-impedance interface reflects part of it back; echo time × c/2 is depth — the A-scan peaks align exactly with the 3D scene. As the transducer sweeps, each ping paints one brightness strip into the B-mode image, assembling the fish/organ cross-section line by line; toggle Doppler and flowing red blood cells shift the echo frequency, color-coded red/blue with a live flow-velocity readout.
- **How to play**: switch sonar ⇄ B-mode, fire single pings or run auto, drag target depth; step 5 fast-forwards a full B image; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?mode=` `?dop=` `?dep=` `?spin=`.

### Phase 16 · Astronomy & space-time, continued (4/4)

- [x] Cosmic expansion & redshift (galaxies pinned to a comoving grid while space itself stretches; photon wavelengths pulled en route; v=H₀d fitted live off the scatter, with a Doppler-mode contrast) ✅ **cosmic-expansion/**
- [x] Black hole & spaghettification (per-particle 1/r³ noodling; a mass slider shows horizon tides ∝ 1/M²; frozen and reddened from outside) ✅ **black-hole-tides/**
- [x] Gravitational waves (an inspiral stirs quadrupole ripples; test-mass rings deform under + / × polarization; retarded Michelson readout draws a true-SI chirp) ✅ **gravitational-waves/**
- [x] Superconductivity & the Meissner effect (Cooper pairs condense, resistance hits exactly zero, the field is expelled and the magnet levitates) ✅ **superconductivity/**

### Phase 16 deep dives

#### Cosmic expansion & redshift — it is space that stretches

- **What you see**: galaxies pinned to a comoving grid do not move through space; expansion multiplies every distance by a(t) — switch observer galaxies and everything still recedes (no center); v = H·d is measured live from the sim, not assumed; a photon flying to the observer has its wave train physically stretched by a(t), hue sliding blue→red with live z; a Doppler-contrast mode separates the two mechanisms; run it backwards and everything converges to the starting point.
- **How to play**: scrub the scale-factor slider or let it auto-expand, toggle observer A/B, fire a photon, drag the H constant; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Black hole & spaghettification — shredded first, or through first

- **What you see**: gravity falls as 1/r², so the gradient across a body grows as 1/r³ — far away head and foot feel the same pull, but near the hole the foot wins and the star stretches into a radial noodle, squeezed sideways; the horizon is where even photons fail to climb out (watch photon packets stall and turn back); toggle mass: a stellar-mass hole shreds the star outside the horizon, a supermassive one is 10¹⁰× gentler at the horizon and the star crosses intact; the outside view freezes/redshifts/fades the star at the horizon while the infaller sails through.
- **How to play**: toggle stellar ⇄ supermassive, outside ⇄ infaller view, drag the release distance; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?mass=` `?view=` `?body=` `?spin=`.

#### Gravitational waves — how do you see 10⁻²¹

- **What you see**: two compact objects inspiral on a sagging mesh, stirring compression/stretch quadrupole ripples that travel at c; as a ripple crosses a Michelson interferometer one arm lengthens while the other shortens (ΔL = h·L/2, h ~ 10⁻²¹ — smaller than a proton), the recombined fringe shifts, and the photodetector draws h(t): the inspiral chirp sweeping up in frequency and amplitude, a merger flash, then ringdown.
- **How to play**: drag chirp mass (sweep speed) and source distance (amplitude), toggle +/× polarization, jump steps to the merger; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Superconductivity & the Meissner effect — the field is shown the door

- **What you see**: at room temperature electrons scatter off the lattice (resistance) and field lines pierce the disc; cooling lets the lattice play matchmaker and electrons pair into Cooper pairs (amber→cyan, spring-linked); below Tc = 92 K they condense coherently and resistance drops to exactly zero (cliff in the R(T) inset); the Meissner moment: surface currents expel the field — lines bend around the disc, the key difference from a mere perfect conductor; the expelled field's gradient pops the magnet into levitation; toggle flux pinning to see type-II vortices lock the magnet mid-air, even upside down.
- **How to play**: drag the temperature slider (Tc is ticked) or let it auto-sweep, toggle pinning to compare wobble; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?pin=` `?spin=`.

### Phase 17 · Chemistry: energy, fire, air, the table (4/4)

- [x] Lead-acid battery (both plates grow PbSO₄ "snow", the acid thins and the hydrometer sinks, charging reverses it all) ✅ **lead-acid-battery/**
- [x] Oxyhydrogen & the fire triangle (radical branching 1→2→4 explodes; loudest at stoichiometry; remove any leg and fire dies) ✅ **oxyhydrogen-combustion/**
- [x] Acid rain (SO₂/NOx oxidize inside cloud droplets, pH dives and marble etches; scrubbers and catalysts to the rescue) ✅ **acid-rain/**
- [x] Maillard reaction (carbonyl + amino → Amadori → a burst of flavor molecules; the 140 °C threshold and browning) ✅ **maillard-reaction/**

### Phase 17 deep dives

#### Lead-acid battery — the battery where both plates snow

- **What you see**: on discharge the Pb plate releases electrons and the PbO₂ plate accepts them, and BOTH plates grow white PbSO₄ crystals while the acid is consumed — the electrolyte thins, and the hydrometer float sinks from 1.28 to 1.15 (a mechanic's charge meter); cell voltage follows acid concentration, 2.1 → 1.9 V; switch to charge and the current reverses, the "snow" melts back into Pb / PbO₂ and the acid returns — one of the few chemistries that fully reverses for thousands of cycles; thin grid plates give the huge area behind a car's few-hundred-amp crank; overcharge bubbles are the water-electrolysis side reaction.
- **How to play**: toggle discharge/charge, drag the load to 300 A to see voltage sag and cranking current, scrub the state of charge; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?load=` `?mode=` `?spin=`.

#### Oxyhydrogen & the fire triangle — the math of one-becomes-two

- **What you see**: H₂ and O₂ sit quietly even when mixed (the activation-barrier inset); one spark crosses the barrier locally — H·+O₂→OH·+O·, O·+H₂→OH·+H· — one radical becomes two, the branching tree goes 1→2→4→8, and past the threshold the whole volume reacts at once: 2H₂+O₂→2H₂O, the balloon pops into water mist with a shockwave; at exactly 2:1 nothing is left over and the bang is loudest; the pure-hydrogen jet burns calmly by contrast; the interactive fire triangle — lid off oxygen, water spray off heat, valve off fuel — shows every extinguisher's playbook.
- **How to play**: drag the mixture ratio to find the loudest point, ignite, switch to the pure-jet contrast, try all three ways to kill a flame; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?ratio=` `?mode=`.

#### Acid rain — the distance from pH 5.6 to 4.3

- **What you see**: natural rain is already pH 5.6 from CO₂; SO₂/NOx plumes ride the wind into cloud droplets and oxidize to sulfuric and nitric acid (molecule-level callouts), strong acids dissociate fully and the pH meter slides to 4.3 flashing red (with the ×10-per-unit H⁺ counter); the rain bubbles on a marble statue (CaCO₃+2H⁺→Ca²⁺+H₂O+CO₂↑), the lake fades past pH 5, the forest browns; toggle mitigation — scrubber plus catalytic converter — and the plume dims while cloud pH recovers.
- **How to play**: drag emission strength and wind to steer the 9-second plume journey; jump to step 6 for the before/after of mitigation; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Maillard reaction — why seared food smells

- **What you see**: below 100 °C molecules only jiggle (boiling caps at 100 °C, so boiled meat stays grey); past 140 °C a reducing sugar's carbonyl meets an amino group — condensation (a water molecule visibly leaves), Amadori rearrangement into a ketosamine, then hundreds of cracking pathways erupt into flavor particles labeled by family (pyrazines = nutty, furans = caramel, thiophenes = meaty); larger products polymerize into conjugated melanoidin chains and the surface turns golden then brown; a wet surface stalls while it dries; contrast with boiling and with caramelization (no amino group, a different chemistry starting ~160 °C).
- **How to play**: drag the pan past 140 °C for the flavor burst, drag water to see the dry-first stall, switch grill/boil/caramel scenes, try alkaline pH for speed; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?mode=` `?temp=` `?water=` `?spin=`.

### Phase 18 · Mechanisms: heat engines & locks (4/4)

- [x] Stirling engine (external combustion, the regenerator banks heat, efficiency nears the Carnot limit) ✅ **stirling-engine/**
- [x] Wankel rotary engine (a three-flank rotor = three chambers firing in parallel, three sparks per revolution, valveless) ✅ **wankel-rotary/**
- [x] Turbocharger (exhaust spins a turbine, the shared shaft boosts intake; lag and the wastegate) ✅ **turbocharger/**
- [x] Pin-tumbler lock (shear-line logic: the right key aligns five gaps, a wrong key jams one pin, single-pin picking) ✅ **pin-tumbler-lock/**

### Phase 18 deep dives

#### Stirling engine — the external-combustion engine that banks its heat

- **What you see**: a transparent cylinder glows red at the burner end and blue at the finned cold end while the displacer shuttles the working gas: isothermal expansion pushes the power piston, the trip through the regenerator deposits the gas's heat in wire mesh (the gradient bar charges), isothermal compression at the cold end costs less work — that difference is the output — and on the way back the mesh hands the heat back (discharge); heat is banked, not dumped, so efficiency approaches the Carnot limit between the same two temperatures; the pV loop traces in sync; external combustion means any heat source works — flame, sun, waste heat; two pistons at 90° phase on one crank self-sustain the cycle.
- **How to play**: drag source temperature (ΔT drives power) and rpm, open the pV chart, tap step 5 to cycle heat sources; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Wankel rotary — three cylinders hiding in one rotor

- **What you see**: inside the figure-8 epitrochoid housing, the three flanks of the triangular rotor form three chambers: each grows past the intake port, gets carried away and compressed, fires at minimum volume, then shrinks past the exhaust port; the chambers are staggered by exactly one shaft turn — three sparks per rotor revolution (eccentric shaft : rotor = 3:1, live counter); no valves and no reciprocating mass make it smooth and high-revving; the highlighted apex seals sweep long paths along the housing — wear, oil thirst and emissions.
- **How to play**: drag rpm, use slow motion to watch the three chambers trade strokes, switch cutaway / see-through views; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Turbocharger — power recovered from exhaust

- **What you see**: red-hot exhaust that would otherwise be dumped spins the turbine past 100,000 rpm (tachometer plus speed-blur rings); the shared shaft drives the blue compressor, packing extra air through the intercooler into the cylinders — more air with more fuel lets a small engine do a big engine's work (contrasted with the crank-hungry supercharger); hit "floor it" and the rpm curve jumps while the boost curve trails — the lag draws itself as the two curves separate; past the boost target the wastegate flap lifts and pressure plateaus.
- **How to play**: drag the throttle, stomp "floor it" to measure the lag in seconds, jam the wastegate to see the overboost warning; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Pin-tumbler lock — attack and defense on one shear line

- **What you see**: with no key the springs push every driver pin across the shear line and the plug jams (the try-turn jiggle fails); slide a key in and its peaks lift the stacks one by one — the right key lands all five pin gaps exactly on the glowing shear line and the plug turns, throwing the bolt; a wrong key leaves even one stack straddling the line and everything jams (the culprit glows red); the picking demo applies slight tension and lifts each pin until it "sets" — the plug creeps a hair and traps the driver above the line, five sets and it opens; spool security pins fake a set.
- **How to play**: compare right/wrong keys, try-turn to feel the jam, run the picking demo, drag the pin count 3–6; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?pins=` `?spin=`.

### Phase 19 · Life: adaptation, sensing, rhythm, photosynthetic strategy (4/4)

- [x] Altitude acclimatization & EPO (hypoxia drives the kidney's EPO pump and marrow output; content = saturation × capacity) ✅ **altitude-acclimatization/**
- [x] Olfactory receptors (GPCR → cAMP amplification cascade → spikes; a 3×4 combinatorial code matrix) ✅ **olfactory-receptor/**
- [x] Circadian rhythm (a PER/CRY self-repressing transcription loop oscillates ≈24 h; light pulses shift phase) ✅ **circadian-rhythm/**
- [x] C4 & CAM photosynthesis (CO₂-concentrating tricks: spatial relay vs time-shifted acid storage, photorespiration flatlines) ✅ **c4-cam-photosynthesis/**

### Phase 19 deep dives

#### Altitude & EPO — content = saturation × capacity

- **What you see**: climbing drops inspired PO₂ and arterial saturation sags past the 88% warning; the kidney senses hypoxia (HIF) and pumps EPO into the blood, EPO reaches the marrow (the femur cutaway ejects new cells), and hematocrit ramps along a days-long axis; the key insight: saturation stays low but more hemoglobin means oxygen CONTENT catches up to sea level; on descent the surplus red cells persist for weeks (altitude training); a doping note shows injected EPO bypassing the sensor toward dangerous blood thickening.
- **How to play**: drag altitude (Lhasa 3650 m / Everest base camp marks), scrub acute (hours) ⇄ chronic (weeks) timelines, toggle injected EPO to push hematocrit toward 68%; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?alt=` `?mode=` `?spin=`.

#### Olfactory receptors — one molecule detonates an amplification cascade

- **What you see**: odorants drift over the epithelium and the right shape docks into a GPCR pocket (one receptor accepts several molecules with different affinities); the receptor flexes, the G protein swaps GDP for GTP and splits; the freed subunit lights adenylyl cyclase and cAMP bursts ~100-fold; cAMP opens the cyclic-nucleotide-gated channel, Na⁺ influx depolarizes to threshold and spikes race to the glomerulus; a 3-odorant × 4-receptor matrix lights cell by cell — coffee, lemon and mint each own a pattern code, because the brain reads patterns.
- **How to play**: switch the three odors, drag concentration and airflow to move the spike rate, let step 6 auto-cycle the patterns; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?conc=` `?flow=` `?spin=`.

#### Circadian rhythm — the clock that winds itself

- **What you see**: at subjective morning CLOCK-BMAL1 docks on the per/cry promoters and transcription waves leave the nucleus; by day ribosomes build PER/CRY proteins up a slope; when enough accumulate they dimerize back into the nucleus and pry the activators off their own promoters (the feedback arrow lights); at night phosphorylation and degradation drain the concentration; below threshold the repression lifts and the loop restarts by itself — a 72-hour trace draws the ≈24 h free-running oscillation; time a light pulse: early night delays, late night advances (the phase-response curve — why morning sun beats jet lag), and constant darkness drifts to a 24.3 h period.
- **How to play**: pick a phase and fire a light pulse to watch the curve shift, toggle free-run to watch the drift, speed through three days; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### C4 & CAM — plants that give CO₂ an express lane

- **What you see**: a C3 rice leaf in dry heat closes its stomata to save water, internal CO₂ runs out, Rubisco grabs oxygen instead and the photorespiration waste counter spins; C4 corn packs CO₂ into malate with PEP carboxylase (which ignores O₂) in the mesophyll, relays it through plasmodesmata into the bundle sheath and releases it there — the sheath CO₂ gauge jumps ×10, photorespiration freezes at zero, at a cost of 2 extra ATP per CO₂; CAM cacti shift the same chemistry in time: stomata open at night to stock malic acid (the vacuole tank fills) and stay sealed by day while the store feeds the Calvin cycle; a closing strip lines up the three plants' water-vs-ATP ledgers.
- **How to play**: switch the three modes, drag heat/drought to move the stomata, scrub day/night in CAM to fill and drain the tank; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?mode=` `?hour=` `?heat=` `?spin=`.

### Phase 20 · Candidate-pool batch one (5/5)

- [x] Carbon cycle (four-reservoir box model: fossil carbon poured back in two centuries, Keeling curve and ocean acidification integrated live, net-zero inertia) ✅ **carbon-cycle/**
- [x] El Niño–Southern Oscillation (trades–thermocline–cold tongue–Walker cell coupled, Bjerknes feedback, La Niña overshoot) ✅ **el-nino/**
- [x] Radar speed gun (a moving mirror compresses wavefronts, beat f_d=2v/λ, the cosθ radial tax) ✅ **radar-speed/**
- [x] Smoke detector (Am-241 ionization chamber, a steady 50 pA, smoke mugs the ions — differential alarm) ✅ **smoke-detector/**
- [x] Airbag (30 g verdict in 10 ms, sodium azide makes 60 L of N₂ in 30 ms, venting catches the head) ✅ **airbag/**

### Phase 20 deep dives

#### Carbon cycle: one atom, four journeys

- **What you see**: a dome of atmosphere plus ocean, biota, a fossil-vault and a volcano, with CO₂ particles riding between them; in 1750 volcanoes emit 0.2 GtC/yr and weathering buries 0.2 — CO₂ pinned at 280 ppm; the "industrial" mode integrates historical emissions live — about 45% stays airborne, +2.5 ppm/yr, surface pH slides 8.20→8.06, and the Keeling curve (with its seasonal breathing band) draws itself out to 2125; the "net zero" mode shows the sky's inertia: excess CO₂ drains with a ~20-year halving time.
- **How to play**: switch the three scenarios, drag the emissions slider and read the ledger, erupt the volcano, scrub 1750–2125; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?em=` `?mode=` `?spin=`.

#### El Niño–Southern Oscillation: slack the trades and the Pacific turns

- **What you see**: a Pacific cross-section where trades pile warm water west and the cold tongue wedges against Peru, thermocline deep west / shallow east; drag the phase slider and the trades slacken, warm water sloshes back, the eastern thermocline sinks ~100 m, upwelling and the fish school collapse, and the rains move from Indonesia to the mid-Pacific; the Bjerknes feedback formula runs live; "play timeline" walks a 2–7 year irregular beat that overshoots into La Niña.
- **How to play**: phase slider −1 (strong La Niña) ↔ +1 (strong El Niño), timeline playback of the Niño3.4 index; space to play / pause.
- **URL parameters**: `?phase=` `?t=` `?pause=` `?speed=` `?labels=` `?mode=` `?spin=`.

#### Radar speed gun: squeezed wavefronts are speed

- **What you see**: a gun beaming 24.125 GHz as blue wavefront rings; an approaching car is a moving mirror — the red reflected rings bunch up (they stretch for a receding one); the mixer's beat f_d = 2v/λ computes live — 90 km/h is a 4 kHz hum; drag the beam angle to 45° and the reading drops to v·cosθ, the systematic under-read; a scope draws transmitted, reflected and the beat.
- **How to play**: drag speed / beam angle / band (X/K/Ka), toggle approaching / receding / static target and compare ring spacing; space to play / pause.
- **URL parameters**: `?v=` `?ang=` `?band=` `?dir=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Smoke detector: a wisp of smoke cuts a current

- **What you see**: α tracks from an Am-241 source ripping ion pairs out of the air, a 9 V bias harvesting them into a steady ~50 pA; light a cigarette and 0.1–1 µm grains mug the ions mid-flight — the sensing chamber's current sags past the threshold while the sealed reference chamber holds still, and the differential verdict fires an 85 dB horn; "remove the source" to see the fault self-test.
- **How to play**: smoke slider / light up / air out / hush, pull the source for the fault state, watch the twin current curves and the −25% line; space to play / pause.
- **URL parameters**: `?smoke=` `?nosrc=` `?pause=` `?speed=` `?labels=` `?spin=`.

#### Airbag: 30 milliseconds of chemistry, 60 liters of nitrogen

- **What you see**: a slow-motion bench crash into a wall at 56 km/h — the MEMS sensor rules "≥30 g sustained" within 10 ms; a hot wire fires sodium azide, 2NaN₃→2Na+3N₂, and the 60 L bag fills in 30 ms; the head arrives just as the bag peaks and side vents bleed the gas, keeping load under 60 g; turn the belt off and the half-filled bag bottoms out, loads going red — the "supplementary" in SRS; "pothole 8 g" shows the sensor holding its nerve.
- **How to play**: scrub the 0–150 ms timeline frame by frame, slow-mo down to 0.02×, and try all four belt/bag combinations; space to play / pause.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?labels=` `?belt=` `?bag=` `?mode=` `?spin=`.

### Phase 33 · Cross-family gap-filling, batch 5 (12/12)

- [x] Blackbody radiation & thermal imaging (live Planck curves, Wien's law and σT⁴, iron from invisible to white-hot across the Draper point, an IR night-street preset, emissivity slider) ✅ **blackbody-radiation/**
- [x] Photoelectric effect (photon packets hit the cathode, three metals' work functions, red light at full brightness yields nothing, the stopping voltage turns electrons mid-flight, Millikan K_max–f line with slope h) ✅ **photoelectric-effect/**
- [x] Geysers (a narrow throat over a deep chamber, a 12 m column lifting the boiling point to 121 °C, one bubble collapses the pressure and the superheated core flashes ×1500, heat-flux slider sets the cycle, pebble trigger, live saturation curve) ✅ **geyser/**
- [x] Gravity assist (true two-body integration near the planet, heliocentric ⇄ planetary frame toggle, trailing flybys accelerate and leading ones brake, a Jupiter→Saturn grand tour with a Δv ledger versus the direct Hohmann baseline) ✅ **gravity-assist/**
- [x] Reaction wheel & attitude control (PD pointing loop, the L-ledger locked at zero while the flywheel counter-spins, saturation drift alarm, magnetorquer unloading via τ=m×B, Kp/Kd feel) ✅ **reaction-wheel/**
- [x] Mass spectrometer (70 eV ionization, qV acceleration, sector-magnet arcs r=√(2mV/q)/B, a magnetic scan growing the spectrum peak by peak, methanol/acetone/CO₂ samples, the M+1 isotope peak counting carbons) ✅ **mass-spectrometry/**
- [x] Allergic reaction (silent sensitization: IgE arming mast cells; second exposure cross-links two IgE and the granules erupt, vessels leak and blood pressure wobbles; anaphylaxis mode with an epinephrine counter-punch, antihistamine blocking H1) ✅ **allergy/**
- [x] PET scan (FDG uptake hot spot, F-18 decaying with a 110 min half-life, positrons annihilating into back-to-back 511 keV γ, a 6 ns coincidence window, randoms fraction, LOR back-projection building the bright spot; switch the window off and noise drowns the image) ✅ **pet-scan/**
- [x] Pressure cooker (live Antoine saturation curve, temperature sails through 100 °C toward 115 °C once the valve locks, Q10 doneness integral, the weighted valve chattering in relaxation oscillation, the vacuum-locked lid safety demo) ✅ **pressure-cooker/**
- [x] Maglev (EMS attraction levitation with a 10 mm closed-loop gap that slams shut without feedback; EDS superconducting repulsion that floats past 150 km/h and retracts its gear; three-way drag breakdown and energy per km) ✅ **maglev/**
- [x] Cyclone separator (free vortex v_θ∝1/r, ≈65 g at the wall, Stokes drift slamming dust into a wall curtain that spirals into the cup, grade-efficiency curve with live d50, a tracer particle reporting its fate) ✅ **cyclone-separator/**
- [x] Blockchain & proof of work (a real in-page SHA-256, live avalanche demo, mining is genuine hashing for leading zeros, three miners racing with win rate = hashrate share, tampering burns the chain red, a reorg attack that never catches up below 51%) ✅ **blockchain/**

### Phase 33 deep dives (condensed)

- **blackbody-radiation/** — An anvil in a dark forge holds an iron ingot whose glow colour is integrated from Planck's curve across the visible band; below 798 K it shines only in infrared. Drag temperature from 290 to 1800 K and the λmax marker slides right while εσT⁴ drives the brightness; switch to IR camera mode, then the night-street preset: the visible scene goes black while a 310 K body and a 385 K stack flare in false colour. URL: `?temp=` `?mode=` `?t=` `?pause=` `?speed=` `?labels=`
- **photoelectric-effect/** — A vacuum photocell with a colour-coded photon beam and a metal cathode (Cs 2.1 / Na 2.28 / Zn 4.3 eV). Red light at full intensity moves the ammeter zero; a faint UV beam jets electrons instantly; drag the retarding voltage to V_s and the fastest electron turns back mid-flight. The Millikan plot accumulates measured points on a line whose slope is h. URL: `?metal=` `?wl=` `?V=` `?t=` `?pause=` `?speed=` `?labels=`
- **geyser/** — A cutaway underground: a magma sill heats a chamber beneath a narrow throat. The 12 m column holds the bottom at 2.17 bar where boiling means 121 °C — so the superheated water quietly shimmers until one bubble lifts the column, pressure collapses and the whole core flashes to steam. Heat flux sets the period, throat radius acts as the valve, and dropping a pebble triggers early nucleation when superheat allows. URL: `?Q=` `?r=` `?t=` `?pause=` `?speed=` `?labels=`
- **gravity-assist/** — The spacecraft falls past Jupiter on a true integrated hyperbola. In the planet frame, in-speed equals out-speed and the trajectory just bends by δ; flip to the heliocentric frame mid-flyby and watch the speed jump from 13.0 to 23.7 km/s — stolen orbital momentum, with the planet recoiling ~10⁻²¹ m/s. A grand-tour preset chains Jupiter→Saturn against the direct-Hohmann Δv cost. URL: `?b=` `?vinf=` `?side=` `?planet=` `?t=` `?pause=` `?speed=` `?labels=`
- **reaction-wheel/** — A satellite with a visible spoked flywheel: command +90° and the PD loop torques the wheel while the bus rotates the other way, the L-ledger pinned at 0.000. Push the wheel to its red limit and the bus drifts — alarm — then magnetorquers dump the momentum into Earth's field and the ledger drains green. Kp/Kd sliders tune sluggish, oscillatory or critically damped responses. URL: `?ang=` `?kp=` `?kd=` `?t=` `?pause=` `?speed=` `?labels=`
- **mass-spectrometry/** — Ions fly a real instrument path: ionizing beam, accelerator slits, a 90° sector magnet drawn as arcs from r=√(2mV/q)/B, then the exit slit. Scanning B walks each mass across the slit and the spectrum grows peak by peak (methanol 31/29/15…). Change the accelerating voltage and every orbit deforms while the reconstructed m/z positions stay put. URL: `?sample=` `?V=` `?B=` `?t=` `?pause=` `?speed=` `?labels=`
- **allergy/** — Act one is eerily quiet: dendritic cell presents, Th2 skews, B cells switch to IgE, and 48 Y-shaped antibodies studded on a mast cell wait for weeks. Act two: one pollen grain simultaneously binds two IgE — cross-link, ripple, and hundreds of magenta granules erupt; the vessel wall leaks and the monitor wobbles. Anaphylaxis mode fires every cell; epinephrine reverses the crash; antihistamine bounces H1-blocked histamine off. URL: `?dose=` `?anti=1` `?t=` `?pause=` `?speed=` `?labels=`
- **pet-scan/** — A crystal ring surrounds a torso slab with a glucose-hungry tumour. Decays flash at uptake-weighted points; each positron flies 1–2 mm and annihilates into two back-to-back 511 keV γ; crystals flashing within 6 ns draw a line of response across the slab. Hundreds of LORs back-project into a bright spot — then switch the coincidence window off and watch random pairs flood the reconstruction with grey. URL: `?win=` `?mode=brain|torso` `?t=` `?pause=` `?speed=` `?labels=`
- **pressure-cooker/** — A cutaway pot on a stove: with the lid open the boil pins the thermometer at 100 °C; latch the regulator and the pressure climbs to 1.7 bar while the temperature sails through 100 °C, the weighted valve chattering steam in relaxation oscillations. The working point rides the Antoine saturation curve in the side plot; doneness integrates with Q10≈2; and cracking the lid without venting demonstrates the vacuum lock. URL: `?P=` `?heat=` `?lid=` `?t=` `?pause=` `?speed=` `?labels=`
- **maglev/** — One train, two levitation routes. EMS wraps the guideway skirt with attracting magnets held at a 10 mm gap by a kilohertz feedback loop — switch feedback off and the gap collapses in two seconds with sparks. EDS carries superconducting coils past track loops to induce repulsion: below 150 km/h the gear wheels carry the train, past it the train visibly floats and retracts its gear. Drag and energy per seat-km update live. URL: `?mode=ems|eds` `?v=` `?fb=` `?t=` `?pause=` `?speed=` `?labels=`
- **cyclone-separator/** — A translucent cyclone with a tangential inlet: the outer vortex spirals down while cleaned air reverses up the core. Dust particles feel a centrifugal field ~65 g at the wall, slam into it and hang as a curtain sliding into the cup. The grade-efficiency plot moves d50 live as you crank the fan — finer and finer grains start curving into the wall; a glowing tracer particle narrates its own fate. URL: `?v=` `?d=` `?cut=1` `?t=` `?pause=` `?speed=` `?labels=`
- **blockchain/** — Bevelled blocks hang in a chain joined by hash-seal rings, with three miners genuinely computing SHA-256 for a nonce whose hash starts with d zeros (65,536 tries expected at d=4). A winner flashes gold and its block snaps onto the chain. Tamper mode rewrites an old transaction: that block's hash changes and everything after burns red and shears off; a reorg attack then re-mines against the honest chain and never catches up below 51% hashrate. URL: `?d=` `?atk=` `?t=` `?pause=` `?speed=` `?labels=`

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
fission-chain/         Fission chain reaction (Three.js, CDN)
rainbow/               Rainbow & secondary bow (Three.js, CDN)
mitosis/               Mitosis (Three.js, CDN)
birthday-paradox/      Birthday paradox (Canvas 2D, zero dependencies)
thermoregulation/      Thermoregulation (Three.js, CDN)
sonar-ultrasound/      Sonar & B-mode ultrasound (Three.js, CDN)
cosmic-expansion/      Cosmic expansion & redshift (Three.js, CDN)
black-hole-tides/      Black hole & spaghettification (Three.js, CDN)
gravitational-waves/   Gravitational waves (Three.js, CDN)
superconductivity/     Superconductivity & Meissner effect (Three.js, CDN)
lead-acid-battery/     Lead-acid battery (Three.js, CDN)
oxyhydrogen-combustion/ Oxyhydrogen & the fire triangle (Three.js, CDN)
acid-rain/             Acid rain (Three.js, CDN)
maillard-reaction/     Maillard reaction (Three.js, CDN)
stirling-engine/       Stirling engine (Three.js, CDN)
wankel-rotary/         Wankel rotary engine (Three.js, CDN)
turbocharger/          Turbocharger (Three.js, CDN)
pin-tumbler-lock/      Pin-tumbler lock (Three.js, CDN)
altitude-acclimatization/ Altitude acclimatization & EPO (Three.js, CDN)
olfactory-receptor/    Olfactory receptors (Three.js, CDN)
circadian-rhythm/      Circadian rhythm (Three.js, CDN)
c4-cam-photosynthesis/ C4 & CAM photosynthesis (Three.js, CDN)
ball-screw/            Ball screw: recirculating balls, efficiency curves, self-lock geometry (Three.js, CDN)
bike-derailleur/       Bike derailleur: parallelogram, chain hop, freehub ratchet (Three.js, CDN)
flywheel/              Flywheel & KERS: E=½Iω² and the material red line (Three.js, CDN)
defibrillator/         Defibrillator: an excitable mesh reset to zero (Three.js, CDN)
blood-pressure/        Blood pressure monitor: an envelope that reads SYS/MAP/DIA (Three.js, CDN)
3d-printing/           3D printing: slicing, layer-by-layer extrusion, the 45° rule (Three.js, CDN)
tornado/               Tornado: stretching makes angular momentum a disaster (Three.js, CDN)
rain-shadow/           Rain shadow: adiabats, foehn wind and the desert next door (Three.js, CDN)
benford/               Benford's law: leading digits on a log circle (Three.js, CDN)
turing-machine/        Turing machine: tape, head and the universal rule table (Three.js, CDN)
wing-lift/             Wing lift: angle of attack, stall and flaps (Three.js, CDN)
jet-engine/            Jet engine: compressor, burner, turbine and thrust (Three.js, CDN)
ship-buoyancy/         Buoyancy & stability: Archimedes, GM and capsize (Three.js, CDN)
terminal-velocity/     Terminal velocity: drag catches gravity, the canopy swaps worlds (Three.js, CDN)
propeller/             Propeller & pitch: a rotating wing, twist and the constant-speed governor (Three.js, CDN)
submarine-ballast/     Submarine ballast: fixed volume, variable weight (Three.js, CDN)
hot-air-balloon/       Hot-air balloon: lift from a temperature gap (Three.js, CDN)
reynolds-number/       Wind tunnel & Reynolds number: four regimes and similarity (Three.js, CDN)
helicopter-tail-rotor/ Helicopter anti-torque: tail rotor, failure and autorotation (Three.js, CDN)
venturi-flow/          Venturi tube & flow: continuity, Bernoulli and the atomizer (Three.js, CDN)
pascal-press/          Pascal's hydraulic press: pressure transmission and force gain (Three.js, CDN)
sailing-upwind/        Sailing upwind: the sail as a vertical wing and the polar plot (Three.js, CDN)
water-hammer/          Water hammer: ρcΔv, the 4L/c period and the air chamber (Three.js, CDN)
siphon/                The siphon: the atmosphere over the hill and the 10.3 m snap (Three.js, CDN)
magnus-effect/         The Magnus effect: rotor pressure, banana kick, rotor ship (Three.js, CDN)
cavitation/            Cavitation & supercavitation: σ, pitting and the gas shroud (Three.js, CDN)
tsunami/               Tsunami & shallow-water waves: √(gh), Green's law, drawback (Three.js, CDN)
mach-cone/             Sonic boom & the Mach cone: wavefront envelope, μ = arcsin(1/M) (Three.js, CDN)
vortex-street/         Kármán vortex street: alternating shedding, St, resonance (Three.js, CDN)
stokes-centrifuge/     Stokes settling & the centrifuge: v_t, RCF, blood bands (Three.js, CDN)
capillarity/           Capillarity & surface tension: Jurin's law, contact angle, mercury (Three.js, CDN)
kelvin-helmholtz/      Kelvin–Helmholtz billows: cat's-eye roll-up and mixing (Three.js, CDN)
poiseuille/            Poiseuille flow: parabolic profile, the r⁴ law, stenosis (Three.js, CDN)
hydrofoil/             The hydrofoil: foil lift, the takeoff hump, cavitation (Three.js, CDN)
swell/                 Swell & deep-water waves: dispersion, c_p = 2c_g, packets (Three.js, CDN)
centrifugal-pump/      Centrifugal pump & cavitation: H-Q duty point, affinity laws, NPSH (Three.js, CDN)
non-newtonian/         Non-Newtonian fluids: shear-thinning/thickening, Bingham yield (Three.js, CDN)
boundary-layer/        Boundary layer & separation: no-slip, dimples, the root of stall (Three.js, CDN)
tropical-cyclone/      Tropical cyclone: a Carnot heat engine (Three.js, CDN)
ecg/                   The ECG: the cardiac dipole projects P-QRS-T (Three.js, CDN)
exoplanet-transit/     Exoplanets: the transit method (Three.js, CDN)
information-entropy/   Information entropy: Shannon's limit, Huffman hugging it (Three.js, CDN)
elevator/              Elevator & counterweight: traction, P = Δm·g·v, the safety gear (Three.js, CDN)
laval-nozzle/          de Laval nozzle & shock diamonds: choking, area-Mach, plumes (Three.js, CDN)
rayleigh-benard/       Rayleigh–Bénard convection: instability at Ra 1708 (Three.js, CDN)
river-meander/         River meanders & oxbow lakes: helical flow, cutoffs (Three.js, CDN)
flapping-flight/       Flapping flight: downstroke = lift + thrust, vortex rings (Three.js, CDN)
cvt/                   The CVT: sliding sheaves, continuously variable ratio (Three.js, CDN)
diesel-engine/         The diesel engine: compression ignition, the square shoulder (Three.js, CDN)
harmonic-oscillator/   The harmonic oscillator: phase circle, damping spiral, resonance (Three.js, CDN)
foucault-pendulum/     Foucault's pendulum: 15°·sin φ precession (Three.js, CDN)
inverter/              Inverter & rectifier: H-bridge, SPWM, LC filtering (Three.js, CDN)
thermoelectric/        Seebeck ⇄ Peltier: thermoelectric reversibility (Three.js, CDN)
piezoelectricity/      Piezoelectricity: squeeze for sparks, drive for ultrasound (Three.js, CDN)
catalytic-converter/   The catalytic converter: three-way chemistry, light-off (Three.js, CDN)
nitrogen-cycle/        The nitrogen cycle: three fixation keys, runoff (Three.js, CDN)
antibiotic-resistance/ Antibiotics & resistance: selection is a sieve (Three.js, CDN)
reflex-arc/            The spinal reflex arc: one synapse, 50 ms (Three.js, CDN)
phototropism/          Phototropism: auxin pools on the shaded side (Three.js, CDN)
roche-limit/           The Roche limit: tides tear moons into rings (Three.js, CDN)
lagrange-points/       Lagrange points: the effective-potential landscape (Three.js, CDN)
cepheid/               Cepheid variables: the period-luminosity yardstick (Three.js, CDN)
game-of-life/          Conway's Game of Life: B3/S23, Turing-complete (Three.js, CDN)
monte-carlo/           The Monte Carlo method: π from counting, 1/√N error (Three.js, CDN)
quartz-watch/          The quartz watch: 32768 = 2¹⁵, divided to 1 Hz (Three.js, CDN)
hydroelectric/         Hydro & pumped storage: the grid's biggest battery (Three.js, CDN)
lidar/                 LiDAR: ToF point clouds paint the street (Three.js, CDN)
ackermann-steering/    Ackermann steering: the geometry behind two steering angles (Three.js, CDN)
buck-converter/        Buck converter: Vout = D·Vin at 95% efficiency (Three.js, CDN)
rayleigh-sky/          Rayleigh scattering: why the sky is blue (Three.js, CDN)
thin-film/             Thin-film interference: a bubble's rainbow as a thickness map (Three.js, CDN)
supercooling/          Supercooling & nucleation: the r* barrier and flash freezing (Three.js, CDN)
transpiration/         Transpiration: cohesion-tension lifts water 100 m (Three.js, CDN)
glacier-flow/          Glacier flow: Glen's law, advance/retreat, U-valleys (Three.js, CDN)
tidal-locking/         Tidal locking: a sin2δ brake until spin = orbit (Three.js, CDN)
harmonic-drive/        Harmonic drive: elastic flex deformation and travelling-wave tooth creep (Three.js, CDN)
chain-drive/           Chain drive: a polygonal wrap makes chain speed pulse once per tooth (Three.js, CDN)
chain-hoist/           Chain hoist: twin differential sprockets and ratchet self-lock (Three.js, CDN)
radiocarbon-dating/    Radiocarbon dating: cosmic-ray production, death-switched decay clock, tree-ring calibration (Three.js, CDN)
flame-spectra/         Flame colors & atomic spectra: electron jumps light each element's fingerprint (Three.js, CDN)
crystal-field/         Crystal-field colors: octahedral splitting, d-d transitions, complementary transmission (Three.js, CDN)
root-nodule/           Root nodules: flavonoid passwords, infection threads, leghemoglobin at the gate (Three.js, CDN)
bone-remodeling/       Bone remodeling: osteoclasts dig, osteoblasts fill, Wolff's law re-trusses under load (Three.js, CDN)
antibody-diversity/    Antibody diversity: V(D)J recombination as gene shuffling (Three.js, CDN)
quantum-tunneling/     Quantum tunneling: a wavefunction's exponential ledger at a finite barrier (Three.js, CDN)
superfluidity/         Superfluid helium: two-fluid split, self-emptying climbing film, fountain, vortices (Three.js, CDN)
skin-effect/           Skin effect: watch current get squeezed to the surface (Three.js, CDN)
gravitational-lensing/ Gravitational lensing: drag a source to bloom an Einstein ring, live ray-traced sky view (Three.js, CDN)
hohmann-transfer/      Hohmann transfer: the minimum-fuel climb via two burns and a half-ellipse coast (Three.js, CDN)
eclipse-saros/         Eclipses &amp; the Saros cycle: shadow cones, eclipse seasons, totality paths, saros repeats (Three.js, CDN)
photolithography/      Photolithography: resist, mask exposure, etch and the EUV diffraction limit (Three.js, CDN)
kalman-filter/         Kalman filtering: radar tracking and GPS+IMU fusion with a breathing error ellipse (Three.js, CDN)
simulated-annealing/   Simulated annealing: roam hot, settle cold on an energy landscape (Three.js, CDN)
e-ink/                 E-Ink: microcapsule pigments, bistability and the full-screen flash (Three.js, CDN)
xerography/            Xerography: drum potential heatmap, laser-written latent image, toner, fusing (Three.js, CDN)
hydroplaning/          Tire hydroplaning: a water wedge lifts the tire and grip evaporates (Three.js, CDN)
atmospheric-reentry/   Atmospheric reentry: live-integrated bow-shock heating, ablation and blackout (Three.js, CDN)
ramjet/                Ramjet: ram compression and the air-breathing thrust spectrum (Three.js, CDN)
blackbody-radiation/  Blackbody radiation: Wien shift, Stefan–Boltzmann and the infrared eye (Three.js, CDN)
photoelectric-effect/ Photoelectric effect: light quanta, work function, stopping voltage (Three.js, CDN)
geyser/               Geyser: superheated column, flash boiling and the refill cycle (Three.js, CDN)
gravity-assist/       Gravity assist: hyperbolic flyby, frame switch and the Δv ledger (Three.js, CDN)
reaction-wheel/       Reaction wheel: momentum-conserving slews and magnetic unloading (Three.js, CDN)
mass-spectrometry/    Mass spectrometer: ionization, magnetic sectors, mass fingerprints (Three.js, CDN)
allergy/              Allergic reaction: sensitization, cross-linking, degranulation (Three.js, CDN)
pet-scan/             PET scan: positron annihilation, coincidence lines, tomography (Three.js, CDN)
pressure-cooker/      Pressure cooker: saturation curve, regulator valve, vacuum-locked lid (Three.js, CDN)
maglev/               Maglev: EMS attraction loops vs EDS induced repulsion (Three.js, CDN)
cyclone-separator/    Cyclone separator: free vortex, centrifugal field, grade efficiency (Three.js, CDN)
blockchain/           Blockchain: real SHA-256, proof of work, longest chain (Three.js, CDN)
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
- **How to play**: `space` play / pause; scrub with the phase slider; **grab the pawl tip and rock it by hand** — forward strokes tick the wheel along, backward strokes lock it dead; press the "reverse drive demo" to see why the wheel won't move.
- **URL parameters**: `?t=` `?pause=` `?speed=` `?rev=` `?labels=` `?spin=`.

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
