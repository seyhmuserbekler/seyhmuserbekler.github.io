document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".anim-title", { 
        duration: 1, 
        y: -50, 
        opacity: 0, 
        ease: "power2.out" 
    });

    gsap.from(".anim-subtitle", { 
        duration: 1, 
        delay: 0.5, 
        y: 50, 
        opacity: 0, 
        ease: "power2.out" 
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        if (navMenu.style.display === "flex") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "flex";
            navMenu.style.flexDirection = "column";
        }
    });

    function animateHomepage() {
        gsap.from("#anasayfa p", { 
            x: -100,  
            opacity: 0, 
            duration: 1, 
            stagger: 0.5, 
            ease: "power2.out"
        });
    }

    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            setTimeout(animateHomepage, 500);
        } else {
            animateHomepage();
        }
    }

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
});

// Sayfa yüklendiğinde sadece anasayfa görünsün
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
        gsap.from(activeSection, { opacity: 0, duration: 0.5, ease: "power2.out" });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    showSection('anasayfa');

    // Menü linklerine tıklanınca ilgili bölümü aç
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });
});
