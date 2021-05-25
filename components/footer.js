import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faSpotify, faYoutube, faTiktok,
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaWrapper = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const SocialMediaIcon = styled(FontAwesomeIcon)`
    font-size: 50px;
    padding: 10px;
`;

const Link = styled.a`
    background-color: inherit;
    color: purple;
    flex: 1;
    text-decoration: none;
    :hover {
        color: lime;
    }
    :visited {
        text-decoration: none;
    }
`;

export default function Footer() {
  return (
    <SocialMediaWrapper>
      <Link href="https://twitter.com/emilymameford" target="_blank">
        <SocialMediaIcon icon={faTwitter} />
      </Link>
      <Link href="https://open.spotify.com/artist/5oKkOdheCKdfkPxsFzgI7C?si=-CAGkimXRdqaadi46l54_Q" target="_blank">
        <SocialMediaIcon icon={faSpotify} />
      </Link>
      <Link href="https://www.youtube.com/c/emilymameford" target="_blank">
        <SocialMediaIcon icon={faYoutube} />
      </Link>
      <Link href="https://www.tiktok.com/@emilymameford" target="_blank">
        <SocialMediaIcon icon={faTiktok} />
      </Link>
    </SocialMediaWrapper>
  );
}
