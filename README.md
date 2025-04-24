GameVerse
GameVerse is an interactive gaming platform that leverages the RAWG API to provide users with comprehensive information about various games. The application features user authentication, personalized game libraries, and an interactive 3D interface.

🔗 Live Demo: GameVault on Vercel

✨ Features
Interactive 3D Landing Page - Engaging welcome screen with 3D model rendering
Game Discovery - Browse and search through thousands of games using the RAWG API
User Authentication - Secure login and registration powered by Clerk
Personalized Collections - Save favorite games to your profile (requires authentication)
Responsive Design - Optimized for both desktop and mobile devices
Developer Profile - Interactive developer information page with Rive animations for social media links
🛠️ Technologies Used
Frontend:

React.js
Redux Toolkit (state management)
React Router (navigation)
Three.js (3D rendering)
Rive (animations)
CSS (styling)
Authentication:

Clerk (user authentication)
APIs:

RAWG API (game data)
Deployment:

Vercel
🚀 Getting Started
Prerequisites
npm or yarn
RAWG API key
Clerk account and API keys
Installation
Clone the repository:

git clone https://github.com/Rohan-Raidani/Mediaamp-Assignment.git
cd Mediaamp-Assignment
Install dependencies:

npm install
# or
yarn install
Create a .env file in the root directory with the following variables:

VITE_API_RAWG=your_rawg_api_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
Start the development server:

npm run dev
# or
yarn dev
Open your browser and navigate to http://localhost:5173 to view the application.

🔒 Authentication Flow
Users can browse games without signing in
Authentication is required to:
Add games to favorites
Access the favorites page
View personalized content
Sign up/in options are provided through Clerk's secure authentication
💡 Future Enhancements
Game reviews and ratings
Social features (friends, game recommendations)
Game purchasing integration
Advanced filtering and sorting options
Personal game collections beyond favorites
👨‍💻 Developer
Rohan Raidani

GitHub
LinkedIn
🙏 Acknowledgements
RAWG API for providing comprehensive game data
Clerk for authentication services
Three.js for 3D rendering capabilities
Rive for interactive animations
