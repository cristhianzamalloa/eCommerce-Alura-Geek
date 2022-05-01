//MOBILE***********************************

//ACTIVAR BOTON DE BUSCAR ARCHIVOS Y ACTIVAR LA FUNCIÓN MOSTRAR ARCHIVO - MOBILE
const dropAreaMobile = document.querySelector(".agregar-productoContainerMobile");

buttonMobile = document.querySelector(".agregar-productoContainerMobile");
inputMobile = document.querySelector(".agregar-buscarimagenMobile");

buttonMobile.onclick = () => {
    inputMobile.click();//Si el usuario presiona el botón automaticamente se presionará el input para buscar los archivos
};

inputMobile.addEventListener("change", function() {
    file = this.files[0]; 
    mostrarArchivoMobile(); // El [0] significa que si seleccionamos varios archivos, solo va a tomar en cuenta el primero
})

//FUNCION PARA MOSTRAR ARCHIVO - MOBILE
function mostrarArchivoMobile () {
    let fileType = file.type;

    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //Variable que va a contener el tipo de archivos que van a ser aceptados
    
    if(validExtensions.includes(fileType)) {
        let fileReader = new FileReader(); //Se crea un Lector de archivos
        fileReader.onload = () => {
            let fileURL = fileReader.result; //Se pasa el archivo colocado a la variable fileURL
            let imgTag = `<img src="${fileURL}" alt="">`; //Se crea una etiqueta de imagen y se pasa el archivo cargado al atributo src
            dropAreaMobile.innerHTML = imgTag; //Se agrega la etiqueta img creada al container del HTML     
        }
        fileReader.readAsDataURL(file);
    }else {
        alert("Este NO es un archivo de imagen")
        dropAreaMobile.classList.remove("active");
        }
};

//DESKTOP*********************************

//ARRASTRAR Y SOLTAR IMAGEN EN CAMPO DESKTOP
const dropArea = document.querySelector(".agregar-imagenDos");

let file; //Variable que va a ser usado en varias funciones

//Si se arrastra la imagen al container del HTML
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); 
    dropArea.classList.add("active");
});

//Si se arrastra la imagen al HTML pero fuera del container
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
});

//Si se arrastra la imagen y se suelta en el container de HTML
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); 
    // El [0] significa que si seleccionamos varios archivos, solo va a tomar en cuenta el primero
    file = event.dataTransfer.files[0];
    mostrarArchivo();
});

//ACTIVAR BOTON DE BUSCAR ARCHIVOS Y ACTIVAR LA FUNCIÓN MOSTRAR ARCHIVO - DESKTOP
button = document.querySelector(".agregar-productoArchivo");
input = document.querySelector(".agregar-buscarArchivo");

button.onclick = () => {
    input.click(); //Si el usuario presiona el botón automaticamente se presionará el input para buscar los archivos
};

input.addEventListener("change", function() {
    file = this.files[0]; // El [0] significa que si seleccionamos varios archivos, solo va a tomar en cuenta el primero
    mostrarArchivo();
})

//FUNCION PARA MOSTRAR ARCHIVO - DESKTOP
function mostrarArchivo () {
    let fileType = file.type;

    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //Variable que va a contener el tipo de archivos que van a ser aceptados
    
    if(validExtensions.includes(fileType)) {
        let fileReader = new FileReader(); //Se crea un Lector de archivos
        fileReader.onload = () => {
            let fileURL = fileReader.result; //Se pasa el archivo colocado a la variable fileURL
            let imgTag = `<img src="${fileURL}" alt="">`; //Se crea una etiqueta de imagen y se pasa el archivo cargado al atributo src
            dropArea.innerHTML = imgTag; //Se agrega la etiqueta img creada al container del HTML     
        }
        fileReader.readAsDataURL(file);
    }else {
        alert("Este NO es un archivo de imagen")
        dropArea.classList.remove("active");
        }
};