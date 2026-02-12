const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const floatingHearts = document.querySelector('.floating-hearts');

// Floating hearts animation
function createFloatingHearts() {
    const heartEmojis = ['💕', '💗', '💓', '💖'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 3 + 's';
        
        floatingHearts.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }, 800);
}

// Button click events
yesBtn.addEventListener('click', () => {
    // Redirect to romantic page
    window.location.href = 'https://www.romance.com';
});

noBtn.addEventListener('click', () => {
    // Make button smaller and move away
    const currentSize = noBtn.style.fontSize;
    const currentWidth = noBtn.style.width;
    
    noBtn.style.fontSize = '12px';
    noBtn.style.width = '80px';
    noBtn.style.transform = 'scale(0.5)';
    noBtn.style.transition = 'all 0.5s ease';
    
    setTimeout(() => {
        // Randomly position the button
        const randomX = Math.random() * 600 - 300;
        const randomY = Math.random() * 400 - 200;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
    }, 100);
});

// Start floating hearts on page load
createFloatingHearts();
