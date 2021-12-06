# Air Quality Assessment Tool

## Overview

Create a simple Air Quality Assessment Tool using React with Semantic UI (https://react.semantic-ui.com/) that utilizes Open AQ Platform API (https://docs.openaq.org/)

It will have the ability to compare the Air Quality of two cities on the same page.

**The tool must:**
1. Use Semantic UI
1. Utilize OpenAQ platform API
1. Allow the user to input two cities 
1. Display the air quality of the corresponding cities, allowing the user to compare the two cities air quality on the same page
1. Gracefully handle any API or user errors
1. Be easily used by the general public

## About this application

The app allows the user to manually add any city they'd like to see data for. Once the `Fetch data` button is pressed, the data is retrieved from OpenAQ, and if a record is found, the data is presented. If the record isn't found, an error message appears relative to the form input. *NOTE:* Available results are initially filtered by within the United States/US.

---

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
