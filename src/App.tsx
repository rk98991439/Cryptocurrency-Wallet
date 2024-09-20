import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth/Auth";

import LandingPage from "./pages/LandinPage";
import "./App.scss";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={
            <div className="app">
              <Auth />
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
