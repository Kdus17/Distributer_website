import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Navigation, ExternalLink, Loader2 } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Marker assets
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Coordinates
const destination = [9.00521778764852, 38.80887490601392];

// Icons
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

// Route Component
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

        if (data.routes?.length > 0) {
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
      <Polyline
        positions={routeCoords}
        color="#3B82F6"
        weight={5}
        opacity={0.8}
        smoothFactor={1}
        className="drop-shadow-sm"
      />
      <Marker position={start} icon={userIcon}>
        <Popup className="font-sans">
          <div className="text-center">
            <div className="font-semibold text-blue-600">Your Location</div>
            <div className="text-sm text-gray-600">Current position</div>
          </div>
        </Popup>
      </Marker>
      <Marker position={destination} icon={destinationIcon}>
        <Popup className="font-sans">
          <div className="text-center">
            <div className="font-semibold text-red-600">Destination</div>
            <div className="text-sm text-gray-600">Alem Gebre Building</div>
          </div>
        </Popup>
      </Marker>
    </>
  );
};

// Main Map Component
const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [showRoute, setShowRoute] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    if (showRoute) {
      setIsLoadingLocation(true);
      setLocationError(null);

      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          setUserLocation([latitude, longitude]);
          setIsLoadingLocation(false);
        },
        err => {
          console.error('Error fetching location', err);
          setLocationError('Unable to get your location. Please enable location services.');
          setUserLocation(null);
          setIsLoadingLocation(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    } else {
      setUserLocation(null);
      setLocationError(null);
    }
  }, [showRoute]);

  const openGoogleMapsSearch = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Alem%20Gebre%20Building',
      '_blank'
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Controls */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={openGoogleMapsSearch}
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            type="button"
          >
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Open in Google Maps
          </button>

          <button
            onClick={() => setShowRoute(!showRoute)}
            disabled={isLoadingLocation}
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            type="button"
          >
            {isLoadingLocation ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Getting Location...
              </>
            ) : (
              <>
                <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                {showRoute ? 'Hide Route' : 'Show Route'}
              </>
            )}
          </button>
        </div>

        {/* Error */}
        {locationError && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm text-center">{locationError}</p>
          </div>
        )}

        {/* Map */}
        <MapContainer
          center={destination}
          zoom={14}
          className="h-96 w-full rounded-xl shadow-inner"
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution="© OpenStreetMap & CartoDB"
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          {showRoute && userLocation ? (
            <FetchRoute start={userLocation} destination={destination} />
          ) : (
            <Marker position={destination} icon={destinationIcon}>
              <Popup className="font-sans">
                <div className="text-center">
                  <div className="font-semibold text-red-600">Destination</div>
                  <div className="text-sm text-gray-600">Alem Gebre Building</div>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
