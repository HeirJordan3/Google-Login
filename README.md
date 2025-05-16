Here’s a polished and modern `README.md` for your **Google Login with Firebase** project, formatted for clarity and professionalism:

---

# 🔐 Google Login with Firebase

A simple and modern authentication flow using **Firebase Authentication** and **Google Sign-In**. After logging in, users are redirected to a mock homepage featuring sample news content.

---

## ✨ Features

* ⚡️ **Modern UI** built with [`shadcn/ui`](https://ui.shadcn.com)
* 🔐 **Firebase Google Authentication**
* 📰 **Sample News Feed** after login
* 📱 **Responsive Design** (Mobile & Desktop)

---

## 📸 Screenshots

| Login Page                             | Home Page                            |
| -------------------------------------- | ------------------------------------ |
| ![Login Page](./screenshots/login.png) | ![Home Page](./screenshots/home.png) |

> (Make sure to add screenshots in a `screenshots/` folder.)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd google-login
```

### 2. Install dependencies

```bash
npm install
```

---

### ⚠️ Resolving Dependency Conflicts

If you encounter a `date-fns` and `react-day-picker` conflict, try one of the following:

#### Option 1: Use `--legacy-peer-deps`

```bash
npm install --legacy-peer-deps
```

#### Option 2: Use `--force`

```bash
npm install --force
```

#### Option 3: Update `package.json`

```json
"date-fns": "^3.0.0"
```

Then run:

```bash
npm install
```

---

## 🧪 Running the App

Start the development server:

```bash
npm run dev
```

The app should be running on `http://localhost:5173` (or whatever your dev server config uses).

---

## 📁 Project Structure

```bash
src/
├── Components/
│   ├── GoogleSignIn.jsx
├── Pages/
│   ├── LoginPage.jsx
│   └── HomePage.jsx
├── firebase.js
├── App.jsx
└── main.jsx
```

---

## 🔐 Firebase Setup

Make sure you have:

1. Created a Firebase project
2. Enabled Google Authentication in Firebase Console
3. Added your Firebase config to `firebase.js`

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Let me know if you'd like help auto-generating the screenshots or Firebase setup steps!
