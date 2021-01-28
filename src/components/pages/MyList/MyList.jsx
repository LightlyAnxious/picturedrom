import React, {memo, useEffect} from 'react';

import {useSelector, shallowEqual, useDispatch} from 'react-redux';

import {fetchFavorite, selectFavorite} from 'features/cinema';

import MovieList from 'components/common/MovieList';
import PageFooter from 'components/common/PageFooter';
import PageHeader from 'components/common/PageHeader/PageHeader';
import UserPage from 'components/common/UserPage';

import './MyList.scss';

const MyList = () => {
  const favorite = useSelector(selectFavorite, shallowEqual);
  const dispatch = useDispatch();

  const emptyListStyle = {
    textAlign: 'center',
  };
  const emptyListMessage = `
  No items on the list yet`;

  useEffect(() => {
    dispatch(fetchFavorite());
  }, [dispatch]);

  return (
    <UserPage>
      <PageHeader>
        <h1 className="page-title user-page__title">My list</h1>
      </PageHeader>

      <section className="catalog main-container">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {favorite ? (
          <MovieList films={favorite} />
        ) : (
          <p style={emptyListStyle}>{emptyListMessage}</p>
        )}
      </section>

      <PageFooter />
    </UserPage>
  );
};

export {MyList};
export default memo(MyList);
