//--> Definição das variáveis
let nome = window.document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

var okNome = false
var okEmail = false
var okAssunto = false
var mapa = document.querySelector('#mapa')

//Alteração do campo "Nome" e "email"
nome.style.width ='100%'
email.style.width = '100%'

//Saída de dados

//--> Nome
function validarNome(){
    let txtNome = document.getElementById('txtNome')
        if(nome.value.length < 3){
            txtNome.innerHTML = 'Nome inválido'
            txtNome.style.color = 'red' 
            okNome = false           
        }
        else{
            txtNome.innerHTML = 'Nome válido'
            txtNome.style.color = 'green'
            okNome = true
        }
}

//--> E-mail
function validaEmail(){
    let txtEmail = document.getElementById('txtEmail')
        if(email.value.indexOf('@' || email.value.indexOf('.'))== -1){
            txtEmail.innerHTML = 'E-mail inválido'
            txtEmail.style.color = 'red' 
            okEmail = false           
        }
        else{
            txtEmail.innerHTML = 'E-mail válido'
            txtEmail.style.color = 'green'
            okEmail = true
        }
}

//--> E-mail
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
        if(assunto.value.length >= 100){
            txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'
            okAssunto = false
        }
        else{
            txtAssunto.style.display = 'none'
            okAssunto = true
        }

}

//Mensagem de confirmação
function enviar(){
    if(okNome == true && okEmail == true && okAssunto == true){
        alert('mensagem enviada com sucesso!!!')
    }
    else{
        alert('preencha corretamente!!!')
    }
}

function mapZoom(){
    mapa.style.wight = '800px'
    mapa.style.height = '600px'

}

function mapNormal(){

    mapa.style.wight = '400px'
    mapa.style.height = '250px'

}

