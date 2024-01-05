const e = document.getElementById("myLinks");
let flag = false;
function myfunction() {
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
  if (window.innerWidth <= 400) {
        e.style.display = Boolean(flag)? 'block' : 'none';
    } else {
        e.style.display = 'none';
    }
}