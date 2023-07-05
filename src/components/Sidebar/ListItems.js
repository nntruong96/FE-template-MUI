import * as React from 'react';
import PropTypes from 'prop-types';
import { List, Box, Divider, Button } from '@mui/material';
// import useMobileScreen from 'hooks/useMobileScreen';
import GridViewIcon from '@mui/icons-material/GridView';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountButton from 'components/AccountButton';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ListItem from './ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { ROUTES } from 'routes/AppRoute';
import { useLocation } from 'react-router';
function ListItems(props) {
  const { isMiniSidebar } = props;
  const { pathname } = useLocation();
  const currentRoute = pathname.split('/')[1];
  const ITEMS = [
    {
      primary: 'Overview',
      onClick: () => {},
      icon: GridViewIcon,
      route: ROUTES.main,
    },
    {
      primary: 'Sustainability Data',
      onClick: () => {},
      icon: DescriptionOutlinedIcon,
      route: ROUTES.sustainability,
    },
    {
      primary: 'Reports',
      onClick: () => {},
      icon: InsertChartOutlinedIcon,
      route: ROUTES.reports,
    },
    {
      primary: 'Airline Rating',
      onClick: () => {},
      icon: TrendingUpIcon,
      route: ROUTES.airlineRating,
    },
    {
      primary: 'Users',
      onClick: () => {},
      icon: GroupOutlinedIcon,
      route: ROUTES.users,
    },
  ];
  const ITEMS2 = [
    {
      primary: 'Notifications',
      secondary: '10',
      onClick: () => {},
      icon: NotificationsNoneOutlinedIcon,
      route: ROUTES.notifications,
    },
    {
      primary: 'Settings',
      onClick: () => {},
      icon: SettingsOutlinedIcon,
      route: ROUTES.settings,
    },
  ];
  return (
    <>
      <List>
        {ITEMS.map((item, index) => {
          return (
            <ListItem
              key={index}
              {...item}
              isMiniSidebar={isMiniSidebar}
              active={currentRoute === item.route}
            ></ListItem>
          );
        })}
      </List>
      <Box flex={1}></Box>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.80)' }} />
      <List>
        <AccountButton isMiniSidebar={isMiniSidebar} />
        {ITEMS2.map((item, index) => {
          return (
            <ListItem
              key={index}
              {...item}
              isMiniSidebar={isMiniSidebar}
              active={currentRoute === item.route}
            ></ListItem>
          );
        })}
      </List>
      <Button variant="contained" color="secondary">
        {isMiniSidebar ? null : 'Log out'}
        <LogoutIcon sx={{ ml: '4px' }} />
      </Button>
    </>
  );
}

ListItems.propTypes = {
  onCloseSidebar: PropTypes.func,
  onOpenSidebar: PropTypes.func,
  toggleMiniSidebar: PropTypes.func,
  isOpenSidebar: PropTypes.bool,
  isMiniSidebar: PropTypes.bool,
  window: PropTypes.any,
};

export default ListItems;
