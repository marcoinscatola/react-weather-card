import React from 'react';
import './Demo.css';
import WeatherCard, { WeatherCardConnected } from 'widgets/WeatherCard';

const cities = [
  {
    name: 'london',
    latitude: 51.5,
    longitude: -0.12
  },
  {
    name: 'tokyo',
    latitude: 35.68,
    longitude: 139.69
  },
  {
    name: 'new-york',
    latitude: 40.71,
    longitude: -74
  }
];

export default () => (
  <div className="demo">
    <h2 className="demo__title">Weather card with geolocation</h2>
    <p className="demo__description">
      The standalone version of the component. On mount it will attempt to
      detect the user location and fetch the weather based on those coordinates.
    </p>
    <div className="demo__grid">
      <WeatherCard />
    </div>

    <h2 className="demo__title">Weather cards with set coordinates</h2>
    <p className="demo__description">
      The WeatherCardConnected component doesn't use the user location but
      instead accepts a latitude and longitude prop and fetches the weather
      based on those coordinates
    </p>
    <div className="demo__grid">
      {cities.map(city => (
        <div className="demo__item">
          <WeatherCardConnected
            key={`city-${city.name}`}
            latitude={city.latitude}
            longitude={city.longitude}
          />
        </div>
      ))}
    </div>
  </div>
);
