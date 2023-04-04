import Header from "../../components/Header";
import { PropsTheme } from "../Home";
import { ContainerMain, Container, IconsList } from "./styles";

function Contato({ theme, setTheme }: PropsTheme) {
  return (
    <ContainerMain theme={theme}>
      <Header setTheme={setTheme} theme={theme} />

      <Container className="container" theme={theme}>
        <h3>Se gostou do que viu</h3>
        <h2>Entre em contato comigo!</h2>

        <IconsList theme={theme}>
          <div className="containerIcon">
            <div className="blur yellow"></div>
            <a href="">
              <img src="./images/phone.svg" alt="" />
            </a>
          </div>

          <div className="containerIcon">
            <div className="blur pink"></div>
            <a href="">
              <img src="./images/email.svg" alt="" />
            </a>
          </div>
          <div className="containerIcon">
            <div className="blur purple"></div>
            <a href="">
              <img src="./images/whatsapp.svg" alt="" />
            </a>
          </div>
        </IconsList>
      </Container>

      <footer>

        <img src="./images/nathalia-animada.png" className="animada" alt="" />
        <img src="./images/desenho-menina.png" className="desenho" alt="" />

        <h2>Até logo!</h2>
      </footer>
    </ContainerMain>
  );
}

export default Contato;
