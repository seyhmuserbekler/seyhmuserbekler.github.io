document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".anim-title", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".anim-subtitle", { duration: 1, delay: 0.5, y: 50, opacity: 0, ease: "power2.out" });

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

    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    // Sayfa yüklendiğinde sadece anasayfa görünsün
    showSection('anasayfa');

    // 🎬 Efekt: <p> etiketleri sırayla sola kayarak kaybolsun
    gsap.fromTo("#anasayfa p", 
        { x: 0, opacity: 1 }, 
        { x: -200, opacity: 0, duration: 1, stagger: 1, repeat: -1, repeatDelay: 2 }
    );
});
