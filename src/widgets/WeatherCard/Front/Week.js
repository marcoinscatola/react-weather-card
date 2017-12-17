import React from 'react';
import PropTypes from 'prop-types';
import WeekDay from './WeekDay';
import './Week.css';

const days = [
  {
    id: 1,
    label: 'Mon'
  },
  {
    id: 2,
    label: 'Tue'
  },
  {
    id: 3,
    label: 'Wed'
  },
  {
    id: 4,
    label: 'Thu'
  },
  {
    id: 5,
    label: 'Fri'
  },
  {
    id: 6,
    label: 'Sat'
  },
  {
    id: 0,
    label: 'Sun'
  }
];

const Week = ({ currentDay }) => (
  <div className="weather-week">
    {days.map(day => (
      <WeekDay
        label={day.label}
        key={`day-${day.id}`}
        current={currentDay === day.id}
      />
    ))}
  </div>
);

Week.propTypes = {
  value: PropTypes.string
};

export default Week;
