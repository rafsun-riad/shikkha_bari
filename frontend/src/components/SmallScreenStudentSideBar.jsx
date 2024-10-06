import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

const SmallScreenStudentSideBar = forwardRef(function SmallScreenStudentSideBar(
  { onSetSmallScreen },
  smallScreenSidebarRef
) {
  return (
    <div
      ref={smallScreenSidebarRef}
      className="absolute top-0 left-0 bg-gray-600 w-[70%] sm:w-[40%] h-full z-10"
    >
      <div className="relative w-full">
        <div
          className=" absolute top-5 right-5 text-white p-1 cursor-pointer hover:bg-gray-500"
          onClick={onSetSmallScreen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
            />
          </svg>
        </div>
      </div>

      <div className="w-full h-full p-2 mt-10">
        <ul className=" text-white text-lg">
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            <NavLink to="">Home</NavLink>
          </li>

          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            <NavLink to="payment">Payment History</NavLink>
          </li>

          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            <NavLink to="course-info">Course Information</NavLink>
          </li>

          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            <NavLink to="course-module">Course Module</NavLink>
          </li>

          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            <NavLink to="student-info">Student Information Form</NavLink>
          </li>

          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            <NavLink to="update-student-info">Update Student Info</NavLink>
          </li>

          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            <NavLink to="notice">Notice</NavLink>
          </li>

          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            <NavLink to="profile">Profile</NavLink>
          </li>

          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            Contact Us
          </li>

          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
});

export default SmallScreenStudentSideBar;
