// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('appointment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Consulta agendada com sucesso!');
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
});