import './App.css';
import React, { useState } from 'react'
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
  // const showSummary = true;
  const [showSummary, setShowSummary] = useState(true);

  const summaryToggleLabel = showSummary ? 'Show detail' : 'Show summary';

  // this is a React.SyntheticEvent - a wrapper that tidies up all the differences between different browsers
  // you can use it as if it was a regular mouse event
  // you can access event.nativeEvent if you really need to
  // see https://reactjs.org/docs/events.html for more
  const toggleSummary = (event) => {
    event.preventDefault();
    setShowSummary(!showSummary);
  }

  return (
    <div className="App">
      <header className="App-header">

      <button onClick={toggleSummary} className='button-link'>{summaryToggleLabel}</button>
        <div className="stats-boxes">
          <StatsBox measurements={HEART_RATE_MEASUREMENTS} units='bpm' label='Heart Rate ❤️' showSummary={showSummary}/>
          <StatsBox measurements={STEP_MEASUREMENTS} units='steps' label='Steps 🏃' showSummary={showSummary} />
        </div>
      </header>
    </div>
  );
}

export default App;
