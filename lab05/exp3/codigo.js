document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menuOpciones = document.getElementById("menuOpciones");
  const dropdown = new bootstrap.Dropdown(menuBtn);

  menuBtn.addEventListener("click", () => {
    dropdown.toggle();
  });

  menuOpciones.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-item")) {
      alert(`Seleccionaste: ${e.target.textContent}`);
    }
  });
});