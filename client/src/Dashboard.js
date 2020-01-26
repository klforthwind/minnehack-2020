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
import { Route, Link, BrowserRouter as Router, Redirect } from 'react-router-dom'
import api from '../src/api'

const useStyles = makeStyles(theme => ({ }));

export default class InsetList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            attending: [],
            a_items: [],
            hosting: [],
            h_items: []
        }
    }

    async componentDidMount () {

        if (!this.props.signedIn) {
            this.setState({redirect: true})
        }
      

        api.getEventsByCreator(this.props.currentUser._id).then(res => {
            this.setState({
                hosting : res.data.data
            })
            const items = []
            for (let i = 0; i < this.state.hosting.length; i++) {
                let event = this.state.hosting[i]
                const loc = "/event/"+event._id
                items.push(
                    <Link to={loc} style={{ textDecoration: 'none', color:"#000000" }}>
                        <ListItem button>
                            <Grid container alignItems="center">
                                <Grid item xs={9}>
                                    <Typography align = "left" >
                                        {`${event.name}`} 
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography align = "right" variant="caption" noWrap style={{color:"#777777"}}>
                                        {`${event.date}`}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </Link>)
            }
            this.setState({h_items : items})

        })

        api.getEventsByVolunteer(this.props.currentUser._id).then(res => {
            this.setState({
                attending : res.data.data
            })
            const items = []
            for (let i = 0; i < this.state.attending.length; i++) {
                let event = this.state.attending[i]
                const loc = "/event/"+event._id
                items.push(
                        <Link to={loc} style={{ textDecoration: 'none', color:"#000000" }}>
                        <ListItem button>
                            <Grid container alignItems="center">
                                <Grid item xs={9}>
                                    <Typography align = "left" >
                                        {`${event.name}`} 
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography align = "right" variant="caption" noWrap style={{color:"#777777"}}>
                                        {`${event.date}`}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </Link>)
            }
            this.setState({a_items : items})
        })

    }




    render() {
        const {redirect} = this.state;

        if(redirect){return <Redirect to="/" />}

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
                                    {this.state.a_items}
                                    
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
                                    <Link to="/event-creation" style={{ textDecoration: 'none', color:"#000000" }}>
                                        <ListItem button divider={true}>
                                            <Typography align = "left" >
                                                Create new events
                                            </Typography>
                                        </ListItem>
                                    </Link>
                                    {this.state.h_items}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    } 
  
  }