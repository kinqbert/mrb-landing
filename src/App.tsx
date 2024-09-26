import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { MainPage } from "./pages";
import { OrderPage } from "./pages";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
