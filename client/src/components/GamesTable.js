import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const FIELDS = ['id', 'Date'];

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
        flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: 'auto'
    },
}));

function GamesTable({ games, onClick }) {
  const classes = useStyles();
  const colomns = _.omit(_.head(games), FIELDS);

  return (
    <Grid className={classes.paper} item lg={8} md={10} xs={12}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
                {_.keys(colomns).map((key, idx) => 
                <TableCell key={idx} align="left"><h3>{key}</h3></TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {games.map((row, idx) => 
              <TableRow
                key={idx}
              >
                {_.values(_.omit(row, FIELDS)).map((val, idx2) => 
                  <TableCell key={idx2} component="th" scope="row">{val}</TableCell>)
                }
                <TableCell align="left">
                  <Button 
                    color="primary"
                    onClick={() => onClick(row)}
                  >
                    Game info
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default GamesTable;
