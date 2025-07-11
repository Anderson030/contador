// Al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    mostrarDatos();
    actualizarContador();
  });
  
  // Elementos
  const nombreInput = document.getElementById('nombre');
  const edadInput = document.getElementById('edad');
  const guardarBtn = document.getElementById('guardarBtn');
  const limpiarBtn = document.getElementById('limpiarBtn');
  const output = document.getElementById('output');
  const contador = document.getElementById('contador');
  
  // Evento para guardar datos
  guardarBtn.addEventListener('click', () => {
    const nombre = nombreInput.value.trim();
    const edad = edadInput.value.trim();
  
    // Validación
    if (nombre === '' || edad === '' || isNaN(edad) || parseInt(edad) <= 0) {
      alert('Por favor, ingresa un nombre válido y una edad mayor a 0.');
      return;
    }
  
    // Guardar en Local Storage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('edad', edad);
  
    // Mostrar los datos
    mostrarDatos();
  
    // Aumentar contador
    aumentarContador();
  });
  
  // Evento para limpiar datos
  limpiarBtn.addEventListener('click', () => {
    localStorage.clear();
    output.textContent = 'No hay información almacenada.';
  });
  
  // Función para mostrar los datos
  function mostrarDatos() {
    const nombre = localStorage.getItem('nombre');
    const edad = localStorage.getItem('edad');
  
    if (nombre && edad) {
      output.textContent = `Nombre: ${nombre} | Edad: ${edad}`;
    } else {
      output.textContent = 'No hay información almacenada.';
    }
  }
  
  // Función para aumentar el contador
  function aumentarContador() {
    let count = sessionStorage.getItem('contador') || 0;
    count++;
    sessionStorage.setItem('contador', count);
    contador.textContent = count;
  }
  
  // Función para mostrar el contador al cargar
  function actualizarContador() {
    const count = sessionStorage.getItem('contador') || 0;
    contador.textContent = count;
  }
  