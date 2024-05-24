// function validarToken() {
//     const cpf = document.querySelector('.cpf').value;
//     const token = document.querySelector('.codigo').value;

//     // Verifica se CPF e token foram inseridos
//     if (!cpf || !token) {
//         alert("Por favor, insira o CPF e o código.");
//         return;
//     }

//     const url = `http://localhost:8080/validatoken/cpf/${cpf}/token/${token}`;

//     fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Falha na validação. Código inválido ou problema com a API.');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Validação bem sucedida:', data);
//         window.location.href = '../pag/criarNovaSenha.html'; // Redireciona após sucesso
//     })
//     .catch(error => {
//         console.error('Erro na validação:', error);
//         alert('Código de verificação inválido ou erro ao validar.');
//     });
// }



$("#verificaSenha").click(function(){

    var aluno = localStorage.getItem(`ra`)

       $.ajax({
        url: "http://localhost:8080/validatoken/cpf/"+aluno+"/token/"+$('#token').val(),
        type: "get"
    }).done(function (data) {
        alert(data)
        if(data == `S`){
            localStorage.setItem('token',$('#token').val());
            window.location.href="criarNovaSenha.html";
        }
        else{
            alert('token Invalido')
        }
    })

  });