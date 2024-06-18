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
// POST
export const postEmail = async (email) => {
  const url = `https://api-academico.sumare.edu.br/api-redefinir-senha/geradortoken/enviar-token-email/${email}/${ra}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const dado = await response.text(); // Use .text() ao invés de .json()
  return dado;
};

export const postSms = async (sms) => {
  const url = `https://api-academico.sumare.edu.br/api-redefinir-senha/geradortoken/enviar-token-sms/${sms}/${ra}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Accept": "*/*",
      "Accept-Encoding": "gzip,deflate,br",
      "Connection": "keep-alive",
      "auth-key": "c5fa8cf8-9e36-4313-8a2d-9e7c7cb01969 ",
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const dado = await response.text(); // Use .text() ao invés de .json()
  return dado;
};
export const postVerificacao = (token, cpf) => {
  const url = `https://api-academico.sumare.edu.br/api-redefinir-senha/validatoken/inserir`;

  const response = fetch(url, {
    method: "POST",
    headers: {
      "Accept": "*/*",
      "Accept-Encoding": "gzip,deflate,br",
      "Connection": "keep-alive",
      "auth-key": "c5fa8cf8-9e36-4313-8a2d-9e7c7cb01969 ",
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      token: token,
      cpf: cpf,
    }),
  });

  const dado = response.then((res) => res.json());

  return dado;
};

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


