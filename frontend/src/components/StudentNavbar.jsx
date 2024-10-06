import { forwardRef } from 'react';

import ProfileDropdown from './ProfileDropdown';

const StudentNavbar = forwardRef(function StudentNavbar(
  { onSetSmallScreen },
  smallScreenSidebarButtonRef
) {
  return (
    <div className="h-[10%] sm:h-[12%] w-full bg-slate-600">
      <div className="h-full container mx-auto flex items-center justify-between p-4">
        <div
          className="text-white md:hidden hover:bg-slate-500"
          onClick={onSetSmallScreen}
        >
          <img
            ref={smallScreenSidebarButtonRef}
            className="h-7 w-7"
            src="/images/CilHamburgerMenu.png"
            alt="CilHamburgerMenu"
          />
        </div>
        <div className="flex items-center gap-3 text-white text-3xl">
          <img
            className="h-14 sm:h-20 w-14 sm:w-20"
            src="/images/shikkhabariwhite.png"
            alt="shikkhabariwhite"
          />
        </div>
        <div className="hidden md:block">
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
});

export default StudentNavbar;
