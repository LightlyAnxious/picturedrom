import React, {useState} from 'react';

const withPlayerState = Component => props => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [trueDuration, setTrueDuration] = useState(0);

  const onPlayPause = () => {
    setPlaying(!playing);
  };

  const onRemoteSeekTo = (playerRef, amount) => {
    playerRef.current.seekTo(amount);
  };

  const handleLoading = () => {
    setLoading(true);
  };

  const handleReady = playerRef => {
    const filmDuration = Math.floor(playerRef.current.getDuration());

    setTrueDuration(() => filmDuration);
    setLoading(false);
  };

  const onProgressSetTime = playedSeconds =>
    setCurrentTime(Math.floor(playedSeconds));

  return (
    <Component
      {...props}
      playing={playing}
      currentTime={currentTime}
      onProgressSetTime={onProgressSetTime}
      onLoad={handleLoading}
      onReady={handleReady}
      onPlayPause={onPlayPause}
      onRemoteSeekTo={onRemoteSeekTo}
      loading={loading}
      trueDuration={trueDuration}
    />
  );
};

withPlayerState.propTypes = {};

export default withPlayerState;
