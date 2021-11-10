// console.log('Conectado...');

// PADRE
class Propietario {
	constructor(nombre, direccion, telefono) {
		this.nombre = nombre;
		this.direccion = direccion;
		this.telefono = telefono;
	}
	datosPropietario() {
		return `El nombre del dueño es : <strong>${this.nombre}</strong>. El domicilio es : <strong>${this.direccion}</strong> y el numero telefonico de contacto es : <strong>${this.telefono}</strong>`;
	}
}

// HIJO
class Animal extends Propietario {
	constructor(nombre, direccion, telefono, tipo) {
		super(nombre, direccion, telefono);
		this._tipo = tipo;
	}
	get getTipo() {
		return `El tipo de animal es un : <strong>${this._tipo}</strong>`;
	}
}

// HIJO DEL HIJO
class Mascota extends Animal {
	constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
		super(nombre, direccion, telefono, tipo);
		this._nombreM = nombreMascota;
		this._enfermedad = enfermedad;
	}

	get getNombreMascota() {
		return this._nombreM;
	}
	set setNombreMascota(nombreMascota) {
		this._nombreM = nombreMascota;
	}
	get getEnfermedadMascota() {
		return this._enfermedad;
	}
	set setEnfermedadMascota(enfermedadMascota) {
		this._enfermedad = enfermedadMascota;
	}
}

document.addEventListener('submit', (e) => {
	e.preventDefault();
	// console.log('click');

	let nombrePropietario = document.getElementById('propietario');
	let numTelefonico = document.getElementById('telefono');
	let residencia = document.getElementById('direccion');
	let nombreMascota = document.getElementById('nombreMascota');
	let tipoMascota = document.getElementById('tipo');
	let motivoConsulta = document.getElementById('enfermedad');

	const result = document.querySelector('#resultado ul');

	const nuevoReg = new Mascota(
		nombrePropietario.value,
		residencia.value,
		numTelefonico.value,
		tipoMascota.value,
		nombreMascota.value,
		motivoConsulta.value
	);

	result.innerHTML = `<li>${nuevoReg.datosPropietario()}</li><li> ${
		nuevoReg.getTipo
	}, mientras que el nombre de la mascota es : <strong>${
		nuevoReg.getNombreMascota
	}</strong> y la enfermedad es : <strong>${
		nuevoReg.getEnfermedadMascota
	}</strong></li>`;
});
