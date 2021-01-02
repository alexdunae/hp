import React from 'react';

const ACTIVITY_TYPES = ['Run', 'Swim', 'Yoga', 'WeightTraining'];

// NB: destructure props
// NB: filteredActivityType is a prop here, not state
// NB: filteredActivityType matches name of parent's state variable for convenience but does not have to
// NB: we pass all UNFILTERED activities here
function FilterControls({ activities, filteredActivityType, setFilteredActivityType }) {
  let anySelected = false;
  const options = ACTIVITY_TYPES.map((activityType) => {
    const isSelected = activityType === filteredActivityType;
    if (isSelected) anySelected = true;
    const klass = isSelected
      ? 'button-link activity-filter activity-filter-selected'
      : 'button-link activity-filter';
    return (
      <button
        key={activityType}
        className={klass}
        onClick={() => setFilteredActivityType(activityType)}
      >
        {activityType}
      </button>
    );
  });

  const klass = anySelected
    ? 'button-link activity-filter'
    : 'button-link activity-filter activity-filter-selected';

  options.unshift(
    <button key="all" className={klass} onClick={() => setFilteredActivityType(undefined)}>
      All
    </button>,
  );

  return <nav className="activity-filters">{options}</nav>;
}

export default FilterControls;
