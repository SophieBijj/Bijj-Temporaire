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
        texte: "Je crée des espaces où les voix se rencontrent et où l'authenticité devient spectacle. Que ce soit sur scène, en cercle ou en accompagnement individuel, je m'adapte à votre vision pour créer des moments de connexion réels."
    },

    // Mes Univers (remplace "activités")
    univers: [
        {
            id: "voix-scene",
            symbole: "🎤",
            titre: "Voix en scène",
            soustitre: "Spectacles • Conférences • MC de galas & festivals",
            description: "Je porte l'énergie et guide l'expérience, que ce soit en chantant, en parlant ou en animant votre événement.",
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
            description: "Je crée le cadre sécuritaire où le groupe co-crée. Des espaces d'exploration collective où chaque voix trouve sa place.",
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
