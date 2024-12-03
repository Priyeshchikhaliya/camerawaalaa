import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../Pages/Home";
import Films from "../Pages/Films";
import Images from "../Pages/Images";
import ImageCategory from "../Pages/ImageCategory";
import About from "../Pages/About";
import Review from "../Pages/Review";
import Contact from "../Pages/Contact";

function PublicRoute() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/images" element={<Images />} />
        <Route path="/images/:category" element={<ImageCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default PublicRoute;
