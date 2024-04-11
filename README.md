# Railway-Navigator-Booking-Application

## Description

The Railway-Navigator-Booking-Application is a web-based software application designed to facilitate the booking of railway tickets and navigation of railway systems. The application is built using HTML, CSS, and JavaScript, and includes various features such as searching for train schedules, booking tickets, and providing navigation assistance for passengers.

The application uses an API URL link :

```
'https://api.irail.be/vehicle/?id=BE.NMBS.IC1832&format=json&lang=en&alerts=false'
```

to fetch real-time data about train schedules and availability. This data is then displayed to the user in a user-friendly format, allowing them to make informed decisions about their travel plans.

When the application first loads, the `main.js` file initializes the application and sets up event listeners for user interactions.

Once the data is retrieved from the iRail API, the `main.js` file processes the data and displays it to the user in a user-friendly format. This includes formatting the data to display departure and arrival times, train numbers, and platform numbers, as well as real-time updates on train availability and delays.

## Technology Stack

HTML: Used to structure the content of the application.

CSS: Used to style the content and make it visually appealing.

JavaScript: Used to add interactivity and dynamic behavior to the application, such as fetching data from the API URL link and displaying it to the user.

## User Search Endpoint

The Railway-Navigator-Booking-Application provides a user search endpoint that allows users to search for train schedules and availability in real-time. This endpoint uses the API URL link <https://api.irail.be/vehicle/?id=BE.NMBS.IC1832&format=json&lang=en&alerts=false> to fetch data from the iRail API.

To use the user search endpoint, users can enter their desired search parameters, such as the departure station, arrival station, and date of travel, into the application's search form. The application then sends a request to the user search endpoint with these parameters, which in turn sends a request to the iRail API to retrieve the relevant data.

Once the data is retrieved, the user search endpoint processes it and returns it to the application in a user-friendly format. This allows users to view detailed information about train schedules, including departure and arrival times, train numbers, and platform numbers, as well as real-time updates on train availability and delays.

# Contributing

I welcome contributions to the Railway-Navigator-Booking-Application! If you would like to contribute, please follow these guidelines:

1. **Fork the repository**: First, fork the repository to your own GitHub account. This will create a copy of the repository that you can modify.
2. **Create a branch**: Create a new branch for your changes. This will make it easier to manage your changes and merge them into the main repository.
3. **Make your changes**: Make your changes to the code or documentation. Make sure to follow the coding standards and style guidelines for the project.
4. **Test your changes**: Test your changes to make sure they work as expected. This may include running automated tests or manually testing the application.
5. **Submit a pull request**: Once you are satisfied with your changes, submit a pull request to the main repository. This will allow the maintainers to review your changes and merge them into the main codebase.
6. **Be patient**: The maintainers of the project will review your changes and provide feedback. Be patient and responsive to their feedback, and be willing to make any necessary changes.

i will appreciate your contributions to the Railway-Navigator-Booking-Application! If you have any questions or need help, please don't hesitate to contact me.

# Contact Information

If you have any questions or need help with the Railway-Navigator-Booking-Application, please don't hesitate to contact me. You can reach us at [vickemtoo97@gmail.com] or [+254 768 249 711].

# License

The Railway-Navigator-Booking-Application is released under the [MIT License](https://opensource.org/licenses/MIT). This license allows you to use, modify, and distribute the project for any purpose, as long as you include the original copyright and license notice in any copies or substantial portions of the project.

Copyright (c) [2024], VICTOR K. KEMBOI.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
