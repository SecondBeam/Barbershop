let link = document.querySelector(".btn-login");
let popup = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");

link.addEventListener ("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	console.log("Клик по кнопке");
});
close.addEventListener ("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});
