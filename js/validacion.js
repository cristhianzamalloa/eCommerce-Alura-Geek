    //Tipos de Errores y mensajes a emitir según el tipo de error
const tipoErrores = ["valueMissing", "typeMismatch", "patternMismatch", "customError"];

const mensajesError = {
    //Mensajes Footer
    nombre: {
        valueMissing: "Debe introducir un nombre",
        patternMismatch: "El nombre no debe exceder de 50 carácteres y solo debe contener letras",
    },
    mensaje: {
        valueMissing: "Debe introducir un mensaje",
    },
    //Mensajes Loogin
    correo: {
        valueMissing: "Debe introducir un correo electrónico",
        typeMismatch: "El formato de correo electrónico no es válido. Debe contener @ y dominio",
    },
    clave: {
        valueMissing: "Debe introducir una clave",
        patternMismatch: "Debe contener 8 o más caracteres",
    },
    //Mensajes Agregar Producto
    nombreProducto: {
        valueMissing: "Debe introducir un nombre de producto",
        patternMismatch: "El nombre no debe exceder de 20 carácteres",
    },
    precio: {
        valueMissing: "Debe introducir un precio para el producto",
    },
    descripcion: {
        valueMissing: "Debe introducir una descripción para el producto",
    },
};

//Función para determinar el mensaje a mostrar
function mostrarMensaje (inputType, input) {
    let mensaje = "";
    tipoErrores.forEach((error) => {
        if(input.validity[error]) {
            console.log(inputType, error);
            console.log(input.validity[error]);
            console.log(mensajesError[inputType][error]);   
            mensaje = mensajesError[inputType][error];
        }
    });
    return mensaje;
};

//Función para validar los mensajes
function validar(input) {
    const inputType = input.dataset.type;
    if (input.validity.valid) {
        input.parentElement.classList.remove("container-input--invalid");
        input.parentElement.querySelector(".messageError").innerHTML = "";
    }  else {
        input.parentElement.classList.add("container-input--invalid");
        input.parentElement.querySelector(".messageError").innerHTML = mostrarMensaje(inputType, input);
    }
};

//Para generar el mensaje cuando los inputs pierdan el foco
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    })
});

//Para generar el mensaje cuando los textArea pierdan el foco
const textArea = document.querySelectorAll("textArea");

textArea.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    })
});

//Creación de Función Habilitar
function habilitarFooter() {
    const inputNombre = document.getElementById("nombre").value;
    const inputMensaje = document.getElementById("mensaje").value;
    val = 0

    if(inputNombre == ""){
        val++;
    }
    if(inputMensaje == ""){
        val++;
    } 
    if(val == 0){
        document.getElementById("enviar").disabled = false;
    } else {
        document.getElementById("enviar").disabled = true;
    }
};

function habilitarLogin() {
    const inputCorreo = document.getElementById("correo").value;
    const inputClave = document.getElementById("clave").value;
    val = 0

    if(inputCorreo == ""){
        val++;
    }
    if(inputClave == ""){
        val++;
    } 
    if(val == 0){
        document.getElementById("entrar").disabled = false;
    } else {
        document.getElementById("entrar").disabled = true;
    }
};

function habilitarAgregar() {
    const inputNombreProducto = document.getElementById("nombreProducto").value;
    const inputPrecio = document.getElementById("precio").value;
    const inputDescripcion = document.getElementById("descripcion").value;
    val = 0

    if(inputNombreProducto == ""){
        val++;
    }
    if(inputPrecio == ""){
        val++;
    } 
    if(inputDescripcion == ""){
        val++;
    }
    if(val == 0){
        document.getElementById("agregar").disabled = false;
    } else {
        document.getElementById("agregar").disabled = true;
    }
};

//Activar función Habilitar
document.getElementById("nombre").addEventListener("keyup", habilitarFooter);
document.getElementById("mensaje").addEventListener("keyup", habilitarFooter);
document.getElementById("enviar").addEventListener("click", () => {
    alert("Gracias!!! Pronto me contactaré contigo");
});

const correo = document.getElementById("correo");
const clave = document.getElementById("clave");
const entrar = document.getElementById("entrar");

correo?.addEventListener("keyup", habilitarLogin);
clave?.addEventListener("keyup", habilitarLogin);
entrar?.addEventListener("click", () => {
    window.location.href = "https://cristhianzamalloa.github.io/eCommerce-Alura-Geek/todos-productos.html"
 });

const nombreProducto = document.getElementById("nombreProducto");
const precio = document.getElementById("precio");
const descripcion = document.getElementById("descripcion");
const agregar = document.getElementById("agregar");

nombreProducto?.addEventListener("keyup", habilitarAgregar);
precio?.addEventListener("keyup", habilitarAgregar);
descripcion?.addEventListener("keyup", habilitarAgregar);
agregar?.addEventListener("click", () => {
   alert("Producto agregado");
});