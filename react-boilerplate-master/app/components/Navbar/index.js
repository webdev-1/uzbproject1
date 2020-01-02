/**
 *
 * Navbar
 *
 */

import React, { memo } from 'react';
import { MDCTopAppBar } from '@material/top-app-bar';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Navbar() {
  return (
    <header className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
          <span className="mdc-top-app-bar__title">Title</span>
        </section>
      </div>
    </header>
  );
}

Navbar.propTypes = {};

export default memo(Navbar);
