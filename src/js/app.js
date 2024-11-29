// Responsive Navigation Menu Toggle
// const navToggle = document.createElement('div');
// navToggle.innerHTML = '☰'; // Menu icon
// navToggle.classList.add('nav-toggle');
// document.body.prepend(navToggle);

// const navMenu = document.querySelector('nav ul');
// navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
// });

// Smooth Scroll for Menu Links
document.querySelectorAll('nav ul li .smooth_scrollable_links').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect on departments
const departmentCards = document.querySelectorAll('.department');
departmentCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Dynamic activity image effect (hover to enlarge)
const activityItems = document.querySelectorAll('.activity-item img');
activityItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
