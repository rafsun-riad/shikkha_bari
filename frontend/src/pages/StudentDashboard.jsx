import StudentSidebar from '../components/StudentSidebar';
import StudentNavbar from '../components/StudentNavbar';
import { Outlet } from 'react-router-dom';

function StudentDashboard() {
  return (
    <div className=" h-screen w-screen">
      <StudentNavbar />
      <div className="flex h-[88%]">
        <StudentSidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default StudentDashboard;
