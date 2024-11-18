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


function mascara_telefone() {
    //limitador
    var tel = document.getElementById("telefone").value
    document.getElementById("telefone").value = tel
    tel = document.getElementById("telefone").value.slice(0, 10)


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
}

function mascara_cpf() {
    //12 primeiros caracteres
    var cpf = document.getElementById("cpf").value;
    document.getElementById("cpf").value = cpf;
    cpf = document.getElementById("cpf").value.slice(0, 12);

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
}


