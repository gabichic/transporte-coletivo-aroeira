const link = document.getElementById('link-recuperacao');

link.addEventListener('click', function (event) {
    event.preventDefault();
    alert('Entre em contato com o administrador para redefinir sua senha.');
});

const botaoAlerta = document.getElementById('link-enviar');

botaoAlerta.addEventListener('click', function (event) {
    event.preventDefault();
    alert('Login feito com sucesso! Já pode fechar essa tela.');
});

const linkAlerta = document.getElementById('link-alerta');

linkAlerta.addEventListener('click', function (event) {
    event.preventDefault();
    alert('Na tela seguinte, informe as informações necessárias.');
});