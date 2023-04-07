let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let emailOk = false
let assuntoOk = false
let nomeOk = false
let mapa = document.querySelector("#mapa")
nome.style.width ='100%'
email.style.width ='100%'

function validaNome(){
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        /* window.alert("Nome invalido!")*/
        txt.innerHTML = "Nome invalido!"
        txt.style.color='red'
    }else{
            txt.innerHTML = "Valor inserido corretamente!"
            txt.style.color='green'
            nomeOk = true
        }   
}
function validaEmail(){
    let txtUsuario = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtUsuario.innerHTML = "Email invalido!"
        txtUsuario.style.color = "red"   
    }else{
            txtUsuario.innerHTML = "Email Valido!"
            txtUsuario.style.color = "green"
            emailOk = true

    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >=10){
    txtAssunto.innerHTML = "Tamanho grande demais"
    txtAssunto.style.color="red"
    txtAssunto.style.display = "block"
    }else{
    txtAssunto.innerHTML = "Texto valido"
    txtAssunto.style.display = "none"
    assuntoOk=true
    }
}
function enviar(){
    if(nomeOk == true && assuntoOk == true && emailOk == true){
        window.alert("Seu formulario foi enviadao com sucesso!")
    }else{
        window.alert("Seu formulario possui dados incorretos")
    }
}
function mapaZoom(){
mapa.style.width = "800px"
mapa.style.height ="650px"
}
function mapaNormal(){
mapa.style.width = "400px"
mapa.style.height ="250px"
}
    