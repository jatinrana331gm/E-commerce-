// JavaScript for scrolling functionality
document.getElementById('scrollLeftBtn').addEventListener('click', function() {
    const scrollContainer = document.getElementById('scrollContainer');
    scrollContainer.scrollBy({
        left: -300,  // Scroll left by 300px (adjust as needed)
        behavior: 'smooth'
    });
});

document.getElementById('scrollRightBtn').addEventListener('click', function() {
    const scrollContainer = document.getElementById('scrollContainer');
    scrollContainer.scrollBy({
        left: 300,  // Scroll right by 300px (adjust as needed)
        behavior: 'smooth'
    });
});
