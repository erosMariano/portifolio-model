import Header from "../../components/Header";
import ProjetoRecente from "../../components/ProjetosRecentesItem";
import TitleSection from "../../components/TitleSection";
import { PropsTheme } from "../Home";
import { Container, ContainerMain, ContainerProjetos } from "./styles";

function Projetos({ setTheme, theme }: PropsTheme) {
  const projetos = [
    {
      title: "Semana Front End - Digital Inovation One",
      subtitle: "Site - Mundo invertido",
      urlDirecionamento: "#",
      urlImg: "/src/assets/mundo-invertido.png",
    },

    {
      title: "NLW Rocketseat - eSports",
      subtitle: "Site - eSports",
      urlDirecionamento: "#",
      urlImg: "/src/assets/e-sports.png",
    },

    {
      title: "Gulliver Traveller - Fiap",
      subtitle: "Projeto da faculdade",
      urlDirecionamento: "#",
      urlImg: "/src/assets/dev-sites.png",
    },
  ];
  return (
    <ContainerMain theme={theme}>
      <Header setTheme={setTheme} theme={theme} />
      <Container className="container">
        <TitleSection title="Projetos recentes" type="purple" />
        <p>
          Projetos de estudos das plataformas Rocketseat, Digital Inovation One
          e Fiap utilizando as ferramentas Html, Css e JavaScrpit.
        </p>

        <ContainerProjetos>
          {projetos.map((item, index) => (
            <ProjetoRecente
              theme={theme}
              subtitle={item.subtitle}
              title={item.title}
              urlDirecionamento={item.urlDirecionamento}
              urlImg={item.urlImg}
              key={index}
            />
          ))}
        </ContainerProjetos>
      </Container>
    </ContainerMain>
  );
}

export default Projetos;

