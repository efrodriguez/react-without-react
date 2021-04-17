# React Without React

A To-do's list app implemented in JavaScript using functional and React concepts.

# Why React without React

React is a great library to build reusable front-end components that follow a functional approach and simplifies state management throughout the application. 

When building transactional components such as lead forms or product widgets that are relatively small but non-trivial and are also part of a content-based site, you might be tempted to use React because of the development experience it offers. However, bundling the React library will add up to the size of your production assets and it is unnecessary to do so when you are only using it in a small part of your site.

React, however, is just a library based on concepts such as composability, immutability, and the functional programming paradigm. Such concepts can be applied using any language. 

This to-do app tries to demonstrate how you can use plain javascript to build a transactional component that functionally manipulates the DOM, doesn't mutate its state but rather makes copies of the state, and gives the single responsibility to make any state updates to a store component. The app stays away from updating the DOM in multiple places by re-rendering every time the state is updated, just like React does.

# Setup

Install dependencies:

```
$ npm install
```

Launch app in browser:

```
$ npm run start
```