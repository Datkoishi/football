  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Countdown Timer
function updateCountdown() {
// Đặt thời gian đích là 8:30 sáng ngày 12/3/2025 theo giờ Việt Nam (UTC+7)
const targetDate = new Date('March 12, 2025 08:30:00 GMT+0700').getTime();
const now = new Date().getTime();
const difference = targetDate - now;

// Tính toán ngày, giờ, phút, giây
const days = Math.floor(difference / (1000 * 60 * 60 * 24));
const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((difference % (1000 * 60)) / 1000);

// Hiển thị kết quả với số 0 đứng trước nếu cần
document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;

// Nếu đã đến hoặc qua thời gian đích
if (difference < 0) {
document.getElementById('days').innerHTML = '00';
document.getElementById('hours').innerHTML = '00';
document.getElementById('minutes').innerHTML = '00';
document.getElementById('seconds').innerHTML = '00';
}
}

// Cập nhật đồng hồ mỗi giây
setInterval(updateCountdown, 1000);
updateCountdown();

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