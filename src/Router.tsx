import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import SobreMim from "./pages/SobreMim";
import WebDesign from "./pages/WebDesign";

interface PropsRouter {
  theme: "light" | "dark";
  setTheme: () => void;
}
export function Router({ theme, setTheme }: PropsRouter) {
  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
      <Route path="/sobre-mim" element={<SobreMim theme={theme} setTheme={setTheme}/>} />
      <Route path="/web-design" element={<WebDesign theme={theme} setTheme={setTheme}/>} />
      <Route path="/projetos" element={<Projetos theme={theme} setTheme={setTheme}/>} />
    </Routes>
  );
}
