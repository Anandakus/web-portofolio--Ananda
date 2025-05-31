// Sidebar active
const sidebarLinks = document.querySelectorAll('.sidebar ul li');
const sections = document.querySelectorAll('.section');

function setActiveSidebar() {
    let index = sections.length;
    while(--index && window.scrollY + 80 < sections[index].offsetTop) {}
    sidebarLinks.forEach((li) => li.classList.remove('active'));
    sidebarLinks[index].classList.add('active');
}
window.addEventListener('scroll', setActiveSidebar);

// Smooth scroll
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animasi Fade-in
function animateSections() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', animateSections);
window.addEventListener('DOMContentLoaded', animateSections);

// Animasi Skill
const skillBars = document.querySelectorAll('.skill-bar-fill');
function animateSkills() {
    skillBars.forEach(bar => {
        const value = bar.getAttribute('data-skill');
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            bar.style.width = value + '%';
        }
    });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('DOMContentLoaded', animateSkills);

// Dark Mode 
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(mode) {
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }
    localStorage.setItem('theme', mode);
}

if (savedTheme) {
    setTheme(savedTheme);
} else if (prefersDark) {
    setTheme('dark');
} else {
    setTheme('light');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.contains('dark-mode')
        ? setTheme('light')
        : setTheme('dark');
});
