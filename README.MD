# 🧑‍💻 SPA de Gestión de Usuarios con JavaScript y JSON Server

Una aplicación web tipo Single Page Application (SPA) construida con HTML5, CSS3 (Bootstrap 5) y JavaScript Vanilla.  
Permite visualizar, agregar y eliminar usuarios conectándose a una API local simulada con `json-server`.  
Además, cuenta con un contador de interacciones persistente usando `localStorage`.

---

## ✨ Características

- 🧑 Visualización dinámica de usuarios desde una API local (`json-server`)
- ➕ Agregar nuevos usuarios (guardados en `db.json`)
- 🗑️ Eliminar usuarios en tiempo real
- 🔍 Filtro en vivo por nombre
- 🔢 Contador de interacciones (solo al agregar usuarios)
- 💾 Persistencia del contador con `localStorage`
- 📱 Diseño responsivo con Bootstrap
- 🔁 Scroll horizontal para tarjetas de usuario

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (DOM + Fetch API)
- JSON Server
- LocalStorage

---

## 📦 Instalación y ejecución

1. Clona este repositorio o descarga los archivos.
2. Asegúrate de tener Node.js instalado.
3. Instala `json-server` si no lo tienes:

```bash
npm install -g json-server
```

4. Crea un archivo `db.json` con el siguiente contenido:

```json
{
  "users": [
    { "id": 1, "name": "Juan Pérez", "email": "juan@mail.com" },
    { "id": 2, "name": "Ana Gómez", "email": "ana@mail.com" }
  ]
}
```

5. Ejecuta el servidor local:

```bash
json-server --watch db.json --port 3000
```

6. Abre `index.html` en tu navegador y ¡listo!

---

## 📂 Estructura del proyecto

```
📁 gestion-usuarios-jsonserver
├── index.html
├── style.css
├── app.js
├── db.json
└── README.md
```

---

## 🧪 Cómo probar la app

- Escribe un nombre en el buscador para filtrar usuarios.
- Agrega un nuevo usuario con el formulario.
- Elimina usuarios usando el botón correspondiente.
- Observa cómo aumenta el contador y se mantiene aunque recargues la página.
- Usa el botón de reinicio para poner el contador en 0.

---

## 👨‍🏫 Información del autor

Proyecto desarrollado como parte de la prueba de desempeño del **Módulo 3 - JavaScript DOM y SPA** en **Riwi**.

- 👨‍🎓 Nombre: Jerónimo Cardona Restrepo  
- 🧪 Proyecto: SPA conectada a API local con JSON Server  
- 📅 Fecha: Julio de 2025

---

## 🔗 Recursos adicionales

- Documentación oficial de JSON Server:  
  https://github.com/typicode/json-server

---
