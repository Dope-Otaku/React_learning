import "./App.css";
import Navbar from "./learning_comp/Navbar";
import Main from "./learning_comp/Routing/Main";
import About from "./learning_comp/Routing/About";
import Contact from "./learning_comp/Routing/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//for naming i got to know a new thing such as we can name any long module name byusing as syntax and is highly customizable
// for xample {Browser Router as Souvik}
import Footer from "./learning_comp/Footer";
import Playarea from "./learning_comp/Playarea";
import Hooks from "./learning_comp/Hooks/Hooks";
import { createContext } from "react";
import Learn from "./learning_comp/classVSFunc/Learn";
import ReactLifeCycle from "./learning_comp/classVSFunc/ReactLifeCycle";
// import Props from "./learning_comp/Props";
// import Home from "./learning_comp/Home";
// import TodoL from "./learning_comp/Todo/TodoL";
const contex = createContext();

function App() {
  return (
    <BrowserRouter>
      {/* <contex.Provider value={"souvik"}>
        <div>
          <Hooks />
        </div>
      </contex.Provider> */}

      <Navbar />

      {/* <TodoL /> */}
      {/* <Home /> */}
      {/* <Props /> */}
      {/* <Hooks /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Playarea />} />
        <Route path="/play/:id" element={<Playarea />} />
      </Routes>
      <Learn />
      <ReactLifeCycle />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
export { contex };
