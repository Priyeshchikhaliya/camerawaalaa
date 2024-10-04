import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../Pages/Home";
import Photos from "../Pages/Photos";
import Films from "../Pages/Films";
import PhotoCategory from "../Pages/PhotoCategory"; // Component for handling categories under Photos

function PublicRoute() {
  return (
    <Router>
      <Routes>
        {/* Redirect any undefined routes to "/" */}
        <Route path="*" element={<Navigate to="/" />} />

        {/* Redirect from "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home route */}
        <Route path="/home" element={<Home />} />

        {/* Photos route */}
        <Route path="/images" element={<Photos />} />

        {/* Dynamic category route under /photos */}
        <Route
          path="/images/:category"
          element={<PhotoCategory />}
        />

        {/* Films route */}
        <Route path="/films" element={<Films />} />
      </Routes>
    </Router>
  );
}

export default PublicRoute;
