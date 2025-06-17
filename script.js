
const actualHash = "bc8d66b537cabecc37cee691801fb49027e18b40e46cf19114ce658257d2dad2"; 

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const password = document.getElementById("password").value;
  const hash = CryptoJS.SHA256(password).toString();

  if (hash === actualHash) {
    window.location.href = "index2.html";
  } else {
    document.getElementById("error").textContent = "Incorrect password.";
  }
});
