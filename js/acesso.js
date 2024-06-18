// Seleciona o botão de interruptor e o campo de entrada
const toggleButton = document.getElementById('toggleLabel');
const myInput2 = document.getElementById('myInput2');


function toggleInputs(inputToHideId, inputToShowId) {
    var inputToHide = document.getElementById(inputToHideId);
    var inputToShow = document.getElementById(inputToShowId);

    if (!inputToHide.classList.contains("hidden")) {
        inputToHide.classList.add("hidden");
        inputToShow.classList.remove("hidden");
    } else {
        inputToHide.classList.remove("hidden");
        inputToShow.classList.add("hidden");
    }
}

function validarForm() {
    const inputToggle = document.getElementById('toggle');
    const cpfInput = document.getElementById('myInput2');
   

    // Verifica se o campo está configurado como "RA"
   
        // Realiza a validação do RA
        const ra = cpfInput.value;
        //const raValido = validarRA(ra);
        if (ra) {
            // Armazena o RA no localStorage
            localStorage.setItem('value', 'RA');
            localStorage.setItem('ra', ra);
            // Redireciona para a página de recuperação de senha ou outra página
            localStorage.setItem('aluno',ra);
            window.location.href = "pag/recuperacaoSenha.html";
        } else {
            cpfInput.setCustomValidity("RA inválido");
            cpfInput.reportValidity();
        }
    
}
