import { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight, faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 40px;
  flex: 1;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    color: #d69ad6;
    :hover {
        color: purple;
    }
`;

const SelectedVideo = styled.div`
    color: purple;
    font-style: italic;
    padding-top: 10px;
`;

const dawsonsCreekVideos = [{ id: '7ubOQl3U7yQ', title: 'Trailer' }, { id: 'GucuU_nti24', title: 'Episode 1' }, { id: 'xvdbcZWg8oo', title: 'Episode 2' }, { id: 'GqVBkRCpDfQ', title: 'Episode 3' }, { id: 'VQd8j_LzdWo', title: 'Episode 4' }];

export default function LoveIsBlind() {
  const [selectedVideo, setSelectedVideo] = useState(dawsonsCreekVideos[0]);

  const amountOfVideos = dawsonsCreekVideos.length;
  const currentSelectedVideoIndex = dawsonsCreekVideos.indexOf(selectedVideo);

  const selectNextVideo = () => {
    const newSelectedVideoIndex = amountOfVideos - 1 === currentSelectedVideoIndex ? 0 : currentSelectedVideoIndex + 1;
    setSelectedVideo(dawsonsCreekVideos[newSelectedVideoIndex]);
  };

  const selectLastVideo = () => {
    const newSelectedVideoIndex = currentSelectedVideoIndex === 0 ? amountOfVideos - 1 : currentSelectedVideoIndex - 1;
    setSelectedVideo(dawsonsCreekVideos[newSelectedVideoIndex]);
  };

  return (
      <div>
    <Container>
      <ArrowContainer>
        <StyledIcon icon={faChevronLeft} onClick={() => selectLastVideo()} />
      </ArrowContainer>
      <iframe
        width="800"
        height="520"
        src={`https://www.youtube.com/embed/${selectedVideo.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
        <ArrowContainer>
        <StyledIcon icon={faChevronRight} onClick={() => selectNextVideo()} />
      </ArrowContainer>
    </Container>
    <SelectedVideo>
        {`Dawson's Creek: Sims Edition - ${selectedVideo.title}`}
    </SelectedVideo>
      </div>
  );
}
