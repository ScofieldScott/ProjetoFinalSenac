
currentIndexCombos = 0;
currentIndexPedidos = 0;
currentIndexPratos = 0;
currentIndexAcompanhamento = 0;

function moveCarousel(iDcarousel, currentIndex) {
    console.log(iDcarousel);
     
     const totalSlides = 4;
     const carousel = document.getElementById(iDcarousel);
     

   

    const translateY = -currentIndex * 100; // Move para cima 100% da altura
    carousel.style.transform = `translateY(${translateY}%)`;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    
    console.log(currentIndex)
}

// Altera as imagens automaticamente a cada 3 segundos

/*
setInterval(function(){

    moveCarousel('carouselCombo',currentIndexCombos)
    currentIndexCombos++
    if (currentIndexCombos >= 4) {
        currentIndexCombos = 0; // Volta ao início
    }
    }, 2000);
setInterval(function(){
    moveCarousel('carouselPedidos',currentIndexPedidos) 
    currentIndexPedidos++
    if (currentIndexPedidos >= 4) {
        currentIndexPedidos = 0; // Volta ao início
    }
    }, 3000);
setInterval(function(){
    moveCarousel('carouselPratos',currentIndexPratos)
    currentIndexPratos++
    if (currentIndexPratos >= 8) {
        currentIndexPratos = 0; // Volta ao início
    }
    }, 4000);
setInterval(function(){
        moveCarousel('carouselAcompanhamento',currentIndexAcompanhamento)
        currentIndexAcompanhamento++
    if (currentIndexAcompanhamento >= 4) {
        currentIndexAcompanhamento = 0; // Volta ao início
    }
    }, 5000);
*/