function listen () {
    alert("lets start listening to the 4beer podcast!")
}
document.querySelector("form").onsubmit = function (e) {
    e.preventDefault();
    alert("Your message has been sent!")
}