# Name of my project is "Dev-Stack" Also I will call "Dev-Stack-Builder"

## Project Description

**Dev Stack** is a technology that discovery and stack-building application. Users can explore this and add their favorite technologies to their personal stack.The project is built with React, TypeScript, and Tailwind CSS with a clean and responsive user interface.

## Technologies Used

- ⚛️ React
- 🟦 TypeScript
- 🎨 Tailwind CSS
- ⚡ Vite
- 🔔 React Hot Toast
- 📄 JSON Data
- 🧩 React Hooks

## Features

### 1. Explore Technologies
Users can browse different technologies with their name, description, category, rating, level, and icon.

### 2. Build Your Stack
Users can add technologies to their own stack and see all selected technologies in one place.

### 3. Manage Your Stack
Users can remove individual technologies or remove all selected technologies from their stack. Toast notifications are also shown for user actions.


# React Questions & Answers:

## What is JSX, and why is it used in React?

JSX is basically a HTML syntax or write HTML code inside JavaScript or TypeScript

## What is the difference between props and state?

Props are used to pass data from one parent component to a child component . On the other hand State basically used to store data that comes from a component and can change over time.

## What does the useState hook do, and where did you use it in this project?

useState is a React Hook used to create and manage changing data in a component. Example : When a technology is added or removed, the state is updated.
In this project, I used useState in App.tsx to store the selected technologies in the user's stack.

const [stack, setStack] = useState<Technology[]>([]);

## What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component, such as fetching data from an API or JSON file.
However, in this project, the JSON data is loaded using a Promise with React's use() and Suspense, so I did not need useEffect for loading the JSON data.

## Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list. It helps React understand which item was added, removed, or changed and so on.

## What is conditional rendering? Show one place I used it.

Conditional rendering means showing different UI elements based on a condition.I used it in the Your Stack component.
Here i most probably used : 

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  stack.map((technology) => ...)
)}

## How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child using props.
For Example :
<TechnologyCard
  technology={technology}
  handleAddToStack={handleAddToStack}
/>