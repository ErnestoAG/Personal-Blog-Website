var blog = JSON.parse(localStorage.getItem('blog'));
var log = JSON.parse(localStorage.getItem('blog#'));

if (log > 5) {
    for (i = 0; i < log - 5; i++) {
        var section = document.createElement('section');
        section.setAttribute('id', JSON.stringify(6 + i));
        section.appendChild(document.createElement('h2')).classList.add('name');
        section.appendChild(document.createElement('h2')).classList.add('title');
        section.appendChild(document.createElement('p'));
        document.body.insertBefore(section, document.getElementById('scr'));
        document.body.insertBefore(document.createElement('br'), document.getElementById('scr'));
        document.body.insertBefore(document.createElement('br'), document.getElementById('scr'));
    }
}

if (log != null) {
    for (let i = 0; i < log; i++) {
        var post = document.getElementById(JSON.stringify(i + 1));
        post.getElementsByClassName('name')[0].textContent = blog[i].Name;
        post.getElementsByClassName('title')[0].textContent = blog[i].Title;
        post.querySelector('p').textContent = blog[i].Content;
    }
}