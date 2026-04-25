// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Form submission (AJAX)
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    successMsg.style.display = "block";
    form.reset();
  } else {
    alert("❌ Error sending message");
  }
});