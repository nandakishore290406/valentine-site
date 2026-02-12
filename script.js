document.getElementById('heartBtn').addEventListener('click', function() {
    const heartsContainer = document.getElementById('hearts');
    const hearts = ['❤️', '💕', '💜', '💚', '💖', '💗'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 3 + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});
