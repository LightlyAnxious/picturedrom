import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, shallowEqual} from 'react-redux';
import {Link} from 'react-router-dom';
import {selectUserState} from 'features/user';
import {AuthorizationStatus} from 'utils/const';

import {ReactComponent as SignInIcon} from 'assets/log-in.svg';
import './UserBlock.scss';

const UserBlock = () => {
  const {
    authStatus = AuthorizationStatus.NOT_AUTHORIZED,
    avatarUrl = '',
    name = '',
  } = useSelector(selectUserState, shallowEqual);
  const isAuth = authStatus === AuthorizationStatus.AUTHORIZED;

  return (
    <div className="user-block">
      {isAuth ? (
        <Link to="/mylist">
          <div className="user-block__avatar">
            <img
              src={avatarUrl}
              alt={`${name} avatar`}
              width="63"
              height="63"
            />
          </div>
        </Link>
      ) : (
        <Link className="user-block__login" to="/login">
          <SignInIcon className="user-block__icon" />
        </Link>
      )}
    </div>
  );
};

UserBlock.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    avatarUrl: PropTypes.string,
    name: PropTypes.string,
    authStatus: PropTypes.string,
  }),
};

export {UserBlock};
export default UserBlock;
