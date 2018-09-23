var mobileNav = document.querySelector('.mobile-nav'),
	mobileNavList = document.querySelector('.mobile-nav__list'),
	activitiesList = document.querySelectorAll('#activitiesList li a'),
	arrLinks = [],
	butActivites = document.querySelector('#activities');

butActivites.addEventListener('click', function () {
	mobileNavList.innerHTML ='';
	activitiesList.forEach(function (item) {
		mobileNavList.appendChild(item.cloneNode(true));
	});
	mobileNavList.classList.toggle("mobile-nav__list--active");
});