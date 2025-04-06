# 🎮 GameVerse

**GameVerse** is a dynamic web application designed for gaming enthusiasts. It utilizes the RAWG API to deliver detailed information on a wide array of games. It has secure login system, and the ability to curate personal game collections, GameVerse offers a feature-rich gaming companion.


##  Core Features

- 🧊**Immersive 3D Entry Screen** – Built with Three.js for a visually engaging first impression
- 🔎 **Game Explorer** – Search and explore thousands of titles via the RAWG API
- 🔐 **Secure Access** – User authentication and session handling using Clerk
- 💾 **Custom Game Lists** – Logged-in users can bookmark their favorite games
- 📱**Mobile-Friendly UI** – Fully responsive for smartphones and tablets
- 👨‍💻**Developer Showcase** – Interactive dev profile enhanced with Rive-powered animations

---

## 🧰Tech Stack
### ⚛️ Frontend
- React.js
- Redux Toolkit (for global state)
- React Router (client-side routing)
- Three.js (3D scenes)
- Rive (animations)
- CSS (styling and layout)

### 🔐Authentication
- [Clerk](https://clerk.dev/)

### External API
- [RAWG API](https://rawg.io/apidocs)

---

## 🧑‍🏫 Getting Started

### Requirements

- Node.js + npm (or yarn)
- RAWG API Key
- Clerk project credentials

### Setup Instructions

1.Clone the Project Repository
Begin by downloading the project files from GitHub:


cd MediaAmp

2. Install Project Dependencies
Use your preferred package manager to install all required packages:

npm install or

yarn install



3.Configure Environment Variables
At the root of your project, create a .env file and add the following credentials:


VITE_API_RAWG=your_rawg_api_key_here

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here

4.Run the App Locally
To start the local development server, use:

npm run dev or

yarn dev

5., open your browser and visit:
http://localhost:5173
to view the app in action.

