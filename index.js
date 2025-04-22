document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.querySelector('.nav-link[data-effect="Home"]');
    let clickCount = 0;

    homeLink.addEventListener("click", (event) => {
        clickCount++;
        if (clickCount < 2) {
            event.preventDefault(); // Prevent navigation on the first click
        } else {
            clickCount = 0; // Reset the counter after the second click
        }
    });
});
