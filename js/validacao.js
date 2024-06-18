

$("#verific").click(function(){

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
        }
    })

  });