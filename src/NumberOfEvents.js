import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        infoText: ''
    }

    changeNumOfEvents = (e) => {
        let newValue = parseInt(e.target.value);
        if ((newValue > 33) || (newValue < 1)) {
            this.setState({
                numberOfEvents: 32,
                infoText: 'Please choose a number between 1 and 32',
            })
            this.props.updateNumberOfEvents(32);
        } else {
            this.setState({
                numberOfEvents: newValue,
                infoText: ' '
            });
            this.props.updateNumberOfEvents(newValue);
        }

    }

    render() {

        return (
            <div className="NumberOfEvents">
                <label>Number of Events:</label>
                <input type="number" className="number" value={this.state.numberOfEvents} onChange={this.changeNumOfEvents} ></input>

            </div>
        );
    }
}

export default NumberOfEvents;