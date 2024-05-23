'use strict'

import { getAlunoCpf, postEmail } from "./main.js"
import { getAlunoRa} from "./main.js"
import { postSms } from "./main.js";

const value = localStorage.getItem('value')


const alunos = value == 'CPF' ? await getAlunoCpf() : await getAlunoRa()


const criarCard =   (aluno) => {
    const card = document.createElement('div')
    card.classList.add('botao');

    const a = document.createElement('a')
   // a.href = '../pag/verificacao.html';
    a.text = `${aluno[1]} ${aluno[0]}`

    console.log('teset');

    card.addEventListener(`click`, async () =>{
        if(aluno[1].toUpperCase() == 'SMS'){
           let teste =  await postSms(aluno[0])

           console.log(teste);
        }else{
            let teste =  await postEmail(aluno[0])

           console.log(teste);
        }
    })

    card.append(a);

    return card;
}

const carregarCard = () => {
    const card = document.getElementById('cardsJSON')
    const cardsJSON = alunos.map(criarCard)

    card.replaceChildren(...cardsJSON)
}

carregarCard()

const inputElement = document.getElementById('myInput2');

if (inputElement) {
    inputElement.addEventListener('input', () => {
        const placeholderValue = inputElement.placeholder;
        console.log('Placeholder value:', placeholderValue);
        console.log('Current input value:', inputElement.value);
    });
}

