//Mostrar la lista
$('#boton').click(() => {
    $.get('http://localhost:5000/amigos', function(data){
        let lista = jQuery('#lista');
        lista.empty();
        let amigos = data
        for(let i=0; i<amigos.length; i++){
            let amigo = document.createElement('li');
            amigo.innerText = amigos[i].name;
            // amigo.id = amigos[i].id;
            lista.append(amigo);
        }})
})

//Buscar amigo
// let searcher = document.querySelector('#input');
// let friend = document.querySelector('#amigo');
// $('#search').click(() => {
//     $.get('http://localhost:5000/amigos', function(data){
//         let amigos = data
//         for(let i=0; i<amigos.length; i++){
//             if(amigos[i].id == searcher.value){
//                 friend.innerText = amigos[i].name;
//             }
//         }
//         })
//     })

//como se hizo en el CR
$("#search").click(() => {
    const span = $("#amigo");
    const input = $("#input");
    span.text("");
    $.get('http://localhost:5000/amigos/' + input.val(), (data) => {
        span.text(data.name);
        input.val("");
        });
    })

//Borrar amigo
const  inpDelete = document.querySelector('#inputDelete');
const btnDelete = document.querySelector('#delete');
const spanDelete = document.querySelector('#sucess');

btnDelete.addEventListener('click', () => {
    let idAmigo = inpDelete.value;
    fetch(`http://localhost:5000/amigos/${idAmigo}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(() => {
            spanDelete.innerText = 'Amigo borrado exitosamente'
        });
})