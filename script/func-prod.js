





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
    const UlSelect = document.getElementsByClassName("container1");
    const UlSelect2 = document.getElementsByClassName("container2");

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




































































































































































































































































































































































































































































































































































































































































































































































































































































































































