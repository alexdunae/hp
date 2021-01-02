import React from 'react';
import RunActivity from './RunActivity'
import GenericActivity from './GenericActivity'
function Activities(props) {
    if (!props.activities || props.activities.length < 1) {

        return (
            <div className="activity-box activity-empty">
                <p>No activities data to report. Better get at it.</p>
            </div>
        )


    }

    // NB: this creates a NodeList; it does not need to be stringified or joined
    // NB: multiple options for passing props, objects are not equal so default will be to re-render them frequently
    // - {timestamp: 1, type: 'Run'} == {timestamp: 1, type: 'Run'} => FALSE
    // - spread is ok but you can have irrelevant properties so often nice to be explicit
    const renderedActivities = props.activities.map(activity => {
        switch(activity.type) {
            case 'Run':
                return <RunActivity key={activity.id} name={activity.name} type={activity.type} duration={activity.duration} distance={activity.distance} average_speed={activity.average_speed} timestamp={activity.timestamp} run_type={activity.run_type} />
            default:
                return <GenericActivity key={activity.id} {...activity}/>
        }
    })




return (<div className="activity-box">
    <h3>Recent Activities 🤸‍♂️</h3>
    <div className='activity-list'>{renderedActivities}</div>
    </div>)


}

export default Activities;
