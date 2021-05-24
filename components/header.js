import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import HeaderLink from './header-link';

const StyledHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

export default function Header({ activePath }) {
  return (
    <div>
      <Link href="/">
        <a>
          <ImageWrapper>
            <Image
              src="/headerImage.png"
              alt="emily mame ford"
              width={400}
              height={200}
            />
          </ImageWrapper>
        </a>
      </Link>
      <StyledHead>
        <HeaderLink activePath={activePath} path="/videos/love-is-blind" pathName="Love is Blind" />
        <HeaderLink activePath={activePath} path="/videos/dawsons-creek" pathName="Dawsons Creek" />
        <HeaderLink activePath={activePath} path="/videos/podcast-appearances" pathName="Podcast Appearances" />
      </StyledHead>
    </div>
  );
}
