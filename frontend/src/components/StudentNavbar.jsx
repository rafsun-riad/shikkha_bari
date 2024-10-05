import ProfileDropdown from './ProfileDropdown';

function StudentNavbar({ onSetSmallScreen }) {
  return (
    <div className="h-[10%] sm:h-[12%] w-full bg-slate-600">
      <div className="h-full container mx-auto flex items-center justify-between p-4">
        <div className="text-white md:hidden" onClick={onSetSmallScreen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"
            />
          </svg>
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
}

export default StudentNavbar;
