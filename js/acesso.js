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
