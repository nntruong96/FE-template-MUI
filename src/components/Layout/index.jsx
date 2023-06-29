import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Constants from 'utils/Constants';
import PropTypes from 'prop-types';
const { SIDEBAR_WIDTH, SIDEBAR_MINI_WIDTH } = Constants;
export default function Index({ children }) {
  const [isOpenSidebar, setOpenSidebar] = useState(false);
  const [isMiniSidebar, setMiniSidebar] = useState(false);
  return (
    <>
      <Header
        onOpenSidebar={() => setOpenSidebar(true)}
        isMiniSidebar={isMiniSidebar}
        toggleMiniSidebar={() => setMiniSidebar(!isMiniSidebar)}
      />
      <Sidebar
        isMiniSidebar={isMiniSidebar}
        isOpenSidebar={isOpenSidebar}
        onCloseSidebar={() => setOpenSidebar(false)}
        toggleMiniSidebar={() => setMiniSidebar(!isMiniSidebar)}
      />
      <Box sx={{ flexGrow: 1, paddingLeft: { sm: (isMiniSidebar ? SIDEBAR_MINI_WIDTH : SIDEBAR_WIDTH) + 'px' } }}>
        {children}
      </Box>
    </>
  );
}
Index.propTypes = {
  children: PropTypes.any,
};
