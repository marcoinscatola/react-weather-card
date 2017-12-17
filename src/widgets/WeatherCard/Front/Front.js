import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import Temperature from './Temperature';
import Place from './Place';
import Humidity from './Humidity';
import Wind from './Wind';
import Perceived from './Perceived';
import Week from './Week';
import Summary from './Summary';
import './Front.css';

const Front = ({
  weather: { temperature, perceived, humidity, wind, code, description } = {},
  dayOfWeek,
  place
}) => (
  <Card>
    <div className="weather-front__temperature">
      <Temperature value={temperature} />
    </div>
    <div className="weather-front__place">
      <Place value={place} />
    </div>
    <div className="weather-front__wind">
      <Wind value={wind} />
    </div>
    <div className="weather-front__perceived">
      <Perceived value={perceived} />
    </div>
    <div className="weather-front__humidity">
      <Humidity value={humidity} />
    </div>
    <div className="weather-front__week">
      <Week currentDay={dayOfWeek} />
    </div>
    <div className="weather-front__summary">
      <Summary code={code} description={description} />
    </div>
  </Card>
);

Front.propTypes = {
  weather: PropTypes.shape({
    temperature: PropTypes.number,
    humidity: PropTypes.number,
    perceived: PropTypes.number,
    wind: PropTypes.number,
    code: PropTypes.string,
    description: PropTypes.string
  }),
  place: PropTypes.string,
  dayOfWeek: PropTypes.number
};

export default Front;
