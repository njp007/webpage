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