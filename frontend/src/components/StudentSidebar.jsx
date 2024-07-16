import { NavLink } from 'react-router-dom';

function StudentSidebar() {
  return (
    <div className="w-[16%] h-full bg-gray-600 p-2">
      <ul className=" text-white text-xl">
        <NavLink to="">
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            Home
          </li>
        </NavLink>

        <NavLink to="payment">
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            Payment History
          </li>
        </NavLink>

        <NavLink to="course-info">
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            Course Information
          </li>
        </NavLink>
        <NavLink to="course-module">
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            Course Module
          </li>
        </NavLink>

        <NavLink to="student-info">
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            Student Information Form
          </li>
        </NavLink>

        <NavLink to="update-student-info">
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            Update Student Info
          </li>
        </NavLink>

        <NavLink to="notice">
          <li className="px-4 py-2 cursor-pointer hover:bg-gray-500 rounded">
            Notice
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default StudentSidebar;
