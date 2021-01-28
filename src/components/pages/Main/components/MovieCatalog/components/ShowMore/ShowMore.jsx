import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {VISIBLE_ON_START, VISIBLE_FILMS_COUNT} from 'utils/const';
import {setVisibleFilms} from 'features/cinema';

const ShowMore = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(VISIBLE_ON_START);

  const handleClick = () => {
    const newCount = count + VISIBLE_FILMS_COUNT;
    dispatch(setVisibleFilms(newCount));
    setCount(() => newCount);
    return newCount;
  };

  return (
    <div className="catalog__more">
      <button onClick={handleClick} className="catalog__button" type="button">
        Show more
      </button>
    </div>
  );
};

export {ShowMore};
export default ShowMore;
