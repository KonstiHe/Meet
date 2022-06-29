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
    numberOfEvents: 5,
    infoText: ''
  }


  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else (
      this.setState({ numberOfEvents: eventCount })
    )
    getEvents().then((events) => {
      let locationEvents = location === "all cities" ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount,
        locations: location
      });
    })
  }


  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      this.setState({
        events: events.slice(0, this.state.numberOfEvents),
        locations: extractLocations(events)
      });
      //console.log(this.state.locations)
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }


  render() {

    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />

      </div>
    );
  }
}

export default App;