document.addEventListener('DOMContentLoaded', function() {
  // Existing category handling code
  const categoryItems = document.querySelectorAll('.category-item');
  
  categoryItems.forEach(item => {
    const mainElement = item.querySelector('.category-main');
    
    mainElement.addEventListener('click', function() {
      // Close other open categories
      categoryItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current category
      item.classList.toggle('active');
    });
  });
  
  // Prevent subcategory clicks from closing the menu
  const subcategoryItems = document.querySelectorAll('.subcategory-item');
  subcategoryItems.forEach(subItem => {
    subItem.addEventListener('click', function(event) {
      event.stopPropagation();
      console.log('Selected subcategory:', this.textContent);
    });
  });
  
  // Close when clicking on overlay
  document.getElementById('overlay').addEventListener('click', function() {
    togglePostAd();
  });
  
  // Add close button functionality
  document.querySelector('.close-btn').addEventListener('click', function() {
    togglePostAd();
  });
});

// Toggle function for showing/hiding the ad posting form
function togglePostAd() {
  const container = document.getElementById('adContainer');
  const overlay = document.getElementById('overlay');
  
  if (container.style.display === 'block') {
    // Hide the container and overlay
    container.style.display = 'none';
    overlay.style.display = 'none';
    
    // Reset any open categories
    document.querySelectorAll('.category-item.active').forEach(item => {
      item.classList.remove('active');
    });
  } else {
    // Show the container and overlay
    container.style.display = 'block';
    overlay.style.display = 'block';
  }
}