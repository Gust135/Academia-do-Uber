// Academia do Uber - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Check for placeholder links and show warning
    function checkPlaceholderLinks() {
        const links = document.querySelectorAll('[data-creator-link]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const creatorLink = this.getAttribute('data-creator-link');
                
                // Check if still contains placeholder text
                if (creatorLink === 'Link do criador aqui' || creatorLink === '#' || !creatorLink) {
                    e.preventDefault();
                    alert('⚠️ ATENÇÃO: Substitua "Link do criador aqui" pelo seu link real de venda antes de usar o site.\n\nConsulte o README.md para instruções detalhadas.');
                    return false;
                }
                
                // If valid link, allow normal behavior
                window.open(creatorLink, '_blank');
            });
        });
    }
    
    // Enhanced hover effects for cards
    function initializeCardEffects() {
        const cards = document.querySelectorAll('.hover-lift, .product-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (this.classList.contains('hover-lift')) {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                } else if (this.classList.contains('product-card')) {
                    this.style.transform = 'translateY(-8px)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Smooth scroll for internal links
    function initializeSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Animation on scroll
    function initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.card, .product-card, .visual-icon');
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
    
    // Enhanced button interactions
    function initializeButtonEffects() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            // Add ripple effect
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    // Floating animation for offer badges
    function initializeFloatingBadges() {
        const badges = document.querySelectorAll('.offer-badge, .product-badge');
        
        badges.forEach(badge => {
            let floatDirection = 1;
            
            setInterval(() => {
                const currentTransform = badge.style.transform || '';
                const translateY = floatDirection * 3;
                badge.style.transform = currentTransform + ` translateY(${translateY}px)`;
                floatDirection *= -1;
            }, 2000);
        });
    }
    
    // Initialize all features
    checkPlaceholderLinks();
    initializeCardEffects();
    initializeSmoothScroll();
    initializeScrollAnimations();
    initializeButtonEffects();
    initializeFloatingBadges();
    
    // Console welcome message
    console.log('🚗 Academia do Uber - Website carregado com sucesso!');
    console.log('📝 Lembre-se de substituir os links placeholder pelos seus links reais.');
    console.log('📖 Consulte o README.md para instruções de configuração.');
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .floating {
        animation: floating 3s ease-in-out infinite;
    }
    
    @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);