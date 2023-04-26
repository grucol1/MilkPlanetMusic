const endTime = new Date('December 31, 2023 23:59:59').getTime();
const catMeow = document.getElementById('cat-meow');
const scaryNoise = document.getElementById('scary-noise');

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = endTime - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = `${days}d `;
  document.getElementById('hours').textContent = `${hours < 10 ? '0' : ''}${hours}:`;
  document.getElementById('minutes').textContent = `${minutes < 10 ? '0' : ''}${minutes}:`;
