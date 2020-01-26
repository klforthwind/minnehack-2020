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
import MapComponent from './components/MapComponent';
const useStyles = makeStyles(theme => ({ }));

function createData(name, field) {
  return { name, field };
}

const event_info = [
  createData('Host', 'Cole Johnson'),
  createData('Location', '1376 Baldur Park Rd  Wayzata, MN 55391'),
  createData('Time', '7:00AM  7/9/2019'),
];

export default function App2Func({ currentUser }) {
  const classes = useStyles();
  let {id} = useParams();

  const [data, setData] = React.useState({ name: "", location: { latitude: 0, longitude: 0 } });
  function createData(name, field) {
    return { name, field };
  }
  const [eventInfo, setEventInfo] = React.useState([]);

  // let data = {name: ""}
  if (data.name == "") {
  api.getEventByID(id).then((res) => {
    if (res.success == true) {
      console.log('something messed up')
    }

    setData(res.data.data);
    console.log(res.data.data)
    let user = {};
    api.getUserByID(res.data.data.creator).then((res) => {
      
      user = res.data.user
      console.log(user)
      setEventInfo([
        createData('Host', user.name),
        createData('Location', user.location.name || "Somewhere"),
        createData('Time', data.date || "Sometime")
      ]
      )
    })

  });
  }

  return (
    <Container maxWidth="md">
      <Grid container direction="row" spacing={1}>
        <Grid container item xs={7}>
          <Grid item xs={12}>
            <Card style={{padding: 20}}>
              <Typography gutterBottom variant="h5" component="h2" >
                { data.name}}
              </Typography>
              <Divider variant="middle" style={{margin: 20}}/>
              <Typography variant="body2" color="textSecondary" component="p" align="left">
                {data.info}
              </Typography>
            </Card>
          </Grid>
        </Grid>
        <Grid container item xs={5} justify="flex-start">
          <Grid item xs={12}>
          <TableContainer component={ Paper }>
                <Table className={ classes.table } size="small" aria-label="simple table">
                  <TableBody>
                    {eventInfo.map(row => (
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
            <Paper style={{padding: "20px"}}>
              <Grid container alignItems="center" spacing={3}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography>
                      {data.current_vol_count}/{data.target_vol_count}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                  <LinearProgress variant="determinate" value={data.current_vol_count/data.target_vol_count * 100} color="primary" />
                  </Grid>
                
                </Grid>
                  
              </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant="contained" color="primary">Apply To Event</Button>
                </Grid>

              </Grid>
              
              
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{padding: "10%", width: "80%"}}>
              {console.log(currentUser)}
              { console.log({ lat: data.location.latitude, lng: data.location.longitude })}
              {/* <MapComponent userLoc={{ lat: currentUser.location !== undefined ? currentUser.location.latitude : 44, lng: currentUser.location != undefined ? currentUser.location.longitude : -93 }} eventLoc={{ lat: data.location.latitude, lng: data.location.lng }}/> */}
              <MapComponent userLoc={{ lat: currentUser.location !== undefined ? currentUser.location.latitude : 44, lng: currentUser.location != undefined ? currentUser.location.longitude : -93 }} eventLoc={{ lat: data.location.latitude, lng: data.location.longitude }}/>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}