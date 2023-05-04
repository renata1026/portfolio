///Navigation
function show() {
  document.querySelector('.hamburger').classList.toggle('open');
  document.querySelector('.navigation').classList.toggle('active');
}
//add the x to change from hamburger icon
changeIcon = (icon) => icon.classList.toggle('bx-x');

//clicking on a nav link closes the menu and takes user to the section
if (isLowerScreen()) {
  let navLinks = document.querySelectorAll('.navigation ul li a');
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      show();
      document.querySelector('.hamburger .bx-menu').classList.toggle('bx-x');
    });
  });
}

//dark mode
const switchElement = document.querySelector('.switch');
switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
//Smooth scroll
// const scrollToResult = document.querySelector('#home');
// Use scrollIntoView() to scroll down to our ID
// scrollToResult.scrollIntoView('#about');

const testimonials = [
  {
    imgSrc: './assets/josie-peterson.jpg',
    text: "I can't thank you enough for all you've done. Not only have you given me a website that I'm proud of, but I'm so thrilled we found each other and am beyond grateful for everything you've done!",
    name: 'Josie Peterson',
    company: 'Founder of The Ambitious Assistant',
    email: 'https://theambitiousassistant.com',
  },
  {
    imgSrc: './assets/linda-barutha.jpg',
    text: 'Renata is an awesome person who worked in my business for 6 months. During this time, she designed websites, created social media graphics and posts, and implemented SEO strategies. Renata proved to be a reliable and dedicated worker who always prioritized client satisfaction.',
    name: 'Linda Barutha',
    company: 'Founder of Linda Barutha',
    email: 'https://lindabarutha.com',
  },
  {
    imgSrc: './assets/nina-machado.jpg',
    text: 'What an amazing job on my website! Working with Renata was easy and she nailed my vision and brand! She produced quick results and helped me get my site up and running before my big event! Thank you Renata for being wonderful to work with and giving me a fabulous website!',
    name: 'Nina Machado',
    company: 'Founder of Lift Your Vibe',
    email: 'https://www.liftyourvibe.ca',
  },
  {
    imgSrc: './assets/shelby-smith.png',
    text: 'Renata is amazing to work with. She did an incredible job and created a professional website for my business!',
    name: 'Shelby Smith',
    company: 'Founder of Styled By SAS',
    email: 'https://www.styledbysasla.com',
  },
  {
    imgSrc: './assets/tara-reid.jpg',
    text: 'Renata is wonderful to work with and is very skilled in multiple areas. She would be an asset to any team or business that wants help with their website, SEO, or social media marketing. I definitely recommend working with her if you have the chance!',
    name: 'Tara Reid',
    company: 'Founder of Tara Reid ',
    email: 'https://thetarareid.com',
  },
  {
    imgSrc: './assets/sandra-martin.png',
    text: 'Renata is such a pleasure to work with. Her impressive skills, excellent communication, and valuable recommendations make her a pleasure to work with, and I genuinely look forward to continuing to work with Renata in the future.',
    name: 'Sandra Martin',
    company: 'Founder of her Business Society ',
    email: 'https://www.herbusinesssociety.com/',
  },
];

function generateTestimonialHTML(testimonial) {
  return `
    <div class="slide">
      <div class="img-box">
        <img src="${testimonial.imgSrc}" style="background-image: url(${testimonial.imgSrc})" alt="A picture of ${testimonial.name}">
      </div><!--End of img-box-->
      <p>${testimonial.text}</p>
      <h4>${testimonial.name}<br><a href=${testimonial.email}>${testimonial.company}</a></h4>
    </div><!--End of slide-->
  `;
}

function initializeTestimonialSlider(testimonials) {
  const testimonialContainer = document.querySelector('.testimonial-container');
  const testimonialHTML = testimonials.map(generateTestimonialHTML).join('');
  testimonialContainer.innerHTML = testimonialHTML;
  //Target the slides.
  const allSlides = document.querySelectorAll('.slide');

  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  // Add event listeners for next and prev buttons here
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  let currentSlide = 0;
  display(currentSlide);

  // Revised display function for showing two slides
  function display(currentSlide, way) {
    allSlides.forEach((slide) => {
      slide.classList.remove('slide-active');
    });
    if (isLowerScreen()) {
      allSlides[currentSlide].classList.add('slide-active');
    } else {
      if (currentSlide == 0) {
        allSlides[currentSlide].classList.add('slide-active');
        allSlides[currentSlide + 1].classList.add('slide-active');
      } else {
        allSlides[currentSlide].classList.add('slide-active');
        if (way == 'next') {
          allSlides[currentSlide + 1].classList.add('slide-active');
        } else if (way == 'prev') {
          allSlides[currentSlide - 1].classList.add('slide-active');
        }
      }
    }
  }
  // Revised nextSlide function for 2 slides
  function nextSlide() {
    currentSlide++;
    if (isLowerScreen() && currentSlide > allSlides.length - 1) {
      currentSlide = 0;
    }
    if (!isLowerScreen() && currentSlide > allSlides.length - 2) {
      currentSlide = 0;
    }
    //Call the function display
    display(currentSlide, 'next');
  }
  // Revised prevSlide function to work with 2 slides
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = allSlides.length - 1;
    }
    display(currentSlide, 'prev');
  }
}

initializeTestimonialSlider(testimonials);

/* Function that detects lower width devices */
function isLowerScreen() {
  return window.matchMedia('(max-width:800px)').matches;
}
