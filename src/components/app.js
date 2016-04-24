import React, { PropTypes } from 'react';
import Header from './header';
import Footer from './footer';

require('styles/style.scss');

const app = function ({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        {children}
      </div>
      <Footer />
    </div>
  );
};
app.propTypes = {
  children: PropTypes.object.isRequired
};

export default app;
