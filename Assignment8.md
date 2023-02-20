Q1. How do you create Nested Routes react-router-dom configuration?
Ans. We can create a Nested Routes inside a react router configuration as follows: first call createBrowserRouter to configure routing different components.

```
const AppRouter = createBrowserRouter([{
    path: "/",
    element: <Parent />,
    errorElement: <Error />,
    children: [{
        path: "/path",
        element: <Child />,
        children: [{ // nested routing for subchild
            path: "/child",
            element: <SubChild />,
        }],
    }],
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));

<!-- RouterProvider: All router objects are passed to this component to render your app and enable the rest of the APIs. -->

root.render(<RouterProvider router={AppRouter} />);

```

Q2: Read about createHashRouter, createMemoryRouter from React Router docs.
Ans. `createHashRouter`: It can be used in situations where server configuration is not possible. The URL hash is part of the client-side state, which means that it is not sent to the server with each request. This can be useful in situations where the server is not set up to handle client-side routing.

However, createHashRouter has some limitations, such as the URL being less user-friendly and potentially confusing for users. Also, the hash is not considered as part of the URL path, which means that search engines may not be able to index your pages correctly.

# Note: It is recommended you to not use HashRouter unless you absolutely have to.

`createMemoryRouter`: Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

Q3. What is the order of life cycle method calls in Class Based Components?
Ans. Class based components executed in 2 phases:

1. Render Phase - Pure and has no side effects. May be paused, aborted or restarted by React.
2. Commit Phase - Can work with DOM, run side effects, schedule updates.

Order of life cycle method -

- constructor() -> Used to initialize component's state and to bind any event handlers that need to be passed down to child components.
- render() -> Only mandatory method, we can not create class based component without this method.
- componentDidMount() -> invoked immediately after a component is mounted.
- componentDidUpdate() -> invoked immediately after updating occurs.
- componentWillUnmount() -> invoked just before a component unmounted.

[React Life Cycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

Q4. Why do we use componentDidMount?
Ans. It is a lifecycle method in React that gets called after a component is mounted or inserted into the DOM i.e, after the component is rendered. It is commonly used to perform actions that require access to the DOM or to set up subscriptions to external data sources.

Some use cases -

- Fetching data
- Setting up subscriptions
- Accessing the DOM
- Initializing third-party libraries

# Note: Best place to make an API call

Q5. Why do we use componentWillUnmount? Show with example.
Ans. It is a lifecycle method in React that gets called just before a component is removed from the DOM. It is commonly used to perform cleanup actions, such as removing event listeners, cancelling subscriptions, or stopping timers, that were set up during the component's lifecycle.

# Example:

```

import React, { Component } from 'react';

class ExampleComponent extends Component {
    constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.intervalId = null;
    }

    componentDidMount() {
        //starts a timer
        this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        //stop the timer and prevent it from running indefinitely
        clearInterval(this.intervalId);
    }

    render() {
        return (

            <div>
            <p>Count: {this.state.count}</p>
            </div>
        );
    }
}

```

Q6. (Research) Why do we use super(props) in constructor?
Ans. super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console.

A component that extends React.Component must call the super() constructor in the derived class since it’s required to access this context inside the derived class constructor.

When you try to use props passed on parent to child component in child component using this.props.name, it will still work without super(props). Only super() is also enought for accessing props in render method.

The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

Q7. (Research) Why can't we have the callback function of useEffect async?
Ans. The useEffect hook in React is designed to allow the execution of side effects after the component has been rendered to the DOM. The callback function passed to useEffect is synchronous by default.It is not recommended to use an async function as the callback function of useEffect, and here's why:

When useEffect is used with an async callback function, it returns a promise that resolves when the effect is complete. This can create unexpected behavior because the return value of useEffect is used to perform cleanup actions, such as cancelling subscriptions or removing event listeners, when the component unmounts or the dependencies change. If the return value is a promise, the cleanup actions may be executed at the wrong time or not at all, leading to memory leaks and other issues.

To avoid these problems, it is recommended to use a synchronous function as the callback function of useEffect, and handle any asynchronous operations within that function using async and await. For example:
