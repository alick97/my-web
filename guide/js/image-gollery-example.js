const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Lookoing through images. */
let allPics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
for (i = 0; i < allPics.length; ++i) {
    img = document.createElement('img');
    img.setAttribute('src', 'images/' + allPics[i]);
    thumbBar.appendChild(img);
    img.onclick = function(e) {
        displayedImage.src = e.target.src;
    }
}

/* wiring up the Darken/Lighten button. */
btn.onclick = function() {
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
