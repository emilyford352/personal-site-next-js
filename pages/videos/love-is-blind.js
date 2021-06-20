import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function LoveIsBlind() {
  return (
    <Container>
      <iframe
        width="800"
        height="520"
        src="https://www.youtube.com/embed/E3h3OzcxwRQ"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Container>
  );
}
