window.addEventListener("DOMContentLoaded", function () {

    // Change Slide
    let slides = document.querySelectorAll(".custom-slider");
    let slideIndex = 1
    showSlides(slideIndex)

    let next = document.querySelector(".next")
    let prev = document.querySelector(".prev")

    prev.style.display = "none"

    next.addEventListener("click", () => {
        changeSlide(1)
        fadeRight()

        prev.style.display = "flex"

        if (slides.length === slideIndex) {
            next.style.display = "none"
        } else {
            next.style.display = "flex"
        }
    })

    prev.addEventListener("click", () => {
        changeSlide(-1)
        fadeLeft()

        if (1 === slideIndex) {
            prev.style.display = "none"
            next.style.display = "flex"
        } else {
            prev.style.display = "flex"
        }
    })

    function changeSlide (n) {
        showSlides(slideIndex += n)
    }

    function showSlides (n) {
        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "flex";
    }

    // Animation
    function fadeRight () {
        let fade = document.querySelectorAll(".fade")
        fade.forEach(item => {
            item.animate([
                {
                    transform: 'translateX(-400px)',
                    opacity: 0
                },
                {
                    transform: 'translateX(0)',
                    opacity: 1
                }
            ], {
                duration: 800,
                iterations: 1
            })
        })
    }

    function fadeLeft () {
        let fade = document.querySelectorAll(".fade")
        fade.forEach(item => {
            item.animate([
                {
                    transform: 'translateX(400px)',
                    opacity: 0
                },
                {
                    transform: 'translateX(0px)',
                    opacity: 1
                }
            ], {
                duration: 800,
                iterations: 1
            })
        })
    }
})