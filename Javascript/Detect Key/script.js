const h1 = document.querySelector('h1');
window.addEventListener('keydown', (event) => {
  h1.textContent = `${event.key}`;
});