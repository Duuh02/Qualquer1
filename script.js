document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Cria uma nova linha na tabela
    const tableBody = document.getElementById('userTableBody');
    const newRow = tableBody.insertRow();

    // Insere as células com os dados
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    nameCell.textContent = name;
    emailCell.textContent = email;

    // Limpa os campos do formulário
    document.getElementById('registrationForm').reset();
});