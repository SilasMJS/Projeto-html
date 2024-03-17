function validarFormulario(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if(nome.trim() === '' || email.trim() === '' || mensagem.trim() === ''){
        alert('Por favor, preenchar todos os campos.')
        return false;
    }
    return true;
}

validarFormulario();