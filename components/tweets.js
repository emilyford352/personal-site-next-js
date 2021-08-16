// import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Tweet from './tweet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight, faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const TweetContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    height: 250px;
`;

const TweetWrapper = styled.div`
    width: 300px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    color: #d69ad6;
    :hover {
        color: purple;
    }
`;

const IconContainer = styled.div`
    font-size: 30px;
    padding: 10px;
`;

export default function Tweets() {
  const tweetIds = ['1399184688296730625', '1399191406581882880', '1399192265642360834', '1381614150376361986', '1403163873193218054', '1396813485917487104', '1395349116050362373', '1394296081492725766', '1393641955607916551', '1390866592314109953', '1387410040840245251', '1386813341591560195', '1385794072321957889', '1380156214269636626', '1379908905560592400', '1379435481222410243', '1378456724542255113', '1366080920403476484', '1406657608887549961', '1404964802766704640'];
  const [tweetId, setTweetId] = useState(tweetIds[0]);

  const amountOfTweets = tweetIds.length;
  const selectedTweetIndex = tweetIds.indexOf(tweetId);
  const selectLastTweet = () => {
      const newSelectedTweetIndex = selectedTweetIndex === 0 ? amountOfTweets - 1 : selectedTweetIndex - 1;
      setTweetId(tweetIds[newSelectedTweetIndex]);
  };
  const selectNextTweet = () => {
      const newSelectedTweetIndex = amountOfTweets - 1 === selectedTweetIndex ? 0 : selectedTweetIndex + 1;
      setTweetId(tweetIds[newSelectedTweetIndex]);
  };

  console.log(tweetId);
  return (
    <TweetContainer>
      <IconContainer>
          <StyledIcon icon={faChevronLeft} onClick={() => selectLastTweet()} />
      </IconContainer>
      <TweetWrapper>
        <Tweet tweetId={tweetId} />
      </TweetWrapper>
      <IconContainer>
        <StyledIcon icon={faChevronRight} onClick={() => selectNextTweet()} />
      </IconContainer>
    </TweetContainer>
  );
}
