document.addEventListener('DOMContentLoaded', () => {
    const flower1 = document.getElementById('flower1');
    const flower2 = document.getElementById('flower2');
    const switchButton = document.getElementById('switchFlowerBtn');

    switchButton.addEventListener('click', () => {
        if (flower1.style.display === 'none') {
            flower1.style.display = 'flex';
            flower2.style