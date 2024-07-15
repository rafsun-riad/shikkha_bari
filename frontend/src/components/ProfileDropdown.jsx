import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import profileDefault from '../assets/profileDefault.jpg';

function ProfileDropdown() {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const profileMenuRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (
        e.target !== profileMenuRef.current &&
        e.target !== imageRef.current
      ) {
        setProfileMenuOpen(false);
      }
    });

    return () => {};
  }, []);

  return (
    <div className="">
      <div className=" relative">
        <img
          ref={imageRef}
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
          className=" h-14 w-14 rounded-full object-cover border-[2px] border-gray-300 cursor-pointer"
          src={profileDefault}
          alt=""
        />
        {profileMenuOpen && (
          <div
            ref={profileMenuRef}
            className="bg-white p-4 w-40 shadow-lg absolute -left-10"
          >
            <ul>
              <Link to="profile">
                <li className="p-2 text-lg cursor-pointer hover:bg-blue-100 rounded">
                  Profile
                </li>
              </Link>

              <li className="p-2 text-lg cursor-pointer hover:bg-blue-100 rounded">
                Contact Us
              </li>

              <li className="p-2 text-lg cursor-pointer hover:bg-blue-100 rounded">
                Log out
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileDropdown;
