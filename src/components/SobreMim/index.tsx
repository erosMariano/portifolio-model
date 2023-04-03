import Header from "../Header";
import { PropsTheme } from "../Home";
import { SobreMimContainer, MainContainer, ContainerCEP } from "./styles";
import NathaliaSobreMim from "../../assets/sobre-mim.png";
import { useState } from "react";

interface CepProps {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  localidade: string;
  logradouro: string;
  uf: string;
}
function SobreMim({ theme, setTheme }: PropsTheme) {
  const [cepInformation, setCepInformation] = useState<CepProps>({
    bairro: "",
    cep: "",
    complemento: "",
    ddd: "",
    localidade: "",
    logradouro: "",
    uf: "",
  });

  async function getCepInformation() {
    const result = await fetch("https://viacep.com.br/ws/06931740/json/");
    const data = await result.json();
    setCepInformation(data);
  }
  return (
    <MainContainer theme={theme}>
      <Header setTheme={setTheme} theme={theme} />
      <SobreMimContainer theme={theme} className="container">
        <h2>Sobre mim</h2>

        <h3>Confira meu CEP!</h3>

        <ContainerCEP theme={theme}>
          <div className="titles">
            <h4>Meu CEP: 06931740</h4>
            <button onClick={() => getCepInformation()}>Pesquisar CEP</button>
          </div>

          {cepInformation.bairro !== "" ? (
            <table>
              <tr>
                <th>bairro</th>
                <th>cep</th>
                <th>complemento</th>
                <th>ddd</th>
                <th>localidade</th>
                <th>logradouro</th>
                <th>uf</th>
              </tr>
              <tr>
                <td>
                  {cepInformation.bairro !== ""
                    ? cepInformation.bairro
                    : "Bairro não encontrado"}
                </td>
                <td>
                  {cepInformation.cep !== ""
                    ? cepInformation.cep
                    : "CEP não encontrado"}
                </td>
                <td>
                  {cepInformation.complemento !== ""
                    ? cepInformation.complemento
                    : "Complemento não encontrado"}
                </td>
                <td>
                  {cepInformation.ddd !== ""
                    ? cepInformation.ddd
                    : "DDD não encontrado"}
                </td>
                <td>
                  {cepInformation.localidade !== ""
                    ? cepInformation.localidade
                    : "Localidade não encontrado"}
                </td>
                <td>
                  {cepInformation.logradouro !== ""
                    ? cepInformation.logradouro
                    : "Logradouro não encontrado"}
                </td>
                <td>
                  {cepInformation.uf !== ""
                    ? cepInformation.uf
                    : "UF não encontrado"}
                </td>
              </tr>
            </table>
          ) : (
            <></>
          )}
        </ContainerCEP>

        <img
          src={NathaliaSobreMim}
          alt="Desenvolvedora Front-End Nathália Martins"
          className="destaqueImg"
        />
        <p>
          Residente em São Paulo/SP, cursando ensino superior em Sistemas para
          internet pela Faculdade de Informática e Administração Paulista
          (FIAP). Experiência profissional como estagiária na Bertholdo -
          E-commerce Profissional, atuando na area de Front End e suporte nivel
          1. Também atuei como designer e mídias sociais na empresa Nutrimix no
          período de 6 meses.{" "}
        </p>

        <p>
          Atuo como freelancer realizando trabalhos como social media e Front
          End Developer, desenvolvo sites e web design para amigos e clientes
          como forma de colocar em prática todo conteúdo que aprendo nos estudos
          pessoais. Como social media desenvolvo artes digitais e engajamento de
          redes sociais para divulgações de microempreendedores locais.
        </p>
      </SobreMimContainer>
    </MainContainer>
  );
}

export default SobreMim;
