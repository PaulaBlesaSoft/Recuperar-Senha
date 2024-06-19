let token = document.getElementById('token');
let buttonVerificaToken = document.getElementById('verificaToken');
let expectedToken = "1234"; 

token.addEventListener('input', function() {
    if (token.value.length > 4) {
        token.value = token.value.slice(0, 4); // Limita o valor a 4 dígitos
    }
});

function validarToken() {
    if (token.value.length > 4) {
      token.setCustomValidity("Digite no máximo 4 dígitos.");
      token.reportValidity();
      return false;
    } else if (token.value !== expectedToken) {
      token.setCustomValidity("Token inválido!");
      token.reportValidity();
      return false;
    } else {
      token.setCustomValidity("");
      return true;
    }
  }
  
// // Adiciona um evento de clique ao botão "Continuar"
buttonVerificaToken.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio de formulário do botão
   
    if (validarToken()) {

  
    } else {
       
    }

});


  
$("#verific").click(function(){

    $('.bg-loading').fadeIn();

    var aluno = localStorage.getItem(`ra`)

       $.ajax({
        url: "https://api-academico.sumare.edu.br/api-redefinir-senha/validatoken/aluno/"+aluno+"/token/"+$('#token').val(),
        type: "get"
    }).done(function (data) {
        if(data == `S`){
            localStorage.setItem('token',$('#token').val());
            window.location.href="criarNovaSenha.html";
        }
        else{
            $('.bg-loading').fadeOut();
            token.setCustomValidity("Token inválido!");
      token.reportValidity();
        }
    })

  });