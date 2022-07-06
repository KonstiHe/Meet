Feature: SPECIFY NUMBER OF EVENTS

    Scenario: The app should display 12 events by default
        Given the user has not specified a number of events to show
        When the user loads the data
        Then 12 events should be displayed.

    Scenario: When the user types a number into the textbox, the number of events displayed should match the input number
        Given the main page is open
        When the user types a number into the number of events textbox
        Then the number of events displayed should match the number input by the user unless there are fewer events than the specified number.