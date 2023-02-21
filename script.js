///Navigation
function show() {
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}
//add the x to change from hamburger icon
changeIcon = (icon) => icon.classList.toggle('bx-x')
//dark mode
const switchElement = document.querySelector('.switch')
switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
//Smooth scroll
const scrollToResult = document.querySelector('#home');
// Use scrollIntoView() to scroll down to our ID
scrollToResult.scrollIntoView('#about');
//Target the next and previous buttons
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
//Target the slides.
const allSlides = document.querySelectorAll('.slide');
//Click the next and prev button add an eventListener next slide
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
//Declare a variable called currentSlide and assign an index of zero
let currentSlide = 0
display(currentSlide);
//Create a function called display. 
//Display only the current slide.
//All other slides will be hidden.
function display() {
    allSlides.forEach((slide) => {
        slide.style.display = 'none';
    });
    allSlides[currentSlide].style.display = 'flex';
}
//Create function nextSlide
//When user clicks on next slide it will increment by one to the next slide. If user is on the last slide it will reset to an index of zero and go back to the first slide.
function nextSlide() {
    currentSlide++;
    if (currentSlide > allSlides.length - 1) {
        currentSlide = 0;
    }
    //Call the function display   
    display(currentSlide);
}
//Create function prevSlide
//currentSlide-- to decrement to the prev slide
//If user clicks prev slide it will decrement by one to the prev slide. If currentSlide is less than zero it will take you to the last slide.     
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = allSlides.length - 1;
    }
    display(currentSlide);
}

