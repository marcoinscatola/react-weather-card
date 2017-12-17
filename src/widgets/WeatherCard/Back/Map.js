import React from 'react';
import PropTypes from 'prop-types';

const mapStyle =
  'maptype=roadmap&style=element:labels%7Ccolor:0x000000%7Cvisibility:on&style=element:labels.text.stroke%7Ccolor:0xffffff&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:landscape%7Celement:geometry.fill%7Ccolor:0xc5ecf3&style=feature:landscape.man_made%7Celement:geometry.fill%7Clightness:-10&style=feature:landscape.natural%7Celement:geometry.fill%7Clightness:-25%7Cvisibility:on&style=feature:poi%7Ccolor:0x23a3ba%7Cvisibility:off&style=feature:poi%7Celement:geometry.fill%7Ccolor:0xc5ecf3%7Clightness:-15%7Cvisibility:on&style=feature:road%7Celement:geometry%7Clightness:100%7Cvisibility:simplified&style=feature:road%7Celement:labels%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Celement:geometry%7Clightness:100%7Cvisibility:on&style=feature:water%7Ccolor:0x48c3d9&style=feature:water%7Celement:geometry.fill%7Ccolor:0x23a3ba';

const getMapUrl = (lat = 0, long = 0, w = 100, h = 100, zoom = 12) =>
  `https://maps.googleapis.com/maps/api/staticmap?markers=color:white%7C${lat},${long}&size=${w}x${h}&zoom=${zoom}&format=png&${mapStyle}`;

const Map = ({ latitude, longitude, width, height }) => (
  <img src={getMapUrl(latitude, longitude, width, height)} alt="Map" />
);

Map.propTtypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Map;
