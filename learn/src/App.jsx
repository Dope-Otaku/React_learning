import "./App.css";
import Navbar from "./learning_comp/Navbar";
import Main from "./learning_comp/Routing/Main";
import About from "./learning_comp/Routing/About";
import Contact from "./learning_comp/Routing/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./learning_comp/Footer";
// import Props from "./learning_comp/Props";
// import Home from "./learning_comp/Home";
// import TodoL from "./learning_comp/Todo/TodoL";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <TodoL /> */}
      {/* <Home /> */}
      {/* <Props /> */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
