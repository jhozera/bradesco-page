const inputs = document.querySelectorAll('.carousel input');
const totalSlides = inputs.length;
let currentIndex = 0;

function autoSlide() {
    inputs[currentIndex].checked = false; 
    currentIndex = (currentIndex + 1) % totalSlides; 
    inputs[currentIndex].checked = true; 
}

let slideInterval = setInterval(autoSlide, 4000);

inputs.forEach(input => {
    input.addEventListener('click', () => {
        clearInterval(slideInterval); 
        slideInterval = setInterval(autoSlide, 4000); 
    });
});
