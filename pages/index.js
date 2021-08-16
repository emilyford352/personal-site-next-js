import styled from 'styled-components';
import Tweets from '../components/tweets';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function Home() {
  return (
    <div>
      <Container>
        <iframe
          width="550"
          height="350"
          src="https://www.youtube.com/embed/7bc2lU3kUEk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />

      </Container>
      <Tweets />
    </div>
  );
}
