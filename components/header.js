import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
`;

const StyledHead = styled.div`
    width: 100%;
    display: flex;
    background-color: black;
    justify-content: center;
`;

const StyledLink = styled(Link)`
    flex: 1;
    padding: 20px;
`;

export default function Header() {
  return (
    <div>
      <Title>Emily Mame Ford</Title>
      <StyledHead>
        <StyledLink href="/videos/first-video">
          <a>this page!</a>
        </StyledLink>
      </StyledHead>
    </div>
  );
}
