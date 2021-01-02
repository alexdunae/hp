import React from 'react';

const ACTIVITY_TYPES = [
    'Run',
    'Swim',
    'Yoga',
    'WeightTraining'
]

// NB: destructure props
// NB: filteredActivityType is a prop here, not state
// NB: filteredActivityType matches name of parent's state variable for convenience but does not have to
// NB: we pass all UNFILTERED activities here
function FilterControls({activities, filteredActivityType}) {
    let anySelected = false;
    const options = ACTIVITY_TYPES.map(type => {
        const isSelected = type === filteredActivityType;
        if (isSelected) anySelected = true;
        const klass = isSelected ? 'button-link activity-filter activity-filter-selected' : 'button-link activity-filter'
        return <button key={type} className={klass}>{type}</button>
    })

    const klass = anySelected ? 'button-link activity-filter' : 'button-link activity-filter activity-filter-selected'

    options.push(<button key='all' className={klass}>All</button>)

    return (<nav className='activity-filters'>{options}</nav>)

}

export default FilterControls;
