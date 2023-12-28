document.addEventListener('DOMContentLoaded', function () {
  const imageContainers = document.querySelectorAll('.image-container');

  let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

  function toggleDetails(event) {
    const clickedContainer = event.currentTarget;
    const details = clickedContainer.querySelector('.details');

    // Close details for all other containers
    imageContainers.forEach(function (container) {
      if (container !== clickedContainer) {
        container.querySelector('.details').classList.remove('active');
      }
    });

    // Toggle details for the clicked container
    details.classList.toggle('active');
  }

  function handleTouchEnd(event) {
    if (isTouchDevice) {
      event.preventDefault();
      toggleDetails(event);
    }
  }

  // For both desktop and mobile
  imageContainers.forEach(function (container) {
    container.addEventListener('click', toggleDetails);
    container.addEventListener('touchend', handleTouchEnd);
  });
});
