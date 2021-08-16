import { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight, faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import { useMediaQuery } from 'react-responsive';

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

const MobileArrowsWrapper = styled.div`
    display: flex;
`;

export default function VideoSlider({videos = [], videosDescription = `Dawson's Creek: Sims Edition`}) {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const amountOfVideos = videos.length;
  const currentSelectedVideoIndex = videos.indexOf(selectedVideo);

  const selectLastVideo = () => {
    const newSelectedVideoIndex = currentSelectedVideoIndex === 0 ? amountOfVideos - 1 : currentSelectedVideoIndex - 1;
    setSelectedVideo(videos[newSelectedVideoIndex]);
  };

  const selectNextVideo = () => {
    const newSelectedVideoIndex = amountOfVideos - 1 === currentSelectedVideoIndex ? 0 : currentSelectedVideoIndex + 1;
    setSelectedVideo(videos[newSelectedVideoIndex]);
  };

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    if (isMobile) {
    return (
        <div>
          <Container>
            <iframe
                width="800"
                height="520"
                src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
          </Container>
          <SelectedVideo>
            {`${videosDescription} - ${selectedVideo.title}`}
          </SelectedVideo>
          <MobileArrowsWrapper>
              <ArrowContainer>
                <StyledIcon icon={faChevronLeft} onClick={() => selectLastVideo()}/>
              </ArrowContainer>
              <ArrowContainer>
                <StyledIcon icon={faChevronRight} onClick={() => selectNextVideo()}/>
              </ArrowContainer>
          </MobileArrowsWrapper>
        </div>
    );
  } else {
    return (
        <div>
          <Container>
            <ArrowContainer>
              <StyledIcon icon={faChevronLeft} onClick={() => selectLastVideo()}/>
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
              <StyledIcon icon={faChevronRight} onClick={() => selectNextVideo()}/>
            </ArrowContainer>
            </Container>
            <SelectedVideo>
              {`${videosDescription} - ${selectedVideo.title}`}
            </SelectedVideo>
        </div>
    );
  }
}
