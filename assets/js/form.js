const Switch = document.getElementById("switch");
const Submit = document.querySelector("form");

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
    var Blog = localStorage.getItem('blog');
});