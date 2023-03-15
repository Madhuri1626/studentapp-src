import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Courses from './Courses';
import Grades from './Grades';
import Pagenotfound from './Pagenotfound';
import S1 from './S1';
import S2 from './S2';
import S3 from './S3';
import S4 from './S4';
import Students from './Students';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='courses' element={<Courses />} />
        <Route path='grades' element={<Grades />} />
        <Route path='students' element={<Students />}>
          <Route path='1262' element={<S1 />} />
          <Route path='1202' element={<S2 />} />
          <Route path='1207' element={<S3 />} />
          <Route path='1258' element={<S4 />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
