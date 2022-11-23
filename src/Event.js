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
        const { event } = this.props; //mockData
        const { collapsed } = this.state;

        return <div className="event">
            <h2 className='summary'>{event.summary}</h2>
            <p className='location'>{event.location}</p>

            {!collapsed && (
                <div
                    className={`details-view ${this.state.collapsed ? "hide" : "show"
                        }`}
                >
                    <br />
                    <h2 className="details-header">About Event</h2>
                    <a href={event.htmlLink} target="_blank" rel="noreferrer">
                        See deatails on Google calendar
                    </a>
                    <p className="description">{event.description}</p>
                </div>
            )}
            <button className={`${collapsed ? "show" : "hide"}-details`} onClick={this.handleClick}>{collapsed ? "Show Details" : "Hide Details"}</button>
        </div>;
    }
}
export default Event;