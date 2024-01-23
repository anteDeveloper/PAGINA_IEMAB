$(document).ready(function () {

	/*BARRA DE NAVEGACION FIJA*/
	var headerAltura = $('.encabezado-sitio').innerHeight();
	var barraAltura = $('.navegacion').innerHeight();

	console.log(barraAltura);


	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll > headerAltura) {
			$('.navegacion').addClass('fixed');
			$('body').css({ 'margin-top': barraAltura + 'px' });
		} else {
			$('.navegacion').removeClass('fixed');
			$('body').css({ 'margin-top': '0px' });
		}

	});
});

(function () {
	'use strict';
	var map = L.map('mapa').setView([6.295805,  -75.569426], 16);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.marker([6.295805,  -75.569426]).addTo(map)
			.bindPopup('I. E. Maestro Arenas Betancur.<br> Educando Para la Vida.')
			.openPopup();
	window.addEventListener('load', function () {
		
		// Seleccionar el formulario para validar
		var forms = document.getElementsByClassName('needs-validation');
		// Validar cada campo y prevenir que se envie
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();