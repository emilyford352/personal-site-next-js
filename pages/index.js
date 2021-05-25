import Tweets from '../components/tweets';

export default function Home() {
  return (
    <div>
      <div className="video-responsive">
        <iframe
          width="450"
          height="250"
          src="https://www.youtube.com/embed/7bc2lU3kUEk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <Tweets />
    </div>
  );
}
