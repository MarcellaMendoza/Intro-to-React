import React from 'react';
import './App.css';

// Import your component on the line below and name it Bar
import Bar from './components/Bar'


function App() {
  return (
    <main>
      
      {/* Show your component using the line below. */}
      {/* These are comments */}
      <Bar />

      
    </main>
  );
}

export default App;




// Running React on Repl.it

// React is a popular JavaScript library for building user interfaces.

// Vite is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

// Using the two in conjunction is one of the fastest ways to build a web app.

// Getting Started

// Hit run
// Edit App.jsx and watch it live update!
// By default, Replit runs the dev script, but you can configure it by changing the run field in the .replit file.




// Instructions

// Welcome to your first React project! It's a lot to take in, but try not to get overwhelmed. For this lesson, you only need to focus on 'App.jsx' and 'Bar.jsx', which is in the 'components' directory.

// You will need to reformat the following HTML code into a React component named Bar:

// <div class="topnav">
//     <a class="active" href="#home">Home</a>
//     <a href="#about">About</a>
//     <a href="#contact">Contact</a>
//     <input type="text" placeholder="Search..." />
//   </div>
// This component should use the styling already created in the 'Bar.css' file. Once you have created the component in 'Bar.jsx' and included the component inside 'App.jsx', you should be able to see a basic navigation bar with three tabs and a simple search bar.