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
