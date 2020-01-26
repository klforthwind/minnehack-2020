import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const useStyles = makeStyles(theme => ({ }));

export default function InsetList() {
    const classes = useStyles();
  
    return (
        <Container maxWidth = "md">
            <Grid container direction="row" spacing={2}>
                <Grid item xs={6}>
                    <Card>
                        <CardHeader 
                            title = "Attending" 
                            titleTypographyProps = {{color: "#ffffff"}}
                            style={{ backgroundColor: "#3F51B5" }}
                        />
                        <CardContent>
                            <List style={{width:"100%"}}>
                                <Link to="/explore" style={{ textDecoration: 'none', color:"#000000" }}>
                                    <ListItem button divider={true}>
                                        <Typography align = "left">
                                            Find new events
                                        </Typography>
                                    </ListItem>
                                </Link>
                                <Link to="/event" style={{ textDecoration: 'none', color:"#000000" }}>
                                    <ListItem button>
                                        <Grid container alignItems="center">
                                            <Grid item xs={9}>
                                                <Typography align = "left" >
                                                    This is an event 
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography align = "right" variant="caption" noWrap style={{color:"#777777"}}>
                                                    IN 4 DAYS
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                </Link>
                                <Link to="/event" style={{ textDecoration: 'none', color:"#000000" }}>
                                    <ListItem button>
                                        <Grid container alignItems="center">
                                            <Grid item xs={9}>
                                                <Typography align = "left" >
                                                    This is an event 
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography align = "right" variant="caption" noWrap style={{color:"#777777"}}>
                                                    IN 4 DAYS
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                </Link>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardHeader 
                            title = "Hosting" 
                            style={{ backgroundColor: "#3F51B5" }}
                        />
                        <CardContent>
                            <List style={{width:"100%"}}>
                                <Link to="/create" style={{ textDecoration: 'none', color:"#000000" }}>
                                    <ListItem button divider={true}>
                                        <Typography align = "left" >
                                            Create new events
                                        </Typography>
                                    </ListItem>
                                </Link>
                                <Link to="/event" style={{ textDecoration: 'none', color:"#000000" }}>
                                    <ListItem button>
                                        <Grid container alignItems="center">
                                            <Grid item xs={9}>
                                                <Typography align = "left" >
                                                    This is an event 
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography align = "right" variant="caption" noWrap style={{color:"#777777"}}>
                                                    IN 4 DAYS
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                </Link>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
  }