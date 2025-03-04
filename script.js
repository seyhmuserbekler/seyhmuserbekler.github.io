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

    // Mobil ve masaüstü için animasyon ekleyelim
    function animateHomepage() {
        gsap.from("#anasayfa p", { 
            x: -100,  
            opacity: 0, 
            duration: 1, 
            stagger: 0.5, 
            ease: "power2.out"
        });
    }

    // Tarayıcı yüklendiğinde veya yeniden boyutlandırıldığında çalıştır
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            setTimeout(animateHomepage, 500); // Mobilde bazen geç yüklenme olabiliyor
        } else {
            animateHomepage();
        }
    }

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Sayfa yüklendiğinde sadece anasayfa görünsün
document.addEventListener("DOMContentLoaded", function () {
    showSection('anasayfa');
});
