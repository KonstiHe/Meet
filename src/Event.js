import React, { Component } from "react";

class Event extends Component {
    state = {
        collapsed: true
    };

    handleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return <div className="event">
            <h2 className='summary'></h2>
            <p className='location'></p>
            <button className='show-details' onClick={this.handleClick}>Details</button>
        </div>;
    }
}
export default Event;