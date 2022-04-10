let link = document.querySelector(".btn-login");
let popup = document.querySelector(".modal-login");
let close = document.querySelector(".modal-close");
let form = popup.querySelector("form");
let login = popup.querySelector("[name=user]");
let password = popup.querySelector("[name=password]");
let isStorageSupport = true;
let storage = "";

try {
	storage = localStorage.getItem ("login");
} catch (error) {
	isStorageSupport = false;
}

link.addEventListener ("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		password.focus();
	}	else {
		login.focus();
	}
});

close.addEventListener ("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

window.addEventListener ("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
		}
	}
});

form.addEventListener ("submit", function(evt) {
	if (!login.value || !password.value) {
	evt.preventDefault();
	popup.classList.remove ("modal-error");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add ("modal-error");
	} else {
		if (isStorageSupport) {
		localStorage.setItem ("login", login.value);
		}
	}
});
