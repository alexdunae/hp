import './App.css';
import StatsBox from './StatsBox'

// Note: passing in integers, not dates, to simplify comparison
const HEART_RATE_MEASUREMENTS = [
  {timestamp: Date.parse('2020-01-01'), value: 60},
  {timestamp: Date.parse('2020-02-01'), value: 55},
  {timestamp: Date.parse('2020-03-01'), value: 50},
  {timestamp: Date.parse('2020-04-01'), value: 70}
].sort((a, b) => b.timestamp - a.timestamp)

const STEP_MEASUREMENTS = [
  {timestamp: Date.parse('2020-01-01'), value: 6000},
  {timestamp: Date.parse('2020-02-01'), value: 5000},
  {timestamp: Date.parse('2020-03-01'), value: 10050},
  {timestamp: Date.parse('2020-04-01'), value: 12345}
].sort((a, b) => b.timestamp - a.timestamp)





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="stats-boxes">
        <StatsBox measurements={HEART_RATE_MEASUREMENTS} units='bpm' label='Heart Rate ❤️'/>
        <StatsBox measurements={STEP_MEASUREMENTS} units='steps' label='Steps 🏃'/>
        </div>
      </header>
    </div>
  );
}

export default App;
