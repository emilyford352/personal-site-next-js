import VideoSlider from '../../components/video-slider';

const loveIsBlindVideos = [
    { id: 'J2aynFxiZ-M', title: 'Trailer' },
    { id: '0AHrn2ICy8M', title: 'Episode 1' },
    { id: 'PCgPauyM23Y', title: 'Episode 2' },
    { id: 'WPgBMUKxSDs', title: 'Episode 3' },
    { id: '-H4y8Unjyok', title: 'Episode 4' },
    { id: 'RaNOHlEadFA', title: 'Episode 5' },
    { id: 'gup1iIezI7M', title: 'Episode 6' },
    { id: 'BIWnkFk84OA', title: 'Episode 7' },
    { id: 'ZKFrtn_thxU', title: 'Episode 8' },
    { id: 'Lz_p2LI9s0Q', title: 'Episode 9' },
    { id: 'Jo-yX2jUxCg', title: 'Episode 10' }
];

export default function LoveIsBlind() {
  return (
    <VideoSlider videos={loveIsBlindVideos} videosDescription={`Love is Blind - Sims Edition`} />
  );
}
