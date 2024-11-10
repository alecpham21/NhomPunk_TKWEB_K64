var slides = document.querySelectorAll('.imageslider-item');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

//Image Slider
var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

//Auto Slide
var repeat = function () {
    let active = document.getElementsByClassName('active');
    let i = 1;
    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 4000); // Change every 10 seconds
    }
    repeater();
}
repeat();
//scroll down button
document.querySelector('.scroll-down').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#examplesetup').scrollIntoView({
        behavior: 'smooth'
    });
});
//for section example setup
   var imageno = 1;
   displayimg(imageno);

   function nextimg(n){
     displayimg(imageno += n)
   }

   function currentSlider(n){
     displayimg(imageno = n)
   }

   function displayimg(n){
    var i;  
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");
    if (n > image.length){
        imageno = 1;
    }
    if (n < 1)
        {
        imageno = image.length;
    }
    for (i=0; i < image.length; i++)
        {
        image[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++)
        {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    image[imageno - 1].style.display = "block";
    dots [imageno - 1].className += " active";
   }
