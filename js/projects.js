let convert = document.getElementById('convert');
let openConvert = document.getElementById('open-convert');
let closeConvert = document.getElementById('close-convert');

openConvert.onclick = function () {
    console.log('click');
    convert.style.display = 'block';
};

closeConvert.onclick = function () {
    convert.style.display = 'none';
};

let les = document.getElementById('les');
let openLes = document.getElementById('open-les');
let closeLes = document.getElementById('close-les');

openLes.onclick = function () {
    les.style.display = 'block';
};  

closeLes.onclick = function () {        
    les.style.display = 'none';
};