document.addEventListener("scroll", function() {
    var car = document.querySelector(".car");
    var scrollPosition = window.pageYOffset;
    car.style.top = scrollPosition + "px";
});
