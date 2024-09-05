function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

window.addEventListener('load', function() {
    const logos = document.querySelectorAll('.tech-logo');
    logos.forEach(logo => {
        logo.style.width = '100px';
        logo.style.height = '100px';
    });
});