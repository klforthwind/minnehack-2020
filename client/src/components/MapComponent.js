import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Circle } from "react-google-maps";

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={9}
            defaultCenter={ { lat: (props.marks[0].lat + props.marks[1].lat) / 2, lng: (props.marks[0].lng + props.marks[1].lng) / 2 }}
            // onClick={e => props.onMapClick(e)}
        >
            {props.marks.map((mark, index) => {
                return (
                <Circle
                    key={index}
                    center={mark}
                    radius={500}
                    options={{
                        strokeColor: "#66009a",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: (mark.lat === props.center.lat && mark.lng === props.center.lng) ? '#ff0000' : `#0000ff`,
                        fillOpacity: 1,
                        zIndex: 1
                    }}
                />)
                })}
        </GoogleMap>
    ))
);

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
             // userLoc: this.props.userLoc,
            // eventLoc: this.props.eventLoc,
            userLoc: this.props.userLoc, 
            eventLoc: this.props.eventLoc,
            marks: []
        };
    }

    componentDidMount () {
        console.log('props')
        console.log(this.props.eventLoc)
        this.setState({ marks: [...this.state.marks, this.state.userLoc, this.state.eventLoc ] })
    }

    render() {
        return (
            <div>
                <Map
                    googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyCeE94p1J7ThaGEnRWHH626jSs72B-vWes
                    "
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onMapClick={this.setMark}
                    marks={[this.state.userLoc, this.props.eventLoc]}
                    center={this.state.userLoc}
                />
            </div>
        );
    }
}

export default MapComponent;