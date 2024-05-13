// //Click do olinho input da tela (recuperacaoSenha)
document.getElementById('eye1').addEventListener('click', function () {
    var password = document.getElementById("senha");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById('eye1').classList.remove("fa-eye");
        document.getElementById('eye1').classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        document.getElementById('eye2').classList.remove("fa-eye-slash");
        document.getElementById('eye2').classList.add("fa-eye");
    }
});
document.getElementById('eye2').addEventListener('click', function () {
    var password = document.getElementById("senhaC");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById('eye2').classList.remove("fa-eye");
        document.getElementById('eye2').classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        document.getElementById('eye2').classList.remove("fa-eye-slash");
        document.getElementById('eye2').classList.add("fa-eye");
    }
});

// -------------------------------------------------------------------------------

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
// verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
senhaC.addEventListener('input', validarSenha);



