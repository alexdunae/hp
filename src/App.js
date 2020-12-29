import './App.css';
import HeartRate from './HeartRate'

// Note: passing in integers, not dates, to simplify comparison
const HEART_RATE_MEASUREMENTS = [
  {timestamp: Date.parse('2020-01-01'), bpm: 60},
  {timestamp: Date.parse('2020-02-01'), bpm: 55},
  {timestamp: Date.parse('2020-03-01'), bpm: 50},
  {timestamp: Date.parse('2020-04-01'), bpm: 70}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeartRate measurements={HEART_RATE_MEASUREMENTS} />
      </header>
    </div>
  );
}

export default App;
