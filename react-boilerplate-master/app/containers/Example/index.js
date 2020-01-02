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

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { getUsers, makeSelectExample } from './selectors';
import { getData } from './actions';
import reducer from './reducer';
import saga from './saga';
import Button from '../../components/Button';
import messages from './messages';

export function Example({users}) {
  useInjectReducer({ key: 'example', reducer });
  useInjectSaga({ key: 'example', saga });

  React.useEffect(() => {
    console.log(`The users are: ${users}`);
    getData();
  }, []);

  // if (users.length === 0){
  //   return (
  //     <div>
  //       <Helmet>
  //         <title>Example</title>
  //         <meta name="description" content="Description of Example" />
  //       </Helmet>
  //       <div>
  //         This is coming from the Example component
  //       </div>
  //       {/* <Button Button /> */}
  //     </div>
  //   );
  // }else {
    return (
      <div>
        <Helmet>
          <title>Example</title>
          <meta name="description" content="Description of Example" />
        </Helmet>
        <div>
          Lol
        </div>
      </div>
    );
  // }
}

Example.propTypes = {
  dispatch: PropTypes.func,
  users: PropTypes.array,
  // users: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
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
