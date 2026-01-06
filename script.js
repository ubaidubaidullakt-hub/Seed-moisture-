const scanBtn = document.getElementById('scanBtn');
const statusEl = document.getElementById('status');
const germinationEl = document.getElementById('germination');

scanBtn.addEventListener('click', () => {
  statusEl.textContent = 'Scanning...';
  germinationEl.textContent = '---';
  statusEl.className = '';
  germinationEl.className = '';

  setTimeout(() => {
    // Randomly choose a condition: 1 = too dry, 2 = ideal, 3 = too wet
    const condition = Math.floor(Math.random() * 3) + 1;

    if (condition === 1) {
      // Too dry
      statusEl.textContent = 'Too Dry';
      germinationEl.textContent = 'Low Germination';
      statusEl.classList.add('low');
      germinationEl.classList.add('low');
    } else if (condition === 2) {
      // Ideal moisture
      statusEl.textContent = 'Ideal Moisture';
      germinationEl.textContent = 'High Germination';
      statusEl.classList.add('high');
      germinationEl.classList.add('high');
    } else {
      // Too wet
      statusEl.textContent = 'Too Wet';
      germinationEl.textContent = 'Fungus Risk';
      statusEl.classList.add('wet');
      germinationEl.classList.add('wet');
    }
  }, 2000);
});