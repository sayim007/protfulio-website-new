setInterval(() => {
  document.getElementById("local-time").innerHTML = new Date().toLocaleString();
}, 1000);

// Contact form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    event.preventDefault();
    alert("Form Submitted Successfully!");
    form.reset();
  }

  form.classList.add("was-validated");
});
