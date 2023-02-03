Q1. What is a microservice?
Ans. Microservices (microservice architecture) : are an architectural and organizational approach to software development.
In this an application is built as independent components that run each application process as a service.
These services communicate via a well defined interface using lightweight APIs.
Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific function of an application.

Microservices make applications -

- easier to scale and faster to develop
- Independently deployable
- Loosely coupled
- accelerating time to market for new features
- Highly maintainable and testable

Q2. What is Monolith architecture?
Ans. Monolithic Architecture :

- All process are tightly coupled and run as single service. This means if one process of the application experiences a spike in demand, the entire architecture must be scaled.
- Adding or improving a monolithic application's features become more complex as the code base grows.
- It limits experimentation and makes it difficult to implement new ideas.

Q3.
Ans. With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

![monolith microservices](monolith-microservices.png)

Q4. Why do we need a useEffect hook?
Ans. It is a js function provided by react. It is used to avoid side effects like fetching API, updating DOM etc. in your component.
It takes two arguments a callback function and a dependecy array.

useEffect(() => {}, [dependecyArray])

if dependecy array is empty i.e, [] : useEffect function calls callback function once at the time of first rendering of the component.

if dependecy array has dependecy i.e, [somedependecy] : useEffect will call the function once at the time of first rendering and every time when the dependecy is changed.

if no dependecy array : useEffect will call the function every time component rendered. it may lead to infinity loop of rendering a component.

Q5. What is optional chaining (?.) ?
Ans. The ( ?. ) operator is like the ( . ) chaining operator, except that if a reference is `nullish` (null or undefined) it returns `undefined` instead of throwing an error.

Q6. What is shimmer UI?
Ans. Shimmer is a temporary animation placeholder for when a service call takes time to return data.
It resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up.
It gives people idea of what's about to come, which gives better design and user experience as compared to usual loader.

Q7. What is the difference between Js expression and JS statement?
Ans. JS expression : It is a valid unit of code that resolves to a value.
e.g, 1) 3 + 2 2) console.log('sometext')

JS Statement : It does not return any value.
e.g, 1) let x; 2) if else condition statement

Q8. What is conditional rendering? explaine with code example.
Ans. Conditional rendering in React works the same way as conditions works in javascript. It renders element/component in component if it satisfies the condition.
e.g, Using

- Logical operator : {isLogged && <Profile />}

- Ternary operator : {isLogged ? <h1>Welcome UserName</h1> : <h1>Welcome Guest</h1>}

- if else condition : if(isLogged) { return <Profile />} else { return <h1>You are not logged in </h1>}

Q9. What is CORS?
Ans. Cross Origin Resource Sharing is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme or port) orther than its own from which a browser should permit loading resources.

Q10. What is async and await?
Ans. The async function declaration declares an async function where the await keyword is permitted within the function body.
These keywords enables asynchronous, promise-based behaviour to be written in cleaner style, avoiding the need of explicitly configure promise chains.

e.g, async function fetchData() {
const data = await fetch('API_URL');
const json = await data.json();
}

Q11. What is the use of const json = await data.json() in getRestaurants()?
Ans. json() method takes the response from data object and reads it to completion.
It returns a promise which resolves with the result of parsing the body text as JSON.

Note: Despite the method being name json(), the result is not JSON but is instead the result of taking JSON as input
and parsing it to produce a javascript object.
