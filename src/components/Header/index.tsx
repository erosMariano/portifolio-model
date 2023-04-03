import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import { HeaderContainer } from "./styles";

interface PropsHome {
  theme: "light" | "dark";
  setTheme: () => void;
}

function Header({ setTheme, theme}: PropsHome) {
  const [checked, setChecked] = useState(true);

  return (
    <HeaderContainer theme={theme}>
      <div className="container">
        <h5><a href="/">Portfólio</a></h5>
        <nav>
          <ul>
            <li>
              <a href="/sobre-mim">Sobre mim</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Web Design</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
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
      </div>
    </HeaderContainer>
  );
}

export default Header;
