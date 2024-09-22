import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth/Auth";
import Navbar from './pages/Navbar'; // Adjust the import path as needed
import { AuthProvider } from "./Auth/AuthContext";
import LandingPage from "./pages/LandinPage"; // Fixed import name
import Home from "./pages/Home";
import About from "./pages/About"; // Import About page
import Team from "./pages/Team"; // Import Team page
import "./App.scss";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar /> {/* Navbar added here */}
        <Routes>
          <Route
            path="/auth"
            element={
              <div className="app">
                <Auth />
              </div>
            }
          />
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* About Route */}
          <Route path="/team" element={<Team />} /> {/* Team Route */}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
