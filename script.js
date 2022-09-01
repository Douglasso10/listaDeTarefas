const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

const validaInput = () =>  input.value.trim().length > 0;

const adicionarTarefa = () => {
    const inputValido = validaInput();

    if(!inputValido){
        return input.classList.add('error');
    }
}

const mudarInput = () =>{
    const inputValido = validaInput();

    if(inputValido){
        return input.classList.remove('error');
    }
}

btn.addEventListener('click', () => adicionarTarefa());
input.addEventListener('change' , () => mudarInput());