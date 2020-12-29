import './HeartRate.css';

const UNITS = 'bpm'
const DISPLAY_COUNT = 10;

function recentAverage(measurements) {
    const count = Math.min(3, measurements.length);
    if (count < 0) return '?'
    const sum = measurements.slice(0, count).reduce(function (acc, x) {
        // console.log('acc', a, b)
        return acc + x.value
    }, 0);
    console.log(count, sum, measurements.slice(0, count))
    return `${(sum / count).toFixed(1)} ${UNITS}`;
}

// this would likely be exported from a shared file
function formatTimestamp(timestamp) {
    // some error checking, or Typescript
    const date = new Date(timestamp)
    const display = date.toLocaleDateString()
    const attr = date.toISOString()

    // NB React attribute case
    return <time dateTime={attr}>{display}</time>

}

function HeartRate(props) {
    const measurements = props.measurements || [];

    if (measurements.length < 1) {
        return (
            <div className="stats-box stats-heartrate stats-empty">
                <p>No heart rate data to report.</p>
            </div>
        )
    }

    // sort oldest to newest
    // ack, sort is not immutable...
    const dataPoints = measurements.slice(0, DISPLAY_COUNT).map(measurement => {
        return (
        <li className="stats-measurement" key={measurement.timestamp}>
            <span className="stats-timestamp">{formatTimestamp(measurement.timestamp)}</span>
            {' '}
            <span className="stats-value">{measurement.value} {UNITS}</span>
        </li>)
    })

    return (
        <div className="stats-box stats-heartrate">
            <h3>Heart Rate</h3>
            <p className='stats-summary'>
                Recent average: {recentAverage(measurements)}
            </p>
            <ul className='stats-measurements'>
        {dataPoints}
        </ul>
        </div>
    )
}

export default HeartRate
