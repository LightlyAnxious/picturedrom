import React from 'react';
import PromoMovie from 'components/pages/Main/components/PromoMovie';
// import MovieCatalog from '../movie-catalog/movie-catalog';
// import PageFooter from '../page-footer/page-footer';
import CardControls from 'components/common/CardControls';

const Main = () => {
  const renderControls = (isFull, film) => (
    <CardControls isFull={isFull} film={film} />
  );
  return (
    <React.Fragment>
      <PromoMovie renderControls={renderControls} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {/* <MovieCatalog /> */}
        </section>

        {/* <PageFooter /> */}
      </div>
    </React.Fragment>
  );
};

export default Main;
