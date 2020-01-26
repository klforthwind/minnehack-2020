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
import { Route, Link, BrowserRouter as Router, useParams } from 'react-router-dom'
import api from './api/index'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Navbar from './components/Navbar';
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
  let {id} = useParams();
  console.log(id);

  const [data, setData] = React.useState({ name: "" });

  // let data = {name: ""}
  if (data.name == "") {
  api.getEventByID(id).then((res) => {
    if (res.success == true) {
      console.log('something messed up')
    }
    console.log(res.data.data)
    
    setData(res.data.data);
  });
  }

  return (
    <Container maxWidth="md">
      <Grid container direction="row">
        <Grid item container direction="column">
          <Grid item xs={6}>
            <Card variant="outlined" style={{padding: 20}}>
              <Typography gutterBottom variant="h3" component="h2" >
                {data.name}
              </Typography>
              <Divider variant="middle" style={{margin: 20}}/>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.info}
              </Typography>
            </Card>
          </Grid>

        </Grid>
        <Grid  item container direction="column">
          <Grid item xs={6}>
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
        </Grid>
      </Grid>
    </Container>
  );
}