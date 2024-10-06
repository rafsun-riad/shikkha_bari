import { useState, useRef, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import StudentSidebar from '../components/StudentSidebar';
import StudentNavbar from '../components/StudentNavbar';
import SmallScreenStudentSideBar from '../components/SmallScreenStudentSideBar';

function StudentDashboard() {
  const [smallScreenBar, setSmallScreenBar] = useState(false);

  const smallScreenSidebarButtonRef = useRef();
  const smallScreenSidebarRef = useRef();

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (
        e.target !== smallScreenSidebarButtonRef.current &&
        e.target !== smallScreenSidebarRef
      ) {
        setSmallScreenBar(false);
      }
    });
    return () => {};
  }, []);

  function handleSmallScreenBarShown() {
    setSmallScreenBar((smallScreenBar) => !smallScreenBar);
  }

  return (
    <div className=" h-screen w-screen relative">
      <StudentNavbar
        onSetSmallScreen={handleSmallScreenBarShown}
        ref={smallScreenSidebarButtonRef}
      />
      {smallScreenBar && (
        <SmallScreenStudentSideBar
          onSetSmallScreen={handleSmallScreenBarShown}
          ref={smallScreenSidebarRef}
        />
      )}
      <div className="flex h-[88%]">
        <div className="md:w-[25%] lg:w-[16%] hidden md:block">
          <StudentSidebar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default StudentDashboard;
