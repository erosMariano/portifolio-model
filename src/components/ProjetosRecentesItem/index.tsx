import { Container } from "./styles";

interface ProjetoRecenteProps {
  theme: "light" | "dark";
  urlImg: string;
  title: string;
  subtitle: string;
  urlDirecionamento: string;
}
function ProjetoRecente({
  theme,
  subtitle,
  title,
  urlDirecionamento,
  urlImg,
}: ProjetoRecenteProps) {
  return (
    <Container theme={theme}>
      <img src={urlImg} alt={`Imagem referente a: ${title}`} />
      <div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <a href={urlDirecionamento}>Clique aqui para acessar o repositório do projeto</a>
      </div>
    </Container>
  );
}

export default ProjetoRecente;
