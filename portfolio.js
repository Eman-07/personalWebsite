var tablinks = document.getElementsByClassName("tab-options");
var tabconts = document.getElementsByClassName("tab-contents");
function opencontents(name){
    for(tablink of tablinks){
        tablink.classList.remove("active");
}
    for(tabcont of tabconts)
        {
        tabcont.classList.remove("active_content");
    }

    event.currentTarget.classList.add("active");
    document.getElementById(name).classList.add("active_content")
}



// Select the image element
const image1 = document.getElementById('myimg1');

// Add event listeners for mouse hover
image1.addEventListener('mouseenter', zoomIn);
image1.addEventListener('mouseleave', zoomOut);

// Function to zoom in on mouse hover
function zoomIn() {
    image1.style.transform = 'scale(1.2)'; // Increase scale for zoom effect
}

// Function to zoom out when mouse leaves
function zoomOut() {
    image1.style.transform = 'scale(1)'; // Reset scale to normal
}


// ****************


const image2 = document.getElementById('personalweb');

image2.addEventListener('mouseenter', zoomIn2);
image2.addEventListener('mouseleave', zoomOut2);

function zoomIn2() {
    image2.style.transform = 'scale(1.2)';
}
function zoomOut2() {
    image2.style.transform = 'scale(1)'
}

// *******************************

const img3 = document.getElementById('library');
img3.addEventListener('mouseenter', zoomIn3);
img3.addEventListener('mouseleave', zoomOut3);
function zoomIn3() {
    img3.style.transform = 'scale(1.2)'; // Increase scale for zoom effect
}
function zoomOut3() {
    img3.style.transform = 'scale(1)'; // Reset scale to normal
}
