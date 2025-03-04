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
        gsap.to("#anasayfa p", { 
            x: [-50, 50],  // Yavaş yavaş sağa sola sallanma efekti
            opacity: 1, 
            duration: 3, 
            repeat: -1, 
            yoyo: true,
            ease: "power1.inOut"
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

// **Menüye tıklanınca sayfa geçişleri**
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
        section.style.opacity = '0'; // Önce tüm bölümleri şeffaf yap
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';

        // **Sayfa geçiş animasyonu**
        gsap.to(activeSection, { opacity: 1, duration: 0.5, ease: "power2.out" });
    }
}

// **Sayfa yüklendiğinde sadece "Anasayfa" açılsın**
document.addEventListener("DOMContentLoaded", function () {
    showSection('anasayfa');
});
