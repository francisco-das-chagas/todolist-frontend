import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


const Header = () => {
  return (
    <header className="header">
      <div className="title">
        <h1>To do List</h1>
      </div>
      <div className="btn-area">
        <Link to="/" className="btn-home">
          <span>Home</span>
        </Link>
        <Link to="/create" className="btn-add">
          <span>Add</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
