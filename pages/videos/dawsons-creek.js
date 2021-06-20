import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function LoveIsBlind() {
  return (
    <Container>
        <iframe
          width="550"
          height="350"
          src="https://www.youtube.com/embed/7ubOQl3U7yQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
    </Container>
  );
}
