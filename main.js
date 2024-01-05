let flag = false;
function myfunction() {
  var e = document.getElementById("myLinks");
  if (e.style.display == 'none'){
    e.style.display = "block";
    flag = true;
  }
  else {
    e.style.display = "none";
    flag = false;
  }
}
function menuVisibility(){
  var e = document.getElementById("myLinks");
  if (window.innerWidth <= 600) {
        e.style.display = Boolean(flag)? 'block' : 'none';
    } else {
        e.style.display = 'none';
    }
}
