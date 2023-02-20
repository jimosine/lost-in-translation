import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import Login from './views/Login'
import Translations from './views/Translations'
import Profile from './views/Profile'
import Navbar from './components/Navbar/Navbar';

function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/translations" element={<Translations />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
