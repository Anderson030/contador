import { getUsers, addUser, updateUser, deleteUser } from './api.js';
import { renderUserTable } from './ui.js';
import { openModal, closeModal, fillForm, clearForm } from './modal.js';
import { validateForm } from './validate.js';

document.addEventListener('DOMContentLoaded', () => {
  // Mostrar lista de usuarios al cargar
  renderUserTable();

  // Botón para abrir el formulario (crear)
  document.getElementById('addBtn').addEventListener('click', () => {
    clearForm();
    document.getElementById('modalTitle').textContent = 'Add New Student';
    openModal();
  });

  // Cerrar modal
  document.getElementById('closeModalBtn').addEventListener('click', closeModal);

  // Delegación para editar y eliminar usuarios
  document.querySelector('tbody').addEventListener('click', async (e) => {
    const id = e.target.dataset.id;
    if (e.target.classList.contains('edit-btn')) {
      const users = await getUsers();
      const user = users.find(u => u.id == id);
      fillForm(user);
      document.getElementById('modalTitle').textContent = 'Edit Student';
      openModal();
    }

    if (e.target.classList.contains('delete-btn')) {
      const confirmDelete = confirm('¿Deseas eliminar este usuario?');
      if (confirmDelete) {
        await deleteUser(id);
        renderUserTable();
      }
    }
  });

  // Enviar formulario (crear o actualizar)
  document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      phone: e.target.phone.value.trim(),
      enrollNumber: e.target.enrollNumber.value.trim(),
      dateOfAdmission: e.target.dateOfAdmission.value
    };

    const id = e.target.userId.value;

    if (!validateForm(user)) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }

    if (id) {
      // Actualizar usuario
      await updateUser(id, user);
    } else {
      // Crear nuevo usuario
      await addUser(user);
    }

    closeModal();
    renderUserTable();
  });
});
