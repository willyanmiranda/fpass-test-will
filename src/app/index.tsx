import Home from "../pages/home";
import Description from "../pages/description";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/description" element={<Description />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
