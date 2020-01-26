import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class PlacesSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '', location: '', textName: "" };
  }

  handleChange = address => {
    this.setState({ address });
  };

  // handleTextChange = (event) => {
  //   console.log('l');
  //   this.setState({ textName: event.target.value });
  //   console.log(event.target.value);
  //   console.log('here');
  // }

  handleTextChange = () => {
    console.log('here')
    // console.log(e.target.value)
  }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success');
        this.setState({ location: latLng });
        this.props.setLatLngName(this.state.location.lat, this.state.location.lng, this.state.textName);
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              autoFocus
              margin="dense"
              id="location"
              label="Your Location"
              type="location"
              fullWidth
              onChange={this.handleTextChange}
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            //   onChange={handleChange('location')}
            />
            {/* <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            /> */}
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <Button fullWidth style={{ backgroundColor: '#d3d3d3'}}>{suggestion.description}</Button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}