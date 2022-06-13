import React, { Component } from 'react';

class NumberOfEvents extends Component {

    render() {
        const { numberOfEvents, updateNumberOfEvents } = this.props;
        return (
            <div className="NumberOfEvents">
                <input type="number" className="number" value={numberOfEvents} onChange={(e) => updateNumberOfEvents(e.target.value)} ></input>

            </div>
        );
    }
}

export default NumberOfEvents;