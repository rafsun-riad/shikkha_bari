import ProfileDropdown from './ProfileDropdown';
import shikkhabariwhite from '../assets/shikkhabariwhite.png';

function StudentNavbar() {
  return (
    <div className="h-[12%] w-full bg-slate-600">
      <div className="h-full container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-white text-3xl">
          <img
            className="h-20 w-20"
            src={shikkhabariwhite}
            alt="shikkhabariwhite"
          />
        </div>
        <ProfileDropdown />
      </div>
      ;
    </div>
  );
}

export default StudentNavbar;
