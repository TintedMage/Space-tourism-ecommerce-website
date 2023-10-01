const hamburger = document.querySelector('.nav-ham');
const collapse = document.querySelector('.collapse');

hamburger.addEventListener('click', () => {
	collapse.classList.toggle("collapse-toggle");
});



