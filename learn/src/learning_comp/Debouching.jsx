import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Footer = lazy(() => import("./Footer"));
const Navbar = lazy(() => import("./Navbar"));

// -----------------------------------------------------------------Debouching & code splitting -----check in source
// the above text are used for lazy loading so that the component is not always loaded incase of heavy application it will ijncrease respojnse time which will increase cost
