import PropTypes from 'prop-types';
import React, {useState, useEffect, useRef} from 'react';
import classNames from 'classnames';

import {debounce, formatRunTime} from 'utils/common';
import browserHistory from 'services/browser-history';
import {CONTROLS__DELAY, UI_DELAY, TimeUnit, RunTimeFormat} from 'utils/const';

import Progress from './components/Progress';

import './PlayerControls.scss';

const PlayerControls = props => {
  const {
    name,
    player,
    runTime,
    onPlayPause,
    onToggleFullscreen,
    onRemoteSeekTo,
    isPlaying,
    currentTime,
    screenAgent,
    trueDuration,
  } = props;

  const preDurationInSec = Number(formatRunTime(runTime, TimeUnit.MINUTES));

  const initialDuration = trueDuration || preDurationInSec;
  const [duration, setDuration] = useState(initialDuration);
  const [fullScreen, setFullScreen] = useState(false);
  const estimatedTime = formatRunTime(
    duration - currentTime,
    TimeUnit.SECONDS,
    RunTimeFormat.PLAYER
  );
  const [isMouseActive, setMouseActive] = useState(false);
  const toSetMouseActiveTimer = useRef(null);

  const exitButtonClasses = classNames('player__exit', {
    'player__exit--fullscreen': fullScreen,
    'player__exit--active': fullScreen && isMouseActive,
  });
  const controlsClasses = classNames('player__controls', {
    'player__controls--fullscreen': fullScreen,
    'player__controls--active': fullScreen && isMouseActive,
  });

  const handleMouseMove = () => {
    if (fullScreen) {
      clearTimeout(toSetMouseActiveTimer.current);
      setMouseActive(true);
      toSetMouseActiveTimer.current = setTimeout(() => {
        setMouseActive(false);
      }, CONTROLS__DELAY);
    }
  };

  const handleExit = () => {
    browserHistory.goBack();
  };
  const handleFullScreenMode = () => {
    setFullScreen(!fullScreen);
  };

  const handleFullScreenButton = () => {
    onToggleFullscreen();
  };

  useEffect(() => {
    if (trueDuration) {
      setDuration(trueDuration);
    }
  }, [trueDuration]);

  useEffect(() => () => {
    clearTimeout(toSetMouseActiveTimer.current);
  });

  screenAgent.on('change', handleFullScreenMode);

  return (
    <div
      className="player__wrapper"
      onMouseLeave={() => clearTimeout(toSetMouseActiveTimer)}
      onMouseMove={debounce(handleMouseMove, UI_DELAY)}>
      <button onClick={handleExit} type="button" className={exitButtonClasses}>
        Exit
      </button>

      <div className={controlsClasses}>
        <div className="player__controls-row">
          <Progress
            player={player}
            duration={duration}
            timeStamp={currentTime}
            onRemoteSeekTo={onRemoteSeekTo}
          />
          <div className="player__time-value">{estimatedTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayPause}>
            {isPlaying ? (
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#pause" />
              </svg>
            ) : (
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s" />
              </svg>
            )}

            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>

          <button
            onClick={handleFullScreenButton}
            type="button"
            className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerControls.propTypes = {
  currentTime: PropTypes.number,
  isPlaying: PropTypes.bool,
  name: PropTypes.string,
  onPlayPause: PropTypes.func,
  onRemoteSeekTo: PropTypes.func,
  onToggleFullscreen: PropTypes.func,
  runTime: PropTypes.number,
  /* eslint-disable */
  player: PropTypes.object,
  trueDuration: PropTypes.number,
  screenAgent: PropTypes.object.isRequired,
};

export default PlayerControls;
