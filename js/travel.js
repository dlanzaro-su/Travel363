var whyCarousel = $("#whyCarousel");
var whyBtns = document.querySelectorAll("#whyCarouselNav button");
for (var i = 0; i < whyBtns.length; i++) {
    // create event listeners for each button click
    whyBtns[i].addEventListener('click', function(evt) {
        for (var c of whyBtns.values()) {
            c.classList.remove("active");
        }
        var el = evt.target || evt.currentTarget;
        el.classList.add("active");
        whyCarousel.carousel(parseInt(el.dataset.slide));
    });
}
