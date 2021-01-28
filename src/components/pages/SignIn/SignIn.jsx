import React, {createRef} from 'react';
import {useDispatch} from 'react-redux';

import {redirectToRoute, login} from 'features/user';
import PageFooter from 'components/common/PageFooter';
import PageHeader from 'components/common/PageHeader';

import './SignIn.scss';

const SignIn = () => {
  const dispatch = useDispatch();
  const emailRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = evt => {
    evt.preventDefault();

    if (emailRef && passwordRef) {
      const userLogin = emailRef.current.value;
      const password = passwordRef.current.value;

      dispatch(
        login({
          login: userLogin,
          password,
        })
      );
      dispatch(redirectToRoute('/'));
    }
  };
  /* eslint-disable */
  return (
    <div className="user-page main-container">
      <PageHeader>
        <h1 className="page-title user-page__title">Sign in</h1>
      </PageHeader>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password">
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <PageFooter />
    </div>
  );
};
/* eslint-enable */

export {SignIn};
export default SignIn;
