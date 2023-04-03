import Header from "../../components/Header";
import NathaliaImg from "../../assets/nathalia.png";
import { ContainerHome, HomeContainer } from "./styles";

export interface PropsTheme {
  theme: "light" | "dark";
  setTheme: () => void;
}

function Home({ theme, setTheme }: PropsTheme) {
  return (
    <HomeContainer theme={theme}>
      <Header setTheme={setTheme} theme={theme} />
      <ContainerHome className="container">
        <div>
          <h2>
            Olá, Amigos! Me chamo <span>Nathália Martins</span>
          </h2>
          <p>
            Sou desenvolvedora <span>Front End</span> e vou falar um pouco sobre
            mim por aqui.
          </p>
        </div>

        <img
          src={NathaliaImg}
          alt="Nathália Martins, desenvolvedora Front-End"
        />
      </ContainerHome>
    </HomeContainer>
  );
}

export default Home;
