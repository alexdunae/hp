import React from 'react';
import formatSecondsAsTime from '../lib/formatSecondsAsTime';
import formatTimestamp from '../lib/formatTimestamp';

function GenericActivity(props) {
  const duration = formatSecondsAsTime(props.duration);
  return (
    <div className="activity-entry">
      <span className="activity-datum activity-timestamp">{formatTimestamp(props.timestamp)}</span>
      <h4 className="activity-datum activity-title">{props.name}</h4>
      <span className="activity-datum activity-type">{props.type}</span>
      <span className="activity-datum activity-duration">{duration}</span>
    </div>
  );
}

export default GenericActivity;
