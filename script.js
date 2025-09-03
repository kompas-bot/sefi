// Typing effect
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const texts = ['Sayangku', 'Kekasihku', 'Duniaku'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseTime = 2000;
    
    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        
        if (index < currentText.length) {
            letter = currentText.slice(0, ++index);
            document.getElementById('typing-text').textContent = letter;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, pauseTime);
        }
    }
    
    function erase() {
        if (index > 0) {
            letter = currentText.slice(0, --index);
            document.getElementById('typing-text').textContent = letter;
            setTimeout(erase, deletingSpeed);
        } else {
            count++;
            setTimeout(type, typingSpeed / 2);
        }
    }
    
    // Start typing effect
    setTimeout(type, 1000);
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Countdown timer (set your target date here)
    const targetDate = new Date('2024-02-14T00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            document.querySelector('.countdown-container').innerHTML = 
                '<p style="font-size: 1.5rem; color: #ff6b6b;">We\'re together now! ❤️</p>';
        }
    }
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Music player functionality
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            bgMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        }
    });
    
    // Create floating hearts
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.style.position = 'absolute';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.color = '#ff6b6b';
            heart.style.opacity = Math.random() * 0.5 + 0.3;
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animation = `float ${Math.random() * 6 + 4}s ease-in-out infinite`;
            heart.style.animationDelay = Math.random() * 5 + 's';
            heartsContainer.appendChild(heart);
        }
    }
    
    createFloatingHearts();
});

// Function to scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}