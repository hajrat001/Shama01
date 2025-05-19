let slider = document.querySelector('.slider');
let left = document.querySelector('.left');
let body = document.querySelector('body');


left.addEventListener('click', function(e) {
  e.stopPropagation();
  slider.classList.toggle("active");
})
body.addEventListener('click', function(e) {
  slider.classList.remove("active");
})
//------------------------------------------//

let inp = document.querySelector('.pic');
let add = document.querySelector('.add');
add.addEventListener('click',function(){
  inp.click();
})
inp.addEventListener('change', addpic);
function addpic(){
  let d = [], f = inp.files;
  [...f].forEach(file => {
    let r = new FileReader();
    r.onload = () => {
      d.push({ name: file.name, data: r.result });
      if (d.length === f.length) {
        postpic(d);
      }
    }
    r.readAsDataURL(file);
  })
}
function postpic(data){
  fetch('https://server-ieuy.onrender.com/03dataP', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(r => r.text())
  .then(da => {alert(da)})
}
//------------------------------------------//

let a = document.querySelector('.a');
a.addEventListener('click', picshow);
function picshow(){
  let showDive = document.createElement('div');
  showDive.className = "showDiv";
  fetch('https://api.github.com/repos/hajrat001/Image/contents')
  .then(r => r.json())
  .then(d => {d.forEach(f => {
    let img = new Image();
    img.src = f.download_url;
    body.appendChild(showDive);
    showDive.appendChild(img);
  })})
}
//------------------------------------------//
