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



$("#btnCriaSenha").click(function(){

  var senha = $("#senhaC").val();
  var aluno = localStorage.getItem(`ra`)
  var token = localStorage.getItem(`token`)


  var objeto = {
		"aluno": aluno,
		"senha": senha,
    "token": token,
	};

  $.ajax({
   url: `https://api-academico.sumare.edu.br/api-redefinir-senha/v1/alterarSenha`,
   type: 'POST',
   data: JSON.stringify(objeto),
		contentType: "application/json; charset=utf-8"
}).done(function (data) {
   alert(data)
   if(data.sucess == `false`){
      alert(data.retorno.descricao)
   }
   else{
    alert("Senha Alterada com Sucesso")
   }
})

});