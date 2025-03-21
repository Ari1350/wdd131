const lastModified = document.getElementById('last-modified');
lastModified.textContent = document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
});
  