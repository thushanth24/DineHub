function toggleMenu(location) {
    var menu = document.getElementById(location + "-menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

// script.js

// Back-to-Top Button Enhancements
document.querySelector('.up a').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Sticky Navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Feedback Confirmation
document.querySelector('.comment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    e.target.reset();
});

// Collapsible Footer Sections
document.querySelectorAll('.column > .row[id="footh"]').forEach((header) => {
    header.addEventListener('click', () => {
        const siblingRows = header.nextElementSibling.nextElementSibling;
        siblingRows.classList.toggle('visible');
    });
});

// Interactive Nutrient Percentage Display
document.querySelectorAll('.bolg-right div').forEach((item) => {
    item.addEventListener('mouseover', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = 'Recommended daily intake based on a 2,000-calorie diet.';
        item.appendChild(tooltip);
    });
    item.addEventListener('mouseout', () => {
        const tooltip = item.querySelector('.tooltip');
        if (tooltip) tooltip.remove();
    });
});

// Image Modal
document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `<img src="${img.src}" alt=""><span class="close">&times;</span>`;
        document.body.appendChild(modal);

        modal.querySelector('.close').addEventListener('click', () => modal.remove());
    });
});

// Real-Time Character Counter
const textarea = document.querySelector('textarea[name="massage"]');
const charCount = document.createElement('div');
charCount.id = 'charCount';
charCount.innerText = '0/300 characters';
textarea.parentNode.insertBefore(charCount, textarea.nextSibling);

textarea.addEventListener('input', () => {
    if (textarea.value.length > 300) {
        textarea.value = textarea.value.slice(0, 300);
    }
    charCount.innerText = `${textarea.value.length}/300 characters`;
});

// Animated Page Transition
document.body.style.opacity = '0';
window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '1';
});

// Random Nutritional Tip
const tips = [
    "Drink at least 8 glasses of water daily.",
    "Include more fiber in your meals for better digestion.",
    "Limit your intake of processed sugar.",
    "Always check portion sizes to avoid overeating."
];
document.querySelector('.bolg-content').insertAdjacentHTML(
    'afterend',
    `<div class="tip"><strong>Tip of the day:</strong> ${tips[Math.floor(Math.random() * tips.length)]}</div>`
);
