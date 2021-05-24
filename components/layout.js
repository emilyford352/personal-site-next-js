import styled, { createGlobalStyle } from 'styled-components';

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
    a {
      padding: 15px;
      color: green;
      text-decoration: none;
      &.active {
        background-color: gray;
      }
    }
    .active {
        background-color: gray;
    }
    a:visited {
        color: inherit;
    }
`;

const Container = styled.div`
  padding: 20px;
  background-color: #d3d3d3;
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
