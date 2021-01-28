import PropTypes from 'prop-types';
import React from 'react';
import InputRange from 'react-input-range';

import withProgressState from 'hocs/withProgressState';

import 'react-input-range/src/scss/input-range/input-range.scss';
import './Progress.scss';

const DEFAULT_CLASS_NAMES = {
  activeTrack: 'player__progress--active',
  disabledInputRange: 'input-range input-range--disabled',
  inputRange: 'player__time',
  labelContainer: 'input-range__label-container visually-hidden',
  maxLabel: 'visually-hidden',
  minLabel: 'visually-hidden',
  slider: 'player__toggler',
  sliderContainer: '',
  track: 'player__progress',
  valueLabel: 'input-range__label input-range__label--value',
};

const Progress = props => {
  const {minValue, maxValue, value, onChangeValue} = props;

  return (
    <InputRange
      classNames={DEFAULT_CLASS_NAMES}
      minValue={minValue}
      maxValue={maxValue}
      value={value}
      onChange={onChangeValue}
    />
  );
};

Progress.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  value: PropTypes.number,
  onChangeValue: PropTypes.func.isRequired,
};

export default withProgressState(Progress);
