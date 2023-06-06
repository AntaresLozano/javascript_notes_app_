let notas = localStorage.getItem("notas");
notas = notas ? JSON.parse(notas) : [];

let firstStepToUpdate = false;
let idNota = ''

const deleteNote = (id) => {
    const index = notas.findIndex(nota => nota.id === id);
    notas.splice(index, 1);
    localStorage.setItem('notas', JSON.stringify(notas));
    window.location.reload();
}

const setTitle = (title) => {
    let titleElement = document.getElementById('title-pop');
    titleElement.value = title;
}

const setContent = (content) => {
    let contentElement = document.getElementById('content-pop');
    contentElement.value = content;
}

const updateNote = (id) => {

    if (firstStepToUpdate === false) {
        const modal = document.getElementById('container-pop');
        modal.style.display = 'flex';
        const index = notas.findIndex(nota => nota.id === id);
        let Lanota = notas[index];
        console.log(Lanota.title)
        setTitle(Lanota.title);
        setContent(Lanota.content);
        idNota = id
        firstStepToUpdate = true
    } else {
        let id = idNota
        terminar(id);
    }

}

const terminar = (id) => {
    const index = notas.findIndex(nota => nota.id === id);
    let newTitle = document.getElementById('title-pop').value;
    let newContent = document.getElementById('content-pop').value;
    notas[index].title = newTitle;
    notas[index].content = newContent;
    localStorage.setItem('notas', JSON.stringify(notas));
    window.location.reload();
}
