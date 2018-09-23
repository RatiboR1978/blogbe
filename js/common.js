var mobileNavList = document.querySelector('.mobile-nav__list'),
	activitiesList = document.querySelectorAll('#activitiesList li a'),
	countriesList = document.querySelectorAll('#countriesList li a'),
	citiesList = document.querySelectorAll('#citiesList li a'),
	buttonsMob = document.querySelectorAll('.mobile-nav button');

buttonsMob.forEach(function (item) {
	item.addEventListener('click', func);
});

function func(e) {
	mobileNavList.innerHTML ='';
	if (e.target.id === 'activities') {
		funcClick ('mobile-nav__list-countries', 'mobile-nav__list-cities', 'mobile-nav__list-activities', activitiesList);
	} else if (e.target.id === 'countries') {
		funcClick ('mobile-nav__list-activities', 'mobile-nav__list-cities', 'mobile-nav__list-countries',
			countriesList);
	} else {
		funcClick ('mobile-nav__list-activities', 'mobile-nav__list-countries', 'mobile-nav__list-cities', citiesList);
	}
}

function funcClick (del1, del2, active, list) {
	mobileNavList.classList.remove(del1);
	mobileNavList.classList.remove(del2);
	mobileNavList.classList.toggle(active);
	list.forEach(function (item) {
		mobileNavList.appendChild(item.cloneNode(true));
	});
}