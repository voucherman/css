function openCity(a, b) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabcontent");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "active";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove('active')
  }
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