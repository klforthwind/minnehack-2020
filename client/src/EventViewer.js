import './App.css';

import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({ }));

function createData(name, field) {
  return { name, field };
}

const event_info = [
  createData('Host', 'Cole Johnson'),
  createData('Location', '1376 Baldur Park Rd  Wayzata, MN 55391'),
  createData('Time', '7:00AM  7/9/2019'),
];

export default function App2Func() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant = "h4">
                Need Help Learning JS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Paper height={500} elevation={2}>
                I need help learning J.S. It confuses me deeply, and the only thing coming from my attempts to learn it is frustration. I need help learning J.S. It confuses me deeply, and the only thing coming from my attempts to learn it is frustration.
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <Button variant="contained" color="primary" fullWidth='true'>
                    Register
                  </Button>
                </Grid>
                <Grid item xs={7}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography align="center">
                        1/3
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <LinearProgress variant="determinate" value={3.0} color="primary" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TableContainer component={ Paper }>
                <Table className={ classes.table } size="small" aria-label="simple table">
                  <TableBody>
                    {event_info.map(row => (
                      <TableRow key={ row.name }>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{ row.field }</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={2}>map</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}