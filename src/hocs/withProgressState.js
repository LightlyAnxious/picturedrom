import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const withProgressState = Component => props => {
  /* eslint-disable */
  const {player, duration, timeStamp, onRemoteSeekTo} = props;
  /* eslint-enable */

  const minValue = 0;
  const maxValue = duration;

  const [value, setValue] = useState(minValue);

  const handleTimeChange = () => {
    setValue(timeStamp);
  };

  useEffect(handleTimeChange, [timeStamp]);

  const handleChangeValue = newValue => {
    setValue(newValue);
    onRemoteSeekTo(player, value);
  };

  return (
    <Component
      {...props}
      minValue={minValue}
      maxValue={maxValue}
      value={value}
      onChangeValue={handleChangeValue}
    />
  );
};

withProgressState.propTypes = {
  duration: PropTypes.number,
  onRemoteSeekTo: PropTypes.func,
  timeStamp: PropTypes.number,
  player: PropTypes.arrayOf(PropTypes.node, PropTypes.object),
};

export default withProgressState;
