import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Home"));
const Footer = lazy(() => import("./Footer"));
const Navbar = lazy(() => import("./Navbar"));

// -----------------------------------------------------------------Debouching & code splitting -----check in source
// the above text are used for lazy loading so that the component is not always loaded incase of heavy application it will ijncrease respojnse time which will increase cost

{
  /* <Router>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Navbar" element={<Navbar />} />
    </Routes>
  </Suspense>
</Router>; */
}

//this function {suspense} creates a pre loaded skeleteon feture so that if a page is not loaded it will show that before everything
