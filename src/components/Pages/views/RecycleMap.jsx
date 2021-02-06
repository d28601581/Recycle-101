import React, { Component, useState } from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import AfterLogin from '../../Navbar/AfterLogin';
import './styles/RecycleMap.css';

const WrappedMap = withScriptjs(withGoogleMap(props => {
  const [selectedBin, setSelectedBin] = useState(null);

  return (
  <GoogleMap 
    defaultZoom = {11} 
    defaultCenter={{lat: 40.678177, lng: -73.944160}}
    > 
    {props.value.map((bin, index) => {
      return(
        <Marker 
          key={index}
          position={{
            lat: parseFloat(bin.latitude), 
            lng: parseFloat(bin.longitude)
          }}
          onClick={() => {
            setSelectedBin(bin);
          }}
        />
       )
      })}

      {selectedBin && (
        console.log(selectedBin),
        <InfoWindow
          position={{
            lat: parseFloat(selectedBin.latitude), 
            lng: parseFloat(selectedBin.longitude)
          }}
          onCloseClick = {() => {
            setSelectedBin(null);
          }}  
        >
          <div>
          <h2>{selectedBin.park_site_name}</h2>
          <p>{selectedBin.address}</p>
          </div>
        </InfoWindow> 
      )}
  </GoogleMap>
  )
}))
  
export default class RecycleMap extends Component{
  constructor(props){
    super(props);
    this.state = {
      bins: [],
      targetBorough: ''
    }
  }

  componentWillMount(){
    fetch(`https://data.cityofnewyork.us/resource/sxx4-xhzg.json`)
    .then(results => results.json())
    .then(json => {
      this.setState({
        bins: json,
      })
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://data.cityofnewyork.us/resource/sxx4-xhzg.json?borough=${this.state.targetBorough}`)
    .then(results => results.json())
    .then(json => {
      this.setState({
        bins: json,
      })
    })
  };

  handleChange = (event) =>{
    this.setState({
      targetBorough: event.target.value
    })
  };

  render(){
      return (
        <div>
          <AfterLogin />
          <center><h1 classname = "titleMap">RECYCLE BINS IN NEW YORK CITY:</h1></center>
          <div style = {{width: '100vw', height: '150vh'}}>
            <WrappedMap value={this.state.bins}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAkUx4MtvC1Myj874JjO8wA5yzA6BzCPb8"
              loadingElement = {<div style={{ height: `100%` }} />}
              containerElement = {<div style={{ height: `400px` }} />}
              mapElement = {<div style={{ height: `100%` }} />}
            />
            <form onSubmit={this.handleSubmit}>
              <label className = "borough" >Find recycle bins in your borough: </label>
              <select onChange={this.handleChange} className = "inputTwo">
                    <option>Brooklyn</option>
                    <option>Bronx</option>
                    <option>Manhattan</option>
                    <option>Queens</option>
                    <option>Staten Island</option>
              </select>
              <p><button className = "mapButton">Enter</button></p>
            </form>
          </div>
        </div>
      )
  }
}