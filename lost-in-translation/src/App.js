import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import Login from './views/Login'
import Translations from './views/Translations'
import Profile from './views/Profile'

function App() {



  return (
    <BrowserRouter>
      <div className="App">
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
