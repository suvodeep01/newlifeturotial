// upload image
function getImagePreview(event)
  {
    var image=URL.createObjectURL(event.target.files[0]);
    var imagediv= document.getElementById('display_img');
    var newimg=document.createElement('img');
    imagediv.innerHTML='';
    newimg.src=image;
    newimg.width="250";
    newimg.height="250";
    imagediv.appendChild(newimg);
}

// show name from input
const txt = document.getElementById('name_input');
const last_text = document.getElementById('last_input');
const btn = document.getElementById('name_btn');
const out = document.getElementById('output_txt3');
const out2 = document.getElementById('output_txt4');
const value1 = document.getElementById('const2');
function fun1(){
    out.innerHTML = txt.value;
    out2.innerHTML = last_text.value;
}
function fun2(){
    value1.innerHTML = value1.value;
}
btn.addEventListener('click',fun1);


