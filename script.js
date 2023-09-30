const toggleButton = document.getElementById('toggleButton');
const dropdownContent = document.getElementById('dropdownContent');

toggleButton.addEventListener('click', () => {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});
