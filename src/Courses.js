import React from 'react';
import  {useNavigate} from 'react-router-dom';
function Courses() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Courses Page</h1>
      <button style={{backgroundColor:'#55a5ac', color:"white", padding:"1%", borderRadius:"5px", border:"none", fontSize:"20px"}} onClick={() =>{
        navigate(-1);
      }}>GoBack</button>
    </div>
  )
}

export default Courses;


