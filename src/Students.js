import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';

const Students = () => {
    const navigate = useNavigate();
    const changeStyle =({isActive})=>{
        return{
          color:isActive?'green':'blue'
        }
      }
    return (
        <div>
          <center>
            <h1> Students page</h1>
            <NavLink to="1262" style={changeStyle}> 1262 </NavLink>
            <br/>
            <NavLink to="1202" style={changeStyle}> 1202 </NavLink>
            <br/>
            <NavLink to="1207" style={changeStyle}> 1207 </NavLink>
            <br/>
            <NavLink to="1258" style={changeStyle}> 1258 </NavLink>
            <br/>
            <Outlet/>
            <br/>
            <button style={{backgroundColor:'#55a5ac', color:"white", padding:"1%", borderRadius:"5px", border:"none", fontSize:"20px"}} onClick={() =>{
        navigate(-1);
      }}>GoBack</button>
        </center>
        </div>
    );
};

export default Students;