import json

courses_data = {
    "chemistry-ss1-matter-atomic-structure-periodic-table": {
        "title": "Chemistry SS 1 Diagnostic Assessment",
        "description": "Assess foundational comprehension of matter, atomic particles, electron configuration, periodic trends, and basic bonding.",
        "lesson": "particulate-nature-of-matter-states-and-kinetic-theory",
        "questions": [
            ("Which of the following processes provides direct physical evidence for the kinetic theory of matter?",
             ["Osmosis and Brownian motion", "Neutralization and precipitation", "Electrolysis and reduction", "Fractional distillation"],
             "A", "Brownian motion and diffusion/osmosis demonstrate that particles of matter are in continuous random motion.", "WA-CHM-PHY-01", "particulate-nature-of-matter-states-and-kinetic-theory"),
            ("An atom has an atomic number of 17 and a mass number of 35. How many neutrons does its nucleus contain?",
             ["17", "18", "35", "52"],
             "B", "Neutrons = Mass Number (35) - Atomic Number (17) = 18.", "WA-CHM-ATM-01", "subatomic-particles-isotopes-and-relative-atomic-mass"),
            ("Naturally occurring chlorine consists of 75% $^{35}\\text{Cl}$ and 25% $^{37}\\text{Cl}$. What is its relative atomic mass?",
             ["35.0", "35.5", "36.0", "37.0"],
             "B", "$A_r = (0.75 \\times 35) + (0.25 \\times 37) = 26.25 + 9.25 = 35.5$.", "WA-CHM-ATM-01", "subatomic-particles-isotopes-and-relative-atomic-mass"),
            ("What is the ground-state electronic configuration of an atom of calcium ($Z = 20$)?",
             ["$1s^2 2s^2 2p^6 3s^2 3p^6 3d^2$", "$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2$", "$1s^2 2s^2 2p^6 3s^2 3d^8$", "$1s^2 2s^2 2p^6 3p^6 4s^4$"],
             "B", "Following the Aufbau principle, the 4s orbital fills before 3d: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2$.", "WA-CHM-ATM-02", "electronic-configurations-in-spdf-orbitals-and-rules"),
            ("Which rule states that electrons occupy degenerate orbitals singly with parallel spins before pairing occurs?",
             ["Aufbau principle", "Pauli exclusion principle", "Hund's rule of maximum multiplicity", "Heisenberg uncertainty principle"],
             "C", "Hund's rule dictates that every orbital in a subshell is singly occupied before any orbital is doubly occupied.", "WA-CHM-ATM-02", "electronic-configurations-in-spdf-orbitals-and-rules"),
            ("Across Period 3 of the periodic table from sodium to chlorine, the atomic radius generally:",
             ["Increases due to extra electron shells", "Decreases due to increasing effective nuclear charge", "Remains constant", "Increases then sharply decreases"],
             "B", "Protons are added to the same principal shell, pulling electrons closer and decreasing atomic radius.", "WA-CHM-ATM-03", "periodic-trends-atomic-radii-ionization-energy-electronegativity"),
            ("Which element has the highest first ionization energy among the following?",
             ["Sodium ($\\text{Na}$)", "Magnesium ($\\text{Mg}$)", "Chlorine ($\\text{Cl}$)", "Argon ($\\text{Ar}$)",],
             "D", "Noble gases have stable octet valence shells, resulting in extremely high ionization energies.", "WA-CHM-ATM-03", "periodic-trends-atomic-radii-ionization-energy-electronegativity"),
            ("An electrovalent (ionic) bond is most typically formed between:",
             ["Two non-metals with high electronegativities", "A metal with low ionization energy and a non-metal with high electron affinity", "Two transition metals", "A noble gas and a halogen"],
             "B", "Ionic bonding involves complete electron transfer between an electropositive metal and electronegative non-metal.", "WA-CHM-ATM-04", "electrovalent-covalent-and-coordinate-bonding"),
            ("In the formation of an ammonium ion ($\\text{NH}_4^+$), the bond formed between $\\text{NH}_3$ and $\\text{H}^+$ is:",
             ["Electrovalent bond", "Coordinate (dative) covalent bond", "Hydrogen bond", "Metallic bond"],
             "B", "Both shared electrons originate from the lone pair on the nitrogen atom in ammonia.", "WA-CHM-ATM-04", "electrovalent-covalent-and-coordinate-bonding"),
            ("What is the correct chemical formula for iron(III) tetraoxosulphate(VI)?",
             ["$\\text{FeSO}_4$", "$\\text{Fe}_2(\\text{SO}_4)_3$", "$\\text{Fe}_3(\\text{SO}_4)_2$", "$\\text{Fe}_2\\text{SO}_4$"],
             "B", "$\\text{Fe}^{3+}$ has valency 3 and $\\text{SO}_4^{2-}$ has valency 2, crossing over gives $\\text{Fe}_2(\\text{SO}_4)_3$.", "WA-CHM-STO-01", "chemical-formulas-valency-rules-and-iupac-nomenclature"),
            ("The correct IUPAC name of $\\text{KMnO}_4$ is:",
             ["Potassium permanganate", "Potassium tetraoxomanganate(VII)", "Potassium manganite", "Potassium oxomanganese(IV)"],
             "B", "Manganese has oxidation state $+7$, hence systematic IUPAC is potassium tetraoxomanganate(VII).", "WA-CHM-STO-01", "chemical-formulas-valency-rules-and-iupac-nomenclature"),
            ("Which state of matter has a fixed volume but takes the shape of its container?",
             ["Solid", "Liquid", "Gas", "Plasma"],
             "B", "Liquids maintain constant volume due to cohesive intermolecular forces while flowing to conform to containers.", "WA-CHM-PHY-01", "particulate-nature-of-matter-states-and-kinetic-theory")
        ]
    },
    "chemistry-ss2-bonding-stoichiometry-acids-bases-salts": {
        "title": "Chemistry SS 2 Diagnostic Assessment",
        "description": "Identify weak points in mole stoichiometry, gas laws, acid-base theories, salt preparation, and water hardness.",
        "lesson": "the-mole-concept-molar-mass-and-avogadro-calculations",
        "questions": [
            ("Calculate the number of moles in $10\\text{ g}$ of calcium trioxocarbonate(IV) ($\\text{CaCO}_3$, $M = 100\\text{ g/mol}$).",
             ["$0.01\\text{ mol}$", "$0.10\\text{ mol}$", "$1.0\\text{ mol}$", "$10.0\\text{ mol}$"],
             "B", "$n = \\frac{m}{M} = \\frac{10\\text{ g}}{100\\text{ g/mol}} = 0.10\\text{ mol}$.", "WA-CHM-STO-03", "the-mole-concept-molar-mass-and-avogadro-calculations"),
            ("What volume does $0.5\\text{ moles}$ of an ideal gas occupy at standard temperature and pressure (s.t.p., molar volume $= 22.4\\text{ dm}^3$)?",
             ["$5.6\\text{ dm}^3$", "$11.2\\text{ dm}^3$", "$22.4\\text{ dm}^3$", "$44.8\\text{ dm}^3$"],
             "B", "$V = n \\times 22.4\\text{ dm}^3 = 0.5 \\times 22.4 = 11.2\\text{ dm}^3$.", "WA-CHM-STO-03", "the-mole-concept-molar-mass-and-avogadro-calculations"),
            ("According to Boyle's law, for a fixed mass of gas at constant temperature, pressure is:",
             ["Directly proportional to volume", "Inversely proportional to volume", "Directly proportional to Kelvin temperature", "Inversely proportional to Kelvin temperature"],
             "B", "Boyle's law: $P_1 V_1 = P_2 V_2$ at constant temperature ($P \\propto 1/V$).", "WA-CHM-PHY-01", "gas-laws-boyle-charles-general-gas-equation"),
            ("A sample of gas has a volume of $300\\text{ cm}^3$ at $27^\\circ\\text{C}$. What is its volume at $127^\\circ\\text{C}$ at constant pressure?",
             ["$225\\text{ cm}^3$", "$350\\text{ cm}^3$", "$400\\text{ cm}^3$", "$600\\text{ cm}^3$"],
             "C", "Convert to Kelvin: $T_1 = 300\\text{ K}$, $T_2 = 400\\text{ K}$. $V_2 = 300 \\times (400/300) = 400\\text{ cm}^3$.", "WA-CHM-PHY-01", "gas-laws-boyle-charles-general-gas-equation"),
            ("What is the pH of a $0.001\\text{ mol/dm}^3$ aqueous solution of hydrochloric acid ($\\text{HCl}$)?",
             ["1", "2", "3", "11"],
             "C", "$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3$.", "WA-CHM-INO-01", "acids-bases-ph-scale-and-neutralization"),
            ("Which of the following describes an amphoteric oxide?",
             ["Reacts only with acids", "Reacts only with bases", "Reacts with both acids and bases to form salts and water", "Does not react with either acids or bases"],
             "C", "Amphoteric oxides (such as $\\text{Al}_2\\text{O}_3$ and $\\text{ZnO}$) react with both strong acids and strong alkalis.", "WA-CHM-INO-01", "acids-bases-ph-scale-and-neutralization"),
            ("Which method is most appropriate for preparing insoluble barium sulphate ($\\text{BaSO}_4$)?",
             ["Action of dilute acid on a metal", "Direct combination of elements", "Precipitation (double decomposition)", "Titration of acid and alkali"],
             "C", "Insoluble salts are prepared by precipitation: $\\text{BaCl}_{2(aq)} + \\text{Na}_2\\text{SO}_{4(aq)} \\rightarrow \\text{BaSO}_{4(s)} + 2\\text{NaCl}_{(aq)}$.", "WA-CHM-INO-02", "preparation-of-soluble-and-insoluble-salts"),
            ("Temporary hardness of water is caused by the presence of dissolved:",
             ["Calcium sulphate", "Calcium hydrogentrioxocarbonate(IV)", "Magnesium chloride", "Sodium chloride"],
             "B", "Temporary hardness is caused by $\\text{Ca}(\\text{HCO}_3)_2$ and $\\text{Mg}(\\text{HCO}_3)_2$, removable by boiling.", "WA-CHM-INO-03", "water-hardness-temporary-permanent-and-treatment"),
            ("Boiling removes temporary water hardness by precipitating:",
             ["$\\text{CaSO}_4$", "$\\text{CaCO}_3$", "$\\text{CaCl}_2$", "$\\text{CaO}$"],
             "B", "$\\text{Ca}(\\text{HCO}_3)_{2(aq)} \\xrightarrow{\\Delta} \\text{CaCO}_{3(s)} + \\text{H}_2\\text{O}_{(l)} + \\text{CO}_{2(g)}$.", "WA-CHM-INO-03", "water-hardness-temporary-permanent-and-treatment"),
            ("Permanent hardness of water can be softened chemically by adding:",
             ["Dilute hydrochloric acid", "Washing soda (sodium trioxocarbonate(IV))", "Common salt", "Sand filter"],
             "B", "$\\text{Na}_2\\text{CO}_3$ precipitates calcium and magnesium ions as insoluble carbonates.", "WA-CHM-INO-03", "water-hardness-temporary-permanent-and-treatment"),
            ("In the industrial Contact Process for sulfuric acid, the catalyst used is:",
             ["Finely divided iron", "Vanadium(V) oxide ($\\text{V}_2\\text{O}_5$)", "Nickel powder", "Manganese(IV) oxide"],
             "B", "$\\text{V}_2\\text{O}_5$ catalyzes the oxidation of $\\text{SO}_2$ to $\\text{SO}_3$ at $450^\\circ\\text{C}$.", "WA-CHM-INO-05", "allotropes-of-sulphur-and-the-contact-process"),
            ("Which crystalline allotrope of sulfur is stable above $96^\\circ\\text{C}$?",
             ["Rhombic sulfur", "Monoclinic (prismatic) sulfur", "Plastic sulfur", "Colloidal sulfur"],
             "B", "Monoclinic sulfur is the stable needle-shaped crystalline form above $96^\\circ\\text{C}$.", "WA-CHM-INO-05", "allotropes-of-sulphur-and-the-contact-process")
        ]
    },
    "chemistry-ss3-electrochemistry-rates-equilibrium-organic": {
        "title": "Chemistry SS 3 Diagnostic Assessment",
        "description": "Evaluate master concepts in oxidation states, Faraday's electrolysis laws, equilibrium dynamics, and organic hydrocarbons.",
        "lesson": "redox-reactions-oxidation-numbers-half-equations",
        "questions": [
            ("What is the oxidation number of chromium in the dichromate ion $\\text{Cr}_2\\text{O}_7^{2-}$?",
             ["+3", "+6", "+7", "+12"],
             "B", "$2x + 7(-2) = -2 \\implies 2x = 12 \\implies x = +6$.", "WA-CHM-ELC-01", "redox-reactions-oxidation-numbers-half-equations"),
            ("In the reaction $\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$, the reducing agent is:",
             ["$\\text{Zn}$", "$\\text{H}^+$", "$\\text{Cl}^-$", "$\\text{Zn}^{2+}$"],
             "A", "Zinc is oxidized from 0 to +2, donating electrons, and therefore acts as the reducing agent.", "WA-CHM-ELC-01", "redox-reactions-oxidation-numbers-half-equations"),
            ("According to Faraday's First Law of Electrolysis, the mass of an element discharged at an electrode is directly proportional to:",
             ["The temperature of the electrolyte", "The quantity of electricity passed ($Q = It$)", "The volume of solution", "The resistance of the circuit"],
             "B", "$m = zIt$, where $m \\propto Q$.", "WA-CHM-ELC-02", "electrolysis-preferential-discharge-faradays-laws"),
            ("How many Faradays of electricity are required to deposit 1 mole of aluminium metal from molten $\\text{Al}_2\\text{O}_3$ ($\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$)?",
             ["1 F", "2 F", "3 F", "6 F"],
             "C", "3 moles of electrons are required per mole of $\\text{Al}^{3+}$, equivalent to $3\\text{ F}$ ($3 \\times 96,500\\text{ C}$).", "WA-CHM-ELC-02", "electrolysis-preferential-discharge-faradays-laws"),
            ("During the electrolysis of dilute copper(II) sulphate using copper electrodes, what occurs at the anode?",
             ["Oxygen gas is evolved", "Copper atoms dissolve into copper(II) ions", "Copper metal deposits", "Hydrogen gas is evolved"],
             "B", "Active copper anode dissolves: $\\text{Cu}_{(s)} \\rightarrow \\text{Cu}^{2+}_{(aq)} + 2e^-$.", "WA-CHM-ELC-02", "electrolysis-preferential-discharge-faradays-laws"),
            ("In an exothermic reversible reaction at equilibrium, increasing the temperature will:",
             ["Shift the equilibrium position to the right", "Shift the equilibrium position to the left", "Have no effect on equilibrium position", "Double the equilibrium constant"],
             "B", "By Le Chatelier's principle, adding heat shifts an exothermic reaction in the reverse (endothermic) direction.", "WA-CHM-PHY-03", "redox-reactions-oxidation-numbers-half-equations"),
            ("Which factor alters the numerical value of the equilibrium constant $K_c$ for a chemical reaction?",
             ["Concentration of reactants", "Total pressure", "Temperature", "Addition of a catalyst"],
             "C", "Only temperature changes the equilibrium constant value $K_c$ or $K_p$.", "WA-CHM-PHY-03", "redox-reactions-oxidation-numbers-half-equations"),
            ("What is the IUPAC name of $\\text{CH}_3\\text{CH}(\\text{CH}_3)\\text{CH}_2\\text{CH}_3$?",
             ["2-methylbutane", "3-methylbutane", "Dimethylpropane", "Isopentane"],
             "A", "Longest continuous chain is 4 carbons (butane), with a methyl substituent on C-2.", "WA-CHM-ORG-01", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("Ethyne ($\\text{C}_2\\text{H}_2$) possesses which type of carbon-carbon hybridization?",
             ["$sp^3$", "$sp^2$", "$sp$", "$dsp^2$"],
             "C", "Carbon atoms with a triple bond have linear geometry and $sp$ hybridization.", "WA-CHM-ORG-01", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("Which reagent distinguishes an alkene from an alkane by rapid decolorization without sunlight?",
             ["Aqueous potassium hydroxide", "Bromine water", "Lime water", "Benedict's solution"],
             "B", "Bromine water decolorizes rapidly across unsaturated carbon-carbon double bonds via addition.", "WA-CHM-ORG-02", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("The functional group present in alkanols (alcohols) is:",
             ["$-\\text{CHO}$", "$-\\text{COOH}$", "$-\\text{OH}$", "$-\\text{COO}-$"],
             "C", "The hydroxyl group ($-\\text{OH}$) characterizes the alkanol homologous series.", "WA-CHM-ORG-03", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("Saponification is the alkaline hydrolysis of fats and oils to produce:",
             ["Alkanes and water", "Soap and propane-1,2,3-triol (glycerol)", "Esters and hydrogen", "Ethers and carbon dioxide"],
             "B", "Alkaline hydrolysis of triglycerides yields carboxylate salts (soaps) and glycerol.", "WA-CHM-ORG-03", "carbon-tetravalency-sp3-sp2-sp-hybridization")
        ]
    },
    "waec-neco-ssce-chemistry-mastery": {
        "title": "WAEC & NECO SSCE Chemistry Mastery Diagnostic",
        "description": "Test exam-readiness on structured theory calculations, percentage purity, empirical formulas, and titration questions.",
        "lesson": "waec-stoichiometric-mole-calculations-and-yields",
        "questions": [
            ("A compound contains 40.0% C, 6.7% H, and 53.3% O by mass. What is its empirical formula ($A_r$: C=12, H=1, O=16)?",
             ["$\\text{CHO}$", "$\\text{CH}_2\\text{O}$", "$\\text{C}_2\\text{H}_4\\text{O}_2$", "$\\text{CH}_3\\text{O}$"],
             "B", "Moles: C = 40/12 = 3.33, H = 6.7/1 = 6.7, O = 53.3/16 = 3.33. Ratio: 1:2:1 $\\rightarrow \\text{CH}_2\\text{O}$.", "WA-CHM-STO-04", "waec-stoichiometric-mole-calculations-and-yields"),
            ("If the empirical formula is $\\text{CH}_2\\text{O}$ and relative molecular mass is 180, what is the molecular formula?",
             ["$\\text{C}_3\\text{H}_6\\text{O}_3$", "$\\text{C}_6\\text{H}_{12}\\text{O}_6$", "$\\text{C}_5\\text{H}_{10}\\text{O}_5$", "$\\text{C}_4\\text{H}_8\\text{O}_4$"],
             "B", "Empirical mass = 12 + 2 + 16 = 30. $n = 180/30 = 6 \\implies \\text{C}_6\\text{H}_{12}\\text{O}_6$.", "WA-CHM-STO-04", "waec-stoichiometric-mole-calculations-and-yields"),
            ("In a volumetric titration, $25.0\\text{ cm}^3$ of $0.10\\text{ mol/dm}^3\\text{ Na}_2\\text{CO}_3$ neutralizes $20.0\\text{ cm}^3$ of $\\text{HCl}$. What is the concentration of $\\text{HCl}$ in $\\text{mol/dm}^3$?",
             ["$0.125\\text{ mol/dm}^3$", "$0.20\\text{ mol/dm}^3$", "$0.25\\text{ mol/dm}^3$", "$0.50\\text{ mol/dm}^3$"],
             "C", "$\\frac{C_a V_a}{C_b V_b} = \\frac{2}{1} \\implies C_a = \\frac{2 \\times 0.10 \\times 25.0}{20.0} = 0.25\\text{ mol/dm}^3$.", "WA-CHM-STO-05", "waec-stoichiometric-mole-calculations-and-yields"),
            ("What mass of anhydrous sodium carbonate ($\\text{Na}_2\\text{CO}_3, M = 106\\text{ g/mol}$) is required to prepare $500\\text{ cm}^3$ of $0.05\\text{ mol/dm}^3$ standard solution?",
             ["$2.65\\text{ g}$", "$5.30\\text{ g}$", "$10.6\\text{ g}$", "$21.2\\text{ g}$"],
             "A", "$n = C \\times V = 0.05 \\times 0.500 = 0.025\\text{ mol}$. $m = 0.025 \\times 106 = 2.65\\text{ g}$.", "WA-CHM-STO-05", "waec-stoichiometric-mole-calculations-and-yields"),
            ("What is the volume of hydrogen gas evolved at s.t.p. when $6.5\\text{ g}$ of zinc reacts completely with excess dilute $\\text{HCl}$ ($A_r: \\text{Zn} = 65$, molar volume $= 22.4\\text{ dm}^3$)?",
             ["$1.12\\text{ dm}^3$", "$2.24\\text{ dm}^3$", "$4.48\\text{ dm}^3$", "$22.4\\text{ dm}^3$"],
             "B", "Moles of $\\text{Zn} = 6.5/65 = 0.10\\text{ mol}$. 1 mol $\\text{Zn} \\rightarrow 1\\text{ mol }\\text{H}_2$. $V = 0.10 \\times 22.4 = 2.24\\text{ dm}^3$.", "WA-CHM-STO-05", "waec-stoichiometric-mole-calculations-and-yields"),
            ("Why is nitric acid NOT used in the volumetric preparation of standard sulfur dioxide gas or basic acid-carbonate titrations as a reducing test?",
             ["It is too weak an acid", "It is an oxidizing acid and produces brown $\\text{NO}_2$ gas", "It is insoluble in water", "It polymerizes rapidly"],
             "B", "Dilute or concentrated nitric acid oxidizes reaction intermediates rather than exhibiting standard non-oxidizing acid behavior.", "WA-CHM-INO-04", "waec-stoichiometric-mole-calculations-and-yields"),
            ("Which indicator is recommended by WAEC for titrating a strong acid against a weak base (e.g. $\\text{HCl}$ against $\\text{NH}_3$)?",
             ["Phenolphthalein", "Methyl orange", "Universal indicator", "Litmus paper"],
             "B", "Methyl orange changes colour in the acidic pH range ($3.1 - 4.4$), matching the equivalence point of a strong acid/weak base titration.", "WA-CHM-PRC-02", "waec-stoichiometric-mole-calculations-and-yields"),
            ("In WAEC practical volumetric analysis, titres must typically agree within what concordance limit?",
             ["$\\pm 0.01\\text{ cm}^3$", "$\\pm 0.20\\text{ cm}^3$", "$\\pm 0.50\\text{ cm}^3$", "$\\pm 1.00\\text{ cm}^3$"],
             "B", "Official WAEC marking guides mandate concordant titres within $\\pm 0.20\\text{ cm}^3$ of each other.", "WA-CHM-PRC-01", "waec-stoichiometric-mole-calculations-and-yields"),
            ("What colour change is observed at the end-point when titrating an acid into an alkali containing methyl orange?",
             ["Yellow to pink/orange", "Colourless to pink", "Pink to colourless", "Blue to red"],
             "A", "Methyl orange turns from yellow in alkaline solution to faint orange/pink at the acid equivalence point.", "WA-CHM-PRC-02", "waec-stoichiometric-mole-calculations-and-yields"),
            ("When heating blue hydrated copper(II) sulphate crystals, the residue observed is:",
             ["White anhydrous $\\text{CuSO}_4$", "Black copper(II) oxide", "Brown copper metal", "Green copper carbonate"],
             "A", "Water of crystallization is driven off, leaving white anhydrous powder: $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O} \\rightarrow \\text{CuSO}_4 + 5\\text{H}_2\\text{O}$.", "WA-CHM-PRC-03", "waec-stoichiometric-mole-calculations-and-yields"),
            ("In qualitative salt analysis, adding aqueous sodium hydroxide dropwise then in excess to a solution containing $\\text{Al}^{3+}$ produces:",
             ["White precipitate insoluble in excess", "White gelatinous precipitate soluble in excess", "Blue precipitate insoluble in excess", "No precipitate"],
             "B", "Amphoteric aluminium hydroxide forms a gelatinous precipitate that dissolves in excess $\\text{NaOH}$ to give aluminate ions.", "WA-CHM-PRC-03", "waec-stoichiometric-mole-calculations-and-yields"),
            ("What gas is evolved when dilute hydrochloric acid is added to a metal trioxocarbonate(IV) salt?",
             ["$\\text{SO}_2$", "$\\text{CO}_2$", "$\\text{H}_2$", "$\\text{O}_2$"],
             "B", "Carbon dioxide turns lime water milky due to calcium carbonate precipitation.", "WA-CHM-INO-02", "waec-stoichiometric-mole-calculations-and-yields")
        ]
    },
    "jamb-utme-chemistry-complete": {
        "title": "JAMB UTME Chemistry Complete Diagnostic",
        "description": "Speed-optimized questions testing rapid deduction, gas shortcuts, periodic trends, and electronic configurations.",
        "lesson": "jamb-rapid-mole-concept-and-gas-volume-shortcuts",
        "questions": [
            ("Which pair of gases have the same rate of diffusion under the same temperature and pressure conditions ($A_r$: C=12, N=14, O=16)?",
             ["$\\text{CO}$ and $\\text{N}_2$", "$\\text{CO}_2$ and $\\text{SO}_2$", "$\\text{O}_2$ and $\\text{CH}_4$", "$\\text{NO}_2$ and $\\text{N}_2\\text{O}$"],
             "A", "Graham's law depends on molar mass: $M(\\text{CO}) = 12 + 16 = 28$, $M(\\text{N}_2) = 14 \\times 2 = 28\\text{ g/mol}$. Same molar mass gives identical diffusion rates.", "WA-CHM-PHY-02", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("At s.t.p., $11.2\\text{ dm}^3$ of a gas weighs $16.0\\text{ g}$. What is the relative molecular mass of the gas?",
             ["16", "28", "32", "44"],
             "C", "$11.2\\text{ dm}^3 = 0.5\\text{ mol}$. $M = m/n = 16.0 / 0.5 = 32\\text{ g/mol}$ (Oxygen gas $\\text{O}_2$).", "WA-CHM-STO-06", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("The total number of shared electron pairs in an ethene molecule ($\\text{C}_2\\text{H}_4$) is:",
             ["4", "5", "6", "8"],
             "C", "Ethene has 4 single C-H covalent bonds and 1 C=C double bond (2 shared pairs), totaling 6 shared pairs.", "WA-CHM-ORG-01", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("Which of the following compounds exhibits hydrogen bonding?",
             ["$\\text{CH}_4$", "$\\text{H}_2\\text{S}$", "$\\text{NH}_3$", "$\\text{HCl}$"],
             "C", "Hydrogen bonding occurs when hydrogen is bonded to nitrogen, oxygen, or fluorine.", "WA-CHM-ATM-04", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("The conjugate base of the hydrogencarbonate ion $\\text{HCO}_3^-$ is:",
             ["$\\text{H}_2\\text{CO}_3$", "$\\text{CO}_3^{2-}$", "$\\text{CO}_2$", "$\\text{OH}^-$"],
             "B", "Removing a proton $\\text{H}^+$ from $\\text{HCO}_3^-$ yields the carbonate ion $\\text{CO}_3^{2-}$.", "WA-CHM-INO-01", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("Which salt dissolves in water to produce an alkaline solution ($\\text{pH} > 7$)?",
             ["$\\text{NaCl}$", "$\\text{NH}_4\\text{Cl}$", "$\\text{CH}_3\\text{COONa}$", "$\\text{K}_2\\text{SO}_4$"],
             "C", "Sodium ethanoate undergoes anionic hydrolysis because ethanoate ion originates from weak ethanoic acid.", "WA-CHM-INO-02", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("What volume of oxygen at s.t.p. is required to completely burn $20\\text{ cm}^3$ of propane gas ($\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + 4\\text{H}_2\\text{O}$)?",
             ["$20\\text{ cm}^3$", "$60\\text{ cm}^3$", "$100\\text{ cm}^3$", "$120\\text{ cm}^3$"],
             "C", "By Gay-Lussac's law, volume ratio equals mole ratio: $20\\text{ cm}^3 \\times 5 = 100\\text{ cm}^3$.", "WA-CHM-STO-06", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("In the extraction of iron in the blast furnace, limestone ($\\text{CaCO}_3$) acts as a flux to remove:",
             ["Carbon monoxide", "Silicon dioxide (sand) impurity as slag ($\\text{CaSiO}_3$)", "Excess sulfur", "Rust"],
             "B", "$\\text{CaO} + \\text{SiO}_2 \\rightarrow \\text{CaSiO}_3$ (calcium silicate slag).", "WA-CHM-INO-04", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("Which process represents physical change rather than chemical change?",
             ["Rusting of iron nail", "Dissolution of sodium chloride in water", "Burning of kerosene", "Fermentation of palm wine"],
             "B", "Salt dissolving in water can be reversed by evaporation without altering molecular identity.", "WA-CHM-PHY-01", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("The half-life of a radioactive isotope is 4 days. What fraction of the original sample remains after 16 days?",
             ["$\\frac{1}{4}$", "$\\frac{1}{8}$", "$\\frac{1}{16}$", "$\\frac{1}{32}$"],
             "C", "$16 / 4 = 4$ half-lives. Fraction remaining $= (1/2)^4 = 1/16$.", "WA-CHM-ATM-01", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("What type of reaction converts ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$) to ethene ($\\text{C}_2\\text{H}_4$) in the presence of excess concentrated $\\text{H}_2\\text{SO}_4$ at $170^\\circ\\text{C}$?",
             ["Substitution", "Dehydration (elimination)", "Hydrogenation", "Polymerization"],
             "B", "Concentrated $\\text{H}_2\\text{SO}_4$ dehydrates ethanol by removing a molecule of water to produce ethene.", "WA-CHM-ORG-02", "jamb-rapid-mole-concept-and-gas-volume-shortcuts"),
            ("Which element exhibits anomalous electron configuration with a half-filled 3d subshell ($3d^5 4s^1$)?",
             ["Chromium ($Z = 24$)", "Manganese ($Z = 25$)", "Iron ($Z = 26$)", "Copper ($Z = 29$)"],
             "A", "Chromium adopts $[\\text{Ar}] 3d^5 4s^1$ for maximum exchange energy and symmetrical subshell stability.", "WA-CHM-ATM-02", "jamb-rapid-mole-concept-and-gas-volume-shortcuts")
        ]
    },
    "stoichiometry-mole-concept-bootcamp": {
        "title": "Stoichiometry & The Mole Concept Bootcamp Diagnostic",
        "description": "Drill Avogadro calculations, molar concentrations, limiting reactants, and percentage yields.",
        "lesson": "molar-mass-and-gram-mole-conversions-bootcamp",
        "questions": [
            ("How many molecules are present in $2.24\\text{ dm}^3$ of oxygen gas at s.t.p. ($L = 6.02 \\times 10^{23}\\text{ mol}^{-1}$)?",
             ["$6.02 \\times 10^{21}$", "$6.02 \\times 10^{22}$", "$6.02 \\times 10^{23}$", "$1.20 \\times 10^{24}$"],
             "B", "$n = 2.24 / 22.4 = 0.10\\text{ mol}$. Number of molecules $= 0.10 \\times 6.02 \\times 10^{23} = 6.02 \\times 10^{22}$.", "WA-CHM-STO-03", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("What is the mass of 1 atom of carbon-12 in grams?",
             ["$1.99 \\times 10^{-23}\\text{ g}$", "$1.66 \\times 10^{-24}\\text{ g}$", "$1.20 \\times 10^{-22}\\text{ g}$", "$12.0\\text{ g}$"],
             "A", "Mass of 1 atom $= \\frac{12.0\\text{ g}}{6.02 \\times 10^{23}} = 1.99 \\times 10^{-23}\\text{ g}$.", "WA-CHM-STO-03", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("A reaction has a theoretical yield of $50\\text{ g}$ of copper(II) oxide. The actual experimental yield obtained is $42.5\\text{ g}$. What is the percentage yield?",
             ["75%", "85%", "90%", "92.5%"],
             "B", "$\\text{Percentage yield} = \\frac{42.5}{50.0} \\times 100\\% = 85\\%$.", "WA-CHM-STO-05", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("In the reaction $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, $4\\text{ moles of }\\text{H}_2$ react with $1\\text{ mole of }\\text{O}_2$. The limiting reagent is:",
             ["$\\text{H}_2$", "$\\text{O}_2$", "$\\text{H}_2\\text{O}$", "Neither is limiting"],
             "B", "1 mole of $\\text{O}_2$ requires only 2 moles of $\\text{H}_2$; excess $\\text{H}_2$ remains, so $\\text{O}_2$ limits the reaction.", "WA-CHM-STO-05", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("What mass of sodium hydroxide ($\\text{NaOH}, M = 40\\text{ g/mol}$) is dissolved in $250\\text{ cm}^3$ of a $2.0\\text{ mol/dm}^3$ solution?",
             ["$10\\text{ g}$", "$20\\text{ g}$", "$40\\text{ g}$", "$80\\text{ g}$"],
             "B", "$n = C \\times V = 2.0 \\times 0.250 = 0.50\\text{ mol}$. $m = 0.50 \\times 40 = 20\\text{ g}$.", "WA-CHM-STO-03", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("What is the percentage by mass of nitrogen in urea ($\\text{CO}(\\text{NH}_2)_2$, $M = 60\\text{ g/mol}$, $A_r: \\text{N}=14$)?",
             ["23.3%", "46.7%", "50.0%", "60.0%"],
             "B", "$\\text{Urea contains } 2 \\times 14 = 28\\text{ g N}$. $\\%\\text{N} = \\frac{28}{60} \\times 100\\% = 46.7\\%$.", "WA-CHM-STO-04", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("How many moles of ions are produced when 1 mole of iron(III) sulphate ($\\text{Fe}_2(\\text{SO}_4)_3$) dissolves completely in water?",
             ["2", "3", "5", "6"],
             "C", "$\\text{Fe}_2(\\text{SO}_4)_3 \\rightarrow 2\\text{Fe}^{3+} + 3\\text{SO}_4^{2-}$, producing $2 + 3 = 5$ moles of ions.", "WA-CHM-STO-01", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("Calculate the concentration in $\\text{g/dm}^3$ of a $0.05\\text{ mol/dm}^3\\text{ H}_2\\text{SO}_4$ solution ($M = 98\\text{ g/mol}$).",
             ["$4.9\\text{ g/dm}^3$", "$9.8\\text{ g/dm}^3$", "$19.6\\text{ g/dm}^3$", "$49.0\\text{ g/dm}^3$"],
             "A", "$\\rho = C \\times M = 0.05 \\times 98 = 4.9\\text{ g/dm}^3$.", "WA-CHM-STO-05", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("A gas cylinder holds $5.6\\text{ dm}^3$ of nitrogen gas at s.t.p. How many moles of nitrogen atoms does it contain?",
             ["0.25 moles", "0.50 moles", "1.0 mole", "2.0 moles"],
             "B", "Moles of $\\text{N}_2 = 5.6 / 22.4 = 0.25\\text{ mol}$. Each $\\text{N}_2$ molecule has 2 atoms, so $0.25 \\times 2 = 0.50\\text{ moles of N atoms}$.", "WA-CHM-STO-03", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("What mass of magnesium ($A_r = 24$) reacts with excess dilute acid to liberate $0.5\\text{ moles of }\\text{H}_2$ gas ($\\text{Mg} + 2\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$)?",
             ["$6\\text{ g}$", "$12\\text{ g}$", "$24\\text{ g}$", "$48\\text{ g}$"],
             "B", "1 mol $\\text{Mg}$ yields 1 mol $\\text{H}_2$. $0.5\\text{ mol }\\text{Mg} \\times 24\\text{ g/mol} = 12\\text{ g}$.", "WA-CHM-STO-05", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("The molar mass of hydrated copper(II) sulphate $\\text{CuSO}_4 \\cdot x\\text{H}_2\\text{O}$ is $250\\text{ g/mol}$. If anhydrous $\\text{CuSO}_4 = 160\\text{ g/mol}$, what is $x$?",
             ["2", "5", "7", "10"],
             "B", "$18x = 250 - 160 = 90 \\implies x = 90 / 18 = 5$.", "WA-CHM-STO-04", "molar-mass-and-gram-mole-conversions-bootcamp"),
            ("If $20\\text{ cm}^3$ of $1.0\\text{ mol/dm}^3\\text{ HCl}$ is diluted with distilled water to $100\\text{ cm}^3$, the new molar concentration is:",
             ["$0.10\\text{ mol/dm}^3$", "$0.20\\text{ mol/dm}^3$", "$0.25\\text{ mol/dm}^3$", "$0.50\\text{ mol/dm}^3$"],
             "B", "$C_1 V_1 = C_2 V_2 \\implies C_2 = (1.0 \\times 20) / 100 = 0.20\\text{ mol/dm}^3$.", "WA-CHM-STO-05", "molar-mass-and-gram-mole-conversions-bootcamp")
        ]
    },
    "volumetric-analysis-practical-chemistry": {
        "title": "Volumetric Analysis & Practical Chemistry Diagnostic",
        "description": "Assess laboratory techniques, burette calibration, parallax elimination, and titration calculations.",
        "lesson": "burette-pipette-handling-and-meniscus-reading",
        "questions": [
            ("When reading the volume of a colourless aqueous solution in a burette, the correct reading is taken at:",
             ["The top of the liquid curve", "The bottom of the concave meniscus at eye level", "The center of the glass barrel", "Any convenient height"],
             "B", "Parallax error is eliminated by sighting horizontally with the bottom of the concave meniscus.", "WA-CHM-PRC-01", "burette-pipette-handling-and-meniscus-reading"),
            ("A pipette must be rinsed with which liquid immediately before drawing the standard base solution?",
             ["Tap water", "Distilled water only", "The standard base solution to be measured", "Dilute hydrochloric acid"],
             "C", "Rinsing with the base prevents water droplets inside the pipette from diluting the aliquot.", "WA-CHM-PRC-01", "burette-pipette-handling-and-meniscus-reading"),
            ("Why should the conical flask NOT be rinsed with the solution to be pipetted into it?",
             ["It will crack under tension", "Residual drops would increase the measured number of moles in the flask", "It neutralizes the indicator prematurely", "It stains the glass"],
             "B", "The conical flask must be rinsed only with distilled water so the mole count of pipetted analyte is unchanged.", "WA-CHM-PRC-01", "burette-pipette-handling-and-meniscus-reading"),
            ("The last drop of liquid clinging to the tip of a standard delivery pipette should be:",
             ["Blown out with the mouth", "Touched against the inner wall of the conical flask for 3 seconds", "Shaken violently into the flask", "Wiped off with a towel"],
             "B", "Pipettes are calibrated to deliver (TD); blowing out introduces excess uncalibrated volume.", "WA-CHM-PRC-01", "burette-pipette-handling-and-meniscus-reading"),
            ("Air bubbles trapped inside the burette jet tip below the stopcock will cause:",
             ["An underestimated titre volume", "An exaggerated (falsely high) titre volume", "No error if titration is done quickly", "An indicator failure"],
             "B", "The bubble dislodges during titration, recording air displacement as delivered liquid titre.", "WA-CHM-PRC-01", "burette-pipette-handling-and-meniscus-reading"),
            ("Which primary standard substance is commonly used to standardize hydrochloric acid in school laboratories?",
             ["Sodium hydroxide pellets", "Pure anhydrous sodium trioxocarbonate(IV)", "Concentrated sulfuric acid", "Potassium hydroxide"],
             "B", "$\\text{Na}_2\\text{CO}_3$ is non-hygroscopic, highly stable, pure, and can be weighed accurately.", "WA-CHM-PRC-02", "burette-pipette-handling-and-meniscus-reading"),
            ("Why is sodium hydroxide unsuitable as a primary standard?",
             ["It is volatile and evaporates", "It is deliquescent and absorbs atmospheric moisture and $\\text{CO}_2$", "It is insoluble in water", "It reacts with glass violently"],
             "B", "Solid $\\text{NaOH}$ absorbs atmospheric water and $\\text{CO}_2$ (forming $\\text{Na}_2\\text{CO}_3$), preventing exact weighing.", "WA-CHM-PRC-02", "burette-pipette-handling-and-meniscus-reading"),
            ("A student records three titres: $24.10\\text{ cm}^3$, $24.15\\text{ cm}^3$, and $24.90\\text{ cm}^3$. The average titre should be calculated using:",
             ["All three titres: $(24.10 + 24.15 + 24.90)/3$", "Only concordant titres: $(24.10 + 24.15)/2 = 24.13\\text{ cm}^3$", "The lowest titre: $24.10\\text{ cm}^3$", "The highest titre: $24.90\\text{ cm}^3$"],
             "B", "Titres differing by more than $0.20\\text{ cm}^3$ are outliers and must be excluded from average titre calculation.", "WA-CHM-PRC-01", "burette-pipette-handling-and-meniscus-reading"),
            ("During titration, washing the inner walls of the conical flask with distilled water will:",
             ["Introduce a significant error in the calculated molarity", "Have no effect on the titre since total moles of reactants remain unchanged", "Prematurely trigger the indicator colour change", "Neutralize the acid"],
             "B", "Distilled water adds solvent volume without adding or removing reactant moles.", "WA-CHM-PRC-01", "burette-pipette-handling-and-meniscus-reading"),
            ("What is the colour of iron(II) hydroxide precipitate formed upon adding $\\text{NaOH}_{(aq)}$?",
             ["Reddish-brown", "Dirty green", "Gelatinous white", "Deep blue"],
             "B", "Iron(II) forms dirty green $\\text{Fe}(\\text{OH})_2$, which oxidizes at surface air to brown iron(III) hydroxide.", "WA-CHM-PRC-03", "burette-pipette-handling-and-meniscus-reading"),
            ("To test for sulphate ions ($\\text{SO}_4^{2-}$), barium chloride solution is added followed by:",
             ["Dilute hydrochloric acid to verify precipitate insolubility", "Concentrated sodium hydroxide", "Silver nitrate solution", "Lime water"],
             "A", "Barium sulphate is a white precipitate insoluble in dilute $\\text{HCl}$, distinguishing it from barium sulphite and carbonate.", "WA-CHM-PRC-03", "burette-pipette-handling-and-meniscus-reading"),
            ("What hazard is indicated when performing heating tests on ammonium salts in a closed room?",
             ["Flammable gas explosion", "Evolution of pungent, choking ammonia gas", "Violent radioactive disintegration", "Acid boiling shock"],
             "B", "Ammonium salts liberate alkaline ammonia gas, which irritates the respiratory tract and eyes; work in well-ventilated areas.", "WA-CHM-PRC-03", "burette-pipette-handling-and-meniscus-reading")
        ]
    },
    "organic-chemistry-made-clear": {
        "title": "Organic Chemistry Made Clear Diagnostic",
        "description": "Master hybridization, isomerism, functional group IUPAC naming, and reaction mechanisms.",
        "lesson": "carbon-tetravalency-sp3-sp2-sp-hybridization",
        "questions": [
            ("Why does carbon form millions of stable organic compounds?",
             ["High electronegativity and radioactivity", "Ability to catenate, tetravalency, and multiple bond formation", "Low melting point and high malleability", "Presence of vacant d orbitals"],
             "B", "Carbon forms strong C-C covalent bonds (catenation), has tetravalency, and forms single, double, and triple bonds.", "WA-CHM-ORG-01", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("What is the bond angle around carbon atoms in methane ($\\text{CH}_4$, $sp^3$ hybridized)?",
             ["$90^\\circ$", "$109.5^\\circ$", "$120^\\circ$", "$180^\\circ$"],
             "B", "A regular tetrahedral geometry with $sp^3$ hybridization exhibits bond angles of $109.5^\\circ$ (or $109^\\circ 28'$).", "WA-CHM-ORG-01", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("Compounds having the same molecular formula but different structural arrangements are called:",
             ["Allotropes", "Isotopes", "Isomers", "Homologues"],
             "C", "Structural isomers share identical chemical formulas but possess distinct atomic connectivity.", "WA-CHM-ORG-01", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("How many structural isomers exist for butane ($\\text{C}_4\\text{H}_{10}$)?",
             ["1", "2", "3", "4"],
             "B", "Butane has 2 isomers: butane (straight chain) and 2-methylpropane (isobutane).", "WA-CHM-ORG-01", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("The reaction of methane with chlorine in the presence of ultraviolet light is classified as:",
             ["Electrophilic addition", "Free radical substitution", "Nucleophilic elimination", "Condensation"],
             "B", "UV light homolytically cleaves chlorine molecules into free radicals that substitute hydrogen atoms on methane.", "WA-CHM-ORG-02", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("Which compound is an aromatic hydrocarbon?",
             ["Cyclohexane", "Benzene", "Hexene", "Butadiyne"],
             "B", "Benzene ($\\text{C}_6\\text{H}_6$) has a planar ring with delocalized pi-electron cloud obeying Hückel's rule ($4n+2$).", "WA-CHM-ORG-01", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("Oxidation of a primary alkanol with acidified potassium dichromate(VI) first yields:",
             ["An alkanal (aldehyde)", "An alkanone (ketone)", "An alkane", "An ester"],
             "A", "Primary alcohols oxidize first to aldehydes, which on further oxidation yield alkanoic acids.", "WA-CHM-ORG-03", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("Secondary alkanols are oxidized to produce:",
             ["Carboxylic acids", "Alkanones (ketones)", "Alkanals", "Ethers"],
             "B", "Secondary alcohols have two alkyl groups on the carbinol carbon, oxidizing cleanly to ketones.", "WA-CHM-ORG-03", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("Esterification involves the reversible reaction between an alkanol and:",
             ["An alkane", "An alkanoic acid in the presence of concentrated $\\text{H}_2\\text{SO}_4$", "An alkyl halide", "Sodium hydroxide"],
             "B", "Carboxylic acid + alcohol $\\rightleftharpoons$ ester + water (catalyzed by concentrated $\\text{H}_2\\text{SO}_4$).", "WA-CHM-ORG-03", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("What is the general formula of the alkyne homologous series?",
             ["$\\text{C}_n\\text{H}_{2n+2}$", "$\\text{C}_n\\text{H}_{2n}$", "$\\text{C}_n\\text{H}_{2n-2}$", "$\\text{C}_n\\text{H}_{2n-6}$"],
             "C", "Alkynes contain one triple bond and have formula $\\text{C}_n\\text{H}_{2n-2}$.", "WA-CHM-ORG-01", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("The monomer unit used to manufacture poly(ethene) is:",
             ["Ethane", "Ethene", "Ethyne", "Ethanol"],
             "B", "Ethene undergoes addition polymerization at high temperature and pressure to produce polyethylene.", "WA-CHM-ORG-02", "carbon-tetravalency-sp3-sp2-sp-hybridization"),
            ("Which carbohydrate test gives a brick-red precipitate of copper(I) oxide when heated with glucose?",
             ["Biuret test", "Fehling's or Benedict's test", "Iodine test", "Ninhydrin test"],
             "B", "Reducing sugars like glucose reduce alkaline copper(II) ions in Fehling's solution to brick-red $\\text{Cu}_2\\text{O}$.", "WA-CHM-ORG-03", "carbon-tetravalency-sp3-sp2-sp-hybridization")
        ]
    },
    "inorganic-chemistry-periodic-trends-metals-nonmetals": {
        "title": "Inorganic Chemistry: Periodic Trends Diagnostic",
        "description": "Assess periodic table properties, alkali metals, halogens, transition metals, and extraction metallurgy.",
        "lesson": "alkali-and-alkaline-earth-metals-trends",
        "questions": [
            ("Why are alkali metals stored under paraffin oil or kerosene?",
             ["They evaporate quickly in air", "They react vigorously with atmospheric oxygen and moisture", "To prevent thermal decomposition", "To dissolve them into liquid form"],
             "B", "Group 1 metals oxidize instantaneously and react violently with water, so paraffin excludes air and moisture.", "WA-CHM-ATM-03", "alkali-and-alkaline-earth-metals-trends"),
            ("Which alkaline earth metal does NOT react with cold water or steam easily due to an impermeable oxide coating?",
             ["Beryllium", "Magnesium", "Calcium", "Barium"],
             "A", "Beryllium has high ionization energy and forms a protective, non-reactive passive oxide layer.", "WA-CHM-ATM-03", "alkali-and-alkaline-earth-metals-trends"),
            ("Down Group 17 (the halogens) from fluorine to iodine, the physical state at room temperature changes from:",
             ["Solid to gas", "Gas to liquid to solid", "Liquid to gas", "Solid to liquid"],
             "B", "Fluorine and chlorine are gases, bromine is liquid, and iodine is solid, due to increasing van der Waals forces.", "WA-CHM-ATM-03", "alkali-and-alkaline-earth-metals-trends"),
            ("Which halogen is the strongest oxidizing agent?",
             ["Fluorine ($\\text{F}_2$)", "Chlorine ($\\text{Cl}_2$)", "Bromine ($\\text{Br}_2$)", "Iodine ($\\text{I}_2$)"],
             "A", "Fluorine has the highest standard reduction potential ($+2.87\\text{ V}$) and greatest electron affinity.", "WA-CHM-ATM-03", "alkali-and-alkaline-earth-metals-trends"),
            ("Transition metals typically exhibit variable oxidation states because:",
             ["Their nuclei are radioactive", "The energy difference between 3d and 4s electrons is very small", "Their valence electrons are completely paired", "They are strong non-metals"],
             "B", "Both 3d and 4s electrons can participate in chemical bonding due to minimal energy separation.", "WA-CHM-INO-04", "alkali-and-alkaline-earth-metals-trends"),
            ("Which of the following transition metal ions is typically colourless in aqueous solution?",
             ["$\\text{Cu}^{2+}$", "$\\text{Fe}^{3+}$", "$\\text{Zn}^{2+}$", "$\\text{Cr}^{3+}$"],
             "C", "$\\text{Zn}^{2+}$ has completely filled 3d orbitals ($3d^{10}$), preventing d-d electronic transitions that produce colour.", "WA-CHM-INO-04", "alkali-and-alkaline-earth-metals-trends"),
            ("In the extraction of aluminium by the Hall-Héroult electrolytic process, cryolite ($\\text{Na}_3\\text{AlF}_6$) is added to alumina to:",
             ["Act as a catalyst for oxidation", "Lower the melting point from $2050^\\circ\\text{C}$ to $\\sim 950^\\circ\\text{C}$ and improve conductivity", "Precipitate silicon impurities", "Prevent graphite anodes from burning"],
             "B", "Molten cryolite dissolves bauxite alumina, dramatically lowering energy requirements and enhancing electrical conductance.", "WA-CHM-INO-04", "alkali-and-alkaline-earth-metals-trends"),
            ("The chief ore from which iron is extracted in the blast furnace is:",
             ["Bauxite", "Haematite ($\\text{Fe}_2\\text{O}_3$)", "Chalcopyrite", "Galena"],
             "B", "Haematite ($\\text{Fe}_2\\text{O}_3$) is the primary commercial iron ore charged into blast furnaces.", "WA-CHM-INO-04", "alkali-and-alkaline-earth-metals-trends"),
            ("Which gas is responsible for the brown color observed in smog and photochemical air pollution?",
             ["Carbon dioxide", "Nitrogen dioxide ($\\text{NO}_2$)", "Sulfur trioxide", "Methane"],
             "B", "$\\text{NO}_2$ is a reddish-brown, toxic gas produced by combustion in internal combustion engines.", "WA-CHM-INO-04", "alkali-and-alkaline-earth-metals-trends"),
            ("The bleaching action of sulfur dioxide ($\\text{SO}_2$) on dyes is due to:",
             ["Oxidation and is permanent", "Reduction and is temporary (reversed by atmospheric oxygen)", "Precipitation", "Neutralization"],
             "B", "$\\text{SO}_2$ bleaches by reduction; atmospheric oxygen gradually re-oxidizes the substrate, reversing the bleached colour.", "WA-CHM-INO-05", "alkali-and-alkaline-earth-metals-trends"),
            ("Chlorine bleaches damp litmus paper by:",
             ["Reduction", "Oxidation via oxochlorate(I) acid ($\\text{HOCl}$) formation", "Hydrolysis only", "Thermal decomposition"],
             "B", "Chlorine forms $\\text{HOCl}$, which donates oxygen to dye molecules, permanently bleaching them by oxidation.", "WA-CHM-INO-04", "alkali-and-alkaline-earth-metals-trends"),
            ("Which noble gas is used to provide an inert atmosphere in electric light bulbs?",
             ["Helium", "Neon", "Argon", "Krypton"],
             "C", "Argon is abundant, chemically unreactive, and prevents the hot tungsten filament from oxidizing.", "WA-CHM-ATM-03", "alkali-and-alkaline-earth-metals-trends")
        ]
    },
    "acids-bases-salts-ph": {
        "title": "Acids, Bases, Salts and pH Diagnostic",
        "description": "Deep-dive diagnostic covering proton transfer, buffer systems, hydrolysis, and indicator equilibria.",
        "lesson": "acid-base-theories-arrhenius-bronsted-lewis",
        "questions": [
            ("According to the Brønsted-Lowry theory, an acid is defined as a:",
             ["Substance producing hydroxide ions in water", "Proton ($\\text{H}^+$) donor", "Electron pair donor", "Proton acceptor"],
             "B", "Brønsted-Lowry defines acids as proton donors and bases as proton acceptors.", "WA-CHM-INO-01", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("According to Lewis theory, a base is defined as an:",
             ["Electron pair acceptor", "Electron pair donor", "Substance yielding hydrogen ions", "Electrophile"],
             "B", "Lewis bases donate electron pairs (e.g. ammonia $\\text{NH}_3$ with its lone pair).", "WA-CHM-INO-01", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("What is the pH of a $0.05\\text{ mol/dm}^3$ aqueous solution of sulfuric acid ($\\text{H}_2\\text{SO}_4$, assuming complete diprotic dissociation)?",
             ["1.0", "1.3", "2.0", "0.05"],
             "A", "$[\\text{H}^+] = 2 \\times 0.05 = 0.10\\text{ mol/dm}^3$. $\\text{pH} = -\\log_{10}(0.10) = 1.0$.", "WA-CHM-INO-01", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("A solution has a hydroxide ion concentration $[\\text{OH}^-] = 1.0 \\times 10^{-4}\\text{ mol/dm}^3$. What is its pH at $25^\\circ\\text{C}$ ($K_w = 10^{-14}$)?",
             ["4", "7", "10", "14"],
             "C", "$\\text{pOH} = -\\log_{10}(10^{-4}) = 4$. $\\text{pH} = 14 - 4 = 10$.", "WA-CHM-INO-01", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("A buffer solution resists changes in pH when small amounts of acid or base are added. An acidic buffer consists of:",
             ["A strong acid and its conjugate base", "A weak acid and its salt with a strong base", "A strong acid and a strong base", "Pure distilled water"],
             "B", "Example: ethanoic acid ($\\text{CH}_3\\text{COOH}$) and sodium ethanoate ($\\text{CH}_3\\text{COONa}$).", "WA-CHM-INO-01", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("Which salt dissolves in water to undergo cationic hydrolysis, producing an acidic solution ($\\text{pH} < 7$)?",
             ["$\\text{KNO}_3$", "$\\text{NH}_4\\text{Cl}$", "$\\text{Na}_2\\text{CO}_3$", "$\\text{CH}_3\\text{COONa}$"],
             "B", "Ammonium ion hydrolyzes: $\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^+$.", "WA-CHM-INO-02", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("What is the basicity of orthophosphoric acid ($\\text{H}_3\\text{PO}_4$)?",
             ["1", "2", "3", "4"],
             "C", "$\\text{H}_3\\text{PO}_4$ has 3 replaceable hydrogen atoms per molecule, making it tribasic.", "WA-CHM-INO-01", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("Deliquescent substances differ from hygroscopic substances in that deliquescent substances:",
             ["Absorb moisture without changing state", "Absorb enough atmospheric water to dissolve completely into solution", "Lose water of crystallization to air", "Form hydrates"],
             "B", "Deliquescent substances (like $\\text{CaCl}_2$ or $\\text{NaOH}$) absorb water until they form a liquid solution.", "WA-CHM-INO-02", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("The loss of water of crystallization from a hydrated salt exposed to the atmosphere is termed:",
             ["Deliquescence", "Hygroscopy", "Efflorescence", "Hydrolysis"],
             "C", "Efflorescence occurs when the vapor pressure of hydrated salt exceeds atmospheric partial pressure of water vapor.", "WA-CHM-INO-02", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("Which acid is found naturally in vinegar?",
             ["Methanoic acid", "Ethanoic (acetic) acid", "Citric acid", "Lactic acid"],
             "B", "Vinegar is a dilute aqueous solution ($4-8\\%$) of ethanoic acid.", "WA-CHM-INO-01", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("An acid salt is formed when:",
             ["All replaceable hydrogen atoms of an acid are completely neutralized", "Replaceable hydrogen ions of a polybasic acid are only partially replaced by metal ions", "A basic oxide dissolves in water", "A double salt decomposes"],
             "B", "Example: $\\text{NaHCO}_3$ or $\\text{NaHSO}_4$ still contains an unreplaced acidic hydrogen atom.", "WA-CHM-INO-02", "acid-base-theories-arrhenius-bronsted-lewis"),
            ("Which salt is an example of a double salt?",
             ["Alum (potassium aluminium sulphate $\\text{KAl}(\\text{SO}_4)_2 \\cdot 12\\text{H}_2\\text{O}$)", "Sodium chloride", "Potassium hexacyanoferrate(II)", "Sodium ethanoate"],
             "A", "Double salts retain their individual ionic identities when dissolved in aqueous solution.", "WA-CHM-INO-02", "acid-base-theories-arrhenius-bronsted-lewis")
        ]
    },
    "electrochemistry-redox-deep-dive": {
        "title": "Electrochemistry & Redox Reactions Deep Dive Diagnostic",
        "description": "Master half-cell potentials, galvanic cell notation, Nernst principles, and quantitative electrolysis.",
        "lesson": "systematic-oxidation-number-rules-and-tracking",
        "questions": [
            ("What is the oxidation number of sulfur in the thiosulphate ion $\\text{S}_2\\text{O}_3^{2-}$?",
             ["+2", "+4", "+6", "-2"],
             "A", "$2x + 3(-2) = -2 \\implies 2x = 4 \\implies x = +2$.", "WA-CHM-ELC-01", "systematic-oxidation-number-rules-and-tracking"),
            ("In the reaction $2\\text{Fe}^{2+} + \\text{Cl}_2 \\rightarrow 2\\text{Fe}^{3+} + 2\\text{Cl}^-$, chlorine acts as:",
             ["A reducing agent", "An oxidizing agent", "A catalyst", "A spectator ion"],
             "B", "Chlorine is reduced from 0 to -1, gaining electrons and oxidizing $\\text{Fe}^{2+}$ to $\\text{Fe}^{3+}$.", "WA-CHM-ELC-01", "systematic-oxidation-number-rules-and-tracking"),
            ("Given standard reduction potentials $E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\text{ V}$ and $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$, the standard EMF of the Daniel cell is:",
             ["$+0.42\\text{ V}$", "$+1.10\\text{ V}$", "$-1.10\\text{ V}$", "$+1.52\\text{ V}$"],
             "B", "$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0.34 - (-0.76) = +1.10\\text{ V}$.", "WA-CHM-ELC-01", "systematic-oxidation-number-rules-and-tracking"),
            ("A spontaneous electrochemical cell reaction is characterized by:",
             ["Negative $E^\\circ_{\\text{cell}}$ and positive $\\Delta G^\\circ$", "Positive $E^\\circ_{\\text{cell}}$ and negative $\\Delta G^\\circ$", "Zero EMF", "Infinite resistance"],
             "B", "$\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}$; a positive cell EMF produces a negative free energy change (spontaneous).", "WA-CHM-ELC-01", "systematic-oxidation-number-rules-and-tracking"),
            ("What is the purpose of the salt bridge in a galvanic (voltaic) cell?",
             ["To allow electrons to flow through the liquid", "To maintain electrical neutrality by permitting ion migration without bulk mixing", "To increase chemical reaction rate", "To act as a heat sink"],
             "B", "The salt bridge completes the circuit by allowing cations and anions to diffuse, preventing charge build-up.", "WA-CHM-ELC-01", "systematic-oxidation-number-rules-and-tracking"),
            ("A steady current of $5.0\\text{ A}$ is passed for 1930 seconds through molten $\\text{NaCl}$. How many moles of sodium metal are deposited ($F = 96,500\\text{ C/mol}$)?",
             ["$0.05\\text{ mol}$", "$0.10\\text{ mol}$", "$0.20\\text{ mol}$", "$0.50\\text{ mol}$"],
             "B", "$Q = I \\times t = 5.0 \\times 1930 = 9650\\text{ C}$. Number of Faradays $= 9650 / 96500 = 0.10\\text{ F}$. Deposition of $\\text{Na}$ requires $1\\text{ F/mol} \\implies 0.10\\text{ mol}$.", "WA-CHM-ELC-02", "systematic-oxidation-number-rules-and-tracking"),
            ("In the electrolysis of concentrated brine ($\\text{NaCl}_{(aq)}$) in the diaphragm cell, the products formed are:",
             ["$\\text{Na}_{(s)}$ and $\\text{O}_{2(g)}$", "$\\text{H}_{2(g)}$ at cathode, $\\text{Cl}_{2(g)}$ at anode, and $\\text{NaOH}_{(aq)}$ in solution", "$\\text{Na}_{(s)}$ and $\\text{Cl}_{2(g)}$", "$\\text{H}_{2(g)}$ and $\\text{O}_{2(g)}$"],
             "B", "Preferential discharge: $\\text{H}^+$ discharged at cathode ($\\text{H}_2$), $\\text{Cl}^-$ at anode ($\\text{Cl}_2$), leaving $\\text{Na}^+$ and $\\text{OH}^-$ in solution.", "WA-CHM-ELC-02", "systematic-oxidation-number-rules-and-tracking"),
            ("Which factor determines the preferential discharge of ions during electrolysis?",
             ["Position in electrochemical series, concentration, and nature of electrodes", "Only temperature of solution", "Color of ions", "Atmospheric pressure"],
             "A", "The three key rules: relative standard reduction potential, ion concentration, and inert vs active electrode type.", "WA-CHM-ELC-02", "systematic-oxidation-number-rules-and-tracking"),
            ("In electroplating an iron spoon with silver, the iron spoon should be connected to the:",
             ["Anode, with silver electrolyte", "Cathode, with silver nitrate electrolyte and pure silver anode", "Anode, with iron sulphate electrolyte", "Salt bridge"],
             "B", "The article to be plated is made the cathode (negative electrode) where silver cations reduce to coat it: $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$.", "WA-CHM-ELC-02", "systematic-oxidation-number-rules-and-tracking"),
            ("Sacrificial protection prevents underground iron pipelines from rusting by connecting iron to a block of:",
             ["Copper", "Lead", "Magnesium or zinc", "Silver"],
             "C", "Magnesium and zinc are more electropositive than iron, oxidizing preferentially and supplying protective electrons.", "WA-CHM-ELC-01", "systematic-oxidation-number-rules-and-tracking"),
            ("What is the balanced ion-electron half equation for the reduction of acidified permanganate ion?",
             ["$\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O}$", "$\\text{MnO}_4^- + 4\\text{H}^+ + 3e^- \\rightarrow \\text{MnO}_2 + 2\\text{H}_2\\text{O}$", "$\\text{MnO}_4^{2-} + 2e^- \\rightarrow \\text{Mn}^{2+}$", "$\\text{MnO}_4^- + 5e^- \\rightarrow \\text{Mn}$"],
             "A", "Acidified permanganate reduces from $+7$ to $+2$ gaining 5 electrons with 8 protons yielding 4 water molecules.", "WA-CHM-ELC-01", "systematic-oxidation-number-rules-and-tracking"),
            ("During the charging of a lead-acid car accumulator, what occurs at the cathode?",
             ["Lead is converted to lead(II) sulphate", "Lead(II) sulphate is reduced back to spongy lead: $\\text{PbSO}_4 + 2e^- \\rightarrow \\text{Pb} + \\text{SO}_4^{2-}$", "Lead dioxide decomposes to lead metal", "Sulfuric acid is consumed completely"],
             "B", "Charging reverses discharge: spongy lead is regenerated at the cathode and $\\text{PbO}_2$ at the anode, restoring $\\text{H}_2\\text{SO}_4$ density.", "WA-CHM-ELC-02", "systematic-oxidation-number-rules-and-tracking")
        ]
    },
    "equations-formulae-nomenclature-fix-it": {
        "title": "Equations, Formulae & Nomenclature Fix-It Diagnostic",
        "description": "Assess state symbols, balancing polyatomic radicals, ionic spectator cancellation, and systematic IUPAC rules.",
        "lesson": "valencies-and-polyatomic-radicals-memorization-fix",
        "questions": [
            ("What is the valency of the phosphate radical in $\\text{Ca}_3(\\text{PO}_4)_2$?",
             ["1", "2", "3", "4"],
             "C", "Calcium is divalent (valency 2), so the phosphate radical ($\\text{PO}_4^{3-}$) has a valency of 3.", "WA-CHM-STO-01", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("Which formula correctly represents copper(I) oxide?",
             ["$\\text{CuO}$", "$\\text{Cu}_2\\text{O}$", "$\\text{CuO}_2$", "$\\text{Cu}_2\\text{O}_3$"],
             "B", "Copper(I) has valency 1, oxygen has valency 2; crossover yields $\\text{Cu}_2\\text{O}$.", "WA-CHM-STO-01", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("Balance the chemical equation: $a\\text{Al} + b\\text{O}_2 \\rightarrow c\\text{Al}_2\\text{O}_3$. The coefficients $a, b, c$ are:",
             ["2, 3, 1", "4, 3, 2", "1, 2, 1", "4, 2, 2"],
             "B", "$4\\text{Al} + 3\\text{O}_2 \\rightarrow 2\\text{Al}_2\\text{O}_3$. Atoms: $\\text{Al}: 4=4$, $\\text{O}: 6=6$.", "WA-CHM-STO-02", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("What are the spectator ions in the neutralization reaction: $\\text{HCl}_{(aq)} + \\text{NaOH}_{(aq)} \\rightarrow \\text{NaCl}_{(aq)} + \\text{H}_2\\text{O}_{(l)}$?",
             ["$\\text{H}^+$ and $\\text{OH}^-$", "$\\text{Na}^+$ and $\\text{Cl}^-$", "$\\text{Na}^+$ and $\\text{OH}^-$", "$\\text{H}^+$ and $\\text{Cl}^-$"],
             "B", "Sodium and chloride ions remain unchanged in aqueous solution on both sides of the ionic equation.", "WA-CHM-STO-02", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("The net ionic equation for the reaction between barium nitrate and sodium sulphate is:",
             ["$\\text{Ba}^{2+}_{(aq)} + \\text{SO}_{4(aq)}^{2-} \\rightarrow \\text{BaSO}_{4(s)}$", "$\\text{Na}^+ + \\text{NO}_3^- \\rightarrow \\text{NaNO}_3$", "$\\text{Ba(NO}_3)_2 + \\text{Na}_2\\text{SO}_4 \\rightarrow \\text{BaSO}_4 + 2\\text{NaNO}_3$", "$\\text{Ba}^{2+} + 2\\text{e}^- \\rightarrow \\text{Ba}$"],
             "A", "Only the precipitation of barium sulphate involves actual chemical bond formation between ions.", "WA-CHM-STO-02", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("The correct IUPAC name of $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$ is:",
             ["Copper sulphate pentahydrate", "Copper(II) tetraoxosulphate(VI) pentahydrate", "Cuprous sulphate water", "Copper sulfur tetroxide 5-water"],
             "B", "Systematic IUPAC specifies the oxidation state of copper (+2) and sulfur (+6): copper(II) tetraoxosulphate(VI) pentahydrate.", "WA-CHM-STO-01", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("What is the formula of ammonium trioxonitrate(V)?",
             ["$\\text{NH}_4\\text{NO}_2$", "$\\text{NH}_4\\text{NO}_3$", "$(\\text{NH}_4)_2\\text{NO}_3$", "$\\text{NH}_3\\text{NO}_3$"],
             "B", "Ammonium is $\\text{NH}_4^+$ and trioxonitrate(V) is $\\text{NO}_3^-$, giving $\\text{NH}_4\\text{NO}_3$.", "WA-CHM-STO-01", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("When lead(II) nitrate is thermally decomposed, the balanced equation is $2\\text{Pb}(\\text{NO}_3)_{2(s)} \\rightarrow 2\\text{PbO}_{(s)} + 4\\text{NO}_{2(g)} + x$. What is $x$?",
             ["$\\text{N}_2$", "$\\text{O}_{2(g)}$", "$\\text{H}_2\\text{O}$", "$\\text{NO}$"],
             "B", "Lead(II) nitrate decomposes to yellow lead(II) oxide, brown nitrogen dioxide, and oxygen gas ($\\text{O}_2$).", "WA-CHM-STO-02", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("Which state symbol designates a solute dissolved in water?",
             ["(s)", "(l)", "(g)", "(aq)"],
             "D", "(aq) represents an aqueous solution where water is the solvent.", "WA-CHM-STO-02", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("What is the formula of aluminium carbide?",
             ["$\\text{AlC}$", "$\\text{Al}_4\\text{C}_3$", "$\\text{Al}_3\\text{C}_4$", "$\\text{Al}_2\\text{C}_3$"],
             "B", "Aluminium has valency 3 and carbide carbon has valency 4; crossing over gives $\\text{Al}_4\\text{C}_3$.", "WA-CHM-STO-01", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("The systematic name for laughing gas ($\\text{N}_2\\text{O}$) is:",
             ["Nitrogen monoxide", "Dinitrogen monoxide", "Nitrogen dioxide", "Dinitrogen trioxide"],
             "B", "Contains 2 nitrogen atoms and 1 oxygen atom: dinitrogen monoxide.", "WA-CHM-STO-01", "valencies-and-polyatomic-radicals-memorization-fix"),
            ("Balance the combustion equation of propane: $\\text{C}_3\\text{H}_8 + 5\\text{O}_2 \\rightarrow 3\\text{CO}_2 + y\\text{H}_2\\text{O}$. What is $y$?",
             ["3", "4", "5", "8"],
             "B", "8 hydrogen atoms on the left require $4\\text{H}_2\\text{O}$ ($y = 4$) on the right.", "WA-CHM-STO-02", "valencies-and-polyatomic-radicals-memorization-fix")
        ]
    }
}

out = []
out.append('/**')
out.append(' * Trainbow HUB: Chemistry Academy Diagnostic Test Question Banks')
out.append(' *')
out.append(' * Each of the 12 courses has a targeted diagnostic test (12 original questions)')
out.append(' * tagged with specific WeakArea codes to construct personal remediation paths.')
out.append(' * All chemical formulas and calculations use proper KaTeX ($...).')
out.append(' */\n')
out.append('import { CourseDiagnostic, DiagnosticQuestion } from "./english-diagnostics";\n')
out.append('export const CHEMISTRY_DIAGNOSTICS: Record<string, CourseDiagnostic> = {')

for slug, data in courses_data.items():
    out.append(f'  // --------------------------------------------------------------------------')
    out.append(f'  // COURSE: {slug}')
    out.append(f'  // --------------------------------------------------------------------------')
    out.append(f'  "{slug}": {{')
    out.append(f'    courseSlug: "{slug}",')
    out.append(f'    title: {json.dumps(data["title"])},')
    out.append(f'    description: {json.dumps(data["description"])},')
    out.append(f'    passPercentage: 70,')
    out.append(f'    questions: [')
    for idx, q in enumerate(data["questions"], 1):
        prompt, opts, correct, expl, wa, rec_lesson = q
        out.append(f'      {{')
        out.append(f'        id: "diag_chm_{slug[:10]}_{idx}",')
        out.append(f'        courseSlug: "{slug}",')
        out.append(f'        prompt: {json.dumps(prompt)},')
        out.append(f'        options: [')
        letters = ["A", "B", "C", "D"]
        for opt_idx, opt_text in enumerate(opts):
            out.append(f'          {{ id: "{letters[opt_idx]}", text: {json.dumps(opt_text)} }},')
        out.append(f'        ],')
        out.append(f'        correctOptionId: "{correct}",')
        out.append(f'        explanation: {json.dumps(expl)},')
        out.append(f'        weakAreaCode: "{wa}",')
        out.append(f'        recommendedLessonSlug: "{rec_lesson}",')
        out.append(f'      }},')
    out.append(f'    ],')
    out.append(f'  }},')

out.append('};\n')
out.append('''export function getChemistryDiagnostic(courseSlug: string): CourseDiagnostic | undefined {
  if (CHEMISTRY_DIAGNOSTICS[courseSlug]) {
    return CHEMISTRY_DIAGNOSTICS[courseSlug];
  }

  // Smart fallback mapping by level or topic for other courses
  if (courseSlug.includes("ss1") || courseSlug.includes("matter") || courseSlug.includes("atomic")) {
    return CHEMISTRY_DIAGNOSTICS["chemistry-ss1-matter-atomic-structure-periodic-table"];
  }
  if (courseSlug.includes("ss2") || courseSlug.includes("stoichiometry") || courseSlug.includes("bonding")) {
    return CHEMISTRY_DIAGNOSTICS["chemistry-ss2-bonding-stoichiometry-acids-bases-salts"];
  }
  if (courseSlug.includes("ss3") || courseSlug.includes("electrochemistry") || courseSlug.includes("organic")) {
    return CHEMISTRY_DIAGNOSTICS["chemistry-ss3-electrochemistry-rates-equilibrium-organic"];
  }
  if (courseSlug.includes("waec") || courseSlug.includes("ssce")) {
    return CHEMISTRY_DIAGNOSTICS["waec-neco-ssce-chemistry-mastery"];
  }
  if (courseSlug.includes("jamb") || courseSlug.includes("utme")) {
    return CHEMISTRY_DIAGNOSTICS["jamb-utme-chemistry-complete"];
  }
  if (courseSlug.includes("practical") || courseSlug.includes("volumetric")) {
    return CHEMISTRY_DIAGNOSTICS["volumetric-analysis-practical-chemistry"];
  }
  if (courseSlug.includes("bootcamp") || courseSlug.includes("mole")) {
    return CHEMISTRY_DIAGNOSTICS["stoichiometry-mole-concept-bootcamp"];
  }
  if (courseSlug.includes("organic")) {
    return CHEMISTRY_DIAGNOSTICS["organic-chemistry-made-clear"];
  }
  if (courseSlug.includes("inorganic") || courseSlug.includes("periodic")) {
    return CHEMISTRY_DIAGNOSTICS["inorganic-chemistry-periodic-trends-metals-nonmetals"];
  }
  if (courseSlug.includes("acid")) {
    return CHEMISTRY_DIAGNOSTICS["acids-bases-salts-ph"];
  }
  if (courseSlug.includes("electro") || courseSlug.includes("redox")) {
    return CHEMISTRY_DIAGNOSTICS["electrochemistry-redox-deep-dive"];
  }
  return CHEMISTRY_DIAGNOSTICS["chemistry-ss1-matter-atomic-structure-periodic-table"];
}
''')

with open("src/lib/data/chemistry-diagnostics.ts", "w", encoding="utf-8") as f:
    f.write("\n".join(out))

print(f"✓ Generated src/lib/data/chemistry-diagnostics.ts with {len(courses_data)} course diagnostics.")
