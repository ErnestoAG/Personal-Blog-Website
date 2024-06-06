const Switch = document.getElementById("switch");
const Submit = document.querySelector("form");
var log = JSON.parse(localStorage.getItem('blog#'));

function switchMode() {
    var mode = document.body;
    mode.classList.toggle("dark");
}

Switch.addEventListener('click', switchMode);
Submit.addEventListener('submit', function(event) {
    event.preventDefault();
    var Name = document.getElementById("name");
    var title = document.getElementById("title");
    var content = document.getElementById("content");
    var blog = {
        "Name": Name.value,
        "Title": title.value,
        "Content": content.value,
    }
    localStorage.setItem('blog', JSON.stringify(blog));
    if (log != null){
        log += 1;
        localStorage.setItem('blog#', JSON.stringify(log));
    } else if (log == 5){
        log = 1;
        localStorage.setItem('blog#', JSON.stringify(log));
    }
    else {
        log = 1;
        localStorage.setItem('blog#', JSON.stringify(log));
    }
    window.open('blog.html', '_self');
});