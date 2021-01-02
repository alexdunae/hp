import React from 'react';
import cx from 'classnames';

const ACTIVITY_TYPES = ['Run', 'Swim', 'Yoga', 'WeightTraining'];

// NB: destructure props
// NB: filteredActivityType is a prop here, not state
// NB: filteredActivityType matches name of parent's state variable for convenience but does not have to
// NB: we pass all UNFILTERED activities here
// NB: there are multiple ways to trigger callbacks, we could even have a function in here to do some formatting etc...
function FilterControls({ activities, filteredActivityType, setFilteredActivityType }) {
  let noneSelected = true;
  const options = ACTIVITY_TYPES.map((activityType) => {
    const isSelected = activityType === filteredActivityType;
    if (isSelected) noneSelected = false;
    return (
      <button
        key={activityType}
        className={cx('bitton-link', 'activity-filter', { 'activity-filter-selected': isSelected })}
        onClick={() => setFilteredActivityType(activityType)}
      >
        {activityType}
      </button>
    );
  });

  options.unshift(
    <button
      key="all"
      className={cx('bitton-link', 'activity-filter', { 'activity-filter-selected': noneSelected })}
      onClick={() => setFilteredActivityType(undefined)}
    >
      All
    </button>,
  );

  return <nav className="activity-filters">{options}</nav>;
}

export default FilterControls;
