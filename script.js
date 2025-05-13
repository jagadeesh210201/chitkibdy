const card = document.getElementById('card');
  const typewriterText = document.getElementById('typewriterText');
  const message = "Wishing you a full of love, laughter✨";

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    if (card.classList.contains('flipped')) {
      typewriterText.textContent = '';
      setTimeout(() => {
        typewriterText.textContent = message;
      }, 500);

      for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
      }
    }
  });