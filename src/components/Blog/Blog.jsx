import React from "react";
import Banner from "../Banner/Banner";

const Blog = () => {
  return (
    <>
    <Banner pageName="Blog" />
    <div className="flex flex-col gap-10 py-5">
      <div className="card border rounded-md p-5 hover:bg-slate-300 hover:shadow-xl">
        <h3 className="text-center text-3xl underline py-3">When should We use context API? </h3>
        <p className="text-black-400">
        We should use the context API in React when we need to share data between multiple components that are nested deep in the component tree and would be cumbersome to pass down as props to each component individually.
        </p>
        <p className="text-gray-400 py-3">
        For example, if we have a theme object that needs to be accessed by several components throughout our app, we could use the context API to provide the theme object to all of those components without having to pass it down as props manually.
        </p>
      </div>
      <div className="card border rounded-md p-5 hover:bg-slate-300 hover:shadow-xl">
        <h3 className="text-center text-3xl underline py-3">What is a custom hook?</h3>
        <p className="text-black-400">
        A custom hook is a reusable function in React that allows us to extract logic and state from a component, and then use that logic and state in other components. Custom hooks allow us to avoid code duplication and create more modular and reusable code.
        </p>
        <p className="text-gray-400 py-3">
        Moreover, Custom hooks are prefixed with the word "use", and can be used to encapsulate any stateful logic, such as handling form inputs, managing authentication, or fetching data from an API.
        </p>
      </div>
      <div className="card border rounded-md p-5 hover:bg-slate-300 hover:shadow-xl">
        <h3 className="text-center text-3xl underline py-3">What is useRef? </h3>
        <p className="text-black-400">
        useRef is a React Hook that provides a way to create and access a mutable reference that persists across component renders. It allows us to reference a DOM element or a value inside a component, and then use that reference to interact with the element or value without triggering a re-render.
        </p>
        <p className="text-gray-400 py-3">
        For example, we can use useRef to get a reference to an input element and then use that reference to focus the input or retrieve its current value. Another use case could be to store and access a previous state or prop value inside a component.
        </p>
      </div>
      <div className="card border rounded-md p-5 hover:bg-slate-300 hover:shadow-xl">
        <h3 className="text-center text-3xl underline py-3">What is useMemo?</h3>
        <p className="text-black-400">
        useMemo is a hook that helps us avoid unnecessarily re-computing values in our React components. It's useful when we have a function that takes a lot of time to compute and is called frequently. By using useMemo, we can memoize the result of that function so that it is only re-computed when its dependencies change.
        </p>
        <p className="text-gray-400 py-3">
        For example, We could use useMemo to compute the result of a complex calculation or to format a date in a specific way. By memoizing the result with useMemo, we can ensure that the calculation is only performed when necessary, improving the performance of our component.
        </p>
      </div>
    </div>
    </>
  );
};

export default Blog;
