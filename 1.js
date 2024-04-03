// Funcion para generar las opciones de día, mes y año
function generarOpciones(selectId, inicio, fin) {
    var select = document.getElementById(selectId);
    for (var i = inicio; i <= fin; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        select.add(option);
    }
}

// Generar opciones para el día (del 1 al 31)
generarOpciones("dia", 1, 31);

// Generar opciones para el mes (de enero a diciembre)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var selectMes = document.getElementById("mes");
for (var i = 0; i < meses.length; i++) {
    var option = document.createElement("option");
    option.text = meses[i];
    option.value = i + 1;
    selectMes.add(option);
}

var selectAnio = document.getElementById("anio");
var anioActual = new Date().getFullYear();
for (var i = 1900; i <= anioActual; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    selectAnio.add(option);
}

document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envie automaticamente
    
    // Verificar si todos los campos estan lleno
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var sexo = document.getElementById("sexo").value;
    var clave = document.getElementById("clave").value;
    var confirmarClave = document.getElementById("confirmar-clave").value;
    var rut = document.getElementById("rut").value;
    var fechaNacimientoDia = document.getElementById("dia").value;
    var fechaNacimientoMes = document.getElementById("mes").value;
    var fechaNacimientoAnio = document.getElementById("anio").value;

    // almacena los campos que no han sido llenados
    var camposFaltantes = [];

    // Verifica que campos no han sido llenados y los almacena en el arreglo camposFaltantes
    if (nombre === "") {
        camposFaltantes.push("Nombre");
    }
    if (apellido === "") {
        camposFaltantes.push("Apellido");
    }
    if (correo === "") {
        camposFaltantes.push("E-mail");
    }
    if (sexo === "") {
        camposFaltantes.push("Sexo");
    }
    if (clave === "") {
        camposFaltantes.push("Clave");
    }
    if (confirmarClave === "") {
        camposFaltantes.push("Confirmación de Clave");
    }
    if (rut === "") {
        camposFaltantes.push("RUT");
    }
    if (fechaNacimientoDia === "" || fechaNacimientoMes === "" || fechaNacimientoAnio === "") {
        camposFaltantes.push("Fecha de Nacimiento");
    }

    // Mostrar la alerta con los campos faltantes
    if (camposFaltantes.length > 0) {
        var mensaje = "Debes rellenar todos los campos. Los siguientes campos están vacíos:\n";
        mensaje += camposFaltantes.join("\n");
        alert(mensaje);
    } else {
        alert("Usuario registrado correctamente");
    }
});
