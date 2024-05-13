// Seleciona o botão de interruptor e o campo de entrada
const toggleButton = document.getElementById('toggleLabel');
const inputField = document.getElementById('inputField');

document.getElementById('toggle').addEventListener('change', function () {
    if (this.checked) {
        // Alterna para RA
        toggleButton.textContent = 'RA';

        inputField.placeholder = 'RA';
        inputField.value = ''; // Limpa o valor do campo de entrada
    } else {
        // Alterna para CPF
        toggleButton.textContent = 'CPF';
        toggleButton.style.backgroundColor = ""; // Limpa a cor de fundo
        inputField.placeholder = 'CPF';
        inputField.value = ''; // Limpa o valor do campo de entrada
    }




});

// document.getElementById('cpf').addEventListener('click', function() {


//     var cpf = document.getElementById('cpf').value; // Obtenha o valor do CPF do input

   
//     cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

//     if (cpf.length !== 11 || /^(.)\1{10}$/.test(cpf)) {
//         console.log('CPF inválido');
//         return false; // CPF deve ter 11 dígitos e não pode ter todos os dígitos iguais
//     }

//     // Calcula o primeiro dígito verificador
//     var soma = 0;
//     for (var i = 0; i < 9; i++) {
//         soma += parseInt(cpf.charAt(i)) * (10 - i);
//     }
//     var resto = 11 - (soma % 11);
//     var digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;

//     // Calcula o segundo dígito verificador
//     soma = 0;
//     for (var i = 0; i < 10; i++) {
//         soma += parseInt(cpf.charAt(i)) * (11 - i);
//     }
//     resto = 11 - (soma % 11);
//     var digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;

//     // Verifica se os dígitos verificadores calculados são iguais aos fornecidos
//     if (parseInt(cpf.charAt(9)) !== digitoVerificador1 || parseInt(cpf.charAt(10)) !== digitoVerificador2) {
//         console.log('CPF inválido');
//         return false;
//     }
//     alert('valido')
//     return true; // CPF válido
// });



// function validarCPF(cpf) {

//     console.log('entrei');
//     cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

//     if (cpf.length !== 11 || /^(.)\1{10}$/.test(cpf)) {
//         return false; // CPF deve ter 11 dígitos e não pode ter todos os dígitos iguais
//     }

//     // Calcula o primeiro dígito verificador
//     var soma = 0;
//     for (var i = 0; i < 9; i++) {
//         soma += parseInt(cpf.charAt(i)) * (10 - i);
//     }
//     var resto = 11 - (soma % 11);
//     var digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;

//     // Calcula o segundo dígito verificador
//     soma = 0;
//     for (var i = 0; i < 10; i++) {
//         soma += parseInt(cpf.charAt(i)) * (11 - i);
//     }
//     resto = 11 - (soma % 11);
//     var digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;

//     // Verifica se os dígitos verificadores calculados são iguais aos fornecidos
//     if (parseInt(cpf.charAt(9)) !== digitoVerificador1 || parseInt(cpf.charAt(10)) !== digitoVerificador2) {
//         return false;
//     }
//     console.log('oi')
//     return true; // CPF válido
// }



// function validarInputCPF() {
//     var inputCPF = document.getElementById('inputField').value;
//     var resultado = document.getElementById('resultado');

//     if (validarCPF(inputCPF)) {
//         resultado.innerHTML = "CPF válido.";
//         alert('valio')
//     } else {
//         resultado.innerHTML = "CPF inválido.";
//     }
// }