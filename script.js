'use strict'

let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', (e) => {

    if(file.files.length <= 0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
})

window.onload = () => {

    botao.onclick = () => {

        cadastraResposta();
    }
};



function cadastraResposta(){
    var respostaValor = document.getElementById("EmailInput")
    var respostaDia = document.getElementById("TextInput")
    var respostaProf = document.getElementById("Profissao")
    var respostaIdade = document.getElementById("idade");
  

    var dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if (dados == null){
        localStorage.setItem("dadosProduto", "[]");
        dados = [];
    }

    var auxRegistor = {
        email: respostaValor.value, 
        senha: respostaDia.value,
        profissao: respostaProf.value,
        idade: respostaIdade.value
        
    }
    
    dados.push(auxRegistor);

    localStorage.setItem("dadosProduto", JSON.stringify(dados));
    alert("Registro incluído com sucesso")}