import React from 'react';
import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import '../stylesheets/user.scss';

const UserProfile = ({ user }) => {
  return (
    <div className='user'>
      <Avatar
        alt={user?.display_name}
        src={user?.images[0]?.url}
        className='user__avatar'
      />
      <span className='user__name'>{user?.display_name}</span>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.object
};

export default UserProfile;
