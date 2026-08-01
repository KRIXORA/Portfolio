// A. Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("active");
    });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// B. Mobile Menu
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('active');
});

// C. Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

// D. Scroll Progress
window.onscroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
};

// E. Copy Email
function copyEmail() {
    navigator.clipboard.writeText("mystery4020@gmail.com");
    alert("Email copied to clipboard!"); // Simple aur fast
}

// F. Typing Effect (Ensure correct brackets)
const typingText = document.getElementById("typing-text");
const phrases = ["Masterpieces.", "Modern Web Apps.", "Clean Interfaces.", "UX Solutions."];
let phraseIdx = 0,
    letterIdx = 0,
    isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIdx];
    typingText.textContent = isDeleting ? currentPhrase.substring(0, letterIdx - 1) : currentPhrase.substring(0, letterIdx + 1);
    letterIdx = isDeleting ? letterIdx - 1 : letterIdx + 1;
    
    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && letterIdx === currentPhrase.length) {
        typeSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && letterIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
    }
    setTimeout(type, typeSpeed);
}
document.addEventListener("DOMContentLoaded", type);





/* ==========================
   Lucide Icons
========================== */

lucide.createIcons();

/* ==========================
   Mobile Sidebar
========================== */

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

function openMenu() {
    
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    
}

function closeMenu() {
    
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    
}

menuBtn?.addEventListener("click", openMenu);

closeBtn?.addEventListener("click", closeMenu);

overlay?.addEventListener("click", closeMenu);

document.querySelectorAll(".menu-link").forEach(link => {
    
    link.addEventListener("click", closeMenu);
    
});

/* ESC Key */

document.addEventListener("keydown", e => {
    
    if (e.key === "Escape") {
        
        closeMenu();
        
    }
    
});

/* ==========================
   Header Scroll Effect
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    
    if (window.scrollY > 30) {
        
        header.classList.add("header-scrolled");
        
    } else {
        
        header.classList.remove("header-scrolled");
        
    }
    
});

/* ==========================
   Active Navigation
========================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    
    let current = "";
    
    sections.forEach(section => {
        
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        
        if (window.scrollY >= top) {
            
            current = section.getAttribute("id");
            
        }
        
    });
    
    navLinks.forEach(link => {
        
        link.classList.remove("text-indigo-600");
        
        if (link.getAttribute("href") === "#" + current) {
            
            link.classList.add("text-indigo-600");
            
        }
        
    });
    
});

/* ==========================
   Close menu on resize
========================== */

window.addEventListener("resize", () => {
    
    if (window.innerWidth >= 768) {
        
        closeMenu();
        
    }
    
});




/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {
    
    const preloader = document.getElementById("preloader");
    
    // Small branding delay
    setTimeout(() => {
        
        preloader.classList.add("hide");
        
        // Remove from DOM after fade-out
        setTimeout(() => {
            preloader.remove();
        }, 450);
        
    }, 450);
    
});