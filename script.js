const modal = document.querySelector("dialog");

function openModal() {
    modal.showModal();
}

function closeModal() {
    modal.close();
        
}

function enviar(){
    window.alert("Dados salvos!")
    window.location.href = 'pagina2.html';
}

function voltar(){
    window.location.href = 'index.html';
    localStorage.clear()
}

function mascara_nome(){
    var nome = document.getElementById("nome").value
    localStorage.setItem("nome", nome)
}

function mascara_email(){
    var email = document.getElementById("email").value
    localStorage.setItem("email", email)
}

function mascara_telefone() {
    //máscara
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
        }
    }
    

    localStorage.setItem("telefone",tel_formatado)
}

function mascara_cpf() {
    //Máscara
    var cpf_formatado = document.getElementById("cpf").value;

    // Adicionando o primeiro ponto (.)
    if (cpf_formatado[3] !== ".") {
        if (cpf_formatado[3] !== undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado.slice(3);
        }
    }

    //segundo ponto (.)
    if (cpf_formatado[7] !== ".") {
        if (cpf_formatado[7] !== undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado.slice(7);
        }
    }

    //hífen (-)
    if (cpf_formatado[11] !== "-") {
        if (cpf_formatado[11] !== undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado.slice(11);
        }
    }
    localStorage.setItem("cpf",cpf_formatado)
}

function mascara_senha(){
    var senha = document.getElementById("senha").value
    localStorage.setItem("senha", senha)
}


window.onload = function carregando() {

if (localStorage.getItem("nome")) {
    document.getElementById("nome").value = localStorage.getItem("nome");
  }
  if (localStorage.getItem("email")) {
    document.getElementById("email").value = localStorage.getItem("email");
  }
  if (localStorage.getItem("telefone")) {
    document.getElementById("telefone").value = localStorage.getItem("telefone");
  }
  if (localStorage.getItem("cpf")) {
    document.getElementById("cpf").value = localStorage.getItem("cpf");
  }
  if (localStorage.getItem("senha")) {
    document.getElementById("senha").value = localStorage.getItem("senha");
  }
};




