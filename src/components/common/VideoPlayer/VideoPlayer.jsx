import PropTypes from 'prop-types';
import React from 'react';

import './VideoPlayer.scss';

const VideoPlayer = props => {
  const {name, previewImage, previewVideoLink, isPlaying} = props;

  return (
    <div className="small-movie-card__image">
      {isPlaying ? (
        <video
          style={{
            objectFit: 'fill',
            width: '100%',
            height: '100%',
          }}
          src={previewVideoLink}
          alt={name}
          autoPlay={isPlaying}
          muted
        />
      ) : (
        <img src={previewImage} alt={name} width="280" height="175" />
      )}
    </div>
  );
};

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
};

export default VideoPlayer;
