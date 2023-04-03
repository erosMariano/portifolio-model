import Header from "../../components/Header";
import TitleSection from "../../components/TitleSection";
import WebDesignItem from "../../components/WebDesignItem";
import { PropsTheme } from "../Home";
import { ContainerMain, Produtos, Container } from "./styles";

function WebDesign({ setTheme, theme }: PropsTheme) {
  const itensWebDesign = [
    {
      img: "/images/logo-e-marcas.png",
      description: "Logotipos e Logomarcas",
    },

    {
      img: "/images/artes-digitais.png",
      description: "Artes digitais para mídias sociais",
    },

    {
      img: "/images/dev-sites.png",
      description: "Desenvolvimento de sites e landing pages.",
    },
  ];

  return (
    <ContainerMain theme={theme}>
      <Header setTheme={setTheme} theme={theme} />
      <Container className="container">
        <TitleSection type="purple" title="Web designs" />
        <p>
          Desenvolvimento de logotipos e identidades visuais, mídias sociais e
          web designs.
        </p>

        <Produtos>
          {itensWebDesign.map((item, index) => (
            <WebDesignItem
              description={item.description}
              urlImg={item.img}
              key={index}
            />
          ))}
        </Produtos>
      </Container>
    </ContainerMain>
  );
}

export default WebDesign;
