
document.getElementById('eye1').addEventListener('click', function () {
    var password = document.getElementById("enterPW1");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById('eye1').classList.remove("fa-eye");
        document.getElementById('eye1').classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        document.getElementById('eye2').classList.remove("fa-eye-slash");s
        document.getElementById('eye2').classList.add("fa-eye");
    }
});
document.getElementById('eye2').addEventListener('click', function () {
    var password = document.getElementById("enterPW2");
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

// ---------------------------------------------------------------------------

let password = document.getElementById('password');
let password2 = document.getElementById('password2');

function validarSenha() {
  if (password.value != password2.value) {
    password2.setCustomValidity("Senhas diferentes!");
    password2.reportValidity();
    return false;
  } else {
    password2.setCustomValidity("");
    return true;
  }
}
// verificar também quando o campo for modificado
password2.addEventListener('input', validarSenha);



