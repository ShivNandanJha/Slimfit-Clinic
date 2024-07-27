import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Abdominoplasty from "./components/services/Abdominoplasty";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div> <ScrollToTop />
        <Navbar />
      <Routes>
        <Route path = "/" element               = {<Home />} />
        <Route path = "/about" element          = {< About/>} />
        <Route path = "/contact" element        = {<Contact />} />
        <Route path = "/appointment" element    = {<Appointment />} />
        <Route path = "/abdominoplasty" element = {<Abdominoplasty />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
