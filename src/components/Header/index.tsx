import { useEffect, useState } from "react";
import Switch from "react-switch";
import { HeaderContainer } from "./styles";

interface PropsHome {
  theme: "light" | "dark";
  setTheme: () => void;
}

function Header({ setTheme, theme }: PropsHome) {
  const [checked, setChecked] = useState(true);
  const [activeNav, setActiveNav] = useState(false);

  function handleActiveMenu(){
    setActiveNav(!activeNav)
  }
  return (
    <HeaderContainer theme={theme} activeNav={activeNav}>
      <div className="container">
        <h5>
          <a href="/">Portfólio</a>
        </h5>
        <nav>
          <ul>
            <li>
              <a href="/sobre-mim">Sobre mim</a>
            </li>
            <li>
              <a href="web-design">Web Design</a>
            </li>
            <li>
              <a href="/projetos">Projetos</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </nav>
        <div className="menuContainer">
          <label onClick={setTheme}>
            <Switch
              onChange={setChecked}
              checked={checked}
              onColor="#FFA9DC"
              offColor="#A750DB"
              onHandleColor="#fff"
              offHandleColor="#07091B"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 0px 0px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0.2)"
            />
          </label>
          <img src="./images/menu.svg" alt="" className="menu" onClick={handleActiveMenu}/>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
