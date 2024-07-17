import React from 'react'
import reactLogo from "../assets/react.svg"

export default function Navbar() {
  return (
    <nav className='navigation'>
      <div className='logo'>
        <img src={reactLogo} alt="React Logo" />
        <h3 className='logo-title'>ReactFacts</h3>
      </div>

      <ul>
        <li>React Course - Project 1</li>
      </ul>
    </nav>
  )
}
