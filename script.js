document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const Email = document.getElementById("phone").value;
  const phone = document.getElementById("name").value;
  const message = document.getElementById("phone").value;

  const res = await fetch("http://localhost:3000/api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, phone, Email, message })
  });

  const data = await res.json();

  alert("Form submitted ✅");
  console.log(data);
});




const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Button alert
function showMessage() {
  alert("Thank you! We will contact you soon.");
}
