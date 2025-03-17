// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  }
  
  // Check for saved dark mode preference
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
  
  // Mobile Menu Toggle
  function toggleMobileMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
  }
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href"));
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      if (window.innerWidth <= 768) {
        toggleMobileMenu();
      }
    });
  });
  
  // Show/Hide Extra Info
  function toggleExtraInfo() {
    const extraInfo = document.getElementById("extraInfo");
    extraInfo.style.display = extraInfo.style.display === "none" ? "block" : "none";
  }
  
  // Modal Functions
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  // Form Validation
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return false;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth <= 768 && 
       !e.target.closest('.navbar') && 
       !e.target.closest('.mobile-menu-btn')) {
      navbar.classList.remove('active');
    }
  });
  
  // Optional: Auto-open modal
  // window.onload = openModal;