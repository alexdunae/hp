import React from 'react';
import formatSecondsAsTime from '../lib/formatSecondsAsTime';
import formatTimestamp from '../lib/formatTimestamp';
import formatPace from '../lib/formatPace';
import formatDistance from '../lib/formatDistance';

function RunActivity(props) {
  const duration = formatSecondsAsTime(props.duration);

  let badge = null;
  switch (props.run_type) {
    case 'workout':
      badge = '😅';
      break;
    case 'long-run':
      badge = '⏱️';
      break;
    default:
      badge = null;
      break;
  }

  return (
    <div className="activity-entry">
      <span className="activity-datum activity-timestamp">{formatTimestamp(props.timestamp)}</span>
      <h4 className="activity-datum activity-title">{props.name}</h4>
      <span className="activity-datum activity-type">Run {badge}</span>
      <span className="activity-datum activity-duration">{duration}</span>
      <span className="activity-datum activity-distance">{formatDistance(props.distance)}</span>
      <span className="activity-datum activity-pace">{formatPace(props.average_speed)}</span>
    </div>
  );
}
export default RunActivity;
