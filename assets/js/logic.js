var Switch = document.getElementById("switch");


function switchMode() {
    var mode = document.body;
    mode.classList.toggle("dark");
}



Switch.addEventListener('click', () => switchMode());