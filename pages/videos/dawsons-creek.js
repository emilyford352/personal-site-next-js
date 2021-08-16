import VideoSlider from '../../components/video-slider';

const dawsonsCreekVideos = [
    { id: '7ubOQl3U7yQ', title: 'Trailer' },
    { id: 'GucuU_nti24', title: 'Episode 1' },
    { id: 'xvdbcZWg8oo', title: 'Episode 2' },
    { id: 'GqVBkRCpDfQ', title: 'Episode 3' },
    { id: 'VQd8j_LzdWo', title: 'Episode 4' }
];

export default function DawsonsCreek() {
  return (
    <VideoSlider videos={dawsonsCreekVideos} videosDescription={`Dawson's Creek - Sims Edition`} />
  );
}
