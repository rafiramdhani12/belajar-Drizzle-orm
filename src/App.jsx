import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Input from "./pages/Input";
import Update from "./pages/Update";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
