import React from 'react'

// Import your styling from 'Bar.css' on the line below:
import './Bar.css'

// Format the HTML into a React component named Bar on the lines below:
function Bar() {
  return (
    <div class="topnav">
    <a class="active" href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <input type="text" placeholder="Search..." />
  </div>
  )
}

  


// Export your component on the line below:
export default Bar;