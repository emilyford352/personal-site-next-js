// import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Tweet from './tweet';

export default function Tweets() {
  const tweetIds = ['1381614150376361986', '1396813485917487104'];
  // const tweetIds = ['1381614150376361986', '1396813485917487104', '1395349116050362373', '1394296081492725766', '1393641955607916551', '1390866592314109953', '1387410040840245251', '1386813341591560195', '1385794072321957889', '1380239868245205004', '1380156214269636626', '1379908905560592400', '1379435481222410243', '1378456724542255113', '1366080920403476484'];
  const [tweetIndex, setTweetIndex] = useState(0);
  return (
    <div>
      <Tweet tweetId={tweetIds[tweetIndex]} />
    </div>
  );
}
