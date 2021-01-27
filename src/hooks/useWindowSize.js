import {useState, useEffect} from 'react';
import {debounce} from 'utils/common';

const debounceDelay = 50;

export default function useWindowSize() {
  const isSSR = typeof window === 'undefined';
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
  }

  useEffect(() => {
    if (!isSSR) {
      window.addEventListener(
        'resize',
        debounce(changeWindowSize, debounceDelay)
      );
    }

    return () => {
      window.removeEventListener(
        'resize',
        debounce(changeWindowSize, debounceDelay)
      );
    };
  }, [isSSR]);

  return windowSize;
}
