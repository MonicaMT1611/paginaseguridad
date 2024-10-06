const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Toggle the display of the content
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
