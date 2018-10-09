# React Responsive Image Carousel

## Overview
Image Carousel Component for both desktop as well as mobile screens.

## Prerequisites

### ReactJS
ReactJs is a javascript framework to create reusable components. It's very light and easy to develop. I've used ReactJS 16.x here.

### Enzyme, mocha and chai
Used Enzyme, mocha and chai for unit test case.
- You can run the server unit testing via `npm test`

## Workings of the application

- The application filesystem layout structure is based on the single page application.
- There is no dynamic backend (no application server) for this application. I have used a https://pixabay.com to fetch images.

## Folder Structure
Project look like this:

```
image-carousel/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      imageCarousel
    utils/
      serviceUtil.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Now, app is ready to be deployed!

## Contact Me
- Dheeraj Jaiswal
- jdheeraj32@gmail.com
- +971 58281525828, 9810550702

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
