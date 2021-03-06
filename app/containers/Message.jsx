import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'scss/components/message';

const cx = classNames.bind(styles);

const Message = ({message, type}) => {
  return (
    <div className={cx('message',{
      'message--show': message && message.length > 0,
      'message--success': type === 'SUCCESS'
    })}>{message}</div>
  );
};

function mapStateToProps(state) {
  return {...state.message};
}

export default connect(mapStateToProps)(Message);
