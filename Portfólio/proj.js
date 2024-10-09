// script.js

// Cadastro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        // Salva no Local Storage
        localStorage.setItem(username, password);
        alert('Cadastro realizado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Verifica as credenciais
    if (localStorage.getItem(username) === password) {
        alert('Login bem-sucedido!');
    } else {
        alert('Usuário ou senha incorretos.');
    }
});