import * as React from 'react';
import { Box, Typography, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import Constants from 'utils/Constants';
import logo from 'images/fullLogoBlackText.png';
import useMobileScreen from 'hooks/useMobileScreen';
const { SIDEBAR_WIDTH, SIDEBAR_MINI_WIDTH } = Constants;
export default function Header({ onOpenSidebar, isMiniSidebar }) {
  const isMobileScreen = useMobileScreen();
  const onMenuButtonclick = () => {
    if (isMobileScreen) {
      return onOpenSidebar();
    }
  };
  return (
    <Box sx={{ height: 'auto' }}>
      <Box position="static">
        <Toolbar>
          <Box
            sx={{ width: isMiniSidebar ? SIDEBAR_MINI_WIDTH : SIDEBAR_WIDTH, display: { xs: 'none', sm: 'block' } }}
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            onClick={onMenuButtonclick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          ></Typography>
          <Box component="img" src={logo} alt="logo-full" />
        </Toolbar>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  onOpenSidebar: PropTypes.func,
  toggleMiniSidebar: PropTypes.func,
  isMiniSidebar: PropTypes.bool,
};
