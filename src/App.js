import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';


class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    infoText: ''

  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all cities') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
        locations: location,
      });
    });
  }

  updateNumberOfEvents = (numberOfEvents) => {
    const value = numberOfEvents;

    if (value <= 0 || value > 32) {
      this.setState({
        numberOfEvents: "",
        infoText: "choose number 1 to 32",
      });

    } else {
      this.setState({
        numberOfEvents: value,
        infoText: ""
      });
    }
    this.updateEvents(this.state.locations, numberOfEvents);
  };


  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      this.setState({
        events: events.slice(0, this.state.numberOfEvents),
        locations: extractLocations(events)
      });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    let { numberOfEvents, infoText } = this.state;
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} numberOfEvents={numberOfEvents} />

      </div>
    );
  }
}

export default App;