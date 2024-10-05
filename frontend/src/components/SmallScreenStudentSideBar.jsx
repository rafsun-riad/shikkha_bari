function SmallScreenStudentSideBar({ onSetSmallScreen }) {
  return (
    <div className="absolute top-0 left-0 bg-gray-600 w-[70%] sm:w-[50%] h-full z-10">
      <div className="relative w-full h-full">
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
    </div>
  );
}

export default SmallScreenStudentSideBar;
