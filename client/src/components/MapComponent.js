import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Circle } from "react-google-maps";

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={ { lat: (props.marks[0].lat + props.marks[1].lat) / 2, lng: (props.marks[0].lng + props.marks[1].lng) / 2 }}
            // onClick={e => props.onMapClick(e)}
        >
            {props.marks.map((mark, index) => {
                return (
                <Circle
                    key={index}
                    center={mark}
                    radius={300}
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
    state = {
        // userLoc: this.props.userLoc,
        // eventLoc: this.props.eventLoc,
        userLoc: {lat: 44, lng: -93 }, 
        eventLoc: { lat: 44.1, lng: -93.1 },
        marks: []
    };

    componentDidMount () {
        this.setState({ marks: [...this.state.marks, this.state.userLoc, this.state.eventLoc ] })
    }

    render() {
        const { marks } = this.state;
        return (
            <div>
                <button onClick={this.deleteMark}>DELETE MARKS</button>
                <Map
                    googleMapURL="http://maps.googleapis.com/maps/api/js?key=AIzaSyCeE94p1J7ThaGEnRWHH626jSs72B-vWes
                    "
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px`, width: '400px' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    onMapClick={this.setMark}
                    marks={marks}
                    center={this.state.userLoc}
                />;
            </div>
        );
    }
}

export default MapComponent;