let count = 0;
const slides = document.getElementById('carousel');
const totalSlides = slides.children.length;

setInterval(() => {
    count++;
    if (count >= totalSlides) {
        count = 0;
    }
    slides.style.marginLeft = `-${count * 100}%`;
}, 2000); // 2 segundos para cada imagem
