// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

function toggleMenu() {
    mobileNav.classList.toggle('active');
}

mobileMenuBtn.addEventListener('click', toggleMenu);

// Hero Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

// Scroll Animations (Fade-in)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// WhatsApp Widget Logic
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappPopup = document.getElementById('whatsapp-popup');
    const whatsappClose = document.getElementById('whatsapp-close');
    const whatsappBody = document.getElementById('whatsapp-body');
    const whatsappUrl = 'https://wa.me/5581982228973?text=Entrei%20no%20site%20do%20Transbordar%2C%20est%C3%BAdio%20Yoga%20e%20quero%20saber%20mais%20informa%C3%A7%C3%B5es%20!';

    // Toggle popup
    whatsappBtn.addEventListener('click', () => {
        whatsappPopup.classList.toggle('active');
    });

    // Close popup
    whatsappClose.addEventListener('click', (e) => {
        e.stopPropagation();
        whatsappPopup.classList.remove('active');
    });

    // Open WhatsApp
    const openWhatsApp = () => {
        window.open(whatsappUrl, '_blank');
    };

    whatsappBody.addEventListener('click', openWhatsApp);

    // Show popup automatically after 3 seconds
    setTimeout(() => {
        if (whatsappPopup) {
            whatsappPopup.classList.add('active');
        }
    }, 3000);
});

// Product Carousel (Store Section)
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.product-carousel');

    carousels.forEach(carousel => {
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        const productImgs = carousel.querySelectorAll('.product-img');

        if (prevBtn && nextBtn && productImgs.length > 0) {
            let currentProductImg = 0;

            const toggleProductImg = () => {
                productImgs[currentProductImg].classList.remove('active');
                currentProductImg = (currentProductImg + 1) % productImgs.length;
                productImgs[currentProductImg].classList.add('active');
            };

            prevBtn.addEventListener('click', toggleProductImg);
            nextBtn.addEventListener('click', toggleProductImg);
        }
    });
});

// Flip Card (Autoconhecimento Section)
document.addEventListener('DOMContentLoaded', () => {
    const flipCard = document.getElementById('flip-card');
    if (flipCard) {
        flipCard.addEventListener('click', () => {
            flipCard.classList.toggle('flipped');
        });
    }
});

// Prevenir que o widget do WhatsApp ultrapasse o footer-bottom
window.addEventListener('scroll', () => {
    const widget = document.getElementById('whatsapp-widget');
    const footer = document.querySelector('.footer-bottom');
    if (!widget || !footer) return;

    const footerRect = footer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const baseBottom = 20;

    if (footerRect.top < viewportHeight) {
        const offset = viewportHeight - footerRect.top;
        widget.style.bottom = (baseBottom + offset) + 'px';
    } else {
        widget.style.bottom = baseBottom + 'px';
    }
});


