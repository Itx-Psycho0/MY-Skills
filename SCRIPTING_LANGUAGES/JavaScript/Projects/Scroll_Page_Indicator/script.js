const indicator = document.querySelector('.indicator');
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// const scrollTop = document.documentElement.scrollTop;
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    // const scrollHeight =
    //     document.documentElement.scrollHeight -
    //     document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;
    indicator.style.width = `${progress}%`;
});