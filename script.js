document.addEventListener('mousemove', (e) => {
    // Parallax effect on floating items
    // 3D Tilt effect on the text content for depth
    const heroContent = document.querySelector('.content');
    const tiltX = (window.innerWidth / 2 - e.clientX) / 40;
    const tiltY = (window.innerHeight / 2 - e.clientY) / 40;

    // Smoothly apply the transform
    heroContent.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${-tiltX}deg)`;
});
