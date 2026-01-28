<<<<<<< HEAD
// Typing effect
const text = "Full Stack Developer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.addEventListener("DOMContentLoaded", function () {

  // ===== CONTACT FORM MAILTO FIX =====
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("Contact form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoLink =
      `mailto:gopiharivignesh@gmail.com?subject=${subject}&body=${body}`;
    // Try opening Gmail compose in a new tab (web Gmail). If popup is blocked or not available,
    // fall back to the user's default mail client via mailto.
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('gopiharivignesh@gmail.com')}&su=${subject}&body=${body}`;

    const newWindow = window.open(gmailLink, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Fallback to mailto if opening a new tab was blocked
      window.location.href = mailtoLink;
    }

    // Optionally reset the form after attempting to open compose
    form.reset();
  });

});
=======
// Typing effect
const text = "Full Stack Developer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.addEventListener("DOMContentLoaded", function () {

  // ===== CONTACT FORM MAILTO FIX =====
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("Contact form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoLink =
      `mailto:gopiharivignesh@gmail.com?subject=${subject}&body=${body}`;
    // Try opening Gmail compose in a new tab (web Gmail). If popup is blocked or not available,
    // fall back to the user's default mail client via mailto.
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('gopiharivignesh@gmail.com')}&su=${subject}&body=${body}`;

    const newWindow = window.open(gmailLink, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Fallback to mailto if opening a new tab was blocked
      window.location.href = mailtoLink;
    }

    // Optionally reset the form after attempting to open compose
    form.reset();
  });

});
>>>>>>> b02908c773571a84ba35e7d4d8204d6a52ca1c46
