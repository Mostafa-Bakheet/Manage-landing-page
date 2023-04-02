$(document).ready(function() {
    $('.owl-carousel').owlCarousel();
});

$('.owl-carousel').owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 3
})
Emailcheck = document.getElementById("Emailcheck");
EmailBtn = document.getElementById("EmailBtn");
EmailBtn.addEventListener("click", displayDate);

function displayDate() {
    if (!Emailcheck.value) {
        alert("please Enter your email")
    } else
        return true;

}