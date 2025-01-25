const card = document.getElementById('card');
    const fireworks = document.getElementById('fireworks');
    const balloons = document.getElementById('balloons');
    const wish = document.getElementById('wish');

    // Function to create fireworks
    function launchFireworks() {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('span');
        particle.style.setProperty('--dx', Math.cos((i * 12) * (Math.PI / 180)));
        particle.style.setProperty('--dy', Math.sin((i * 12) * (Math.PI / 180)));
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        fireworks.appendChild(particle);

        // Remove particle after animation ends
        particle.addEventListener('animationend', () => {
          particle.remove();
        });
      }
    }

    card.addEventListener('click', () => {
      card.querySelector('h1').style.display = 'none';
      fireworks.style.display = 'block';
      balloons.style.display = 'block';
      wish.style.display = 'block';

      launchFireworks(); // Fireworks effect

      // Hide fireworks after 3 seconds
      setTimeout(() => {
        fireworks.style.display = 'none';
      }, 3000);

      // Balloons disappear after floating up
      balloons.addEventListener('animationend', () => {
        balloons.style.display = 'none';
      });
    });
