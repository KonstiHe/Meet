import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: null
    }

    changeNumOfEvents = (e) => {

        let newValue = parseInt(e.target.value);
        if ((newValue > 33) || (newValue < 1)) {
            this.setState({
                numberOfEvents: newValue,
                infoText: 'Please choose a number between 1 and 32',
            })
        } else {
            this.setState({
                numberOfEvents: newValue,
                infoText: ' ',
            })
        }
        //this.props.updateEvents();
    }



    render() {
        return (
            <div className="NumberOfEvents">
                <input type="number" className="number" value={this.state.numberOfEvents} onChange={this.changeNumOfEvents} ></input>

            </div>
        );
    }
}

export default NumberOfEvents;