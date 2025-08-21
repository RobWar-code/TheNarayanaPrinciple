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