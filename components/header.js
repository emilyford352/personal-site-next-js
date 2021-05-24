import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
`;

const StyledHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export default function Header({ activePath }) {
  console.log(activePath === '/' ? 'active' : '');
  return (
    <div>
      <Title>Emily Mame Ford</Title>
      <StyledHead>
        <Link href="/">
          <a className={activePath === '/' ? 'active' : ''}>home</a>
        </Link>
        <Link href="/videos">
          <a className={activePath === '/videos' ? 'active' : ''}>video</a>
        </Link>
      </StyledHead>
    </div>
  );
}
