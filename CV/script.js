document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".progress-bar").forEach((bar) => {
        let width = bar.getAttribute("style").match(/\d+/)[0] + "%"; // Extract width from style
        bar.style.width = "0"; // Reset width to 0 first

        setTimeout(() => {
            bar.style.width = width; // Animate to actual width
        }, 800);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => observer.observe(element));
});

