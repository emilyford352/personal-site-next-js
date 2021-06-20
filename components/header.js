import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import HeaderLink from './header-link';

const StyledHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function Header({ activePath }) {
  return (
    <Container>
      <Link href="/">
        <a>
          <ImageWrapper>
            <Image
              src="/headerImage.png"
              alt="emily mame ford"
              width={300}
              height={150}
            />
          </ImageWrapper>
        </a>
      </Link>
      <StyledHead>
        <HeaderLink activePath={activePath} path="/videos/love-is-blind" pathName="Love is Blind" />
        <HeaderLink activePath={activePath} path="/videos/dawsons-creek" pathName="Dawsons Creek" />
        <HeaderLink activePath={activePath} path="/videos/standup" pathName="Standup & Sketches" />
      </StyledHead>
    </Container>
  );
}
