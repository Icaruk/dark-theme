
// Vars
var idThemeAnterior; // guardaría 1, 2 o 3


// Funciones
function switchTheme (idTheme) {
	
	// Obtengo referencia del botón
	const idBoton = "b" + idTheme; // formo "b1", "b2"...
	const elemento = document.getElementById(idBoton);
	
	
	// Elijo un tema
	let theme;
	
	switch(idTheme) {
		case 1: theme = "light"; break;
		case 2: theme = "dark"; break;
		case 3: theme = "superdark"; break;
		default: theme = "light";
	};
	
	
	// Lo aplico
	document.documentElement.setAttribute('data-theme', theme);
	
	
	// Lo guardo en localStorage
	localStorage.setItem('info_theme', idTheme); // guardaría 1, 2 o 3
	
	
	// Cambio los colores de los botones
	if (idThemeAnterior) { // si la variable está definida
		changeButtonColor(idThemeAnterior, false);
	};
	changeButtonColor(idTheme, true);
	
	
	// Guardo la id del botón que se acaba de pulsar
	idThemeAnterior = idTheme;
	
};



function changeButtonColor (idTheme, isSelected) {
	
	// Obtengo referencia del botón
	const idBoton = "b" + idTheme;
	const elemento = document.getElementById(idBoton);
	
	
	if (!idTheme) {
		console.log("idTheme no está definido!");
		break;
	};
	
	
	// Quito las clase que pudiese haber
	elemento.classList.remove("boton_sel");
	
	
	// Añado la que yo quiero
	if (isSelected) {
		elemento.classList.add("boton_sel");
	};
	
	
};



// --- Fin funciones ---



// Compruebo el tema que tenía antes
const infoTheme = localStorage.getItem('info_theme');


if (infoTheme) {
	switchTheme (parseInt(infoTheme));
};




/*
const toggleSwitch = document.querySelector(".theme-switch input[type='checkbox']");

function switchTheme(e, param2 = "") {
	
	console.log(param2);
	
	
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	};
};


toggleSwitch.addEventListener('change', (e) => switchTheme (e, "hola"), false);


const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);
	toggleSwitch.checked = currentTheme === 'dark';
};
*/

