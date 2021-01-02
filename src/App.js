import './App.css';
import React, { useState } from 'react'
import StatsBox from './StatsBox'
import sortByNewest from './sortByNewest';
import Activities from './Activities';
// Note: passing in integers, not dates, to simplify comparison
const HEART_RATE_MEASUREMENTS = sortByNewest([
  {timestamp: Date.parse('2020-01-01'), value: 60},
  {timestamp: Date.parse('2020-02-01'), value: 55},
  {timestamp: Date.parse('2020-03-01'), value: 50},
  {timestamp: Date.parse('2020-04-01'), value: 70}
]);

const STEP_MEASUREMENTS = sortByNewest([
  {timestamp: Date.parse('2020-01-01'), value: 6000},
  {timestamp: Date.parse('2020-02-01'), value: 5000},
  {timestamp: Date.parse('2020-03-01'), value: 10050},
  {timestamp: Date.parse('2020-04-01'), value: 12345}
])

// NB: added IDs to work as render KEYs
const ACTIVITIES = sortByNewest([
  {id: 1, timestamp: Date.parse('2020-01-01'), name: 'Lunch 5km', type: 'Run', distance: 5000, duration: 25 * 60, average_heart_rate: 150, average_speed: 2.982},
  {id: 2, timestamp: Date.parse('2020-02-01'), name: 'Leg Day', type: 'WeightTraining', duration: 30 * 60, average_heart_rate: 120},
  {id: 3, timestamp: Date.parse('2020-03-01'), name: 'Morning Flow', type: 'Yoga', duration: 40 * 60, average_heart_rate: 100.7},
  {id: 4, timestamp: Date.parse('2020-04-01'), name: 'Track Intervals', type: 'Run', distance: 4000, duration: 25 * 60, average_heart_rate: 170, average_speed: 3.982, run_type: 'workout'},
])



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

        <Activities activities={ACTIVITIES}/>
      </header>
    </div>
  );
}

export default App;
