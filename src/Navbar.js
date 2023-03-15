import { NavLink } from 'react-router-dom';
import './Navbar.css'
import React from 'react'

function Navbar() {
  const savedata = () => {
    localStorage.setItem("Name", "Madhuri")
    localStorage.setItem("Password", "madhuri" )
  }
  const changestyle = ({ isActive }) => {
    return {
      color: isActive ? '#55a5ac' : 'white',
      backgroundColor: isActive ? 'white' : '#55a5ac',
      padding: '1%',
      borderRadius: '5px',
      fontSize: '20px'
    }
  }
  return (
    <>
      <div className='navbar' style={{ backgroundColor: '#55a5ac', height: '35px', color: 'white' }}>
        <NavLink to="/" style={changestyle} className="navitem">Dash Board</NavLink>
        <div className='navbar-left'>
          <NavLink to="students" style={changestyle} className="navitem">Students</NavLink>
          <NavLink to="courses" style={changestyle} className="navitem">Courses</NavLink>
          <NavLink to="grades" style={changestyle} className="navitem">Grades</NavLink>
          <NavLink to="login"style={changestyle} className="navitem"><button className="navbutton" onClick={savedata} style={{backgroundColor:"#d5cf5b",border:"none",padding:'3%', fontSize:"15px"}}>Login</button></NavLink>
        </div>
      </div>
    </>

  )
}

export default Navbar;
