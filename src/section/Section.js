import { Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Gallery from "../pages/Gallery";
import Projects from "../pages/Projects";
import Home from "../pages/Home/Home";



export default function Section() {
  return (
    <>
    <Route exact path = "/" component={Home} />
    <Route exact path = "/about" component={AboutUs} />
    <Route exact path = "/projects" component={Projects} />
    <Route exact path = "/gallery" component={Gallery} />
    </>
  );
}