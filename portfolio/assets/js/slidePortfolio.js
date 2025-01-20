document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide) => {
        let currentIndex = 0;
        const images = slide.querySelectorAll('img');
        const nextButton = slide.querySelector('.next');
        const prevButton = slide.querySelector('.prev');
        const intervalTime = 3000;

        // Função para mostrar a imagem atual
        function showSlide(index) {
            images.forEach((img, i) => {
                if (i === index) {
                    img.style.opacity = '1';
                } else {
                    img.style.opacity = '0';
                }
            });
        }

        // Navegação para o próximo slide
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        });

        // Navegação para o slide anterior
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        });

        // Slideshow automático
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }, intervalTime);

        // Exibe o slide inicial
        showSlide(currentIndex);
    });
});

// Função para verificar a posição dos elementos e adicionar/remover classes
function handleScroll() {
    const elements = document.querySelectorAll('.hidden');
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            el.classList.add('visible'); // Adiciona a classe para mostrar o elemento
        } else {
            el.classList.remove('visible'); // Remove a classe para esconder o elemento
        }
    });
}

// Ouve o evento de rolagem
window.addEventListener('scroll', handleScroll);

// Chama a função no carregamento inicial da página
handleScroll();
