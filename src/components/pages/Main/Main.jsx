import React from 'react';

import PromoMovie from 'components/pages/Main/components/PromoMovie';
import CardControls from 'components/common/CardControls';
import PageFooter from 'components/common/PageFooter';
import MovieCatalog from './components/MovieCatalog';

const Main = () => {
  const renderControls = (isFull, film) => (
    <CardControls isFull={isFull} film={film} />
  );
  return (
    <React.Fragment>
      <PromoMovie renderControls={renderControls} />
      <div className="page-content">
        <div className="main-container">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <MovieCatalog />
          </section>
        </div>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

export default Main;
