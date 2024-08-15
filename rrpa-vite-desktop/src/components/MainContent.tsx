import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { TbHelp, TbLogout } from "react-icons/tb";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 200px;
  width: 70%;
  background-color: #f4f9f6;
  color: #222;

  .help_and_close_links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    position: relative;
    top: 16px;
    left: 16px;

    a, p {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 1.15rem;
      color: #222;
      text-decoration: none;
      cursor: pointer;

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
    text-decoration: none;

    span {
      margin-top: 10px;
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

  @media (max-width: 1010px) {
    #women-pointing-svg,
    #guy-with-pencil-svg {
      display: none;
    }

    #svgs-floor {
      display: none;
    }
  }
`;

declare global {
  interface Window {
    utils: {
      openFile: () => Promise<string[]>;
      closeApp: () => void;
    };
  }
}

export const MainContent = () => {
  const [xlsxTable, setXlsxTable] = useState<string[] | null>(null);
  /* useEffect(() => {
    toast("Seu relatório foi gerado! =D", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }, []); */

  const handleInsertTableClick = async () => {
    const filesPaths: string[] = await window.utils.openFile();

    if (filesPaths && filesPaths.length > 0) {
      setXlsxTable(filesPaths);
      toast("Tabela inserida com sucesso! =D");
    }
  };

  return (
    <>
      <Container>
        <div className="help_and_close_links">
          <a href="">
            Ajuda <TbHelp />
          </a>
          <p onClick={() => window.utils.closeApp()}>
            Fechar aplicativo <TbLogout />
          </p>
        </div>
        <div>
          <div className="insert_table_button" onClick={handleInsertTableClick}>
            <img src="/excel-icon.svg" alt="Ícone de arquivo excel" />
            <p>
              Clique para selecionar e inserir a tabela de registros de ponto
            </p>
          </div>
          <ul>
            {xlsxTable &&
              xlsxTable.map((table, index) => <li key={index}>{table}</li>)}
          </ul>
          <a href="" className="passed_reports_link">
            <span>
              Ver relatórios passados <FaArrowRight />
            </span>
          </a>
        </div>
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
      <StyledToastContainer
        position="top-left"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: #11368e;
  }
  .Toastify__toast-body {
    color: #f4f6f9;
  }

  .Toastify__progress-bar {
    background: #ffde21;
    opacity: 1;
  }

  .Toastify__close-button {
    color: #f4f6f9;
    opacity: 1;
  }
`;
