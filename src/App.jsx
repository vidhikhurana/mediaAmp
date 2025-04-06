import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import store from "./service/redux/store";
import { Home } from "./pages/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import Books from "./pages/bookmarks/Books";

const clerkPubKey = import.meta.env.VITE_KEY_CLERK;

function App() {
  return (
    <Provider store={store}>
      <ClerkProvider publishableKey={clerkPubKey}>
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Home />
              </>
            } 
            />

            <Route path="/library" element={<Books />} />
            <Route
              path="/home"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </ClerkProvider>
    </Provider>
  );
}

export default App;

