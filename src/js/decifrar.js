function Probar() {
    const bbt = document.getElementById("bbt");
    const ss = document.getElementById("ss").value;
    const h = document.getElementById("sssh");
    if (ss.toLowerCase() === "lo quiero todo contigo amor te amo") {
        alert("Amor muchas felicidades, mandame mensaje diciendo: LO LOGRE 1109");
    } else {
        h.style.display = "block";
        setTimeout(function() {
            h.style.display = "none";
        }, 2500);
    }
}