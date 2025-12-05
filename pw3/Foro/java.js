const regex = {
    nombre: /^[a-záéíóúñ\s]{3,}$/i,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    edad: /^[0-9]+$/
};

const formulario = document.getElementById('miFormulario');
const campoNombre = document.getElementById('nombre');
const campoEmail = document.getElementById('email');
const campoEdad = document.getElementById('edad');

function validarCampo(campo, patron, mensajeError) {
    const valor = campo.value.trim();
    const spanError = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
    
    if (!valor) {
        spanError.textContent = campo.id + ' es requerido';
        return false;
    }
    
    if (!patron.test(valor)) {
        spanError.textContent = mensajeError;
        return false;
    }
    
    if (campo.id === 'edad') {
        const edad = parseInt(valor);
        if (edad < 1 || edad > 120) {
            spanError.textContent = 'La edad debe estar entre 1 y 120 años';
            return false;
        }
    }
    
    spanError.textContent = '';
    return true;
}

campoNombre.addEventListener('blur', function() {
    validarCampo(this, regex.nombre, 'Mínimo 3 caracteres, solo letras y espacios');
});

campoEmail.addEventListener('blur', function() {
    validarCampo(this, regex.email, 'Ingresa un email válido (ej: usuario@dominio.com)');
});

campoEdad.addEventListener('blur', function() {
    validarCampo(this, regex.edad, 'La edad debe ser un número válido');
});

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const nombreValido = validarCampo(campoNombre, regex.nombre, 'Mínimo 3 caracteres, solo letras y espacios');
    const emailValido = validarCampo(campoEmail, regex.email, 'Ingresa un email válido (ej: usuario@dominio.com)');
    const edadValida = validarCampo(campoEdad, regex.edad, 'La edad debe ser un número válido');
    
    if (nombreValido && emailValido && edadValida) {
        const datosFormulario = {
            nombre: campoNombre.value.trim(),
            email: campoEmail.value.trim(),
            edad: parseInt(campoEdad.value.trim())
        };
        
        console.log('✓ Formulario válido. Datos:');
        console.log(datosFormulario);
        
        alert('¡Datos validados correctamente!\n\n' +
            'Nombre: ' + datosFormulario.nombre + '\n' +
            'Email: ' + datosFormulario.email + '\n' +
            'Edad: ' + datosFormulario.edad + ' años');
        
        formulario.reset();
        
        document.getElementById('errorNombre').textContent = '';
        document.getElementById('errorEmail').textContent = '';
        document.getElementById('errorEdad').textContent = '';
    } else {
        console.log('✗ Formulario tiene errores. Corrígelos antes de enviar.');
    }
});
