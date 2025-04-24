GameVerse
GameVerse is an interactive gaming platform that leverages the RAWG API to provide users with comprehensive information about various games. The application features user authentication, personalized game libraries, and an interactive 3D interface.



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
1.npm or yarn
2.RAWG API key
3.Clerk account and API keys



Installation
1.Clone the repository:

```bash

git clone https://github.com/vidhikhurana/MediaAmp.git
cd Mediaamp-Assignment

```


Install dependencies:

```bash
2.npm install
# or
yarn install

```

3.Create a .env file in the root directory with the following variables:

```bash
VITE_API_RAWG=your_rawg_api_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

```

4.Start the development server:
 ```bash
npm run dev
# or
yarn dev
```

5.Open your browser and navigate to http://localhost:5173 to view the application.

🔒 Authentication Flow
1.Users can browse games without signing in

2.Authentication is required to:
    -Add games to favorites
    -Access the favorites page
    -View personalized content

    
3.Sign up/in options are provided through Clerk's secure authentication


💡 Future Enhancements

1.Game reviews and ratings
2.Social features (friends, game recommendations)
3.Game purchasing integration
4.Advanced filtering and sorting options
5.Personal game collections beyond favorites
👨‍💻 Developer
Vidhi Khurana

🙏 Acknowledgements


1.[RAWG API](https://rawg.io/apidocs) for providing comprehensive game data
- [Clerk](https://clerk.dev) for authentication services
- [Three.js](https://threejs.org) for 3D rendering capabilities
