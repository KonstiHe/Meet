import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {

        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render text input field', () => {
        expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
    });

    test('change number of events when input changes', () => {
        NumberOfEventsWrapper.setState({ numberOfEvents: 5 });
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(5);
    });

    //After changing the # of events to display, state changes
    test('change numberOfEvents state when number input changes', () => {
        NumberOfEventsWrapper.setState({ numberOfEvents: 16 });
        NumberOfEventsWrapper.find('.number').simulate('change', { target: { value: 8 } });
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(8);
    });
})