"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const userInput = document.querySelector('.form__input'),
		  name = document.querySelectorAll('[data-name]'),
		  tableRow = document.querySelectorAll('.table__row');

	function hideRow() {
		name.forEach(item => {
			if (userInput.value == '' || item.innerHTML.includes(userInput.value.toLowerCase())) {
				item.parentElement.style.display = '';
			} else {
				item.parentElement.style.display = 'none';
			}
		});
	}
	
	userInput.addEventListener('input', hideRow); 
});