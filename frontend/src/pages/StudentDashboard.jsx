import { useState } from 'react';

import StudentSidebar from '../components/StudentSidebar';
import StudentNavbar from '../components/StudentNavbar';
import { Outlet } from 'react-router-dom';
import SmallScreenStudentSideBar from '../components/SmallScreenStudentSideBar';

function StudentDashboard() {
  const [smallScreenBar, setSmallScreenBar] = useState(false);

  function handleSmallScreenBarShown() {
    setSmallScreenBar((smallScreenBar) => !smallScreenBar);
  }

  return (
    <div className=" h-screen w-screen relative">
      <StudentNavbar onSetSmallScreen={handleSmallScreenBarShown} />
      {smallScreenBar && (
        <SmallScreenStudentSideBar
          onSetSmallScreen={handleSmallScreenBarShown}
        />
      )}
      <div className="flex h-[88%]">
        <div className="w-[16%] hidden md:block">
          <StudentSidebar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default StudentDashboard;
