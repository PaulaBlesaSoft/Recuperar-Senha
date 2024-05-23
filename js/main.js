'use strict'

const cpf = localStorage.getItem('cpf');
const ra = localStorage.getItem('ra')

export const getAlunoCpf = async () => {

    const url = `http://localhost:8080/listarContatosAluno/cpf/${cpf}`
    console.log('URLÇ' + url);
    const response = await fetch(url)
    console.log('Response' + response);
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

export const postEmail = async (email) => {

    const url = `http://localhost:8080/geradortoken/enviar-token-email/${email}`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const dado = await response.json()

    return dado
}


export const postSms = async (sms) => {

    const url = `http://localhost:8080/geradortoken/enviar-token-sms/${sms}`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "*/*",
            "Accept-Encoding": "gzip,deflate,br",
            "Connection": "keep-alive",
            "auth-key": "c5fa8cf8-9e36-4313-8a2d-9e7c7cb01969 ",
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    const dado = await response.json()

    return dado
}
