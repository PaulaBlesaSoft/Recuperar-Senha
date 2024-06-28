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

// Função para obter dados do aluno por RA
const getAlunoRa = async (ra) => {
    const url = `https://api-academico.sumare.edu.br/api-redefinir-senha/listarContatosAluno/aluno/${ra}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar aluno. Verifique se o RA é válido.');
        }
        const aluno = await response.json();
        // Verifica se o retorno da API está vazio
        if (!aluno || Object.keys(aluno).length === 0) {
            throw new Error('RA Inválido.');
        }
        return aluno;
    } catch (error) {
        throw error;
    }
}

// Função para validar o formulário
function validarForm() {
    const raInput = document.getElementById('myInput2');
    const ra = raInput.value.trim();

    // Chama a função getAlunoRa para verificar o RA na API
    getAlunoRa(ra)
        .then(aluno => {
            // Se a API retornar dados válidos, prossegue
            localStorage.setItem('ra', ra);
            localStorage.setItem('aluno', JSON.stringify(aluno)); // Salva dados do aluno no localStorage
            // Redireciona para a página de recuperação de senha
            window.location.href = "pag/recuperacaoSenha.html";
        })
        .catch(error => {
            // Se a API não encontrar o aluno ou ocorrer outro erro
            raInput.setCustomValidity(error.message); // Define mensagem de erro no input
            raInput.reportValidity(); // Exibe a mensagem de erro no input
            // Limpa o localStorage para garantir que não haja dados inválidos armazenados
            localStorage.removeItem('ra');
            localStorage.removeItem('aluno');
        });
}

// Evita o envio do formulário ao pressionar Enter
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        validarForm();
    }
});

