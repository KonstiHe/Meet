meet

Meet is an application for users to find events based on their location. It will be a serverless progressive web application(PWA) using React and built using the test-driven development(TDD) technique. The app will be utilizing Google Calendar API


Feature 1: 	Filter events by city.

    Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
    Given user hasn’t searched for any city
    When the user opens the app
    Then the user should see a list of all upcoming events

    Scenario 2: User should see a list of suggestions when they search for a city.
    Given the main page is open
    When user starts typing in the city textbox
    Then the user should see a list of cities (suggestions) that match what they’ve typed

    Scenario 3: User can select a city from the suggested list.
    Given the user was typing “Berlin” in the city textbox
    And the list of suggested cities is showing
    When the user selects a city (e.g., “Berlin, Germany”) from the list
    Then their city should be changed to that city (i.e., “Berlin, Germany”)
    And the user should receive a list of upcoming events in that city




Feature 2: 	Show/hide an event's details
Userstory 2: 	As a user,
		I should be able to-click on the event to expand it
		So that I can see the details.
	Scenario 1: 	Event element is collapsed by default:

 - Given user has searched for events
 - When the user has not clicked on any event
 - Then the event details are collapsed

	Scenario 2: 	User can expand an event to see its details:

- Given user wants more details about a specific event
- When the user clicks on the specific event
- Then the event expands for more details


 	Scenario 3: 	User can collapse an event to hide its details

- Given user no longer wants to see details of an event
- When a user clicks on the expanded event details
- Then the event details collapse 


Feature 3: 	Specify number of events
Userstory 3: 	As a user
		I should be able to choose how many events are listed
		So that I can see as many events as I want . 
	Scenario 1: 	When user hasn’t specified a number, 32 is the default number:

- Given user has not specified the number of events 
- When a user searches even near a location
- 32 events are automatically listed 

 	Scenario 2: 	User can change the number of events they want to see:

 - Given user wants to specify the number of events they want to see
- When the user clicks to change the quantity
- Then the app shows the quantity user selected 




Feature 4: 	Use the app when offline
Userstory 4: 	As a user
 		I should be able to use the app when internet isn’t available
 		So that I can still see events.
	Scenario 1: 	Show cached data when there’s no internet connection:

- Given user wants to use the app when there is no internet connection
- When the user uses the app
- Then the app uses cached data to populate events 

 	Scenario 2: 	Show error when user changes the settings (city, time range):

 - Given user wants to change settings
- When the user attempts to change a setting
- Then the app will give an error that it does not have access to this information.


Feature 5: 	Data visualization
Userstory 5: 	As a user
		I should be able to see a view of upcoming events by dates 			and times so that I can have an organized way of seeing the 		upcoming events.
	Scenario 1: 	Show a chart with the number of upcoming events in each city:

- Given user wants to see how many events are coming up
- When the user clicks on a chart
- Then the app gives them a chart with the number of events upcoming in each
city 
