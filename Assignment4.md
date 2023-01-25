Q1. Is JSX mandatory for React ?
Ans. No JSX is not mandatory for React but most people find it helpful while working with UI inside the javaScript code.
We can define an element using React.createElement(type, {props}, children)

Q2. Is ES6 mandatory for React ?
Ans. No ES6 is not mandatory for React but it's highly recommended to use ES6. Any javascript expressions (pure js) can be used in JSX to render React elements.

Q3. { TitleComponent } vs { <TitleComponent /> } vs { <TitleComponent> </TitleComponent> } in JSX.
Ans.
{ TitleComponent } => This is a way to show variable value in JSX. If there is no value then nothing will display in UI but a warning in console.

{ <TitleComponent /> } => This is a way to render a function in JSX. it is self closing tag we can also pass props through it.

{ <TitleComponent> </TitleComponent>} => This same as <TitleComponent /> except that we can render children as well in this way.
{<TitleComponent>props.children</TitleComponent>}

Q4. How can I write comments in jsx ?
Ans. In JSX inside {} we can write any code of javascript so we can write comment as well same as javaScript.

{// This is a single line comment }

            OR

{/\*
This
is
a
multi
line
comment
\*/}

Q5. What is <React.Fragment></React.Fragment> and <></> ?
Ans. <React.Fragment></React.Fragment> and <></> is a react feature to group a list of children without adding extra node to the DOM.
when we use <React.Fragment></React.Fragment> can pass only `key` attribute in short syntax <></> we can not pass any attribute.

Q6. What is virtual DOM ?
Ans. It is a programming concept in which a virtual representation of Real DOM is kept with us and this virtual representation is known as virtual DOM.
React uses `Reconciliation` process which uses virtual DOM that is why we need VDOM.

Q7. What is Reconciliation in react ?
Ans. React uses `Diff Algorithm` and this algo finds the diff b/w one tree and other tree and it will only rerender the portion which is changed.
This process is known as `Reconciliation` process.
In React, we pass props to a component, when any of the prop changes, a reconciliation process is triggered internally by react which traverses the whole component hierarchy to mark any changes required in the given component at a time.

Q8. What is React Fiber ?
Ans. It is a new reconciliation engine of React introduced in React 16. The goal of React fiber is to increase its suitablilty for areas like animation, layout, and gestures. Its headline feature is incremental rendering which is the ability to split rendering work into chunks and spread it out over multiple frames.

Q9. Why do we need key in React ? When do we need keys in React ?
Ans. `key` is a attribute which need to include when creating lists of elements. keys helps React to identify exact elements which changed.
key must be unique for every element. can not use same key for two or more elements. It will throw an error in console.
key must be used when siblings are of same elements type.

Q10. Can we use index as key in react ?
Ans. Yes we can use index as key but it is not recommended because if the order of elements changed react may confuse which element need to be change.
It is advised to use index as key when there is no othe option available.

NO key << INDEX as key <<<<<< Unique id as key

Q11. What are props in React ? Ways to use props ?
Ans. props are used to pass some information to its child component. props are similar to HTML attributes, but you can pass any JS value in props. It is immutable i.e, it is read only property, we can not change it.

# Ways to use props -

    - props without destructuring:
        - parent component: <Food name = { "Burger" } price={ 100 }   />
        - child component: const FoodCard = (props) => { const name = props.name; const price = props.price; }

    - props with destructuring:
        - parent component: <Food name = { "Burger" } price={ 100 }   />
        - child component: const FoodCard = ({ name, price }) => {
            return <>
        {name} {price}
        </> }

    - props with default value: at the end of the component just before exporting our component we define our default value of props.
        function Tool({name, tool}) {

    return (
      <div>
        <h1>My name is {name}.</h1>
        <p>My favorite design tool is {tool}.</p>
      </div>
    );

}

Tool.defaultProps = {
name: "Designer",
tool: "Adobe XD"
}
export default Tool

Q12. What is Config driven UI ?
Ans. Config-driven UI is one of the UI design pattern in which the UI is rendered based on the configuration parameter sent by the backend. This is one of the popular pattern used in the industry now.
