document.querySelector('.scroll-down').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#whyDesign').scrollIntoView({
        behavior: 'smooth'
    });
});