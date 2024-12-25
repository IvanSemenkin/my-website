let popup = document.getElementById('popup');
let openBtn = document.getElementById('openBtn');
let closeBtn = document.getElementById('closeBtn');

let popup2 = document.getElementById('popup2');
let openBtn2 = document.getElementById('openBtn2');
let closeBtn2 = document.getElementById('closeBtn2');

let popup3 = document.getElementById('popup3');
let openBtn3 = document.getElementById('openBtn3');
let closeBtn3 = document.getElementById('closeBtn3');

openBtn.onclick = function () {
    popup.style.display = 'block';
}

closeBtn.onclick = function () {
    popup.style.display = 'none';
}

openBtn2.onclick = function () {
    popup2.style.display = 'block';
}

closeBtn2.onclick = function () {
    popup2.style.display = 'none';
}

openBtn3.onclick = function () {
    popup3.style.display = 'block';
}

closeBtn3.onclick = function () {
    popup3.style.display = 'none';
}

// Общая функция для закрытия попапа при клике за его пределами
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    } else if (event.target == popup2) {
        popup2.style.display = "none";
    } else if (event.target == popup3) {
        popup3.style.display = "none";
    }
}
