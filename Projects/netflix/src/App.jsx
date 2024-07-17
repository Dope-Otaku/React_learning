import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Shows from "./Components/Pages/Shows";
import Movies from "./Components/Pages/Movies";
import MyNet from "./Components/Pages/MyNet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shows" element={<Shows />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/MyNetflix" element={<MyNet />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
