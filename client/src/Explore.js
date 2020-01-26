import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import React, { Component } from 'react'
import api from '../src/api'

class Explore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            creator: "",
            item: []
        }
    }

    async componentDidMount () {

        api.getEvents().then(res => {
            this.setState({
                events: res.data.data,
            })
            const items = []
            const events = this.state.events
            console.log('abc');
            console.log(this.state.events.length)
            for (let i = 0; i < events.length; i++) {
                let event = events[i]
                api.getUserByID(event.creator).then(res => {
                    console.log(res.data.user.name)
                    this.setState({creator : res.data.user.name})
                    const loc = "/event/"+event._id
                    items.push(
                        <Link to={loc} style={{ textDecoration: 'none', color:"#000000" }}>
                        <ListItem button key={i}>
                            <ListItemText style={{paddingLeft:100}} primary={`${event.name}`} />
                            <ListItemText primary={`${event.location.name}`} />
                            <ListItemText primary={`${event.target_vol_count}`} />
                            <ListItemText primary={`${event.date}`} />
                            <ListItemText primary={`${res.data.user.name}`} />
                        </ListItem></Link>)
                })
            }
            this.setState({item : items})
            console.log(this.state.creator)
        })


    }
    
    render() {
        
        return (
            <div>{this.state.item}</div>
        )
    }
}

export default Explore;