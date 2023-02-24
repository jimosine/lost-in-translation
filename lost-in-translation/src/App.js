// Import required modules and dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Translations from "./views/Translations";
import Profile from "./views/Profile";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

// Main component of the application
function App() {
  return (
    // Define the root BrowserRouter element
    <BrowserRouter>
      <div className="App">
        {/* Render the Navbar component */}
        <Navbar />
        {/* Define nested Route elements using the Routes component */}
        <Routes>
          {/* Define a Route for the Login view */}
          <Route path="/" element={<Login />} />
          {/* Define a Route for the Translations view */}
          <Route path="/translations" element={<Translations />} />
          {/* Define a Route for the Profile view */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Export the App component as the default export of this module
export default App;