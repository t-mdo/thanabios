import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import UserInfos from '../components/UserInfos';

const CUserInfos = ({ user }) => (
  <UserInfos birthString={moment(user.birthdate).format('LL')} countryString={user.country} />
);

CUserInfos.defaultProps = {};

CUserInfos.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(CUserInfos);
