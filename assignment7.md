Q1. What are various ways to add images into our App? Explain with code examples.
Ans. There are few ways to add images :

- Using the full URL of the image for the web (CDN) or any public images.
  Example : <img src="https://reactjs.org/logo-og.png" alt="React Image" />

- Adding the image into the project Drag your image into your project and import it into the desired component.

import reactLogo from "./reactLogo.png";

export default function App() {

return <img src={reactLogo} alt="react logo" />
}

- The correct way to structure images in your project is to add them in an images folder. If you are using other assets than just images, you might want to add all the assets folders.

import reactLogo from "../../assets/images/reactLogo.png";

export default function App() {

return <img src={reactLogo} alt="react logo" />
}

Q2. What would happen if we do console.log(useState())?
Ans. If we do console.log(useState()), we get an array of 2 elements.
[undefined, function] -> here undefined is 'state' and the setState function is bound dispatchSetState to upadate the state.

Q3. How will useEffect behave if we don't add a dependency array ?
Ans. When the dependency array is not included in the arguments of useEffect() hook, the callback function will be executed every time the component is rendered and re-rendered.

useEffect(() => {
console.log("I run everytime this component rerenders")
});

Q4. What is SPA?
Ans. Single Page Application (SPA) is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required.

Q5. What is difference between Client Side Routing and Server Side Routing?
Ans. In Server-side routing or rendering (SSR), every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In Client-side routing or rendering (CSR), during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All Single Page Applications uses client-side routing.
