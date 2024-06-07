const Switch = document.getElementById("switch");
const Submit = document.querySelector("form");
var log = JSON.parse(localStorage.getItem('blog#'));
var BlogC = JSON.parse(localStorage.getItem('blog'));

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

    if (log != null){
        log += 1;
        localStorage.setItem('blog#', JSON.stringify(log));
        if (log > 5) {
            log = 1;
            localStorage.setItem('blog#', JSON.stringify(log));
        }
    } else {
        log = 1;
        localStorage.setItem('blog#', JSON.stringify(log));
    }
    if (Name.value == "") {
        window.alert("Please, add missing information before submitting blog.");
        return;
    } else if (title.value == "") {
        window.alert("Please, add missing information before submitting blog.");
        return;
    } else if (content.value == "") {
        window.alert("Please, add missing information before submitting blog.");
        return;
    }

    var blog = {
        "Name": Name.value,
        "Title": title.value,
        "Content": content.value,
    }
    if (BlogC != null) {
        var Blog = [];
        for (let i = 0; i < log - 1; i++) {
            Blog.push(BlogC[i]);
        }
        Blog.push(blog);
        localStorage.setItem('blog', JSON.stringify(Blog));
    } else {
        var Blog = [];
        Blog.push(blog);
        localStorage.setItem('blog', JSON.stringify(Blog));
    }
    
    window.open('blog.html', '_self');
});