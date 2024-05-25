// Select the image element
const image = document.getElementsByClassName('zoomableImage')

// Add event listeners for mouse hover
image.addEventListener('mouseenter', zoomIn);
image.addEventListener('mouseleave', zoomOut);

// Function to zoom in on mouse hover
function zoomIn() {
    image.style.transform = 'scale(1.2)'; // Increase scale for zoom effect
}

// Function to zoom out when mouse leaves
function zoomOut() {
    image.style.transform = 'scale(1)'; // Reset scale to normal
}
