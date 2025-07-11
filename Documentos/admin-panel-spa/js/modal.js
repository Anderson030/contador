// Abre el modal y si se pasa un usuario, llena el formulario
export function openModal(user = null) {
  const modal = document.getElementById('userModal');
  modal.classList.add('open');

  if (user) {
    fillForm(user);
  }
}

// Cierra el modal
export function closeModal() {
  document.getElementById('userModal').classList.remove('open');
}

// Llena el formulario con los datos de un usuario (para editar)
export function fillForm(user) {
  document.getElementById('userId').value = user.id;
  document.getElementById('name').value = user.name;
  document.getElementById('email').value = user.email;
  document.getElementById('phone').value = user.phone;
  document.getElementById('enrollNumber').value = user.enrollNumber;
  document.getElementById('dateOfAdmission').value = user.dateOfAdmission;
}

// Limpia el formulario (para nuevo usuario)
export function clearForm() {
  document.getElementById('userId').value = '';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('enrollNumber').value = '';
  document.getElementById('dateOfAdmission').value = '';
}
