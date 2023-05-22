import { Route,  Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/LandingPage";
import MainMenuList from "./page/MainMenuList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainmenu" element={<MainMenuList />} />
      </Routes>
    </div>
  );
}

export default App;
