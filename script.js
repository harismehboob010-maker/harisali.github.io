// selecting menu button and nav links
var menubtn = document.querySelector('.menu-btn');
var navLinks = document.querySelector('.nav-links');

// toggle menu
menubtn.addEventListener('click', function() {
    menubtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// testimonials slider
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 }
    }
});
