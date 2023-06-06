function generarCadenaAleatoria(longitud) {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let cadenaAleatoria = '';

    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        cadenaAleatoria += caracteres.charAt(indice);
    }

    return cadenaAleatoria;
}

let notas = localStorage.getItem("notas");
notas = notas ? JSON.parse(notas) : [];
let longitud = 5;


const getTitle = () => {
    let titleElement = document.getElementById('title');
    return titleElement.value;
}
const getContent = () => {
    let contentElement = document.getElementById('content');
    return contentElement.value;
}

const createNote = () => {
    if (getTitle() != '' && getContent() != '') {
        let cadena = generarCadenaAleatoria(longitud);
        let nota = {
            id: cadena,
            title: getTitle(),
            content: getContent()
        }
        notas.push(nota)
        console.log(notas)
        localStorage.setItem(`notas`, JSON.stringify(notas));
        window.location.href = 'notes-list.html'
    }else{
        alert('por favor ingrese el título y contenido de la nota')
    }
}
