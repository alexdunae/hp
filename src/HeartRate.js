const UNITS = 'bpm'
const DISPLAY_COUNT = 10;

function HeartRate(props) {
    const measurements = props.measurements || [];

    if (measurements.length < 1) {
        return (
            <div className="stats stats-heartrate stats-empty">
                <p>No heart rate data to report.</p>
            </div>
        )
    }

    const dataPoints = measurements.sort((a, b) => a.timestamp - b.timestamp).slice(0, DISPLAY_COUNT).map(measurement => {
        return (
        <li className="stats-measurement" key={measurement.timestamp}>
            <span className="stats-timestamp">{measurement.timestamp}</span>
            {measurement.amount} {UNITS}
        </li>)
    })

    return (
        <div className="stats stats-heartrate">
            <h3>Heart Rate</h3>
        {dataPoints}
        </div>
    )
}

export default HeartRate
