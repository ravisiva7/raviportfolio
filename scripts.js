// Adding smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding an animation to fade in the projects section as the user scrolls
window.addEventListener('scroll', () => {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        const projectTop = project.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (projectTop < windowHeight - 100) {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }
    });
});
