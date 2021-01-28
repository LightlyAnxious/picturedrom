import PropTypes from 'prop-types';
import React, {useRef} from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';

import filmProptypes from 'proptypes/film.prop';
import withPlayerState from 'hocs/withPlayerState';
import {toggleFullScreen} from 'utils/common';

import PlayerControls from './components/PlayerControls';
import Spinner from './components/Spinner';

const Player = props => {
  const {
    film,
    trueDuration,
    playing,
    loading,
    currentTime,
    onLoad,
    onReady,
    onProgressSetTime,
    onPlayPause,
    onRemoteSeekTo,
  } = props;
  const {name, runTime, videoLink} = film;
  const player = useRef();

  return (
    <>
      <ReactPlayer
        ref={player}
        className="player__video"
        url={videoLink}
        width="100%"
        height="100"
        playing={playing}
        onReady={() => onReady(player)}
        onBuffer={onLoad}
        onProgress={({playedSeconds}) => onProgressSetTime(playedSeconds)}
      />

      <PlayerControls
        name={name}
        player={player}
        runTime={runTime}
        currentTime={currentTime}
        onToggleFullscreen={toggleFullScreen}
        onPlayPause={onPlayPause}
        isPlaying={playing}
        onRemoteSeekTo={onRemoteSeekTo}
        screenAgent={screenfull}
        trueDuration={trueDuration}
      />
      {loading ? <Spinner /> : null}
    </>
  );
};

Player.propTypes = {
  currentTime: PropTypes.number,
  film: filmProptypes,
  trueDuration: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
  onReady: PropTypes.func.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onProgressSetTime: PropTypes.func.isRequired,
  onRemoteSeekTo: PropTypes.func.isRequired,
  playing: PropTypes.bool,
};

export {Player};
export default withPlayerState(Player);
