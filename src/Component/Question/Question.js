import React from 'react';
import './Question.css';


const Question = () => {
    return (
      <div className="questions">
        <hr />
        <h1>SOME QUESTIONS </h1>
        <h1>How does react work ?</h1>
        <p>React can be used to create mobile apps, single page applications, or more complicated apps if combined with additional technologies. Coding declaratively for Reactworks. We want you to picture the following code expressed as an app in order to demonstrate what we mean by declarative code.</p>
        <h1>Difference between props and state ?</h1>
        <p>Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes.</p>
        <h1>where we can use useEffect in react without using data loading ?</h1>
        <p>If and only if any value in the dependencies array [prop, state] has changed, the useEffect we employ will call the callback once the changes are being committed to the DOM. And Close a socket and clear timers are two cleaning steps for some side effects.</p>
          
       
        </div>
    );
};

export default Question;