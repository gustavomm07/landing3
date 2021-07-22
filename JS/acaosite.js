let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let comentario = document.querySelector('#comentario')
let nomeOk = false
let emailOk = false
let comentarioOk = false

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        
    }else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
    }

 function validaEmail(){
        let txtEmail = document.querySelector('#txtEmail')
        if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('com') == -1){
            txtEmail.innerHTML = 'Nome inválido'
            txtEmail.style.color = 'red'
        }else{
            txtEmail.innerHTML = 'Nome válido'
            txtEmail.style.color = 'green'
            emailOk = true
        }
        }

function validaComentario(){
    let txtComentario = document.querySelector('#txtComentario')
    if (comentario.value.length >= 100){
        txtComentario.innerHTML = 'Texto muito grande: digite no máximo 100 caracteres'
        txtComentario.style.color = 'red'
        txtComentario.display = 'block'
    }else{
        txtComentario.display = 'none'
        comentarioOk = true
    }
}

function enviar(){
	if(nomeOk == true && emailOk == true && comentarioOk == true){
		alert ('Formulário enviado com sucesso!')
	}else{
		alert ('Preencha o formulário corretamente antes de enviar')
	}
}