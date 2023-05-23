import { Route,  Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/LandingPage";
import MainMenuList from "./page/MainMenuList";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainmenu" element={<MainMenuList />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
