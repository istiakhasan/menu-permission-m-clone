import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/LandingPage";
import MainMenuList from "./page/MainMenuList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./comoponent/Navbar";
import BusinessUnitList from "./page/BusinessUnit/BusinessUnitList";
import BusinessUnitCreate from "./page/BusinessUnit/BusinessUnitCreate";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainmenu" element={<MainMenuList />} />
        <Route path="/business/unit/list" element={<BusinessUnitList />}/>
        <Route path="/business/unit/create" element={<BusinessUnitCreate />}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
