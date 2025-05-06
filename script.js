const CORRECT_PASSWORD = 'O3B3';

function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const passwordScreen = document.getElementById('password-screen');
    const content = document.getElementById('content');

    if (passwordInput.value === CORRECT_PASSWORD) {
        passwordScreen.classList.add('hidden');
        content.classList.remove('hidden');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Password non corretta. Riprova.';
        passwordInput.value = '';
    }
}

// Allow pressing Enter to submit password
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
}); 