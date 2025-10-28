// ===== CONFIGURATION ÉDITABLE =====
const SITE_CONFIG = {
    // Informations générales
    nom: "Sophie Bijjani",
    tagline: "Inspire ༅ Exprime",
    
    // Hero section
    hero: {
        mot1: "Inspire",
        mot2: "exprime"
    },

    // Philosophie (nouvelle section après hero)
    philosophie: {
        titre: "Créatrice d'espaces authentiques",
        texte: "Je crée des espaces où les voix se rencontrent, où l'authenticité est au cœur de l'expérience. Que ce soit sur scène, en cercle ou en accompagnement individuel, je m'adapte à votre vision pour créer des moments d'expression et de connexion."
    },

    // Mes Univers (remplace "activités")
    univers: [
        {
            id: "voix-scene",
            symbole: "🎤",
            titre: "Au Micro",
            soustitre: "Spectacles • Conférences • Maître de cérémonie",
            description: "Je porte l'énergie et guide l'expérience en spectacle ou pour animer votre évènement. ",
            sections: [
                {
                    categorie: "En spectacle",
                    items: [
                        {
                            titre: "Mosaïque Mainstream ༄",
                            description: "Une fresque musicale aux mille reflets : des chansons qui ont traversé frontières et générations, de Dalida à Metallica.",
                            meta: "Solo intimiste • Ambiance café-concert • Répertoire multilingue"
                        },
                        {
                            titre: "À la carte : Jukebox Humain ༅",
                            description: "Vous programmez, Sophie joue ! Un concert sur mesure où le public compose sa playlist en direct.",
                            meta: "Concert interactif • Playlist live • Animation participative"
                        },
                        {
                            titre: "Rouge Somptueux : Compositions ༄",
                            description: "Plongée intime et poétique dans mes compositions originales qui explorent les nuances de l'expérience humaine.",
                            meta: "Créations originales • Univers poétique • Concert intime"
                        },
                        {
                            titre: "Chœur ouvert : Chants de reliance ༅",
                            description: "Chansons glanées au fil de mes voyages. Un moment de connexion collective où les voix se joignent.",
                            meta: "Expérience participative • Chants de différentes traditions • Cercles"
                        }
                    ]
                },
                {
                    categorie: "En parole",
                    items: [
                        "Conférences sur la créativité",
                        "Conférences sur l'empuissancement",
                        "Keynotes inspirants pour événements"
                    ]
                },
                {
                    categorie: "En animation",
                    items: [
                        "Maître de cérémonie pour galas corporatifs",
                        "Porte-parole de festivals",
                        "Animation de conférences"
                    ]
                }
            ],
            pdfLien: "BIJJ_Spectacles.pdf",
            pdfTexte: "📄 Télécharger le catalogue PDF",
            temoignage: {
                texte: "Sophie Bijjani sang for Rush Creek Lodge through this past summer, and she was both a joy to listen to, and a joy to work with. She is professional, punctual, and to top it all off, an amazing musician and singer to boot.",
                auteur: "Rush Creek Lodge",
                titre: "Yosemite, California"
            }
        },
        {
            id: "espaces-rencontre",
            symbole: "༅",
            titre: "Espaces de rencontre",
            soustitre: "Ateliers circlesong • Cercles de chant • Facilitation de groupe",
            description: "J'offre un cadre sensible qui favorise l'émergence d'espaces d'exploration collective où chaque voix trouve sa place.",
            sections: [
                {
                    categorie: "Ateliers de groupe",
                    items: [
                        "Flow Musical (1h30, tous niveaux) - Musique vocale et corporelle improvisée",
                        "Circlesong 101 (4×3h, intermédiaire) - Fondements de la circlesong",
                        "Bases Musicales en Impro Vocale (3h, débutants) - Par où commencer",
                        "Corps Sonores (2h, tous niveaux) - Approche somatique"
                    ]
                }
            ],
            pdfLien: "BIJJ_Ateliers_PRÉSENTATION.pdf",
            pdfTexte: "📄 Télécharger le catalogue d'ateliers PDF",
            temoignage: {
                texte: "L'atelier m'a aidée à comprendre comment improviser vocalement et comment les impros peuvent être structurées, le tout dans une atmosphère accueillante, amicale et sans pression.",
                auteur: "Amélie C."
            }
        },
        {
            id: "accompagnement",
            symbole: "❋",
            titre: "Accompagnement",
            soustitre: "Exploration vocale • Technique • Libération • Création",
            description: "Je t'accompagne dans ton propre déploiement. Un espace privilégié pour explorer ta voix dans une approche holistique corps-cœur-esprit.",
            sections: [
                {
                    categorie: "Accompagnement individuel",
                    items: [
                        "Exploration somatique liée à la voix",
                        "Technique vocale adaptée à vos besoins",
                        "Composition et création musicale",
                        "Clarté de la voix dans une approche holistique",
                        "Libération de blocages émotionnels"
                    ]
                }
            ],
            temoignage: {
                texte: "Je me sens inspiré par l'assertivité de Sophie et sa capacité à tenir le gouvernail avec cœur quel que soit le stress du moment.",
                auteur: "Participant",
                titre: "Festival du Cercle Enchanté"
            }
        }
    ],

    // Musique (section intégrée)
    musique: {
        titre: "Ma Musique",
        spotifyAlbum: {
            titre: 'Album "Feu d\'grand vent"',
            id: "7a0fS2k5bagVzAGGyLxVNf"
        },
        videos: [
            {
                id: "phUMrUfYd2c",
                titre: "Composition originale",
                description: "Découvrez mes créations musicales originales"
            },
            {
                id: "RRzKRhQC1TA",
                titre: "Reprise revisitée",
                description: "Grands classiques, version Bijj"
            }
        ],
        ctaYoutube: "Découvrir plus sur YouTube"
    },

    // CTA Collaboration
    ctaCollaboration: {
        titre: "L'inspiration vient en jouant!",
        description: "La nature de mon travail est de m'adapter à vos besoins. Conférence inspirante ? Spectacle sur mesure ? Atelier de cohésion d'équipe ?  Discutons de ce qui résonne pour vous, que vous ayez une vision claire ou simplement une étincelle d'idée.",
        boutonTexte: "Parlons-en!"
    },

    // Témoignages
    temoignages: [
        {
            texte: "Sophie Bijjani sang for Rush Creek Lodge through this past summer, and she was both a joy to listen to, and a joy to work with. She is professional, punctual, and to top it all off, an amazing musician and singer to boot.",
            auteur: "Rush Creek Lodge",
            titre: "Yosemite, California"
        },
        {
            texte: "Je me sens inspiré par l'assertivité de Sophie et sa capacité à tenir le gouvernail avec cœur quel que soit le stress du moment.",
            auteur: "Participant",
            titre: "Festival du Cercle Enchanté"
        }
    ],

    // Photos
    photos: {
        quote: "PhotoQuote.jpg"
    },

    // Newsletter (intégrée au footer)
    newsletter: {
        titre: "Zone de risque!",
        description: "Tu pourrais faire partie des premières personnes que j’informe des nouvelles initiatives qui germent de mon côté, et ce, jusqu’à trois fois par année. C’est risqué! "
    },

    // Liens
    liens: {
        contact: "https://docs.google.com/forms/d/e/1FAIpQLScVyGLATRRlaKO5cdvQBqITP71xnL9Ahgj4SkxXt-Sed5sCDw/viewform?usp=dialog",
        instagram: "https://www.instagram.com/sophiebijj",
        youtube: "https://www.youtube.com/c/SophieBijjani",
        spotify: "https://open.spotify.com/artist/2gWI0fgWg1LXt6S2y0LZMu/",
        deezer: "https://www.deezer.com/en/artist/14124551",
        appleMusic: "https://music.apple.com/artist/sophie-bijjani"
    },

    // MENU DE NAVIGATION (simplifié - ancres de scroll)
    navigation: [
        { nom: "Accueil", ancre: "#hero" },
        { nom: "Mes univers", ancre: "#univers" },
        { nom: "Musique", ancre: "#musique" },
        { nom: "Contact", lien: "https://docs.google.com/forms/d/e/1FAIpQLScVyGLATRRlaKO5cdvQBqITP71xnL9Ahgj4SkxXt-Sed5sCDw/viewform?usp=dialog" }
    ],

    // FOOTER
    footer: {
        copyright: "Fait avec amour et concentration\n2025 Sophie Bijjani. Inspire ༅ Exprime - Tous droits réservés."
    }
};
