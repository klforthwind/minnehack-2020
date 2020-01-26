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
                            style={{ backgroundColor: "#3F51B5" }}
                        />
                        <CardContent>
                            <List style={{width:"100%"}}>
                                <ListItem button>
                                    <Grid container alignItems="center">
                                        <Grid item xs={9}>
                                            <Typography align = "left" >
                                                This is a lengthy test event
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography align = "right" variant="caption" noWrap style={{color:"#777777"}}>
                                                IN 4 DAYS
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem button>
                                    <Grid container alignItems="center">
                                        <Grid item xs={9}>
                                            <Typography align = "left" >
                                                This is a test event
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography align = "right" variant="caption" noWrap style={{color:"#777777"}}>
                                                IN 7 DAYS
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
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
                                <ListItem button alignItems="right">
                                    <Grid container alignItems="center">
                                        <Grid item xs={9}>
                                            <Typography align = "left" >
                                                This is a lengthy test event
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography align = "right" variant="caption" noWrap style={{color:"#777777"}}>
                                                IN 4 DAYS
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                                <ListItem button minWidth={300}>
                                <Grid container alignItems="center">
                                        <Grid item xs={9}>
                                            <Typography align = "left" >
                                                This is a test event
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography align = "right" variant="caption" noWrap style={{color:"#777777"}}>
                                                IN 7 DAYS
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
  }