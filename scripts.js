document.addEventListener('DOMContentLoaded', () => {
    // Open the default tab
    document.querySelector('.tablink').click();
});

function openTab(evt, tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tabcontent').forEach(content => {
        content.style.display = 'none';
    });

    // Remove "active" class from all tab links
    document.querySelectorAll('.tablink').forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Add "active" class to the clicked tab link
    evt.currentTarget.classList.add('active');
}

let currentIndex = { '2d': 0, '3d': 0 }; // Track indices separately for 2D and 3D

function moveSlide(step, type) {
    const gallery = document.querySelector(`#${type}-designs .gallery`);
    const slides = gallery.children;
    const totalSlides = slides.length;

    // Update the index for the specific type
    currentIndex[type] = (currentIndex[type] + step + totalSlides) % totalSlides;
    const offset = -currentIndex[type] * 100; // Change to 100% to show one image at a time

    gallery.style.transform = `translateX(${offset}%)`;
}
