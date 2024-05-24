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

    const url = `http://localhost:8080/geradortoken/enviar-token-email/${email}/${ra}`
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

    const url = `http://localhost:8080/geradortoken/enviar-token-sms/${sms}/${ra}` //2375631 tem que ser variavel aluno
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

    const url = `http://localhost:8080/validatoken/inserir`
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

function myFunction(p1, p2) {
    return p1 * p2;
  } 
export const getVerific = async () => {

    const url = `http://localhost:8080/validatoken/cpf/2375631/token/${token}`
    const response = await fetch(url)
    const dado = await response.json()

    return dado
}
getAlunoRa()



//ao clicar no botao id verific chamar essa api
//http://localhost:8080/validatoken/cpf/2375631/token/6687

// se retornar {
//     prossegue ate a proxima tela
// }else{
//     alerta de erro
// }

/////////////////////////////------////////////

//na tela se nova senha criarNovaSenha

// ao clicar em salvar
// chama essa api https://api-academico.sumare.edu.br/api-redefinir-senha/v1/alterarSenha
// vamos criar um objeto assim
// {
//     "aluno": "2375631",
//     "senha": "novaSenha",
//     "token": "6687"
// }


export const putRedefinirSenha = async () => {

    const url = `http://localhost:8080/https://api-academico.sumare.edu.br/api-redefinir-senha/v1/alterarSenha/inserir`
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


