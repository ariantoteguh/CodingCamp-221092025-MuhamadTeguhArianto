document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const userName = document.getElementById('userName').value;
    document.getElementById('welcomeMessage').textContent = `Selamat datang, ${userName}!`;
    document.getElementById('nameModal').style.display = 'none';
});
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('subject').value;
    const ttl = document.getElementById('ttl').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    document.getElementById('resultName').textContent = name;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('resultTtl').textContent = ttl;
    document.getElementById('resultGender').textContent = gender;

    this.reset();
});