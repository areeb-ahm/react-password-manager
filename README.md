# PassOP — React Password Manager 🔐

A modern, responsive password manager that allows users to manage their login credentials locally. This project focuses on a clean user experience using **React**, **Tailwind CSS**, and the browser's **Local Storage** for data persistence.

---

## ✨ Features

- **Full CRUD Functionality**: Add, view, edit, and delete password entries.
- **Show/Hide Toggle**: Instantly switch between masked and plain text for passwords.
- **Copy to Clipboard**: One-click copying for usernames and passwords for a faster workflow.
- **Data Persistence**: Uses `localStorage` to ensure your data stays saved even after closing the browser.
- **Responsive Design**: A mobile-first UI built with Tailwind CSS that works on any screen size.
- **Interactive UI**: Includes toast notifications and smooth transitions for a premium feel.

---

## 🛠️ Tech Stack

- **Frontend Library**: React.js
- **Styling**: Tailwind CSS
- **Icons**: [Lordicon](https://lordicon.com) (Animated Icons) & Lucide React
- **Storage**: Browser Web Storage API (`localStorage`)
- **Notifications**: React-Toastify (or your preferred library)

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running:

### 1. Clone the Repository
```bash
git clone https://github.com
```

### 2. Install Dependencies
```bash
cd react-password-manager
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (if using Vite) or [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🛡️ Security Disclaimer

This project is for educational purposes. Currently, data is stored in **unencrypted** `localStorage`. For production-level security, I recommend integrating a backend with encryption (like CryptoJS) or using a dedicated Vault API.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Developed by Areeb Ahmed**  
*Building secure, user-centric web applications.*
