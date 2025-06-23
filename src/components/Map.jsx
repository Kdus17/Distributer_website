import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const destination = [9.00521778764852, 38.80887490601392];

const userIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const destinationIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const FetchRoute = ({ start, destination }) => {
  const map = useMap();
  const [routeCoords, setRouteCoords] = useState([]);

  useEffect(() => {
    if (!start) return;

    const fetchRoute = async () => {
      try {
        const res = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${destination[1]},${destination[0]}?overview=full&geometries=geojson`
        );
        const data = await res.json();

        if (data.routes && data.routes.length > 0) {
          const coords = data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
          setRouteCoords(coords);
          map.fitBounds(coords, { padding: [50, 50] });
        }
      } catch (err) {
        console.error('Error fetching route:', err);
      }
    };

    fetchRoute();
  }, [start, destination, map]);

  if (!routeCoords.length) return null;

  return (
    <>
      <Polyline positions={routeCoords} color="#4285F4" weight={6} opacity={0.9} smoothFactor={1} />
      <Marker position={start} icon={userIcon}>
        <Popup>Your Location</Popup>
      </Marker>
      <Marker position={destination} icon={destinationIcon}>
        <Popup>Destination</Popup>
      </Marker>
    </>
  );
};

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [showRoute, setShowRoute] = useState(false);

  useEffect(() => {
    if (showRoute) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          setUserLocation([latitude, longitude]);
        },
        err => {
          console.error('Error fetching location', err);
          setUserLocation(null);
        }
      );
    } else {
      setUserLocation(null);
    }
  }, [showRoute]);

  const openGoogleMapsSearch = () => {
    const url = 'https://www.google.com/maps/search/?api=1&query=Alem%20Gebre%20Building';
    window.open(url, '_blank');
  };

  // Styled button component
  const StyledButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#4285F4',
        marginTop: '10px',
        color: 'white',
        border: 'none',
        borderRadius: 6,
        padding: '10px 20px',
        margin: '0 8px',
        cursor: 'pointer',
        fontSize: 16,
        fontWeight: '600',
        boxShadow: '0 3px 8px rgba(66, 133, 244, 0.4)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = '#3367D6';
        e.currentTarget.style.boxShadow = '0 5px 12px rgba(51, 103, 214, 0.6)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = '#4285F4';
        e.currentTarget.style.boxShadow = '0 3px 8px rgba(66, 133, 244, 0.4)';
      }}
      type="button"
    >
      {children}
    </button>
  );

  return (
    <div style={{ maxWidth: 360, margin: '20px auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }} className='flex flex-col gap-4'>
      <StyledButton onClick={openGoogleMapsSearch}>Open in Google Maps</StyledButton>
      <StyledButton onClick={() => setShowRoute(!showRoute)}>
        {showRoute ? 'Hide Route' : 'Show Route'}
      </StyledButton>

      <MapContainer
        center={destination}
        zoom={14}
        style={{
          height: 300,
          width: 300,
          borderRadius: 8,
          boxShadow: '0 0 15px rgba(0,0,0,0.2)',
          marginTop: 20,
        }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap & CartoDB"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {showRoute && userLocation ? (
          <FetchRoute start={userLocation} destination={destination} />
        ) : (
          <Marker position={destination} icon={destinationIcon}>
            <Popup>Destination</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
