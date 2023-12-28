document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".image-container");
  const details = document.querySelector(".details");

  function toggleDetails() {
    details.classList.toggle("active");
  }

  // For desktop
  imageContainer.addEventListener("click", toggleDetails);

  // For mobile/touch devices
  imageContainer.addEventListener("touchstart", function (event) {
    event.preventDefault(); // Prevents the default touch behavior
    toggleDetails();
  });
});
