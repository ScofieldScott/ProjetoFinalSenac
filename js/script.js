const carousels = [
    document.getElementById('carousel1'),
    document.getElementById('carousel2'),
    document.getElementById('carousel3'),
    document.getElementById('carousel4')
];

let currentIndexes = [0, 0, 0, 0]; // Índices para cada carrossel
const totalSlides = 4; // Total de slides por carrossel

// Função que move um carrossel específico
function moveCarousel(carousel, index) {
    currentIndexes[index]++;
    
    if (currentIndexes[index] >= totalSlides) {
        currentIndexes[index] = 0; // Volta ao início
    }

    const translateY = -currentIndexes[index] * 100; // Move para cima 100% da altura
    carousel.style.transform = `translateY(${translateY}%)`;
    carousel.style.transition = 'transform 0.5s ease-in-out';
}

// Função para iniciar um carrossel com um intervalo de tempo específico
function startCarousel(carousel, index, intervalTime) {
    setInterval(() => {
        moveCarousel(carousel, index);
    }, intervalTime);
}

// Iniciar cada carrossel com tempos diferentes
startCarousel(carousels[0], 0, 2000); // Carrossel 1 - troca a cada 2 segundos
startCarousel(carousels[1], 1, 3000); // Carrossel 2 - troca a cada 3 segundos
startCarousel(carousels[2], 2, 4000); // Carrossel 3 - troca a cada 4 segundos
startCarousel(carousels[3], 3, 5000); // Carrossel 4 - troca a cada 5 segundos
