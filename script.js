// script.js

// Toggle between light and dark mode
const toggleSwitch = document.querySelector('#theme-toggle');
const themeStyle = document.querySelector('#theme-style');

toggleSwitch.addEventListener('change', function(event) {
    if (event.target.checked) {
        themeStyle.setAttribute('href', 'styles-dark.css');
        document.body.classList.add('dark-mode');
    } else {
        themeStyle.setAttribute('href', 'styles.css');
        document.body.classList.remove('dark-mode');
    }
});
