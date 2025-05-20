document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const resultDiv = document.getElementById('result');

    if(name === '' || age === '') {
        resultDiv.textContent = 'Пожалуйста, заполните все поля!';
        resultDiv.style.color = 'red';
    } else {
        resultDiv.textContent = `Здравствуйте, ${name}! Вам ${age} лет.`;
        resultDiv.style.color = 'green';
    }
});
