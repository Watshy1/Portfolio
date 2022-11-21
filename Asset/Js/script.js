window.addEventListener("DOMContentLoaded", function () {

    // Animation on hover images
    let projectImages = document.querySelectorAll(".projectImage");

    if (window.matchMedia("(min-width: 769px)").matches) {

        projectImages.forEach(projectImage => {
            projectImage.addEventListener("mouseover", function () {
                projectImage.style.transform = "scale(2)";
                projectImage.style.transition = "transform 0.5s";
            });

            projectImage.addEventListener("mouseout", function () {
                projectImage.style.transform = "scale(1)";
                projectImage.style.transition = "transform 0.5s";
            });
        });

    }
})