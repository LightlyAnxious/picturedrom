import React from 'react';

import childrenProptypes from 'proptypes/children.prop';

const UserPage = ({children}) => (
  <div className="user-page main-container">{children}</div>
);

UserPage.propTypes = {
  children: childrenProptypes,
};

export default UserPage;
