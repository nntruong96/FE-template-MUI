import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton, Box } from '@mui/material';
import useMobileScreen from 'hooks/useMobileScreen';
import AddIcon from '@mui/icons-material/Add';
import logoTextWhite from 'images/logoTextWhite.png';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

const Header = ({ isMiniSidebar, toggleMiniSidebar }) => {
  const isMobileScreen = useMobileScreen();
  const onMenuButtonclick = () => {
    return toggleMiniSidebar();
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: '54px',
      }}
    >
      <Box justifyContent="space-between" display="flex" alignItems="center">
        {!isMiniSidebar ? (
          <Box
            sx={{
              width: '150px',
              height: '80px',
              mb: '27px',
            }}
            component="img"
            alt="logo-white"
            src={logoTextWhite}
          />
        ) : (
          <Box
            sx={{
              width: '150px',
              height: '80px',
              mb: '27px',
            }}
          />
        )}

        {!isMobileScreen && (
          <IconButton
            onClick={onMenuButtonclick}
            sx={{
              position: 'absolute',
              right: '-18px',
              top: '10px',
              background: '#292D32',
              '&:hover': {
                opacity: 1,
                background: 'rgb(28, 31, 35)',
              },
            }}
          >
            {isMiniSidebar ? (
              <ArrowCircleRightOutlinedIcon
                sx={{
                  color: 'white',
                }}
              />
            ) : (
              <ArrowCircleLeftOutlinedIcon
                sx={{
                  color: 'white',
                }}
              />
            )}
          </IconButton>
        )}
      </Box>

      <Button variant="contained">
        <AddIcon />

        {isMiniSidebar ? null : 'New Submit'}
      </Button>
    </Box>
  );
};
Header.propTypes = {
  isMiniSidebar: PropTypes.bool,
  onOpenSidebar: PropTypes.func,
  toggleMiniSidebar: PropTypes.func,
};
export default Header;
