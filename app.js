// ✅ app.js adaptado a JSON Server

const userList = document.getElementById("userList");
const searchInput = document.getElementById("searchInput");
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const loader = document.getElementById("loader");
const errorMsg = document.getElementById("errorMsg");
const interactionCounterDisplay = document.getElementById("interactionCount");
const resetCounterBtn = document.getElementById("resetCounterBtn");

let users = [];
let globalInteractionCount = parseInt(localStorage.getItem("interactionCount")) || 0;
interactionCounterDisplay.textContent = globalInteractionCount;

function updateGlobalInteractionCount() {
  globalInteractionCount++;
  interactionCounterDisplay.textContent = globalInteractionCount;
  localStorage.setItem("interactionCount", globalInteractionCount);
}

// 🔁 Cargar usuarios desde JSON Server
const fetchUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/users");
    if (!res.ok) throw new Error("Error al cargar los usuarios");
    const data = await res.json();
    users = data;
    renderUsers(users);
  } catch (error) {
    errorMsg.textContent = error.message;
    errorMsg.classList.remove("d-none");
  } finally {
    loader.style.display = "none";
  }
};

function renderUsers(userArray) {
  userList.innerHTML = "";
  userArray.forEach((user, index) => {
    const card = document.createElement("div");
    card.className = "card-user";
    card.innerHTML = `
      <h5 class="fw-bold mb-1">${user.name}</h5>
      <p class="text-muted mb-2">${user.email}</p>
      <button class="btn btn-sm btn-outline-danger" data-index="${index}">
        <i class="bi bi-trash"></i> Eliminar
      </button>
    `;
    userList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = users.filter(u => u.name.toLowerCase().includes(value));
  renderUsers(filtered);
});

userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email.includes("@")) {
    errorMsg.textContent = "Nombre o correo inválido.";
    errorMsg.classList.remove("d-none");
    return;
  }

  const newUser = { name, email };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  })
    .then(res => res.json())
    .then(data => {
      users.unshift(data);
      renderUsers(users);
      updateGlobalInteractionCount();
      userForm.reset();
      errorMsg.classList.add("d-none");
    });
});

userList.addEventListener("click", (e) => {
  if (e.target.closest("button")) {
    const index = e.target.closest("button").dataset.index;
    const userId = users[index].id;

    fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE"
    })
      .then(() => {
        users.splice(index, 1);
        renderUsers(users);
      });
  }
});

resetCounterBtn.addEventListener("click", () => {
  globalInteractionCount = 0;
  localStorage.setItem("interactionCount", globalInteractionCount);
  interactionCounterDisplay.textContent = globalInteractionCount;
  resetCounterBtn.textContent = "Reiniciado ";
  resetCounterBtn.disabled = true;
  setTimeout(() => {
    resetCounterBtn.innerHTML = `<i class="bi bi-arrow-counterclockwise"></i> Reiniciar contador`;
    resetCounterBtn.disabled = false;
  }, 2000);
});

fetchUsers();
