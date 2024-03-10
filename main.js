const form = document.getElementById('contact-form')
const listaDeContatos = [];
const nomeT = [];
const telefoneT = [];

FormData.addeventlistenner('submit', function(e) {
    e.preventDefalt();

    adicionarContato()
}) 


function adicionarContato() {
    const nome = document.getElementById("contact-form-name").value;
    const telefone = document.getElementById("contact-form-phone").value;
    

    const tabela = document.getElementById("contatos").getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();
    const colunaNome = novaLinha.insertCell(0);
    const colunaTelefone = novaLinha.insertCell(1);
    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;

    if(nomeT.includes(nome.value)) {
        alert(`O contato ${nome.value} já foi insirido na lista`);
    } else {
        listaDeContatos.push({ nome, telefone });

        document.getElementById("contact-form-name").value = "";
        document.getElementById("contact-form-phone").value = "";
    }
           
}
