import React, { Component } from 'react'
import VirtualizedList from '../src/components/VirtualizedList'
import api from '../src/api'

class Explore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    async componentDidMount () {

        api.getEvents().then(res => {
            console.log(res.data)
            this.setState({
                events: res.data.data
            })
        })
    }

    render() {
        const items = []
        console.log(this.state.events)

        for (let i = 0; i < this.state.events.length; i++) {
            console.log(this.state.events[i])
            console.log("awdadawd")
            items.push(<li key={i}>{this.state.events[i].name}</li>)
        }
      
        return (
            <div>
                {items}
                <VirtualizedList />
            </div>

        )
    }
}

export default Explore