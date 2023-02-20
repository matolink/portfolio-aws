import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import Login from "./pages/Login"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/sharyworld" element={<Login />} />
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}