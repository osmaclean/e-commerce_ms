


const body = document.querySelector("body");
const main = document.createElement("main");
const section1 = document.createElement("section");
const section2 = document.createElement("section");
const ul = document.createElement("ul");
const ul2 = document.createElement("ul");
const aside = document.createElement("aside"); // Carrinho
const h2Primeira = document.createElement("h2");
const h2Segunda = document.createElement("h2");

body.appendChild(main);
main.appendChild(h2Primeira);
main.appendChild(section1);
main.appendChild(h2Segunda);
main.appendChild(section2);
section1.appendChild(aside); // Carrinho
section1.className = "ajuste"
section2.className = "ajuste1"
aside.className = "car" // Carrinho
h2Primeira.className = "h2";
h2Primeira.innerText = "Lançamentos";
h2Segunda.className = "h2";
h2Segunda.innerText = "Camisetas";
section1.appendChild(ul);
section2.appendChild(ul2);
ul.className = "container1";
ul2.className = "container2";




let camisas = [];

let camisetas = [];


// Função que separa os itens pelo ID

function separacaoDeItens(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].type === "Camisetas") {
            camisetas.push(lista[i]);
        } else {
            camisas.push(lista[i]);
        }
    }
}
separacaoDeItens(arrayItens);


// Tags dentro da "li" - Função cria itens e adiciona classes


function createLiItens(objeto) {

    
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const button = document.createElement("button");

    h2.innerText = objeto.nome;
    span.innerText = objeto.price;
    img.src = objeto.img;
    p.innerText = objeto.p;
    button.innerText = objeto.button;
    li.className = "box";


    li.append(img, h2, p, span, button);

    return li
}


// Função criada para empurrar a li/itens criados para a ul

function selectionListObject(listaAlt) {
    const UlSelect = document.querySelector(".container1");
    const UlSelect2 = document.querySelector(".container2");

    for (let i = 0; i < listaAlt.length; i++) {
        if(listaAlt === camisas) {
            UlSelect.appendChild(createLiItens(listaAlt[i]));
        } else {
            UlSelect2.appendChild(createLiItens(listaAlt[i]));
        }
    }
}

selectionListObject(camisas);
selectionListObject(camisetas);




































































































































































































































































































































































































































































































































































































































































































































































































































































































































