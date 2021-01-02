import './StatsBox.css';
import formatTimestamp from './lib/formatTimestamp';

const DISPLAY_COUNT = 10;

function recentAverage(measurements, units) {
  const count = Math.min(3, measurements.length);
  if (count < 0) return '?';
  const sum = measurements.slice(0, count).reduce(function (acc, x) {
    // console.log('acc', a, b)
    return acc + x.value;
  }, 0);
  console.log(count, sum, measurements.slice(0, count));
  return `${(sum / count).toFixed(1)} ${units}`;
}

function StatsBox(props) {
  const measurements = props.measurements || [];
  const label = props.label;
  const units = props.units;
  const showSummary = !!props.showSummary;

  if (measurements.length < 1) {
    return (
      <div className="stats-box stats-empty">
        <p>No {label} data to report.</p>
      </div>
    );
  }

  // there are lots of ways we could have handled the summary vs detail state
  // in order to DRY-up the code; we chose this for simplicity
  if (showSummary) {
    return (
      <div className="stats-box">
        <h3>{label}</h3>
        <p className="stats-summary">Recent average: {recentAverage(measurements, units)}</p>
      </div>
    );
  }
  const dataPoints = measurements.slice(0, DISPLAY_COUNT).map((measurement) => {
    return (
      <li className="stats-measurement" key={measurement.timestamp}>
        <span className="stats-timestamp">{formatTimestamp(measurement.timestamp)}</span>{' '}
        <span className="stats-value">
          {measurement.value} {units}
        </span>
      </li>
    );
  });

  return (
    <div className="stats-box">
      <h3>{label}</h3>
      <ul className="stats-measurements">{dataPoints}</ul>
    </div>
  );
}

export default StatsBox;
