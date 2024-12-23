import React from 'react';

const VideoComponent = ({ src, poster, width = "100%", height = "auto", controls = true, autoplay = false, loop = false, muted = false }) => {
  return (
    <div className="video-container" style={{ maxWidth: width, margin: "0 auto" }} id="home">
      <video
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        style={{ display: 'block', width: '100%', height: 'auto' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
