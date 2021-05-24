import styled, { createGlobalStyle } from 'styled-components';

// background-image: url("../static/images/background.png");

const GlobalStyle = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
    }
    * {
      box-sizing: border-box;
    }
`;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  text-align: center;
`;

export default function Layout({ children }) {
  return (
    <Container>
      {children}
      <GlobalStyle />
    </Container>
  );
}
