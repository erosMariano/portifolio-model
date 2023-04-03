import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import SobreMim from "./components/SobreMim";

interface PropsRouter {
  theme: "light" | "dark";
  setTheme: () => void;
}
export function Router({ theme, setTheme }: PropsRouter) {
  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
      <Route path="/sobre-mim" element={<SobreMim theme={theme} setTheme={setTheme}/>} />

    </Routes>
  );
}
