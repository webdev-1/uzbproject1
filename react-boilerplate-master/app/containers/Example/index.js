/**
 *
 * Example
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Button from '../../components/Button';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectExample from './selectors';
import { getUsers } from './selectors';
import { getData } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Example({users}) {
  useInjectReducer({ key: 'example', reducer });
  useInjectSaga({ key: 'example', saga });

  React.useEffect(()=> {
    console.log(`the Users are ${users}`);
    getData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Example</title>
        <meta name="description" content="Description of Example" />
      </Helmet>
      <div>
        This is coming from the Example component
      </div>
      <Button>
        Clickbait
      </Button>

    </div>
  );
}

Example.propTypes = {
  dispatch: PropTypes.func,
  // user: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  // example: makeSelectExample(),
  users: getUsers(),
});

function mapDispatchToProps(dispatch) {
  return dispatch(getData());
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Example);
