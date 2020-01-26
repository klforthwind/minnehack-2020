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
import { Route, Link, BrowserRouter as Router, useParams, Redirect } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Navbar from './components/Navbar';
import MapComponent from './components/MapComponent';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { getLatLng } from 'react-places-autocomplete';
import PlacesSearch from './components/PlacesSearch';
import api from './api/index'
export default class NewEvent extends React.Component {

  state = {
    redirect: false,
    date: new Date(),
    done: false,
    doneEventId:  "",
    name: '',
    info: '',
    volunteerNo: 0,
    locationName: '',
    lat: 0,
    lng: 0,
  }

  handleSubmit = () => {
    let data = this.getData();
    // data.date = data.date.getTime()/1000
    data.date = new Date(data.date).getTime()/1000
    data.current_vol_count = 0
    data.creator = this.props.currentUser._id;
    // Do whatever
    console.log(data)
    api.createEvent(data).then((res) => {
      console.log(res)
      if (res.data.success) {
       this.setState({done:true, doneEventId: res.data.event._id})
      }
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  getData = () => {
    let data = {
      date: this.state.date,
      name: this.state.name,
      info: this.state.info,
      target_vol_count: this.state.volunteerNo,
      location: {
        latitude: this.state.lat,
        longitude: this.state.lng,
        name: this.state.locationName
      }
    }
    console.log(data)
    return data;
  }

  handleChange = prop => event => {
    this.setState({ ...this.state, [prop]: event.target.value });
    console.log(this.state)
  };

  setLatLngName = (lat, lng, name) => {
    this.setState({ ...this.state, lat, lng, name});
  }

  handleDateChange = (event) => {
    this.setState({ selectedDate: event.target.value })
    console.log(event.target.value);
  } 

  componentDidMount() {
      // let data = {name: ""}
      console.log(this.props);
    if (!this.props.signedIn) {
      this.setState({redirect: true})
    }
  }

  render() {
    const {redirect, done} = this.state;

    if(redirect){return <Redirect to="/dashboard" />}
    if(redirect){return <Redirect to="/dashboard" />}
    if (done) {
      return <Redirect to={`/event/${this.state.doneEventId}`} />
    }
//  name, location with getLatLng, long, name, creator uid, date unix timestamp,target_vol_count, info
    return (
      <Container maxWidth="md">
        <Typography variant="h5" align="left" >
          Creating an Event...
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="eventName"
          label="Event Name"
          type="name"
          fullWidth
          onChange={this.handleChange('name')}
        />
        <TextField
          autoFocus
          margin="dense"
          id="volunteerNo"
          label="Volunteer Target No."
          type="volunteerNo"
          fullWidth
          onChange={this.handleChange('volunteerNo')}
          />
        <TextField
          autoFocus
          margin="dense"
          id="info"
          label="Details"
          type="info"
          fullWidth
          onChange={this.handleChange('info')}
          />
        <PlacesSearch setLatLngName={this.setLatLngName} />
        <form noValidate>
          <TextField
            display="flex"
            flexDirection="row"
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            onChange={this.handleChange('date')}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Button style={{margin:"10px"}} variant="contained" color="primary" onClick={this.handleSubmit} >Submit</Button>
      </Container>
    );
  }
}
