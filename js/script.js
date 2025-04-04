
const logo = document.querySelector('.spoonflower-logo img');
const originalSrc = logo.src;
const hoverSrc = logo.getAttribute('data-hover');

logo.addEventListener('mouseover', () => {
    logo.src = hoverSrc;
});

logo.addEventListener('mouseout', () => {
    logo.src = originalSrc;
});

