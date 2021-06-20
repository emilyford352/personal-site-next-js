import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const VideoWrapper = styled.iframe`
    flex: 1;
    padding: 10px;
`;

export default function LoveIsBlind() {
  return (
    <Container>
        <VideoWrapper
            width="550"
            height="350"
            src="https://www.youtube.com/embed/7bc2lU3kUEk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
        <VideoWrapper
            width="550"
            height="350"
            src="https://www.youtube.com/embed/1GOKi5J10No"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
        <VideoWrapper
            width="550"
            height="350"
            src="https://www.youtube.com/embed/l8RBWFFbebs"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
        <VideoWrapper
            width="550"
            height="350"
            src="https://www.youtube.com/embed/4mM379LxrGA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </Container>
  );
}
