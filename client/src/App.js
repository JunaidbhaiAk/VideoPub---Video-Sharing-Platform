import Navbar from "./components/Navbar/Navbar";
import Gallary from "./pages/Gallary/Gallary";
import Upload from "./pages/Upload/Upload";
import View from "./pages/View/View";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </div>
  );
}
