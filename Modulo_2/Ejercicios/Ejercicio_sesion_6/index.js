const inputs = document.querySelectorAll('#validationCustom01, #validationCustom02, #validationCustomUsername, #validationCustom03');
const errorMessage = document.getElementById('error-message');

// Agregamos un evento para verificar si el campo tiene valor
inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.trim() === '') {
      // Si el campo está vacío, agregamos la clase is-invalid
      input.classList.add('is-invalid');
    } else {
      // Si el campo tiene valor, eliminamos la clase is-invalid
      input.classList.remove('is-invalid');
    }
  });
});