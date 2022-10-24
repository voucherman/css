function openCity(a, b) {
    var c, _0x576ax5, _0x576ax6;
    _0x576ax5 = document.getElementsByClassName('tabcontent');
    for (c = 0; c < _0x576ax5.length; c++) {
        _0x576ax5[c].classList.remove('active')
    };
    _0x576ax6 = document.getElementsByClassName('tablinks');
    for (c = 0; c < _0x576ax6.length; c++) {
        _0x576ax6[c].classList.remove('active')
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