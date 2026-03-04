const form = document.getElementById('formContato');
const res = document.getElementById('res');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // impede o reload da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // MOSTRA a mensagem na página
    res.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    form.reset();
});
