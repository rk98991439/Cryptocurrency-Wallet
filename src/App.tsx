import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth/Auth";
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
    </Router>
  );
};

export default App;
