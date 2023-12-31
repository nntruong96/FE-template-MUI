import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {
  Table,
  Box,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  Paper,
  Toolbar,
  TableRow,
  Typography,
  Container,
  Tooltip,
  Checkbox,
  Stack,
  IconButton,
  TextField,
  Menu,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import GetAppIcon from '@mui/icons-material/GetApp';
import dayjs from 'dayjs';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const STATUS = { '-1': 'Rejected', 0: 'Pending review', 1: 'Verified' };
function createData(name, subbmitedBy, createdAt, lastUpdated, status) {
  return {
    name,
    subbmitedBy,
    createdAt,
    lastUpdated,
    status,
  };
}

const rows = [
  createData('Cupcake', 'Olivia Rhye', Date.now(), Date.now(), 0),
  createData('Donut', 'Phoenix Baker', Date.now(), Date.now(), 1),
  createData('Eclair', 'Lana Steiner', Date.now(), Date.now(), -1),
  createData('Frozen yoghurt', 'Demi Wilkinson', Date.now(), Date.now(), -1),
  createData('Gingerbread', 'Drew Cano', Date.now(), Date.now(), 0),
  createData('Honeycomb', 'Olivia Rhye', Date.now(), Date.now(), 1),
  createData('Ice cream sandwich', 'Phoenix Baker', Date.now(), Date.now(), 1),
  createData('Jelly Bean', 'Lana Steiner', Date.now(), Date.now(), 0),
  createData('KitKat', 'Phoenix Baker', Date.now(), Date.now(), 1),
  createData('Lollipop', 'Demi Wilkinson', Date.now(), Date.now(), -1),
  createData('Marshmallow', 'Olivia Rhye', Date.now(), Date.now(), 1),
  createData('Nougat', 'Lana Steiner', Date.now(), Date.now(), 1),
  createData('Oreo', 'Phoenix Baker', Date.now(), Date.now(), 1),
];

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Data Submit',
  },
  {
    id: 'subbmitedBy',
    numeric: false,
    disablePadding: false,
    label: 'Submitted by',
  },
  {
    id: 'createdAt',
    numeric: false,
    disablePadding: false,
    label: 'Submitted at',
  },
  {
    id: 'lastUpdated',
    numeric: false,
    disablePadding: false,
    label: 'Last updated',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={{ fontWeight: '500' }}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function DateFromTo({ fromDate, toDate, onChangeFromDate, onChangeToDate }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
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
        <CalendarMonthIcon sx={{ color: 'rgba(0, 0, 0, 0.65)', mr: '12px' }} />
        <Typography color="textSecondary">Submitted at:</Typography>
        <Typography color="textPrimary" fontWeight="600" ml="4px">
          {dayjs(fromDate).format('MMM DD, YYYY')} - {dayjs(toDate).format('MMM DD, YYYY')}
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
        <Stack direction="row">
          <DateCalendar
            defaultValue={dayjs(fromDate)}
            label="From"
            onChange={(newValue) => onChangeFromDate(newValue)}
          />
          <DateCalendar defaultValue={dayjs(toDate)} label="To" onChange={(newValue) => onChangeToDate(newValue)} />
        </Stack>
      </Menu>
    </Stack>
  );
}
DateFromTo.propTypes = {
  fromDate: PropTypes.number,
  toDate: PropTypes.number,
  onChangeFromDate: PropTypes.func.isRequired,
  onChangeToDate: PropTypes.func.isRequired,
};
function EnhancedTableToolbar(props) {
  const { numSelected, fromDate, toDate, onChangeFromDate, onChangeToDate } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Stack direction="row" sx={{ width: '100%' }}>
          <Typography sx={{ flex: '1', fontWeight: 'bold' }} variant="h6" id="tableTitle" component="div">
            Sustainability Data
          </Typography>

          <DateFromTo
            fromDate={fromDate}
            toDate={toDate}
            onChangeFromDate={onChangeFromDate}
            onChangeToDate={onChangeToDate}
          />
          <TextField placeholder="Search..." sx={{ ml: '12px' }} />
        </Stack>
      )}

      {numSelected > 0 ? (
        <Stack direction="row">
          <Tooltip title="Export excel">
            <IconButton>
              <GetAppIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      ) : null}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  fromDate: PropTypes.number,
  toDate: PropTypes.number,
  onChangeFromDate: PropTypes.func,
  onChangeToDate: PropTypes.func,
};

export default function EnhancedTable() {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [date, setDate] = React.useState({
    fromDate: Date.now(),
    toDate: Date.now(),
  });
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );

  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar
            numSelected={selected.length}
            {...date}
            onChangeFromDate={(value) => {
              setDate({ ...date, fromDate: value });
            }}
            onChangeToDate={(value) => {
              setDate({ ...date, toDate: value });
            }}
          />
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
              <EnhancedTableHead
                numSelected={selected.length}
                onSelectAllClick={handleSelectAllClick}
                rowCount={rows.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledTableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <StyledTableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </StyledTableCell>
                      <StyledTableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.subbmitedBy}</StyledTableCell>
                      <StyledTableCell align="left">{dayjs(row.createdAt).format('MMM DD, YYYY')}</StyledTableCell>
                      <StyledTableCell align="left">{dayjs(row.lastUpdated).format('MMM DD, YYYY')}</StyledTableCell>
                      <StyledTableCell align="left">{STATUS[row.status]}</StyledTableCell>
                    </StyledTableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Container>
  );
}
