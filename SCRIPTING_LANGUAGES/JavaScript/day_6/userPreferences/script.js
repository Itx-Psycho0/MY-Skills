const themeSelector = document.getElementById('themeSelector');
const body = document.body;
const themes = {
    default: '',
    light: '#ffffff',
    dark: '#333333',
    blue: '#0000ff'
};
// Load saved theme from Local Storage
const savedTheme = localStorage.getItem('preferredTheme');
if (savedTheme && themes[savedTheme]) {
    body.style.backgroundColor = themes[savedTheme];
    themeSelector.value = savedTheme;
}
// Listen for theme changes
themeSelector.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    body.style.backgroundColor = themes[selectedTheme];
    // Save selected theme to Local Storage
    localStorage.setItem('preferredTheme', selectedTheme);
});