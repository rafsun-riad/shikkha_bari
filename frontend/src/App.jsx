import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import StudentHome from './components/StudentHome';
import PaymentHistory from './components/PaymentHistory';
import StudentCourseInfo from './components/StudentCourseInfo';
import StudentInfo from './components/StudentInfo';
import StudentInfoUpdate from './components/StudentInfoUpdate';
import StudentNotice from './components/StudentNotice';
import StudentProfile from './components/StudentProfile';
import StudentCourseModule from './components/StudentCourseModule';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route index element={<StudentHome />} />
          <Route path="payment" element={<PaymentHistory />} />
          <Route path="course-info" element={<StudentCourseInfo />} />
          <Route path="course-module" element={<StudentCourseModule />} />
          <Route path="student-info" element={<StudentInfo />} />
          <Route path="update-student-info" element={<StudentInfoUpdate />} />
          <Route path="notice" element={<StudentNotice />} />
          <Route path="profile" element={<StudentProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
