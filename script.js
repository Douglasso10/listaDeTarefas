const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const tarefa = document.querySelector('.tarefa');


const validaInput = () =>  input.value.trim().length > 0;

const adicionarTarefa = () => {
    const inputValido = validaInput();

    if(!inputValido){
        return input.classList.add("error");
    }

    const criarTarefa = document.createElement("div");
    criarTarefa.classList.add("novaTarefa");

    const paragrafo = document.createElement("p");
    paragrafo.innerText = input.value;

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far");
    deleteIcon.classList.add("fa-trash-alt");

    criarTarefa.appendChild(paragrafo);
    criarTarefa.appendChild(deleteIcon);

    tarefa.appendChild(criarTarefa);

    input.value = "";
    
}

const mudarInput = () =>{
    const inputValido = validaInput();

    if(inputValido){
        return input.classList.remove('error');
    }
}

btn.addEventListener('click', () => adicionarTarefa());
input.addEventListener('change' , () => mudarInput());