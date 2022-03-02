var heart = document.getElementById("heart"),
    heartW = heart.offsetWidth,
    heartH = heart.offsetHeight;

document.body.onmousemove = function(event) {
    var x = event.clientX
    var y = event.clientY
    console.log("ds");
    heart.style.transform = "translate(" + x + "px, " + y + "px) rotate(-45deg)";
};


const btnc = document.getElementById("btnc");
btnc.addEventListener("click", function() {
    window.open("./decifrar.html");
});