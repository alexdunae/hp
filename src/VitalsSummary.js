import './VitalsSummary.css';
import formatTimestamp from './lib/formatTimestamp';

const DISPLAY_COUNT = 10;

function recentAverage(measurements, dataKey, units) {
  const count = Math.min(3, measurements.length);
  if (count < 0) return '?';
  const sum = measurements.slice(0, count).reduce(function (acc, x) {
    const value = x[dataKey];
    // not found
    if (!value || isNaN(value)) return acc;

    return acc + x[dataKey];
  }, 0);
  return `${(sum / count).toFixed(1)} ${units}`;
}

function VitalsSummary(props) {
  const measurements = props.measurements || [];
  const label = props.label;
  const units = props.units;
  const dataKey = props.dataKey;
  const showSummary = !!props.showSummary;

  if (measurements.length < 1) {
    return (
      <div className="vitals-box vitals-empty">
        <p>No {label} data to report.</p>
      </div>
    );
  }

  // there are lots of ways we could have handled the summary vs detail state
  // in order to DRY-up the code; we chose this for simplicity
  if (showSummary) {
    return (
      <div className="vitals-box">
        <h3>{label}</h3>
        <p className="vitals-summary">
          Recent average: {recentAverage(measurements, dataKey, units)}
        </p>
      </div>
    );
  }
  const dataPoints = measurements.slice(0, DISPLAY_COUNT).map((measurement) => {
    const value = measurement[dataKey];
    console.log('lookup', dataKey);
    return (
      <li className="vitals-measurement" key={measurement.timestamp}>
        <span className="vitals-timestamp">{formatTimestamp(measurement.timestamp)}</span>{' '}
        <span className="vitals-value">
          {value} {units}
        </span>
      </li>
    );
  });

  return (
    <div className="vitals-box">
      <h3>{label}</h3>
      <ul className="vitals-measurements">{dataPoints}</ul>
    </div>
  );
}

export default VitalsSummary;
