
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
// JavaScript for "Visit My Works" button
const visitMyWorksButton = document.querySelector('.header-content .btn.btn-primary');
visitMyWorksButton.addEventListener('click', () => {
    window.open('https://github.com/YassineBenMed1412', '_blank'); // Opens GitHub in a new tab
});

// JavaScript for "Hire Me" button
const hireMeButton = document.querySelector('.btn.btn-lg.my-font.btn-light.rounded');
hireMeButton.addEventListener('click', () => {
    window.location.href = 'mailto:yassinebenmohamed1412@gmail.com'; // Redirects to email client
});

// JavaScript for "Contact Me" form
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the default form submission

    const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
    const email = contactForm.querySelector('input[placeholder="Enter Email"]').value;
    const message = contactForm.querySelector('textarea[placeholder="Write Something"]').value;

    // Email redirection using mailto
    const mailtoLink = `mailto:yassinebenmohamed1412@gmail.com?subject=Message%20from%20${encodeURIComponent(name)}&body=Email:%20${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
});



const downloadCVButton = document.querySelector('#butto');
downloadCVButton.addEventListener('click', () => {
    const cvUrl = 'https://drive.google.com/file/d/1dYxbTyqPCFt2TMDaeM1ZyxeVA_IUvzSZ/view?usp=drive_link'; // Replace with your hosted URL
    window.open(cvUrl, '_blank'); // Opens the CV file in a new tab/window
});
