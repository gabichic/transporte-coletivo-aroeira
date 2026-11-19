const form     = document.querySelector(".contato-form");
const nome     = document.getElementById("cont-name");
const email    = document.getElementById("email");
const celular  = document.getElementById("cont-number");
const area     = document.getElementById("area");
const mensagem = document.getElementById("mensagem");

const CHAVE_RASCUNHO = "rascunhoContato";
const CHAVE_CONTATOS = "contatos";

function salvarRascunho() {
    const rascunho = {
        nome: nome.value,
        email: email.value,
        celular: celular.value,
        area: area.value,
        mensagem: mensagem.value
    };
    localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(rascunho));
}

function restaurarRascunho() {
    const salvo = localStorage.getItem(CHAVE_RASCUNHO);
    if (!salvo) return;

    const r = JSON.parse(salvo);
    nome.value     = r.nome;
    email.value    = r.email;
    celular.value  = r.celular;
    area.value     = r.area;
    mensagem.value = r.mensagem;
}

form.addEventListener("input", salvarRascunho);
form.addEventListener("change", salvarRascunho);

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const contato = {
        nome: nome.value.trim(),
        email: email.value.trim(),
        celular: celular.value,
        tipoCliente: area.options[area.selectedIndex].text,
        mensagem: mensagem.value.trim(),
        data: new Date().toLocaleString("pt-BR")
    };

    const lista = JSON.parse(localStorage.getItem(CHAVE_CONTATOS)) || [];
    lista.push(contato);
    localStorage.setItem(CHAVE_CONTATOS, JSON.stringify(lista));

    localStorage.removeItem(CHAVE_RASCUNHO);
    form.reset();

    alert("Contato enviado com sucesso!");
});

restaurarRascunho();