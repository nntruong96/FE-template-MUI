import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Drawer } from '@mui/material';
import Constants from 'utils/Constants';
import Header from './Header';
import ListItems from './ListItems';
const { SIDEBAR_WIDTH, SIDEBAR_MINI_WIDTH } = Constants;
const drawerWidth = SIDEBAR_WIDTH;

function ResponsiveDrawer(props) {
  const { window, onCloseSidebar, isOpenSidebar, isMiniSidebar, toggleMiniSidebar } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{
        width: {
          sm: isMiniSidebar ? SIDEBAR_MINI_WIDTH : drawerWidth,
        },
        flexShrink: {
          sm: 0,
        },
      }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={isOpenSidebar}
        onClose={onCloseSidebar}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {
            xs: 'block',
            sm: 'none',
          },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: '#292D32',
            padding: '24px',
          },
        }}
      >
        <Header isMiniSidebar={isMiniSidebar} />
        <ListItems isMiniSidebar={isMiniSidebar} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
          },
          '& .MuiDrawer-paper': {
            width: isMiniSidebar ? SIDEBAR_MINI_WIDTH : drawerWidth,
            background: '#292D32',
            px: isMiniSidebar ? '14px' : '24px',
            py: '24px',
            overflow: 'visible',
          },
        }}
        open
      >
        <Header isMiniSidebar={isMiniSidebar} toggleMiniSidebar={toggleMiniSidebar} />
        <ListItems isMiniSidebar={isMiniSidebar} />
      </Drawer>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  onCloseSidebar: PropTypes.func,
  onOpenSidebar: PropTypes.func,
  toggleMiniSidebar: PropTypes.func,
  isOpenSidebar: PropTypes.bool,
  isMiniSidebar: PropTypes.bool,
  window: PropTypes.any,
};

export default ResponsiveDrawer;
