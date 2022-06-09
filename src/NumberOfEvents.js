import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: null,

    }



    render() {
        return (
            <div className="NumberOfEvents">
                <input type="number" className="number" value={this.props.events} ></input>

            </div>
        );
    }
}

export default NumberOfEvents;