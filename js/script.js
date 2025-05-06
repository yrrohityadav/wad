// Simple JavaScript for demonstration
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard loaded!');
    
    // Example: Add active class to clicked sidebar item
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});