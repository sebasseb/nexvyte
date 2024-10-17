import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RouteList from "./router/routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          {Object.values(RouteList).map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
