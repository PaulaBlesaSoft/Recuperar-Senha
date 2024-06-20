document.getElementById('eye1').addEventListener('click', function () {
  var password = document.getElementById("senha");
  var eyeIcon = document.getElementById('eye1');
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    password.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});

document.getElementById('eye2').addEventListener('click', function () {
  var password = document.getElementById("senhaC");
  var eyeIcon = document.getElementById('eye2');
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    password.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});


//validacao de senha iguais (criarNovaSenha)  
let senha = document.getElementById('senha');
let senhaC = document.getElementById('senhaC');

function validarSenha() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}

$("#alteraSenha2").submit(function (e) {
  e.preventDefault();
  $('.bg-loading').fadeIn();

  if(validarSenha()){

    var senha = $("#senhaC").val();
    var aluno = localStorage.getItem(`ra`)
    var token = localStorage.getItem(`token`)
  
  
    var objeto = {
      "aluno": aluno,
      "senha": senha,
      "token": token,
    };
  
    $.ajax({
      url: `https://api-academico.sumare.edu.br/api-bff-redefinir-senha/v1/alterarSenha`,
      type: 'POST',
      data: JSON.stringify(objeto),
      contentType: "application/json; charset=utf-8"
    }).done(function (data) {
      if (data.sucess == `false`) {
        $('.bg-loading').fadeOut();
        // abre modal de erro, tente  novamente mais tarde
      }
      else {
        // alert("Senha Alterada com Sucesso");
        window.location.href = "../pag/senhaAlterada.html";
      }
    })

  }else{
    $('.bg-loading').fadeOut();
  }

});

// Adiciona ouvintes de evento para validar as senhas ao digitar
senhaC.addEventListener('input', validarSenha);