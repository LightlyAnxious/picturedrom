import React, {useState, useLayoutEffect, useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {CSSTransition} from 'react-transition-group';

import {ReactComponent as ArrowIcon} from 'assets/icons/down-arrow.svg';

import styles from './Select.module.scss';
import dropTransition from './transitions/drop.module.scss';

const cx = classNames.bind(styles);

const Select = ({
  options = [],
  classes = '',
  optionItem,
  startValue = '',
  onClick,
}) => {
  const [available, setAvailable] = useState([]);
  const [current, setCurrent] = useState(startValue);
  const [isOpened, setOpened] = useState(false);
  const animationDuration = 250;

  useEffect(() => setCurrent(options[0]), [options]);

  /* eslint-disable */
  useLayoutEffect(() => {
    const optionsWithoutCurrent = options.filter(
      (option, index) => option !== current
    );
    setAvailable(optionsWithoutCurrent);
  }, [current]);
  /* eslint-enable */

  const handleClick = genre => {
    if (isOpened) {
      if (genre !== current) {
        onClick(genre);
        setCurrent(genre);
      }
      setOpened(!isOpened);
    }

    if (!isOpened) {
      setOpened(!isOpened);
    }
  };
  const Component = optionItem;
  const selectClasses = cx('select', classes, {expanded: isOpened});

  const renderSelect = () => (
    <div className={selectClasses} role="listbox" aria-expanded={isOpened}>
      <ArrowIcon className={styles.arrow} />
      <Component
        onClick={() => handleClick(current)}
        className={`${styles.option} ${styles.current}`}
        aria-selected="true"
        role="option">
        {current}
      </Component>

      {/* {isOpened && (
        <ul className={styles.list}>
          {available.map(option => {
            const optionClasses = cx('option', {
              selected: option === current,
            });
            return (
              <li className={styles.item} key={option}>
                <Component
                  onClick={() => handleClick(option)}
                  className={optionClasses}
                  role="option"
                  aria-selected="false">
                  {option}
                </Component>
              </li>
            );
          })}
        </ul>
      )} */}
      <CSSTransition
        in={isOpened}
        timeout={animationDuration}
        classNames={dropTransition}
        unmountOnExit>
        <ul className={styles.list}>
          {available.map(option => {
            const optionClasses = cx('option', {
              selected: option === current,
            });
            return (
              <li className={styles.item} key={option}>
                <Component
                  onClick={() => handleClick(option)}
                  className={optionClasses}
                  role="option"
                  aria-selected="false">
                  {option}
                </Component>
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    </div>
  );

  return options.length ? renderSelect() : null;
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  startValue: PropTypes.number,
};

export default Select;
