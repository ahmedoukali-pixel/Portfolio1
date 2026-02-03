// JavaScript for animations and interactions - From Original with Improvements

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 15, 0.98)';
            header.style.padding = '10px 0';
            header.classList.add('scrolled');
        } else {
            header.style.background = 'rgba(10, 10, 15, 0.95)';
            header.style.padding = '20px 0';
            header.classList.remove('scrolled');
        }
    });
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(0, 255, 157, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 255, 157, 0.15)';
        });
    });
    
    // Certificate cards hover effect
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            const icon = this.querySelector('.certificate-icon');
            if (icon) {
                icon.style.color = 'var(--primary)';
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'all 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-15px)';
            const icon = this.querySelector('.certificate-icon');
            if (icon) {
                icon.style.color = 'var(--secondary)';
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Hackathon cards animation
    const hackathonCards = document.querySelectorAll('.hackathon-card');
    hackathonCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
    });
    
    // Animate elements on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                // Special animation for hackathon cards
                if (element.classList.contains('hackathon-card')) {
                    element.style.boxShadow = '0 20px 40px rgba(0, 255, 157, 0.15)';
                }
                
                // Animate stats numbers
                if (element.classList.contains('stat-number')) {
                    animateCounter(element);
                }
                
                animateOnScroll.unobserve(element);
            }
        });
    }, { threshold: 0.2 });
    
    // Observe all elements that need animation
    const animatedElements = document.querySelectorAll(
        '.project-card, .certificate-card, .hackathon-card, ' +
        '.about-card, .skill-category, .stat-item, .contact-item'
    );
    
    animatedElements.forEach(element => {
        animateOnScroll.observe(element);
    });
    
    // Observe stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        animateOnScroll.observe(stat);
    });
    
    // Counter animation function
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = 30;
        const increment = target / (duration / step);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, step);
    }
    
    // Tech icons animation
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
            icon.style.transition = `all 0.5s ease ${index * 0.2}s`;
        }, 500);
    });
    
    // Profile image hover effect
    const profileImage = document.querySelector('.profile-image');
    const profileGlow = document.querySelector('.profile-glow');
    
    if (profileImage && profileGlow) {
        profileImage.addEventListener('mouseenter', () => {
            profileGlow.style.boxShadow = 
                'inset 0 0 50px rgba(0, 255, 157, 0.3), ' +
                '0 0 120px rgba(0, 255, 157, 0.6)';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            profileGlow.style.boxShadow = 
                'inset 0 0 50px rgba(0, 255, 157, 0.2), ' +
                '0 0 80px rgba(0, 255, 157, 0.4)';
        });
    }
    
    // Image fallback
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'AHMED.png';
        });
    });
    
    // Initialize animations
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
    
    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 2}s`;
    });
    
    // Circuit animation
    const circuitLines = document.querySelectorAll('.circuit-line');
    const circuitNodes = document.querySelectorAll('.circuit-node');
    
    circuitLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 5}s`;
    });
    
    circuitNodes.forEach((node, index) => {
        node.style.animationDelay = `${index * 1.5}s`;
    });
    
    // Add hover effect to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-3px) scale(1)';
        });
    });
    
    // Social links animation
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Project links hover effect
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(255, 0, 255, 0.3)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Footer links hover effect
    const footerLinks = document.querySelectorAll('.footer-column a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '10px';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '0';
        });
    });
    
    // Add typing effect for hero title
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing after a delay
        setTimeout(typeWriter, 500);
    }
    
    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Initialize all animations on load
    window.addEventListener('load', function() {
        // Trigger scroll event to activate animations
        window.dispatchEvent(new Event('scroll'));
        
        // Add loaded class to body for transition effects
        document.body.classList.add('loaded');
    });
});