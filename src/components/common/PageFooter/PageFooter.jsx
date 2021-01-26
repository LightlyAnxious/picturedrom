import React from 'react';

import {scrollToTop} from 'utils/common';
import Logo from 'components/common/PageHeader/components/Logo';

import './PageFooter.scss';

const PageFooter = () => (
  <footer className="page-footer">
    <Logo onClick={scrollToTop} />

    <div className="copyright">
      <p>© 2021 Picturedrome Ltd.</p>
    </div>
  </footer>
);

export default PageFooter;
