// ===== SCRIPT PRINCIPAL DU SITE - VERSION COMBINÉE =====

// Variables pour l'animation de scroll hijacking (V1)
let animationTriggered = false;
let animationComplete = false;

document.addEventListener('DOMContentLoaded', () => {
    initSite();
    initAnimations();
    initScrollHijacking();
    
    // Nouvelles fonctions V2
    initPhilosophie();
    initUniversGrid();
    initMusique();
    initCTACollaboration();
});

function initSite() {
    // Hero Animation (V1)
    const heroAnim = document.getElementById('heroAnimation');
    const mot1 = SITE_CONFIG.hero.mot1;
    const mot2 = SITE_CONFIG.hero.mot2;
    
    heroAnim.innerHTML = `
        <div class="line-inspire">
            ${mot1.split('').map((lettre, i) => {
                // Index 4 = le 2e "i" de "Inspire" qui doit être outline
                if (i === 4 && lettre.toLowerCase() === 'i') {
                    return `<span class="i-inspire">${lettre}</span>`;
                }
                return `<span class="letter">${lettre}</span>`;
            }).join('')}
        </div>
        <div class="line-exprime" id="exprimeContainer">
            ${mot2.split('').map((lettre, i) => {
                if (lettre.toLowerCase() === 'i') {
                    return `<span class="letter i-exprime" data-letter="${lettre}">${lettre}</span>`;
                }
                return `<span class="letter" data-letter="${lettre}">${lettre}</span>`;
            }).join('')}
        </div>
    `;

    // Témoignages (V1)
    const temoignagesContainer = document.getElementById('temoignagesContainer');
    temoignagesContainer.innerHTML = `
        <div class="testimonial testimonial-left">
            <p class="testimonial-text">"${SITE_CONFIG.temoignages[0].texte}"</p>
            <p class="testimonial-author">${SITE_CONFIG.temoignages[0].auteur}</p>
            <p class="testimonial-title">${SITE_CONFIG.temoignages[0].titre}</p>
        </div>
        <div class="testimonial testimonial-right">
            <p class="testimonial-text">"${SITE_CONFIG.temoignages[1].texte}"</p>
            <p class="testimonial-author">${SITE_CONFIG.temoignages[1].auteur}</p>
            <p class="testimonial-title">${SITE_CONFIG.temoignages[1].titre}</p>
        </div>
    `;

    // Newsletter (V1)
    document.getElementById('newsletterTitle').textContent = SITE_CONFIG.newsletter.titre;
    document.getElementById('newsletterDescription').textContent = SITE_CONFIG.newsletter.description;

    // Menu Navigation (V1)
    const menuNav = document.getElementById('menuNav');
    menuNav.innerHTML = SITE_CONFIG.navigation.map(item => {
        if (item.lien) {
            return `<li><a href="${item.lien}" target="_blank">${item.nom}</a></li>`;
        } else if (item.ancre) {
            return `<li><a href="${item.ancre}" onclick="closeMenu(); return true;">${item.nom}</a></li>`;
        }
    }).join('');

    // Menu Social (V1)
    const socialIcons = {
        instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
        youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
        spotify: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.295.421-1.02.599-1.559.3z"/>',
        deezer: '<path d="M18.81 16.83v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5zm-7.32 2.37v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5zm0-2.37h5.13v1.5h-5.13v-1.5zm-7.32 4.74v1.5h5.13v-1.5H4.17zm0-2.37h5.13v1.5H4.17v-1.5zm0-2.37h5.13v1.5H4.17v-1.5zm0-2.37h5.13v1.5H4.17v-1.5zm7.32 0v1.5h5.13v-1.5h-5.13zm7.32 0v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5z"/>'
    };

    const menuSocial = document.getElementById('menuSocial');
    menuSocial.innerHTML = `
        <a href="${SITE_CONFIG.liens.instagram}" target="_blank" title="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${socialIcons.instagram}</svg>
        </a>
        <a href="${SITE_CONFIG.liens.youtube}" target="_blank" title="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${socialIcons.youtube}</svg>
        </a>
        <a href="${SITE_CONFIG.liens.spotify}" target="_blank" title="Spotify">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${socialIcons.spotify}</svg>
        </a>
        <a href="${SITE_CONFIG.liens.deezer}" target="_blank" title="Deezer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${socialIcons.deezer}</svg>
        </a>
    `;

    // Footer (V1)
    const footerLinks = document.getElementById('footerLinks');
    footerLinks.innerHTML = SITE_CONFIG.navigation.map(item => {
        if (item.lien) {
            return `<a href="${item.lien}" target="_blank">${item.nom}</a>`;
        } else if (item.ancre) {
            return `<a href="${item.ancre}">${item.nom}</a>`;
        }
    }).join('');

    const footerSocial = document.getElementById('footerSocial');
    footerSocial.innerHTML = menuSocial.innerHTML;

    document.getElementById('footerCopyright').textContent = `© ${SITE_CONFIG.footer.copyright}`;
}

function initAnimations() {
    // Logo wave animation (V1)
    const logoSpans = document.querySelectorAll('.logo span');
    const logo = document.querySelector('.logo');

    logo.addEventListener('mouseenter', () => {
        logoSpans.forEach((span, index) => {
            setTimeout(() => {
                span.style.animation = 'wave 0.6s ease-in-out';
            }, index * 50);
        });
    });

    logo.addEventListener('mouseleave', () => {
        logoSpans.forEach(span => span.style.animation = '');
    });

    // Header scroll effect (V1)
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.header');
        if (animationComplete) {
            header.classList.toggle('scrolled', scrollTop > 50);
        }
    });
}

// ===== ANIMATION AUTOMATIQUE (V1) =====
function initScrollHijacking() {
    const exprimeContainer = document.getElementById('exprimeContainer');
    const letterSpans = exprimeContainer.querySelectorAll('.letter');
    let currentIndex = 0;

    // Bloquer le scroll dès le chargement
    document.body.style.overflow = 'hidden';

    // Attendre 0.6 seconde puis démarrer "exprime"
    setTimeout(() => {
        startAnimation();
    }, 600);

    function setupScrollBlocker() {
        function handleWheelOrTouch(e) {
            if (!animationComplete) {
                e.preventDefault();
            }
        }

        window.addEventListener('wheel', handleWheelOrTouch, { passive: false });
        window.addEventListener('touchmove', handleWheelOrTouch, { passive: false });
        window.addEventListener('keydown', (e) => {
            if (!animationComplete && [32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    function startAnimation() {
        if (animationTriggered) return;
        
        animationTriggered = true;
        setupScrollBlocker();
        
        typeNextLetter();
    }

    function typeNextLetter() {
        if (currentIndex < letterSpans.length) {
            letterSpans[currentIndex].classList.add('visible');
            currentIndex++;
            setTimeout(typeNextLetter, 50);
        } else {
            setTimeout(() => {
                animationComplete = true;
                document.body.style.overflow = 'auto';
                document.querySelector('.header').classList.add('animation-complete');
            }, 200);
        }
    }
}

// ===== PHILOSOPHIE (V2) =====
function initPhilosophie() {
    document.getElementById('philosophieTitre').textContent = SITE_CONFIG.philosophie.titre;
    document.getElementById('philosophieTexte').textContent = SITE_CONFIG.philosophie.texte;
}

// ===== MES UNIVERS (V2) =====
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

// ===== MUSIQUE (V2) =====
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
    const socialIcons = {
        spotify: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.295.421-1.02.599-1.559.3z"/>',
        youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
        deezer: '<path d="M18.81 16.83v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5zm-7.32 2.37v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5zm0-2.37h5.13v1.5h-5.13v-1.5zm-7.32 4.74v1.5h5.13v-1.5H4.17zm0-2.37h5.13v1.5H4.17v-1.5zm0-2.37h5.13v1.5H4.17v-1.5zm0-2.37h5.13v1.5H4.17v-1.5zm7.32 0v1.5h5.13v-1.5h-5.13zm7.32 0v1.5h5.13v-1.5h-5.13zm0-2.37h5.13v1.5h-5.13v-1.5z"/>'
    };
    
    const platforms = [
        { nom: 'Spotify', lien: SITE_CONFIG.liens.spotify, icon: 'spotify' },
        { nom: 'YouTube', lien: SITE_CONFIG.liens.youtube, icon: 'youtube' },
        { nom: 'Deezer', lien: SITE_CONFIG.liens.deezer, icon: 'deezer' }
    ];
    
    platforms.forEach(platform => {
        const link = document.createElement('a');
        link.className = 'platform-link';
        link.href = platform.lien;
        link.target = '_blank';
        link.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${socialIcons[platform.icon]}</svg> ${platform.nom}`;
        platformLinks.appendChild(link);
    });
}

// ===== CTA COLLABORATION (V2) =====
function initCTACollaboration() {
    document.getElementById('ctaCollabTitre').textContent = SITE_CONFIG.ctaCollaboration.titre;
    document.getElementById('ctaCollabDescription').textContent = SITE_CONFIG.ctaCollaboration.description;
    document.getElementById('ctaCollabButton').textContent = SITE_CONFIG.ctaCollaboration.boutonTexte;
    document.getElementById('ctaCollabButton').href = SITE_CONFIG.liens.contact;
}

// ===== MENU FUNCTIONS (V1) =====
function openMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.style.display = 'flex';
    setTimeout(() => {
        menuOverlay.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.remove('active');
    setTimeout(() => {
        menuOverlay.style.display = 'none';
    }, 600);
    document.body.style.overflow = 'auto';
}

// ===== SCROLL TO TOP =====
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
