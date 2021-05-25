import styled from 'styled-components';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export default function Tweet({ tweetId }) {
  return (
    <Container>
      <TwitterTweetEmbed
        tweetId={tweetId}
        theme="dark"
        dnt
        width="250"
      />
    </Container>
  );
}
