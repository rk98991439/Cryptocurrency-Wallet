import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth/Auth";

//! import auth provider
import { AuthProvider } from "./Auth/AuthContext";

import LandingPage from "./pages/LandinPage";
import Home from "./pages/Home";
import "./App.scss";
const App = () => {
  return (
    <Router>
      <AuthProvider>
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
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
