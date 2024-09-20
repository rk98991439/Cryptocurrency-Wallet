import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth/Auth";

//! import auth provider
import { AuthProvider } from "./Auth/AuthContext";

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
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
