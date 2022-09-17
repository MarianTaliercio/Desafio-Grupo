let pizza = [
    {
        id: 1,
        nombre: "muzzarella",
        ingredientes: ["muzzarella", " salsa de tomate", "aceitunas"],
        precio: 500,
        imgsrc: "./img/pizza-muzza"
    },
    {
        id: 2,
        nombre: "calabresa",
        ingredientes: ["queso", "longaniza", "salsa de tomate"],
        precio: 900,
    },
    {
        id: 3,
        nombre: "fugazzeta",
        ingredientes: ["queso", "cebolla", "aceitunas"],
        precio: 750,
    },
    {
        id: 4,
        nombre: "napolitana",
        ingredientes: ["queso", "tomate", "albahaca", "aceite de oliva"],
        precio: 1000,
    },
    {
        id: 5,
        nombre: "cuatro quesos",
        ingredientes: ["muzzarella", "parmesano", "roquefort", "robiola"],
        precio: 900,
    },
    {
        id: 6,
        nombre: "argentina",
        ingredientes: ["tomate", "cebolla", "queso"],
        precio: 600,
    },
]


// Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío: 

// 👉 A cada Pizza, agregarle una imagen. 
// 👉 Guardar el array en el local storage. 
// 👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
// 👉 Debajo del card tiene que haber un input y un botón. 

// Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

// 🆙 En Eduflow, colocar el repositorio de Github, en el cual debe figurar el vercel deployado.


const cards = document.querySelector(".pizza-card");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const error = document.querySelector(".error");
const btn = document.querySelector(".btn");


localStorage.setItem("guardarPizzas", JSON.stringify(pizza));



const crearHTML = (pizza) => {
    return `<h3> ${pizza.nombre} </h3> 
            <img src="${pizza.imgsrc}" alt="F-para-la-muzza">
            <p> ${pizza.ingredientes}</p>
            <p> $${pizza.precio}</p>`
}

const renderHTML = (card) => {
    cards.innerHTML = card.map(pizza => crearHTML(pizza));

}




let buscador = [];



// const imprimirCard = (e) => {
//     e.preventDefault();

//     let compararId = input.value;

//     if(!pizza.some(nombre => nombre.id == Number(compararId))){
//         error.textContent = "No ingresaste un valor"
//         // setTimeout(function(){
//         //     error.textContent = "No ingresaste un valor";
//         // }, 2000)
//         return;
//         // }else if( pizza.some(nombre => nombre.id !== Number(compararId))){
//         //     alert("esa pizza no es valida")
//         //     return;
//         }else{
//             buscador = pizza.filter((pizza) => pizza.id == compararId)
//             // console.log(buscador.precio);
            
//             renderHTML(buscador);
//             // console.log(buscador)
//             return;

//     };


// }


const imprimirCard = (e) => {
    e.preventDefault();


    let compararId = input.value;


    if(!compararId){
        error.textContent = "No ingresaste un valor"
        input.style.border = "3px solid red"
        cards.classList.remove("pizza-card");   

        return;

        }else if(!pizza.some(nombre => nombre.id == compararId)){
            error.textContent = "Esa variedad de Pizza no tenemos"
    
            buscador = []
            renderHTML(buscador);
            input.style.border = "3px solid red"
            cards.classList.remove("pizza-card");

            return;


        }else{
            buscador = pizza.filter((pizza) => pizza.id == compararId)
          
            error.textContent = "";
            input.style.border = "";
            cards.classList.add("pizza-card");

            renderHTML(buscador);

    };

};





const init = () => {
  form.addEventListener("submit", imprimirCard)
  cards.classList.remove("pizza-card")

}

init();