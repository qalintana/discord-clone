import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChanneInfo from '../Channelnfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChanneInfo />
      <ChannelList />
      <UserInfo />
      <UserList />
      <ChannelData />
    </Grid>
  );
};

export default Layout;
