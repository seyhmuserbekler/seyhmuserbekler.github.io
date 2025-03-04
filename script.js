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

    // **Sonsuz döngü ile sürekli hareket eden yazılar**
    function animateHomepage() {
        gsap.to("#anasayfa p", { 
            x: -100,  
            opacity: 0.2, 
            duration: 2, 
            stagger: 1,  
            ease: "power2.inOut",
            repeat: -1,   // **Sonsuz tekrar**
            yoyo: true,   // **Geri dönme efekti**
            repeatDelay: 1 // **Tekrarlar arasında bekleme süresi**
        });
    }

    animateHomepage();  // **Animasyonu başlat**
    
    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    // Sayfa yüklendiğinde sadece anasayfa görünsün
    showSection('anasayfa');
});
