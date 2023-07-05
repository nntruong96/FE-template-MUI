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
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import GetAppIcon from '@mui/icons-material/GetApp';

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

const RATING = [
  {
    label: 'Product Designer',
    icon: '',
  },
  {
    label: 'UX Designer',
    icon: '',
  },
  {
    label: 'QA Engineer',
    icon: '',
  },
  {
    label: 'Frontend Developer',
    icon: '',
  },
];
function createData(name, email, avatar, status, role, teams) {
  return {
    name,
    email,
    avatar,
    status,
    role,
    teams,
  };
}

const rows = [
  createData(
    'Bambo',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
  createData(
    'Bambo 1',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
  createData(
    'Bambo 2',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
  createData(
    'Bambo 3',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
  createData(
    'Bambo 4',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
  createData(
    'Bambo 5',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
  createData(
    'Bambo 6',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
  createData(
    'Bambo 7',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
  createData(
    'Bambo 8',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
  createData(
    'Bambo 9',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
  createData(
    'Bambo 10',
    'email@gmail.com',
    'https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg',
    1,
    1,
    ['Design', 'Product', 'Marketing']
  ),
];

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Airline',
  },
  {
    id: 'Status',
    numeric: false,
    disablePadding: false,
    label: 'Aggregate Score',
  },
  {
    id: 'Role',
    disablePadding: false,
    label: 'Rating',
  },
  {
    id: 'Email address',
    numeric: false,
    disablePadding: true,
    label: 'Airline',
  },
  {
    id: 'Teams',
    numeric: false,
    disablePadding: false,
    label: 'Aggregate Score',
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

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

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
        <Stack direction="row" sx={{ width: '100%', flexWrap: 'wrap' }}>
          <Typography sx={{ flex: '1', fontWeight: 'bold' }} variant="h6" id="tableTitle" component="div">
            Team members
          </Typography>

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
};

export default function UserTable() {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
          <EnhancedTableToolbar numSelected={selected.length} />
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
                      <StyledTableCell align="left">{row.status}</StyledTableCell>
                      <StyledTableCell align="left">{row.role}</StyledTableCell>
                      <StyledTableCell align="left">{row.email}</StyledTableCell>
                      <StyledTableCell align="left">{JSON.stringify(row.teams)}</StyledTableCell>
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
