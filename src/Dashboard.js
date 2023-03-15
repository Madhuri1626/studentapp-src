import React from 'react'
import  {useNavigate} from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
  return (
    <div>
        <center>
            <h1>Welcome to SVECW Dashboard </h1>
            <h1>Courses : 5</h1>
            <h1>Students : 20</h1>
            <h1>Grades : 5</h1>
            <button style={{backgroundColor:'#55a5ac', color:"white", padding:"1%", borderRadius:"5px", border:"none", fontSize:"20px"}} onClick={() =>{
        navigate(-1);
      }}>GoBack</button>
            </center>
    </div>
  )
}

export default Dashboard
