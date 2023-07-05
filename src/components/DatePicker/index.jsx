import * as React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Stack, Menu } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
const _iconStyle = { color: 'rgba(0, 0, 0, 0.65)', mr: '12px' };
function DatePicker({ value, onChange, _icon = _iconStyle, text, format = 'MMM DD, YYYY' }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Stack
        direction="row"
        onClick={handleClick}
        sx={{
          borderRadius: '8px',
          border: '1px solid rgba(0, 0, 0, 0.10)',
          height: '48px',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px 12px',
          borderColor: '',
        }}
      >
        <CalendarMonthIcon sx={_icon} />
        <Typography color="textSecondary">{text ? text + ':' : null}</Typography>
        <Typography color="textPrimary" fontWeight="600" ml="4px">
          {dayjs(value).format(format)}
        </Typography>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <DateCalendar defaultValue={dayjs(value)} label="From" onChange={(newValue) => onChange(newValue)} />
      </Menu>
    </Box>
  );
}
DatePicker.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  _icon: PropTypes.object,
  text: PropTypes.string,
  format: PropTypes.string,
};

export default DatePicker;
