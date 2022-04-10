var mapLink = document.querySelector(".maps");
var mapPopup = document.querySelector(".modal-maps");
var mapClose = mapPopup.querySelector(".modal-close");
var mapsAlt = document.querySelector(".maps-alt");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
	mapsAlt.classList.add("visualy-hidden");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener ("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
		}
	}
});