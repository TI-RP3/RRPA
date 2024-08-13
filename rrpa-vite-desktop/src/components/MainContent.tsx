import { FaArrowRight } from "react-icons/fa";
import { TbHelp, TbLogout } from "react-icons/tb";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 70%;
  min-width: 724px;
  background-color: #f4f9f6;
  color: #222;

  .help_and_close_links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    width: 100%;
    position: fixed;
    top: 16px;
    right: 16px;

    a {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 1.15rem;
      color: #222;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      svg {
        font-size: 1.4rem;
      }
    }
  }

  .insert_table_button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    padding: 24px;
    border: 2px dashed #222;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
    opacity: 0.7;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    img {
      width: 80%;
    }

    p {
      text-align: center;
      font-weight: bold;
    }
  }

  .passed_reports_link {
    width: 250px;
    color: #222;

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 3px solid #222;
      transition: all 0.2s;

      &:hover {
        color: #11368e;
        svg {
          animation: moveOnX 0.5s infinite;
        }
      }
    }
  }

  @keyframes moveOnX {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  #women-pointing-svg,
  #guy-with-pencil-svg {
    position: fixed;
    bottom: 16px;
    height: 400px;
  }

  #women-pointing-svg {
    left: 35%;
  }

  #guy-with-pencil-svg {
    right: -16px;
  }

  #svgs-floor {
    position: fixed;
    border: 2px solid #000;
    width: 65%;
    bottom: 8px;
  }
`;

export const MainContent = () => {
  return (
    <Container>
      <div className="help_and_close_links">
        <a href="">
          Ajuda <TbHelp />
        </a>
        <a href="">
          Fechar aplicativo <TbLogout />
        </a>
      </div>
      <div className="insert_table_button">
        <img src="/excel-icon.svg" alt="Ícone de arquivo excel" />
        <p>Clique para selecionar e inserir a tabela de registros de ponto</p>
      </div>
      <a href="" className="passed_reports_link">
        <span>
          Ver relatórios passados <FaArrowRight />
        </span>
      </a>
      <img
        src="/guy-with-pencil.svg"
        id="guy-with-pencil-svg"
        alt="Homem com lápis cômicamente grande"
      />
      <img
        src="/women-pointing.svg"
        id="women-pointing-svg"
        alt="Mulher apontando"
      />
      <hr id="svgs-floor" />
    </Container>
  );
};
