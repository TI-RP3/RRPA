import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 30%;
  min-width: 300px;
  padding: 0 16px;
  background-color: #11368e;
  color: #f4f9f6;

  img {
    width: 80%;
  }

  div {
    text-align: center;

    h1,
    h2 {
      margin: 0;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.6rem;
    }
  }
`;

export const LeftAside = () => {
  return (
    <Container>
      <img src="/logo-rp3.png" alt="Logo da RP3 Combustíveis" />
      <div>
        <h1>RRPA</h1>
        <h2>Relatório de Registro de Ponto Automático</h2>
      </div>
    </Container>
  );
};
