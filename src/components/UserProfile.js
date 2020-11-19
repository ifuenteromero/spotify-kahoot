import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import PropTypes from 'prop-types';
import '../stylesheets/user.scss';
import { http } from '../services/httpService';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const { data: _user } = await http.get('/me');
    setUser(_user);
  };

  useEffect(() => {
    getUser();
  }, []);

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
