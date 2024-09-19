
let form = document.querySelector('form')


let valid = document.getElementById('form')
const card = document.querySelector(".card")
const visibility = document.getElementById("hidden");

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let emailInput = document.getElementById("email");
  let erroEmail = document.getElementById("erroEmail");
  let email = emailInput.value;
  // Expressão regular para validar o formato do email
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  if (emailPattern.test(email)) {
    erroEmail.textContent = ""; // Limpa a mensagem de erro
    // Aqui você pode adicionar código adicional para processar o email válido
    visibility.style.display = 'block';
    card.style.display = 'none';
    emailInput.style.borderColor = 'black';
    emailInput.classList.remove("place-red");
  } else {
    erroEmail.textContent = "valid email required";
    emailInput.style.borderColor = 'red';
    emailInput.classList.add("place-red");
  }
})


let btn = document.querySelector('.close')
btn.addEventListener('click', function () {
  card.style.display = 'flex'
  visibility.style.display = 'none'
})