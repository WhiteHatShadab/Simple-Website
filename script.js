// Contact form functionality
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
