let notas = localStorage.getItem("notas");
notas = notas ? JSON.parse(notas) : [];


const updateNote = (id) =>{
    const index = notas.findIndex(nota => nota.id === id);
    let Lanota = notas[index];
    console.log(Lanota)
    
}