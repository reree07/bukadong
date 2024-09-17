document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Username dan password yang valid
    const validUsername = 'admin';
    const validPassword = 'password123';

    // Ambil nilai dari form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifikasi username dan password
    if (username === validUsername && password === validPassword) {
        // Redirect ke halaman utama jika login berhasil
        window.location.href = 'ILY.html';
    } else {
        alert('Invalid username or password');
    }
});
