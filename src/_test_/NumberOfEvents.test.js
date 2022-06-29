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
        NumberOfEventsWrapper.setState({ number: 5 });
        expect(NumberOfEventsWrapper.state('number')).toEqual(5);
    });


})