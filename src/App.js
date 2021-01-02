import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VitalsSummary from './VitalsSummary';
// import sortByNewest from './sortByNewest';
import Activities from './Activities';

// Note: passing in integers, not dates, to simplify comparison
// const VITALS = sortByNewest([
// { timestamp: Date.parse('2020-01-01'), resting_heartrate: 60, steps: 6000 },
// { timestamp: Date.parse('2020-02-01'), resting_heartrate: 55, steps: 5000 },
// { timestamp: Date.parse('2020-03-01'), resting_heartrate: 50, steps: 9000 },
// { timestamp: Date.parse('2020-04-01'), resting_heartrate: 70, steps: 10000 },
// ]);

// NB: added IDs to work as render KEYs
// const ACTIVITIES = sortByNewest([]);

function App(props) {
  // destructure to pass cleanly to useEffect
  const { activitiesEndpoint, vitalsEndpoint } = props;

  // NB: the naming conventions of `useState`
  const [showSummary, setShowSummary] = useState(true);

  // could also be 'ready', 'error', maybe some other options -- or a boolean, but this is a decent place for handling errors
  const [loadingStatus, setLoadingStatus] = useState('loading');

  // use the same datatype as we're expecting
  const [activities, setActivities] = useState([]);
  const [vitals, setVitals] = useState([]);

  useEffect(() => {
    // setTimeout(() => {
    const activitiesXHR = axios.get(activitiesEndpoint).then((response) => {
      // NB: skipping error handling
      console.debug('got activities');
      setActivities(response.data);
    });

    const vitalsXHR = axios.get(vitalsEndpoint).then((response) => {
      console.debug('got vitals', response.data);
      setVitals(response.data);
    });

    Promise.all([activitiesXHR, vitalsXHR]).then(() => {
      setLoadingStatus('ready');
    });
    // }, 2000);
  }, [activitiesEndpoint, vitalsEndpoint, setActivities, setVitals, setLoadingStatus]);

  const summaryToggleLabel = showSummary ? 'Show detail' : 'Show summary';

  // this is a React.SyntheticEvent - a wrapper that tidies up all the differences between different browsers
  // you can use it as if it was a regular mouse event
  // you can access event.nativeEvent if you really need to
  // see https://reactjs.org/docs/events.html for more
  const toggleSummary = (event) => {
    event.preventDefault();
    setShowSummary(!showSummary);
  };

  if (loadingStatus === 'loading') {
    return (
      <div className="App">
        <header className="App-header">Re-combobulating the jigawatts...</header>
      </div>
    );
  }

  if (loadingStatus === 'error') {
    return (
      <div className="App">
        <header className="App-header">Mission failed! We'll get 'em next time...</header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleSummary} className="button-link">
          {summaryToggleLabel}
        </button>
        <div className="vitals-boxes">
          <VitalsSummary
            measurements={vitals}
            dataKey="resting_heartrate"
            units="bpm"
            label="Heart Rate ❤️"
            showSummary={showSummary}
          />
          <VitalsSummary
            measurements={vitals}
            dataKey="steps"
            units="steps"
            label="Steps 🏃"
            showSummary={showSummary}
          />
        </div>

        <Activities activities={activities} />
      </header>
    </div>
  );
}

export default App;
