export function VideoFile({ filePath }) {
  return (
    <video autoPlay loop muted>
      <source type="video/mp4" src={filePath + ".mp4"}></source>
      <source type="video/webm" src={filePath + ".webm"}></source>
      <p>Your browser does not support the video element.</p>
    </video>
  );
}
