# Weather

## Description
Built over a couple of days as a pair-programming project, users can search any city on earth and will recieve local weather including a multi-day forecast of temperature and percipitation displayed as a graph. Users type a city name into the search bar, which makes an axios request to our Express server that handles the Mapbox API for exact longitude and latitude co-ordinates, which are then used to request weather data from the Darksky API. The returned data is then parsed into usable JSON objects that can be given to Chart.js to display. 

## Package Used
- React
- Express
- Axios
- Chart.js

## APIs Used
- Mapbox
- Darksky Weather
