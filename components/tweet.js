import styled from 'styled-components';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const StyledTweet = styled(TwitterTweetEmbed)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Tweet({ tweetId }) {
  return (
      <StyledTweet
        key={tweetId}
        tweetId={tweetId}
        theme="dark"
        dnt
        width="400"
      />
  );
}
