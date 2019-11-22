import React, { Component } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: 600,
      height: 500,
      latitude: 40.7135,
      longitude: -74.0066,
      zoom: 13.5,
      pitch: 45,
      bearing: -17.6
    }
  };

  mapRef = React.createRef();

  componentDidMount() {
    const map = this.mapRef.current.getMap();
    map.on("load", function() {
      // Insert the layer beneath any symbol layer.
      var layers = map.getStyle().layers;

      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer(
        {
          id: "3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "height"],
              0,
              "hsl(191, 77%, 47%)",
              100,
              "hsl(0, 63%, 42%)"
            ],

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"]
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"]
            ],
            "fill-extrusion-opacity": 0.7
          }
        },
        labelLayerId
      );
    });
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        ref={this.mapRef}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiZGVlYXllZW4iLCJhIjoiY2prdTN5Y2FzMDM4NDN3bXFpanU1czlsbSJ9.P5c7yYyqwVCc_r0ECm9A8Q"
        }
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDkG702RFFEEm08CP87sLK_amm-ru_eUVs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: 40.7135, lng: -74.0066 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default class MapExample extends Component {
  render() {
    return (
      <>
        <div>
          <div style={{ height: "500px", width: "600px" }}>
            <MyFancyComponent />
          </div>
          <h1 class="mt-5">Google Maps</h1>
        </div>
        <div>
          <div style={{ height: "500px", width: "600px" }}>
            <Map />
          </div>
          <h1 class="mt-5">Mapbox</h1>
        </div>
      </>
    );
  }
}
