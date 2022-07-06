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
    currentLocation: "all cities",
    numberOfEvents: 32,
    infoText: ''
  }


  updateEvents = (location) => {
    getEvents().then((events) => {
      let locationEvents = location === "all cities" ?
        events :
        events.filter((event) => event.location === location);
      const shownEvents = locationEvents.slice(0, this.state.numberOfEvents);
      this.setState({
        events: shownEvents,
        currentLocation: location
      });
    });
  }

  updateNumberOfEvents = (number) => {
    this.setState({
      numberOfEvents: number,
    });
    this.updateEvents(this.state.currentLocation);
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
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />

      </div>
    );
  }
}

export default App;