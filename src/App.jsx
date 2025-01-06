import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Abdominoplasty from "./components/services/Abdominoplasty";
import AbsLipo from "./components/services/AbsLipo";
import Armlift from "./components/services/Armlift";
import BreastAugmentation from "./components/services/BreastAug";
import BreastLift from "./components/services/BreastLift";
import BreastReduction from "./components/services/BreastReduction";
import ButtockContouring from "./components/services/ButtockContouring";
import Cavitation from "./components/services/Cavitation";
import ChinAug from "./components/services/ChinAug";
import Cryolipolysis from "./components/services/Cryolipolysis";
import Dimpleplasty from "./components/services/Dimpleplasty";
import EarRecon from "./components/services/EarRecon";
import FaceLift from "./components/services/FaceLift";
import Gynecomastia from "./components/services/Gynecomastia";
import HairTransplant from "./components/services/HairTransplant";
import HeatTherapy from "./components/services/HeatTherapy";
import LaserTreatment from "./components/services/LaserTreatment";
import Lipo from "./components/services/Lipo";
import Rhinoplasty from "./components/services/Rhinoplasty";
import SteamBath from "./components/services/SteamBath";
import Thighlift from "./components/services/ThighLift";
import VacuumTherapy from "./components/services/VacuumTherapy";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      {" "}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path = "/" element                   = {<Home />} />
        <Route path = "/about" element              = {<About />} />
        <Route path = "/contact" element            = {<Contact />} />
        <Route path = "/appointment" element        = {<Appointment />} />
        <Route path = "/abdominoplasty" element     = {<Abdominoplasty />} />
        <Route path = "/abslipo" element            = {<AbsLipo />} />{" "}
        <Route path = "/armlift" element            = {<Armlift />} />{" "}
        <Route path = "/vaccumtherapy" element      = {<VacuumTherapy />} />{" "}
        <Route path = "/thighlift" element          = {<Thighlift />} />{" "}
        <Route path = "/steambath" element          = {<SteamBath />} />{" "}
        <Route path = "/rhinoplasty" element        = {<Rhinoplasty />} />{" "}
        <Route path = "/liposuction" element        = {<Lipo />} />{" "}
        <Route path = "/lasertreatment" element     = {<LaserTreatment />} />{" "}
        <Route path = "/heattherapy" element        = {<HeatTherapy />} />{" "}
        <Route path = "/hairtransplant" element     = {<HairTransplant />} />{" "}
        <Route path = "/gynecomastia" element       = {<Gynecomastia />} />{" "}
        <Route path = "/facelift" element           = {<FaceLift />} />{" "}
        <Route path = "/eareconstruction" element   = {<EarRecon/>} />{" "}
        <Route path = "/dimpleplasty" element       = {<Dimpleplasty />} />{" "}
        <Route path = "/cryolipolysis" element      = {<Cryolipolysis />} />{" "}
        <Route path = "/rfcavitation" element       = {<Cavitation/>} />{" "}
        <Route path = "/chinaugmentation" element   = {<ChinAug />} />{" "}
        <Route path = "/buttockcontouring" element  = {<ButtockContouring />} />{" "}
        <Route path = "/breastreduction" element    = {<BreastReduction />} />{" "}
        <Route path = "/breastlift" element         = {<BreastLift />} />{" "}
        <Route path = "/breastaugmentation" element = {<BreastAugmentation />} />{" "}

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
