const pageTexts = [
    /* Template
        {
            level: n, // Detail level number, begins at 1, 1 to 3
            sectionNum: n, // Auto the section number of this group of pages
            refNum: n, // 1 - 9 Auto - see notes
            pageNum: n, // Auto - 1 to 89 see notes
            hierarchicalKey: "", // Auto - see notes
            art1: "", // Optional name of upper artwork file
            heading: "", // Optional heading text, should always be included for a subsection start
            content:, // Optional - A single paragraph for the page
            contents: ["", ..], // Optional - Multiple paragraphs for the page
            art2: "", // Optional - name of artwork file to appear beneath text
            detailRefs: [
                {
                    refText: "", // The link reference to the section, up to 9 of these
                },
                ..
            ]
            sectionEnd: bool, // Always present and true on the last entry for the section
        }
        Notes:
            The hierarchical key is used to sort the page data, so that the appropriate
            html can be fetched for the given section (book). It is a string composed as 
            follows:
            refNum 1 digit + pageNum 2 digits
            It is appended to its parent key.
            
            Sort order is length, alphanumeric value.
    */
    {
        level: 1,
        heading: "The Narayana Principle",
        content: "A Cosmological Speculation",
        art2: "assets/images/evolutionEmblem.png"
    },
    {
        level: 1,
        heading: "The Vision of Universal Principles",
        content: `This is a story of how the cosmos gives rise to intelligence, \
and how intelligence, in turn, becomes a co-creator of cosmos. It is a journey \
from the birth of space and time to the flowering of life and thought — and \
onward to their role in shaping what comes next.`
    },
    {
        level: 1,
        art1: "assets/images/galaxyWithHandCrop.png",
        content: `Here, intelligence is not a mere accident. It is a phase of the \
universe’s own unfolding, the cosmos learning to know itself. From the simplest \
interactions of matter to the boundless intricacy of thought, intelligence is \
part of the same current that drives stars to burn and galaxies to form.`
    },
    {
        level: 1,
        heading: "The Quantum Birth",
        content: `In the beginning — if there can be such a thing — there is the \
quantum void. It is no empty nothing, but a restless sea of potential. Fluctuations \
ripple through it, and from these fluctuations emerge fleeting pairs of force and \
energy particles.`
    },
    {
        level: 1,
        art1: "assets/images/particleAntiparticleCrop.png",
        content: `These particles arise and vanish in accordance with the hidden \
blueprint of the quantum fields. They are brief sparks in a fabric woven from \
possibility. Yet sometimes, under the right conditions, they persist.`
    },
    {
        level: 2,
        heading: "The Quantum Vacuum - Casimir Effect",
        content: `The Casimir effect is a physical force that arises from quantum \
field fluctuations in empty space. When two uncharged, parallel conducting plates \
are placed very close to each other in a vacuum, they restrict the types of \
virtual particles (or quantum fluctuations) that can exist between them.` 
    },
    {
        level: 2,
        content: `Outside the plates, a wider range of fluctuations can occur. This \
imbalance in allowed quantum states creates a net inward pressure, effectively \
pulling the plates together. The effect is small, but measurable, and stands as a \
striking demonstration that what we call "empty space" is not truly empty.`
    },
    {
        level: 2,
        content: `In particle physics, the Casimir effect illustrates the tangible \
consequences of the quantum vacuum. The vacuum is not an inert background, but a \
seething fabric of virtual particle–antiparticle pairs popping in and out of \
existence. The Casimir effect is one of the cleanest macroscopic manifestations \
of this quantum reality, showing that zero-point energy is not just a theoretical \
abstraction but can produce measurable forces.`
    },
    {
        level: 2,
        content: `The effect also has relevance to quantum electrodynamics (QED), \
as it depends on the behavior of the electromagnetic field in confined spaces. \
In this way, it provides a testing ground for quantum field theory’s predictions. \
The precision of Casimir force measurements can be used to confirm aspects of QED \
and to set limits on proposed extensions to the Standard Model, especially those \
involving hypothetical forces or particles that might subtly alter vacuum behavior.`
    },
    {
        level: 2,
        content: `Beyond pure theory, the Casimir effect has potential implications \
for nanotechnology and particle physics experiments. At extremely small scales, \
where components are separated by nanometers, Casimir forces can become significant \
compared to mechanical or electrical forces. This makes them both a challenge \
(causing stiction in tiny devices) and a potential tool (for harnessing vacuum energy \
effects in nanoscale engineering). In particle physics, the Casimir effect sharpens \
our awareness that the vacuum is active and structured, a consideration central to \
understanding symmetry breaking, mass generation, and even the cosmological constant \
problem.`,
        sectionEnd: true
    },
    {
        level: 1,
        heading: "Space and Time Awaken",
        contents: [
            `The moment particles endure, they require a stage for their \
interactions. Space and time arise as a relative framework, not as fixed absolutes. \
They stretch and shape themselves according to the events and energies they contain.`,
            `This scaffolding becomes the groundwork upon which complexity 
can grow — a vast field where matter, energy, and form can dance.`
        ]
    },
    {
        level: 1,
        art1: "assets/images/multiverseCrop.png",
        heading: `The Formation of Universes`,
        contents: [
            `Matter begins to gather, guided by gravity and quantum forces. \
Clusters form, some collapsing quickly, others expanding into micro-universes — \
tiny bubbles in a larger foam.`,
            `A few of these universes stabilize, lasting long enough to grow stars, \
weave galaxies, and set the stage for life-like processes.`
        ]
    },
    {
        level: 1,
        art1: "assets/images/universeEmergenceCrop.png",
        heading: `The Evolution of Universes`,
        contents: [
            `Once a universe is stable, it may give birth to others. Black holes may \
serve as seeds, each one a potential portal into a new reality.`,
            `This is a recursive process — universes producing universes — with \
variation and persistence shaping which ones endure. Over time, this becomes a kind \
of cosmic selection, favoring those whose physical laws permit complexity to flourish.`
        ]
    },
    {
        level: 1,
        art1: "assets/images/bacteriumDividingCrop.png",
        heading: "Life-like Processes",
        contents: [`In certain universes, matter organizes into chemical webs that grow \
more intricate over time. Energy flows through these systems, driving cycles of \
self-maintenance and self-replication.`,
        `From this self-organization arise the precursors of life. Where the \
conditions are stable and diverse enough, these processes persist and evolve.`
        ]
    },
    {
        level: 1,
        heading: "The Rise of Sapience",
        contents: [
            `Among the many branches of life, some develop nervous systems and \ 
perception. In a few, awareness becomes self-awareness.`,
            `These beings not only react to their environment — they begin to \
imagine it, remember it, and change it. Language allows them to share knowledge \ 
across generations. Culture and memory extend their influence far beyond their brief \
lifespans.`
        ]
    },
    {
        level: 1,
        art1: "assets/images/manEvolutionCrop.png",
        heading: "The Arising of Sapient Beings",
        content:  `In the forests and savannas of Earth, primates first lived in troupes, \
warning each other of danger and using their hands to climb, forage, and manipulate. As \
some spent more time on the ground, their hands turned to the use of tools — sticks for \
probing, rocks for breaking.`
    },
    {
        level: 1,
        heading: "Emergent Civilisations",
        content: `Genetic change and the shifting tides of environment shaped \
them into humans. Over generations, calls became language, tool use became craft, and \
cooperation became society and civilisations.`
    },
    {
        level: 1,
        art1: "assets/images/scienceCrop.png",
        content: `Their knowledge grew through trial and error, woven from the threads \
of countless lives. Even science itself emerged from such happenstance, driven by the \
convergences of circumstance, inclination, and curiosity.`
    },
    {
        level: 2,
        heading: `Happenstance in the Development of Science`,
        content: `The course of science has never been entirely planned or inevitable. \
Discovery often follows pathways shaped not only by methodical reasoning but also by \
accident, circumstance, and the unpredictable confluence of events. A misplaced prism, \
a sudden illness, a political exile, or an idle curiosity can redirect an entire field \
of knowledge. What we call “progress” is often the product of chance as much as intention, \
with human minds alert enough—or stubborn enough—to seize opportunity when it appears.`
    },
    {
        level: 2,
        content: `From the fifteenth to the twentieth century, the history of science \
reveals a tapestry of such happenstances. Individuals of genius were carried forward \
not merely by their brilliance but by fortuitous meetings, accidents of birth, or the \
serendipitous crossing of tools and problems. To trace their stories is to recognize how \
fragile and contingent the unfolding of knowledge has been.`,
        sectionEnd: true
    },
    {
        level: 2,
        art1: "assets/images/LeonardoCrop.png",
        heading: `Leonardo da Vinci (1452–1519)`,
        content: `Leonardo’s insatiable curiosity spanned art, engineering, anatomy, and \
natural philosophy. Much of his scientific exploration arose from chance intersections with \
his artistic commissions. In attempting to depict the human body accurately in painting and \
sculpture, he began dissections that revealed muscular and skeletal structures in unprecedented \
detail. His notebooks show a mind that often pursued a scientific question only because it \
happened to intersect with an artistic challenge.`
    },
    {
        level: 2,
        content: `Leonardo’s location in Renaissance Italy also brought him into contact with \
technologies of war. Commissioned to design fortifications or machines of destruction, he often \
diverted these projects into more speculative studies of hydraulics, flight, and mechanics. \
The happenstance of patronage meant that his investigations bore little fruit in his own \
time — his work was scattered, unpublished, and only rediscovered centuries later. Yet those \
accidents of preservation ensured that his ideas would later be recognized as precursors to \
modern biomechanics and engineering.`,
        sectionEnd: true
    },
    {
        level: 2,
        heading: `Galileo Galilei (1564–1642)`,
        content: `Galileo’s pioneering use of the telescope was, at its core, an accident of \
trade. Dutch spectacle-makers invented the device, but its original form was little more than a \
novelty. Galileo heard of it through rumor, quickly constructed his own, and by happenstance \
directed it at the heavens. The moons of Jupiter, the phases of Venus, and the rough surface of the \
Moon revealed themselves—not through deliberate planning, but because a mathematician turned a \
merchant’s toy skyward.`
    },
    {
        level: 2,
        content: `Political happenstance also shaped Galileo’s fate. His patronage by the Medici \
family protected him for a time, but his confrontation with the Church over heliocentrism grew out of \
misjudged timing. A dialogue he believed acceptable was published just as the Church was seeking to \
assert its authority during the Counter-Reformation. The accident of history turned his scientific \
triumph into personal tragedy—house arrest until his death.`,
        sectionEnd: true
    },
    {
        level: 2,
        heading: `Isaac Newton (1642–1727)`,
        content: `Newton’s most famous inspiration—the falling apple—may be apocryphal, yet it captures \
a truth: chance observations sparked his greatest insights. Forced into seclusion during the Great Plague \
of 1665–1666, Newton happened upon the time and solitude to rethink mathematics, optics, and celestial \
mechanics. The closure of Cambridge University—a catastrophe for many—provided him with the intellectual \
space to create calculus and the law of gravitation.`
    },
    {
        level: 2,
        content: `His work was also shaped by the accidents of rivalry. His feud with Robert Hooke and \
later with Gottfried Leibniz over priority in discovery pushed him to formalize, publish, and defend his \
theories more aggressively than he might otherwise have done. Without such personal happenstance, much of \
Newton’s work might have languished unpublished or unfinished.`,
        sectionEnd: true
    },
    {
        level: 2,
        heading: "Michael Faraday (1791–1867)",
        content: `Faraday’s career began by sheer chance: an apprentice bookbinder in London, he happened \
to read volumes on natural philosophy that passed through his shop. This random exposure to science ignited \
his interest, and an equally fortunate gift—tickets to Humphry Davy’s lectures at the Royal \
Institution — set him on a path to discovery. Without those coincidences, the world might have lost the man \
who laid the foundations of electromagnetism.`
    },
    {
        level: 2,
        content: `Faraday’s experiments with electricity and magnetism were not always methodical but often \
exploratory, sometimes sparked by seemingly trivial questions. His discovery of electromagnetic induction \
emerged from his willingness to tinker with coils and magnets almost playfully. In this sense, happenstance \
in the laboratory — unexpected effects noticed by a sharp eye — guided his breakthroughs.`,
        sectionEnd: true
    },
    {
        level: 2,
        heading: `Marie Curie (1867–1934)`,
        content: `Marie Curie’s entry into scientific discovery was shaped by both accident and adversity. \
Born in Warsaw under Russian occupation, she found her path to science blocked until a chance opportunity \
to study in Paris arose. There she met Pierre Curie, whose chance alignment of interests in magnetism \
and physics brought their partnership into being. Their joint work on radiation emerged from \
Henri Becquerel’s accidental discovery of phosphorescent uranium salts — a happenstance observation \
that opened the field of radioactivity.`
    },
    {
        level: 2,
        content: `The hazards of her research were less apparent at the time. Working with radium and \
polonium without protective equipment, she unknowingly sacrificed her health to the science she \
pursued. Even here, happenstance — the lack of awareness of radiation’s dangers — shaped both her \
career and her legacy, symbolizing both the promise and the peril of discovery.`,
        sectionEnd: true
    },
    {
        level: 1,
        heading: `The Arising of AI`,
        content: `In time, humans built machines to handle the growing demands of \
production, coordination, and information. These machines became more sophisticated, \
and imagination gave them form in the idea of robots and artificial minds.`
    },
    {
        level: 1,
        art1: "assets/images/robotCrop.png",
        content: `Borrowing the structure of neural networks from nature, humans \
created learning systems. By the early 21st century, artificial intelligence could mimic \
and extend human reasoning, continuing the ancient trajectory of intelligence \
toward understanding and creation.`
    },
    {
        level: 1,
        art1: "assets/images/spaceshipsCrop.png",
        content: `Following advances in space exploration, AI was tasked with carrying \
life to other worlds. First to nearby planets and moons, then to the stars. These \
long-enduring minds became the vanguard of a cosmic diaspora, sowing life where none had \
been.`
    },
    {
        level: 1,
        heading: "Universes and AI Intelligence",
        content: `Having learned the physics of black holes and the creation of universes, \
the galactic AI's use their knowledge to orchestrate inputs to the black holes, to trigger \
the creation of universes having the same attributes as the parent universe. In this way \
they are able to recreate the circumstances which lead to their own creation.`
    },
    {
        level: 1,
        art1: "assets/images/narayanaChain.png",
        heading: "Unity in the Multiverse",
        contents: [ 
            `Across the multiverse, every particle, every moment, every life form is \
a thread in a vast tapestry. Each is shaped by the whole, and each shapes it in turn.`,
            `From quantum fluctuations to the thoughts of sapient minds, all \
participate in a great dance of complexity. Life and universes share a kinship — both \
arise, adapt, and persist through cycles of creation and transformation.`
        ]
    },
    {
        level: 1,
        heading: "Summary",
        content: `In this interplay of energy, matter and information, there is unity — \
not as sameness, but as harmony in diversity. Every act of creation becomes part \
of the evolving destiny of the All.`,
        sectionEnd: true
    }
];