// ─────────────────────────────────────────
// TYPING EFFECT
// ─────────────────────────────────────────
const typingEl = document.querySelector('.typing');

const phrases = [
  'Building things from scratch 🛠️',
  'Learning every single day 📚',
  'AI-assisted developer 🤖',
  'Turning ideas into code ✨',
];

let phraseIndex = 0;
let charIndex   = 0;
let isDeleting  = false;
let isPaused    = false;

function type() {
  const current = phrases[phraseIndex];

  if (isPaused) return;

  if (!isDeleting) {
    // Typing forward
    typingEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      // Pause at end before deleting
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
        isDeleting = true;
        type();
      }, 2000);
      return;
    }
    setTimeout(type, 65);

  } else {
    // Deleting
    typingEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
    setTimeout(type, 35);
  }
}

// Start after slight delay
setTimeout(type, 800);
