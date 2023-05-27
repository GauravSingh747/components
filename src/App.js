import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StickyNavbar from "./components/StickyNavbar";
import Scroll from "./topbar/Scroll";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import Header from "./pages/Header";

function App() {
  return (
    <BrowserRouter>
      {/* <Scroll /> */}
      <Navbar />
      {/* <StickyNavbar /> */}
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
