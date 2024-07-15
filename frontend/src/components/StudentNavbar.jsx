import ProfileDropdown from './ProfileDropdown';

function StudentNavbar() {
  return (
    <div className=" h-[12%] w-full bg-slate-600">
      <div className="h-full container mx-auto flex items-center justify-between">
        <div>Logo</div>
        <ProfileDropdown />
      </div>
      ;
    </div>
  );
}

export default StudentNavbar;
