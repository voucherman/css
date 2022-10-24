function openCity(a, b) {
    var c, x, z;
    x = document.getElementsByClassName('tabcontent');
    for (c = 0; c < x.length; c++) {
        x[c].classList.remove('active')
    };
    z = document.getElementsByClassName('tablinks');
    for (c = 0; c < z.length; c++) {
        z[c].classList.remove('active')
    };
    document.getElementById(b).classList.add('active');
    a.currentTarget.classList.add('active')
}
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
    modal.style.display = 'block'
};
span.onclick = function () {
    modal.style.display = 'none'
};
window.onclick = function (a) {
    if (a.target == modal) {
        modal.style.display = 'none'
    }
}
