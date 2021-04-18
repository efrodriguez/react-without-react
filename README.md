# React Without React

A To-do's list app implemented in JavaScript using functional and React concepts.

# Why React without React

React is a great library to build reusable front-end components that follow a functional approach and simplify state management.

When building transactional components such as lead forms with multiple flows or product widgets that are relatively small but non-trivial and that are also part of an SEO content site, you might be tempted to use React because of the great development experience it offers. However, importing the React library will add up to the size of your production bundle and it is unnecessary to do so when you are only using it in a small part of your site. Having a large bundle will also impact site load time, potentially affecting SEO metrics. 

React, however, is just a library based on concepts such as composability, immutability, and the functional programming paradigm. Such concepts can be applied using any language. 

This to-do list app tries to demonstrate how you can use plain javascript to build a transactional component that manipulates the DOM in a functional way, doesn't mutate state at the component level but rather makes copies of the state, and gives the single responsibility of making state changes to a store component. The app stays away from updating the DOM in multiple places and instead re-renders every time the state is updated, just like React does.

There are trade-offs to using this approach, of course. The main trade-off is that the HTML is written using javascript template literals. It also might not scale well depending on how big or complex is your transactional component. At that point importing and using React may make more sense.

# Setup

Install dependencies:

```
$ npm install
```

Launch app in browser:

```
$ npm run start
```
