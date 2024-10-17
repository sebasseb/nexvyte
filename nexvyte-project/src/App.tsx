import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import RouteList from "./router/routes";
import { Footer } from 'antd/es/layout/layout';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <div className="flex-grow">
          <Routes>
            {Object.values(RouteList).map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </Router>
      <Footer className="bg-gray-800 text-white p-4 text-center">
        Footer Content
      </Footer>
    </div>
  );
}

export default App;
