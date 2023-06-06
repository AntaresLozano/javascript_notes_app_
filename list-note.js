document.addEventListener("DOMContentLoaded", function () {
    // Aquí puedes ejecutar la función que deseas al entrar a la vista
    setNote();
});

let index = 1;



const setNote = () => {
    const notas = JSON.parse(localStorage.getItem('notas'));
    console.log(notas)
    notas.forEach(nota => {
        const notes = document.getElementById('notes');
        notes.innerHTML += `
        <div class="card">
            <div class="numero" id="numero"> ${index}</div>
            <div class="delete" id ="delete" onclick="deleteNote('${nota.id}')"><span>x</span></div>
            <div id="title"><h2>${nota.title}</h2></div>
            <div id="content"><h2>${nota.content}</h2></div>
            <div id="update" onclick="updateNote('${nota.id}')" ><span>update</span></div>
        </div>`

        index++
    });
}