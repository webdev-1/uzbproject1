
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import { makeSelectLoading, makeSelectUsername, makeSelectLoggedIn, makeSelectMessage} from './selectors'



const key = 'auth';

export function Auth({
  username,
  loading,
//   error,
//   onSubmitForm,
//   onChangeUsername,
   message,
   loggedIn,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {}, []);


  return (
    <div>
        lalaland
    </div>
  );
}

Auth.propTypes = {
  
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
    loading: PropTypes.bool,
    loggedIn: PropTypes.bool,
    user: PropTypes.string,
    message: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({

  username: makeSelectUsername(),
  loading: makeSelectLoading(),
//   error: makeSelectError(),
  message: makeSelectMessage(),
  loggedIn: makeSelectLoggedIn(),

});

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
        dispatch,
    
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
