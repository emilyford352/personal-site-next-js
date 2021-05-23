import { createGlobalStyle } from 'styled-components';
import Header from '../components/header';

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

export default function Home() {
  return (
    <div>
      <Header />
      <GlobalStyle />
    </div>
  );
}
