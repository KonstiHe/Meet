import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import NumberOfEvents from '../NumberOfEvents';
import { extractLocations } from '../api';
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;

    test('The app should display 12 events by default', ({ given, when, then }) => {
        given('the user has not specified a number of events to show', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user loads the data', () => {
            AppWrapper.update();
        });

        then(/^(\d+) events should be displayed.$/, (arg0) => {
            expect(AppWrapper.find('.event')).toHaveLength(12);
        });
    });

    test('When the user types a number into the textbox, the number of events displayed should match the input number', ({ given, when, then }) => {
        given('the main page is open', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user types a number into the number of events textbox', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.find('.number').simulate('change', { target: { value: 1 } });
        });

        then('the number of events displayed should match the number input by the user unless there are fewer events than the specified number.', () => {

            expect(AppWrapper.state('numberOfEvents')).toEqual(1)
        });
    });
});