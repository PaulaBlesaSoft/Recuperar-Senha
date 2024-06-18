'use strict'

import { postEmail } from "./main.js"
import { getAlunoRa } from "./main.js"
import { postSms } from "./main.js";
import { putRedefinirSenha } from "./main.js";
import { getVerific } from "./main.js";

const value = localStorage.getItem('value')
const alunos = value == 'CPF' ? await getAlunoCpf() : await getAlunoRa()


const criarCard = (aluno) => {
    const card = document.createElement('div')
    card.classList.add('botao');

    const a = document.createElement('a')
    // a.href = '../pag/verificacao.html';
    a.text = `${aluno[1]} ${aluno[0]}`

    console.log('teset');

   card.addEventListener('click', async () => {
    try {
        if (aluno[1].toUpperCase() === 'SMS') {
            await postSms(aluno[0]);
        } else {
            await postEmail(aluno[0]);
        }
        window.location.href = '../pag/verificacao.html';
    } catch (error) {
        console.error('Erro ao enviar a requisi��o:', error);
        // Aqui voc� pode adicionar algum tratamento de erro, se necess�rio
    }
});
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


const inputElementVerific = document.getElementById('verific');

const criarVerifc = (token) =>{
    if (inputElementVerific) {
        inputElementVerific.addEventListener('input', () => {
            
            if (token[1].toUpperCase() == 'S') {
                getVerific(token[0])
                window.location.href = '../pag/criarNovaSenha.html'
    
            } else {
                alert("Token invalido")
            }
            const placeholderValue = inputElementVerific.placeholder;
            console.log('Placeholder value:', placeholderValue);
            console.log('Current input value:', inputElementVerific.value);
        });
    }
    

}
criarVerifc()


const inputElementReset = document.getElementById('senha');

if (inputElementReset) {
    inputElementReset.addEventListener('input', () => {
        const placeholderValue = inputElementReset.placeholder;
        console.log('Placeholder value:', placeholderValue);
        console.log('Current input value:', inputElementReset.value);
    });
}






