const CORRECT_PASSWORD = 'O3B3';
const VIDEO_URL = 'https://www.youtube.com/embed/MGwvNsT5I2Y?autoplay=1&rel=0';

function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const passwordScreen = document.getElementById('password-screen');
    const content = document.getElementById('content');
    const videoFrame = document.getElementById('video-frame');

    if (passwordInput.value === CORRECT_PASSWORD) {
        passwordScreen.classList.add('hidden');
        content.classList.remove('hidden');
        errorMessage.textContent = '';
        
        // Carica il video solo dopo la verifica della password
        if (videoFrame) {
            // Aggiungi un piccolo ritardo per assicurarsi che l'iframe sia pronto
            setTimeout(() => {
                videoFrame.src = VIDEO_URL;
            }, 100);
        }
    } else {
        errorMessage.textContent = 'Password non corretta. Riprova.';
        passwordInput.value = '';
    }
}

// Previeni il download del video
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'VIDEO') {
        e.preventDefault();
    }
});

// Previeni il salvataggio della pagina
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
    }
});

// Allow pressing Enter to submit password
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
}); 