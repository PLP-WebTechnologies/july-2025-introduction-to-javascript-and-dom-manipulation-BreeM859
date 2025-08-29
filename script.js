// ----------------- CUSTOM FUNCTION 1 -----------------
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// ----------------- CUSTOM FUNCTION 2 -----------------
function validateForm() {
  let email = document.getElementById("email").value;
  let message = document.getElementById("message");

  if (email === "") {
    message.innerHTML = "Email cannot be empty.";
    return false;
  }
  if (!email.includes("@")) {
    message.innerHTML = "Please enter a valid email.";
    return false;
  }

  message.innerHTML = "Thank you for subscribing!";
  return true;
}

// ----------------- LOOP EXAMPLE 1 (Product List) -----------------
let products = ["Laptop", "Phone", "Headphones", "Monitor", "Smartwatch"];
let productList = document.getElementById("productList");

for (let i = 0; i < products.length; i++) {
  let li = document.createElement("li");
  li.textContent = products[i];
  productList.appendChild(li);
}

// ----------------- LOOP EXAMPLE 2 (Banner Slider) -----------------
let messages = [
  "🔥 Big Sale Today!",
  "🚚 Free Shipping Worldwide!",
  "🎁 Sign up & Get 10% Off!",
  "⭐ Rated #1 by our customers"
];

let index = 0;
setInterval(function() {
  document.getElementById("banner").textContent = messages[index];
  index++;
  if (index >= messages.length) {
    index = 0;
  }
}, 3000); // Change message every 3 seconds
