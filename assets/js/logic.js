var blog = JSON.parse(localStorage.getItem('blog'));
var log = JSON.parse(localStorage.getItem('blog#'));

if (log != null) {
    for (let i = 0; i < log; i++) {
        var post = document.getElementById(JSON.stringify(i + 1));
        post.getElementsByClassName('name')[0].textContent = blog[i].Name;
        post.getElementsByClassName('title')[0].textContent = blog[i].Title;
        post.querySelector('p').textContent = blog[i].Content;
    }
}