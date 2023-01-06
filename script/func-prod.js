


const body = document.querySelector("body");
const main = document.createElement("main");
const section1 = document.createElement("section");
const section2 = document.createElement("section");
const ul = document.createElement("ul");
const ul2 = document.createElement("ul");
const input = document.createElement("input");
const aside = document.createElement("aside"); // Carrinho
const h2Primeira = document.createElement("h2");
const h2Segunda = document.createElement("h2");
const h2aside = document.createElement("h2"); // h2 Carrinho
const spanAside = document.createElement("span"); // span Carrinho
const div = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const button = document.createElement("button");
const h2Div3 = document.createElement("h2");
const h2Div3Segunda = document.createElement("h2");
const spanCarrinho = document.createElement("span");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const ulDiv7 = document.createElement("ul");
const h2div4 = document.createElement("h2");
const h2div4segunda = document.createElement("h2");

body.appendChild(main);
main.appendChild(h2Primeira);
main.appendChild(section1);
main.appendChild(h2Segunda);
main.appendChild(section2);
section1.appendChild(div);
section1.appendChild(input);
section1.appendChild(aside); // Carrinho
section1.appendChild(div3);
section1.appendChild(ul);
section2.appendChild(ul2);
div.appendChild(div2);
div.appendChild(input);
div.appendChild(button);
div.appendChild(h2aside); // Carrinho
div.appendChild(aside);
div.appendChild(div3);
div.appendChild(div4);
div.appendChild(div5);
div2.appendChild(input);
div2.appendChild(button);
div3.appendChild(h2Div3);
div3.appendChild(h2Div3Segunda);
div3.appendChild(spanCarrinho);
div4.appendChild(h2div4);
div4.appendChild(h2div4segunda);
div5.appendChild(div3);
div5.appendChild(div4);
aside.appendChild(spanAside); // Span Carrinho
div6.appendChild(spanAside);
aside.appendChild(div6);
aside.appendChild(div7);
div7.appendChild(ulDiv7);




section1.className = "ajuste";
section2.className = "ajuste1";
aside.className = "car"; // Carrinho
h2Primeira.className = "h2";
h2Primeira.innerText = "Lançamentos";
h2Segunda.className = "h2";
h2Segunda.innerText = "Camisetas";
ul.className = "container1";
ul2.className = "container2";
h2aside.className = "h2aside";
h2aside.innerText = "Carrinho de Compras";
div.className = "div";
div2.className = "div2";
div3.className = "div3";
input.className = "input";
input.placeholder = "Ei, posso te ajudar?";
button.innerText = "Pesquisar";
button.className = "button-input";
h2Div3.className = "h2Div3";
h2Div3Segunda.className = "h2Div3segunda";
h2Div3.innerText = 'Qtd:';
h2Div3Segunda.innerText = "Total:";
spanAside.innerText = "Carrinho vazio";
spanAside.className = "carrinho-vazio";
spanCarrinho.id = "zero";
div4.className = "div4";
div5.className = "div5";
div6.className = "div6";
h2div4.innerHTML = "0";
h2div4segunda.innerHTML = "0";
h2div4.className = "h2div4quant"
h2div4segunda.className = "h2div4total"
ulDiv7.id = "renderpt";
div7.className = "div7";



let camisas = [];

let camisetas = [];

let quantidade = 0;

let total = 0;


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
    span.innerText = `R$ ${objeto.price}`;
    img.src = objeto.img;
    p.innerText = objeto.p;
    button.innerText = objeto.button;
    button.id = objeto.id;
    li.className = "box";

    // Função para procurar o ID

    function searchID(id) {
        for (let i = 0; i < arrayItens.length; i++) {
            if (arrayItens[i].id == id) {
                return arrayItens[i]
            }
        }
    }


    //Evento de adicionar no carrinho

    button.addEventListener("click", (but) => {
        let event = but.target;
        let eventID = event.id;
        let idArmazenado = searchID(eventID);
        
        quantidade++;
        document.querySelector(".h2div4quant").innerHTML = `${quantidade}`;
        
        
        total += objeto.price;
        document.querySelector(".h2div4total").innerText = `R$${total.toFixed(2)}`;
        

        renderProducts(idArmazenado);

        let section = document.querySelector(".div6");

        section.remove();
    });


    function renderProducts(pprt) {
        let criaProdutos = document.querySelector("#renderpt");

        let li = document.createElement("li");
        li.classList.add("productCar");

        let img = document.createElement("img");
        let nameItem = document.createElement("h2");
        let div = document.createElement("div");
        let value = document.createElement("h3");
        let buttonRemove = document.createElement("button");
        let img2 = document.createElement("img");
        img2.src = "style/excluir.png";
        buttonRemove.classList.add("btnRemove");
        div.className = "divcarrinho";
        img2.className = "img2";
        img.className = "imgcar";

        li.id = pprt.id;

        nameItem.innerText = pprt.description;
        value.innerText = `R$${pprt.price}`;
        img.src = pprt.img
        
        // buttonRemove.innerText = "Remover"

        li.append(img, nameItem, value, div, buttonRemove );
        div.append(nameItem, value);
        buttonRemove.append(img2);

        // Remover do carrinho

        buttonRemove.addEventListener("click", function (e) {
            quantidade--
            document.querySelector(".h2div4quant").innerHTML = `${quantidade}`

            total -= objeto.price

            document.querySelector(".h2div4total").innerHTML = `R$${total.toFixed(2)}`

            li.remove();

        });

        criaProdutos.append(li);
    }


    button.setAttribute("id", objeto.id);
    li.append(img, h2, p, span, button);

    return li;
}


// Função criada para empurrar a li/itens criados para a ul

function selectionListObject(listaAlt) {
    const UlSelect = document.querySelector(".container1");
    const UlSelect2 = document.querySelector(".container2");

    for (let i = 0; i < listaAlt.length; i++) {
        if (listaAlt === camisas) {
            UlSelect.appendChild(createLiItens(listaAlt[i]));
        } else {
            UlSelect2.appendChild(createLiItens(listaAlt[i]));
        }
    }
}

selectionListObject(camisas);
selectionListObject(camisetas);
