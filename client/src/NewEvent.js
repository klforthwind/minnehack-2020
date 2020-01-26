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
import api from './api/index'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Navbar from './components/Navbar';
import MapComponent from './components/MapComponent';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { getLatLng } from 'react-places-autocomplete';
import PlacesSearch from './components/PlacesSearch';

export default class NewEvent extends React.Component {

  state = {
    redirect: false,
    date: new Date(),
    name: '',
    info: '',
    volunteerNo: 0,
    locationName: '',
    lat: 0,
    lng: 0,
  }

  handleSubmit = () => {
    let data = this.getData();
    // Do whatever
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
    const {redirect} = this.state;

    if(redirect){return <Redirect to="/dashboard" />}
//  name, location with getLatLng, long, name, creator uid, date unix timestamp,target_vol_count, info
    return (
      <div>
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
          onChange={this.handleChange('target_vol_count')}
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
        <Button onClick={this.handleSubmit} >Submit</Button>
      </div>
    );
  }
}