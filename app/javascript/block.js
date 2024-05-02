document.addEventListener('DOMContentLoaded', () => {
  const blockElement = document.querySelector('.block');

  if (blockElement) {
    blockElement.addEventListener('mouseover', () => {
      blockElement.style.transform = 'scale(1.1)';
    });

    blockElement.addEventListener('mouseout', () => {
      blockElement.style.transform = 'scale(1)';
    });
  }
});
