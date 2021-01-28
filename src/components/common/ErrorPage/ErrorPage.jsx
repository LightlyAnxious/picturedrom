import React from 'react';

import PageFooter from 'components/common/PageFooter';
import PageHeader from '../PageHeader/PageHeader';

const ErrorPage = () => {
  const errorStyle = {
    textAlign: 'center',
  };
  const errorMessage = `
  This page doesn't exist`;

  return (
    <div className="user-page">
      <PageHeader>
        <h1 className="page-title user-page__title">Error</h1>
      </PageHeader>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <p style={errorStyle}>{errorMessage}</p>
      </section>

      <PageFooter />
    </div>
  );
};

export default ErrorPage;
