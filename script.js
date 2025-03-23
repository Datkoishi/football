  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Set the target date: April 19, 2025 at 20:00 Vietnam time (UTC+7)
const targetDate = new Date('2025-04-19T20:00:00+07:00').getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const timeRemaining = targetDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById("days").textContent = days < 10 ? '0' + days : days;
    document.getElementById("hours").textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? '0' + seconds : seconds;
    
    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}, 1000);

// Schedule Tabs
const scheduleTabs = document.querySelectorAll('.schedule-tab');
const scheduleContents = document.querySelectorAll('.schedule-content');

scheduleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and contents
        scheduleTabs.forEach(t => t.classList.remove('active'));
        scheduleContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar active state on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});