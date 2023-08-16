# Meet-App

![Screenshot 2023-08-16 at 17 34 17](https://github.com/Jonathlon/Meet-App/assets/113617821/5077a064-dcb0-414d-b771-16a1a9a56216)






Meet App is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

- [Live site URL](https://jonathlon.github.io/Meet-App/)

## Serverless

This app uses a serverless function deployed on Amazon AWS Lambda to authorize (OAuth 2.0) the user to make requests to the Google Calender API to search for upcoming events.

## Feature 1: Filter Events By City

### As a user I should be able to filter events by city so that I can see a list of events in that city.

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

- Given user hasn’t searched for a city
- When the user opens the app
- Then the app should display all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.

- Given the main page is open
- When user starts typing in the city textbox
- Then the user should see a list of suggested cities matching the search

Scenario 3: User can select a city from the suggested list.

- Given the user searched for ‘London’ in the city search textbox
- Then the list of suggested cities is showing
- When the user selects a city (‘London, UK’) from the list
- Then their city should be changed to that city
- Then the user should receive a list of upcoming events in that city

## Feature 2: Show/Hide Event Details

### As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

Scenario 1: An event element is collapsed by default.

- Given the user has selected the city for which they wanted to view events
- When the user receives the list of events in that city
- Then all event elements should be collapsed by default

Scenario 2: User can expand an event to see details.

- Given the user has identified an event of interest
- When the user clicks on that event element
- Then the element should expand and display event details

Scenario 3: User can collapse an event to hide details.

- Given the user has viewed all event information
- When the user clicks on that event element
- Then the element should collapse and hide the event details

## Feature 3: Specify Number of Events

### As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

Scenario 1: When user hasn’t specified a number, 32 events are shown by default.

- Given the user has not specified a number of events to view
- When the list of events is displayed
- Then the number of events shown is 32 as default

Scenario 2: User can change the number of events displayed.

- Given the event list is displayed
- When the user wants to change the number of events shown
- Then the event list should be updated accordingly

## Feature 4: Use the App When Offline

### As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

Scenario 1: Show cached data when there’s no internet connection.

- Given the user has no internet connection
- When the user accesses the app
- Then cached data should still be displayed

Scenario 2: Show error when user changes search settings (city, number of events).

- Given the user has no internet connection
- When the user changes search settings
- Then an error message should be displayed

## Feature 5: Add an App Shortcut to the Home Screen

### As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster

Scenario 1: User can install the meet app as a shortcut on their device home screen.

- Given the user wants a shortcut on their device
- When the user selects the shortcut
- Then the app opens from the shortcut

## Feature 6: Display Charts Visualizing Event Details

### As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

Scenario 1: Show a chart with the number of upcoming events in each city.

- Given the user has not selected a city
- When the user wants to compare events in cities
- Then a chart/graph should be displayed showing the number of events in each city
