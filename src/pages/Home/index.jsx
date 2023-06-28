import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Constants from 'utils/Constants';
const drawerWidth = Constants.SIDEBAR_WIDTH;
export default function Index() {
  const [isOpenSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <Header onOpenSidebar={() => setOpenSidebar(true)} />
      <Sidebar onCloseSidebar={() => setOpenSidebar(false)} isOpenSidebar={isOpenSidebar} />
      <Container variant="contained" sx={{ flexGrow: 1, paddingLeft: { sm: drawerWidth + 'px' } }}>
        <Box component="main">Body</Box>
      </Container>
    </>
  );
}
