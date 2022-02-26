var heart = document.getElementById('heart'),
    heartW = heart.offsetWidth,
    heartH = heart.offsetHeight;

document.body.onmousemove = function(event) {
    var x = event.clientX - (heartW / 2);
    var y = event.clientY - (heartH / 2);
    console.log("ds")
    heart.style.transform = "translate(" + x + "px, " + y + "px) rotate(-45deg)"
}

heart.addEventListener("click", function() {
    alert("ds")
})

const btnc = document.getElementById("btnc")
btnc.addEventListener("click", function() {
    window.open("./decifrar.html")
})