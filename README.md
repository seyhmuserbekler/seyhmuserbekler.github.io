<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Şeyhmus | Kişisel Web Sitesi</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
</head>
<body>
    <header>
        <h1 class="anim-title">Merhaba, ben Şeyhmus!</h1>
        <p class="anim-subtitle">Yazılım mühendisi & web geliştirici</p>
    </header>
    
    <nav>
        <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projelerim">Projelerim</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#iletisim">İletişim</a></li>
        </ul>
    </nav>
    
    <section id="hakkimda" class="section">
        <h2>Hakkımda</h2>
        <p>Buraya kendinle ilgili bilgileri ekleyebilirsin.</p>
    </section>
    
    <section id="projelerim" class="section">
        <h2>Projelerim</h2>
        <p>Buraya projelerini ekleyebilirsin.</p>
    </section>
    
    <section id="blog" class="section">
        <h2>Blog</h2>
        <p>Buraya blog yazılarını ekleyebilirsin.</p>
    </section>
    
    <section id="iletisim" class="section">
        <h2>İletişim</h2>
        <p>Buraya iletişim bilgilerini ekleyebilirsin.</p>
    </section>
    
    <script>
        gsap.from(".anim-title", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
        gsap.from(".anim-subtitle", { duration: 1, delay: 0.5, y: 50, opacity: 0, ease: "power2.out" });
    </script>
</body>
</html>
