import * as React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import useMobileScreen from 'hooks/useMobileScreen';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
function ListItemC(props) {
  const { isMiniSidebar, primary, secondary, active, icon: Icon, route } = props;
  const isMobileScreen = useMobileScreen();
  return (
    <ListItem key={primary} disablePadding component={Link} to={route}>
      <ListItemButton
        sx={{
          minHeight: '60px',
          color: 'white',
          padding: '12px',
          justifyContent: 'center',
          background: active ? 'rgba(255, 255, 255, 0.20)' : null,
          borderRadius: '4px',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.20)',
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 'unset',
          }}
        >
          <Icon
            sx={{
              color: 'white',
            }}
          />
          {isMiniSidebar && secondary ? (
            <CircleIcon sx={{ color: '#2BB673', width: '10px', height: '10px', position: 'absolute', right: '28px' }} />
          ) : null}
        </ListItemIcon>

        {!isMobileScreen && isMiniSidebar ? null : (
          <ListItemText
            sx={{
              ml: '8px',
              display: 'flex',
              '& .MuiListItemText-primary': {
                flex: 1,
              },
              '& .MuiListItemText-secondary': {
                background: '#2BB673',
                color: 'white',
                px: '12px',
                borderRadius: '4px',
                py: '2px',
              },
            }}
            primary={primary}
            secondary={secondary}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
}

ListItemC.propTypes = {
  secondary: PropTypes.string,
  primary: PropTypes.string,
  isMiniSidebar: PropTypes.any,
  icon: PropTypes.any,
  active: PropTypes.bool,
  route: PropTypes.string,
};

export default ListItemC;
