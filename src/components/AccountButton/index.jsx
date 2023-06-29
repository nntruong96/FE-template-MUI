import React from 'react';
import { Avatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import avatar from 'images/avatar.png';
import PropTypes from 'prop-types';
import useMobileScreen from 'hooks/useMobileScreen';
export default function AccountButton({ isMiniSidebar }) {
  const isMobileScreen = useMobileScreen();
  return (
    <ListItemButton
      sx={{
        minHeight: '60px',
        color: 'white',
        padding: '12px',
        justifyContent: 'center',
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 'unset',
        }}
      >
        <Avatar alt="avatar" src={avatar} />
      </ListItemIcon>
      {!isMobileScreen && isMiniSidebar ? null : (
        <ListItemText
          sx={{
            ml: '8px',
            '& .MuiListItemText-primary': {
              color: 'white',
            },
            '& .MuiListItemText-secondary': {
              color: '#A0ABBB',
              fontSize: '12px',
            },
          }}
          primary={'David Wills'}
          secondary={'david.wills@envest-global.com'}
        />
      )}
    </ListItemButton>
  );
}

AccountButton.propTypes = {
  isMiniSidebar: PropTypes.any,
};
