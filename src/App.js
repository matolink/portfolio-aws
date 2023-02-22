import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import EnDesarrollo from "./pages/EnDesarrollo"
import Login from "./pages/Login"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/sharyworld" element={<Login />} />
        <Route path = "/landing" element={<Landing />} />
        <Route index element={<EnDesarrollo />} />
      </Routes>
    </BrowserRouter>
  );
}