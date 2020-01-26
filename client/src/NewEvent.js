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

export default class NewEvent extends React.Component {

  state = {
    redirect: false
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

    return <div />
  }
}