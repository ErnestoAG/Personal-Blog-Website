var blog = JSON.parse(localStorage.getItem('blog'));
var log = JSON.parse(localStorage.getItem('blog#'));

if (log != 0) {
    var post = document.getElementById(JSON.stringify(log));
    post.getElementsByClassName('name')[0].textContent = blog.Name;
    post.getElementsByClassName('title')[0].textContent = blog.Title;
    post.querySelector('p').textContent = blog.Content;
}