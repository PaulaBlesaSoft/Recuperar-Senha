'use strict'

const cpf = localStorage.getItem('cpf');
const ra = localStorage.getItem('ra')
const email = localStorage.getItem('email')



console.log('CPF recuperado:', cpf);


export const getAlunoCpf = async () => {

    const url = `http://localhost:8080/listarContatosAluno/cpf/${cpf}`
    console.log('URLÇ' + url);
    const response = await fetch(url)
    console.log('Response'+ response);
    const dado = await response.json()
    console.log(dado);

    return dado
}
getAlunoCpf()

export const getAlunoRa = async () => {

    const url = `http://localhost:8080/listarContatosAluno/aluno/${ra}`
    const response = await fetch(url)
    const dado = await response.json()

    return dado
}
getAlunoRa()

export const postEmail = async () => {

    const url = `http://localhost:8080/geradortoken/enviar-token-email/${email}}`
    const response = await fetch(url)
    const dado = await response.json()

    return dado
}
postEmail()


export const postSms = async (sms) => {

    const url = `http://localhost:8080/geradortoken/enviar-token-sms/${sms}}`
    const response = await fetch(url)
    const dado = await response.json()

    return dado
}
postSms()
