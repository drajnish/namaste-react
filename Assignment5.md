Q1. What is the difference between named export and default export and \* as export ?
Ans.

- Named Export : using named export we can export more than one component / variable / object from same file.
  e.g, export const compName = {}

to import we use { }
import { compName } from './compAddress'

- default Export : using this we can export only one component / variable / object from one file.

to import we can give any name without { } but common convention is to use the same name of component to import.
import AliasName from './comAddress'

- \* as export : It is used to import all exports from a module into a single object. It's used with the import statement to import all exports from another module. The exported properties can be accessed using dot notation on the imported object.

# example
  // module-1.js
export const name = "John Doe";
export const age = 30;
export const address = "123 Main St.";

// module-2.js
import * as person from './module-1';

console.log(person.name); // "John Doe"
console.log(person.age); // 30
console.log(person.address); // "123 Main St."

In the example above, all exports from module-1.js are imported into a single object named person. This allows you to access all the exported properties using dot notation on the person object.

The * as syntax is useful when you want to import all exports from a module into a single object, rather than importing each export individually.

Q2. What is the importance of config.js file?
Ans. In this file we assign all the hardcoded/constant values to a variable and export it so we can import that variable whenever we need it. It also becomes easy to change the value of that variable (if neccessary) at one place instead of changing value in different different components.

Q3. What are React Hooks ?
Ans. React hooks are simple JS functions that we can use to isolate the reusable part from a functional component.

React Hooks are introduced in React 16.8 version, before the introduction of Hooks to handle states and life cycle methods we have to use class components.
With the use of React Hooks we can do all the things in functional component as well.

Q4. Why do we need useState() hook ?
Ans. useState() is used to create state variable.
In React we can not update local variables value directly react takes control of changing its state variables. That's why we use useState() which provides a function to update the state variable.

const [state, setState] = useState(initialValue)
