'use strict'

const ra = localStorage.getItem('ra')

//GET
export const getAlunoRa = async () => {

    const url = `https://api-academico.sumare.edu.br/api-redefinir-senha/listarContatosAluno/aluno/${ra}`
    const response = await fetch(url)
    const dado = await response.json()

    return dado
}
getAlunoRa()

export const getVerific = async () => {

    const url = `https://api-academico.sumare.edu.br/api-redefinir-senha/validatoken/cpf/2375631/token/${token}`
    const response = await fetch(url)
    const dado = await response.json()

    return dado
}
getAlunoRa()

//POST
export const postEmail = async (email) => {

    const url = `https://api-academico.sumare.edu.br/api-redefinir-senha/geradortoken/enviar-token-email/${email}/${ra}`
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

    const url = `https://api-academico.sumare.edu.br/api-redefinir-senha/geradortoken/enviar-token-sms/${sms}/${ra}` //2375631 tem que ser variavel aluno
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

export const postVerificacao = async (token, cpf) => {

    const url = `https://api-academico.sumare.edu.br/api-redefinir-senha/validatoken/inserir`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Accept": "*/*",
            "Accept-Encoding": "gzip,deflate,br",
            "Connection": "keep-alive",
            "auth-key": "c5fa8cf8-9e36-4313-8a2d-9e7c7cb01969 ",
            "Content-type": "application/json; charset=UTF-8",
        },
        body: {
            "token": token,
            "cpf": cpf
        }
    })
    const dado = await response.json()

    return dado
}


// function myFunction(p1, p2) {
//     return p1 * p2;
//   } 

//PUT
export const putRedefinirSenha = async () => {

    const url = `https://api-academico.sumare.edu.br/api-redefinir-senha/v1/alterarSenha/inserir`
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: {
            "aluno": "2375631",
            "senha": "novaSenha",
            "token": "6687"
        }

    })
    const dado = await response.json()

    return dado
}


