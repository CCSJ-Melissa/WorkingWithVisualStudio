document.addEventListener("DOMContentLoaded", function () {
	var element = document.createElement("p");
	element.textContent = "This is the element from the third.js file";
	document.querySelector("body").appendChild(element);
});
document.addEventListener("DOMContentLoaded", fuction() {
	var element = document.createElement("p");
	element.textContent = "This is the element from the fourth.js file";
	document.querySelector("body").appendChild(element);
});