import React, {useState} from 'react';

const withActiveState = Component => props => {
  const [active, setActive] = useState(false);

  return <Component {...props} onActiveToggle={setActive} isActive={active} />;
};

export default withActiveState;
