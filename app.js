// ===== APP.JS - SOPHIE BIJJANI SITE =====

// État global
let animationComplete = false;

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    initHero();
    initPhilosophie();
    initUniversGrid();
    initMusique();
    initCTACollaboration();
    initTestimonials();
    initMenu();
    initFooter();
    initScrollBehavior();
    initSmoothScrolling();
});

// ===== HERO ANIMATION =====
function initHero() {
    const wrapper = document.getElementById('heroAnimation');
    
    // Ligne INSPIRE
    const lineInspire = document.createElement('div');
    lineInspire.className = 'line-inspire';
    const inspire = SITE_CONFIG.hero.mot1;
    
    inspire.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.className = (char.toLowerCase() === 'i') ? 'letter i-inspire' : 'letter';
        span.textContent = char;
        lineInspire.appendChild(span);
    });
    
    // Ligne EXPRIME (commence invisible)
    const lineExprime = document.createElement('div');
    lineExprime.className = 'line-exprime';
    const exprime = SITE_CONFIG.hero.mot2;
    
    exprime.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.className = (char.toLowerCase() === 'i') ? 'letter i-exprime' : 'letter';
        span.textContent = char;
        lineExprime.appendChild(span);
    });
    
    wrapper.appendChild(lineInspire);
    wrapper.appendChild(lineExprime);
    
    // Détection du scroll pour animation EXPRIME
    let exprimeAnimated = false;
    window.addEventListener('scroll', () => {
        if (!exprimeAnimated && window.scrollY > 50) {
            animateExprime();
            exprimeAnimated = true;
            animationComplete = true;
            document.getElementById('header').classList.add('animation-complete');
            document.querySelector('.scroll-indicator').style.display = 'flex';
        }
    });
}

function animateExprime() {
    const letters = document.querySelectorAll('.line-exprime .letter');
    letters.forEach((letter, i) => {
        setTimeout(() => {
            letter.classList.add('visible');
        }, i * 80);
    });
}

// ===== PHILOSOPHIE =====
function initPhilosophie() {
    document.getElementById('philosophieTitre').textContent = SITE_CONFIG.philosophie.titre;
    document.getElementById('philosophieTexte').textContent = SITE_CONFIG.philosophie.texte;
}

// ===== MES UNIVERS =====
function initUniversGrid() {
    const grid = document.getElementById('universGrid');
    
    SITE_CONFIG.univers.forEach(univers => {
        const card = document.createElement('div');
        card.className = 'univers-card';
        card.setAttribute('data-univers-id', univers.id);
        
        card.innerHTML = `
            <div class="univers-card-header">
                <span class="univers-symbole">${univers.symbole}</span>
                <h3>${univers.titre}</h3>
                <p class="univers-soustitre">${univers.soustitre}</p>
            </div>
            <p class="univers-description">${univers.description}</p>
            <button class="univers-toggle" onclick="toggleUnivers('${univers.id}')">
                <span class="toggle-text">Explorer</span>
                <span class="toggle-icon">+</span>
            </button>
            <div class="univers-details" id="${univers.id}-details">
                ${renderUniversDetails(univers)}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function renderUniversDetails(univers) {
    let html = '';
    
    univers.sections.forEach(section => {
        html += `<div class="univers-section">`;
        html += `<h4>${section.categorie}</h4>`;
        
        if (Array.isArray(section.items[0]) || typeof section.items[0] === 'string') {
            html += `<ul class="univers-list">`;
            section.items.forEach(item => {
                if (typeof item === 'string') {
                    html += `<li>${item}</li>`;
                } else {
                    html += `
                        <li class="univers-item-detail">
                            <strong>${item.titre}</strong>
                            <p>${item.description}</p>
                            ${item.meta ? `<span class="item-meta">${item.meta}</span>` : ''}
                        </li>
                    `;
                }
            });
            html += `</ul>`;
        }
        
        html += `</div>`;
    });
    
    if (univers.pdfLien) {
        html += `<a href="${univers.pdfLien}" class="pdf-download" target="_blank">${univers.pdfTexte}</a>`;
    }
    
    if (univers.temoignage) {
        html += `
            <div class="univers-temoignage">
                <p class="temoignage-text">"${univers.temoignage.texte}"</p>
                <p class="temoignage-author">— ${univers.temoignage.auteur}${univers.temoignage.titre ? `, ${univers.temoignage.titre}` : ''}</p>
            </div>
        `;
    }
    
    return html;
}

function toggleUnivers(universId) {
    const details = document.getElementById(`${universId}-details`);
    const card = document.querySelector(`[data-univers-id="${universId}"]`);
    const button = card.querySelector('.univers-toggle');
    const icon = button.querySelector('.toggle-icon');
    const text = button.querySelector('.toggle-text');
    
    const isOpen = details.classList.contains('open');
    
    // Fermer tous les autres univers d'abord
    document.querySelectorAll('.univers-details.open').forEach(detail => {
        if (detail.id !== `${universId}-details`) {
            detail.classList.remove('open');
            const otherCard = detail.closest('.univers-card');
            const otherButton = otherCard.querySelector('.univers-toggle');
            otherButton.querySelector('.toggle-icon').textContent = '+';
            otherButton.querySelector('.toggle-text').textContent = 'Explorer';
        }
    });
    
    // Toggle l'univers actuel
    if (isOpen) {
        details.classList.remove('open');
        icon.textContent = '+';
        text.textContent = 'Explorer';
    } else {
        details.classList.add('open');
        icon.textContent = '−';
        text.textContent = 'Fermer';
        
        // Scroll smooth vers la carte
        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    }
}

// ===== MUSIQUE =====
function initMusique() {
    document.getElementById('musiquetitre').textContent = SITE_CONFIG.musique.titre;
    document.getElementById('spotifyTitre').textContent = SITE_CONFIG.musique.spotifyAlbum.titre;
    
    // Spotify embed
    const spotifyEmbed = document.getElementById('spotifyEmbed');
    spotifyEmbed.src = `https://open.spotify.com/embed/album/${SITE_CONFIG.musique.spotifyAlbum.id}?utm_source=generator`;
    
    // Videos
    const videoGrid = document.getElementById('videoGrid');
    SITE_CONFIG.musique.videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${video.id}" 
                title="${video.titre}"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <div class="video-info">
                <h3>${video.titre}</h3>
                <p>${video.description}</p>
            </div>
        `;
        videoGrid.appendChild(videoItem);
    });
    
    // YouTube CTA
    document.getElementById('youtubeLink').textContent = SITE_CONFIG.musique.ctaYoutube;
    document.getElementById('youtubeLink').href = SITE_CONFIG.liens.youtube;
    
    // Platform links
    const platformLinks = document.getElementById('platformLinks');
    const platforms = [
        { nom: 'Spotify', lien: SITE_CONFIG.liens.spotify, icon: '🎵' },
        { nom: 'Apple Music', lien: SITE_CONFIG.liens.appleMusic, icon: '🍎' },
        { nom: 'Deezer', lien: SITE_CONFIG.liens.deezer, icon: '🎧' },
        { nom: 'YouTube', lien: SITE_CONFIG.liens.youtube, icon: '▶️' }
    ];
    
    platforms.forEach(platform => {
        const link = document.createElement('a');
        link.className = 'platform-link';
        link.href = platform.lien;
        link.target = '_blank';
        link.innerHTML = `<span>${platform.icon}</span> ${platform.nom}`;
        platformLinks.appendChild(link);
    });
}

// ===== CTA COLLABORATION =====
function initCTACollaboration() {
    document.getElementById('ctaCollabTitre').textContent = SITE_CONFIG.ctaCollaboration.titre;
    document.getElementById('ctaCollabDescription').textContent = SITE_CONFIG.ctaCollaboration.description;
    document.getElementById('ctaCollabButton').textContent = SITE_CONFIG.ctaCollaboration.boutonTexte;
    document.getElementById('ctaCollabButton').href = SITE_CONFIG.liens.contact;
}

// ===== TÉMOIGNAGES =====
function initTestimonials() {
    const container = document.getElementById('temoignagesContainer');
    
    SITE_CONFIG.temoignages.forEach((temoignage, index) => {
        const div = document.createElement('div');
        div.className = index === 0 ? 'testimonial testimonial-left' : 'testimonial testimonial-right';
        
        div.innerHTML = `
            <p class="testimonial-text">${temoignage.texte}</p>
            <p class="testimonial-author">${temoignage.auteur}</p>
            <p class="testimonial-title">${temoignage.titre}</p>
        `;
        
        container.appendChild(div);
    });
}

// ===== MENU =====
function initMenu() {
    const menuNav = document.getElementById('menuNav');
    const menuSocial = document.getElementById('menuSocial');
    
    // Navigation
    SITE_CONFIG.navigation.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.nom;
        
        if (item.lien) {
            a.href = item.lien;
            a.target = '_blank';
        } else if (item.ancre) {
            a.href = item.ancre;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                closeMenu();
                setTimeout(() => {
                    document.querySelector(item.ancre).scrollIntoView({ behavior: 'smooth' });
                }, 300);
            });
        }
        
        li.appendChild(a);
        menuNav.appendChild(li);
    });
    
    // Social links
    const socials = [
        { icon: 'IG', lien: SITE_CONFIG.liens.instagram },
        { icon: 'YT', lien: SITE_CONFIG.liens.youtube },
        { icon: '🎵', lien: SITE_CONFIG.liens.spotify }
    ];
    
    socials.forEach(social => {
        const a = document.createElement('a');
        a.href = social.lien;
        a.target = '_blank';
        a.textContent = social.icon;
        menuSocial.appendChild(a);
    });
}

function openMenu() {
    const overlay = document.getElementById('menuOverlay');
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    const overlay = document.getElementById('menuOverlay');
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }, 600);
}

// ===== FOOTER =====
function initFooter() {
    document.getElementById('newsletterTitre').textContent = SITE_CONFIG.newsletter.titre;
    document.getElementById('newsletterDescription').textContent = SITE_CONFIG.newsletter.description;
    document.getElementById('footerCopyright').textContent = SITE_CONFIG.footer.copyright;
    
    // Social links footer
    const footerSocial = document.getElementById('footerSocial');
    const socials = [
        { icon: 'IG', lien: SITE_CONFIG.liens.instagram },
        { icon: 'YT', lien: SITE_CONFIG.liens.youtube },
        { icon: '🎵', lien: SITE_CONFIG.liens.spotify }
    ];
    
    socials.forEach(social => {
        const a = document.createElement('a');
        a.href = social.lien;
        a.target = '_blank';
        a.textContent = social.icon;
        footerSocial.appendChild(a);
    });
}

// ===== SCROLL BEHAVIOR =====
function initScrollBehavior() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else if (animationComplete) {
            header.classList.remove('scrolled');
        }
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== LOGO SCROLL TO TOP =====
document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
