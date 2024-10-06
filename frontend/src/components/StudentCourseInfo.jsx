function StudentCourseInfo() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h2 className=" text-2xl md:text-4xl underline mb-5">
        Course Information
      </h2>

      <div className="w-full">
        <h4 className=" text-xl md:text-2xl text-center">6 Months Courses</h4>
        <div className="grid p-2 grid-cols-4 w-full border-y-[2px] border-gray-300 text-sm md:text-xl mt-4 text-center">
          <p>Course Name</p>
          <p>Course Fee</p>
          <p>Class Time</p>
          <p>Course Taken</p>
        </div>

        <div className="grid p-2 grid-cols-4 w-full border-b-[2px] border-gray-300 text-sm md:text-xl text-center">
          <p>Web Design & Development</p>
          <p>12000</p>
          <p>1 hour</p>
          <p className="text-center flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 19H5V5h10V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8h-2m-11.09-.92L6.5 11.5L11 16L21 6l-1.41-1.42L11 13.17z"
              />
            </svg>
          </p>
        </div>

        <div className="grid p-2 grid-cols-4 w-full border-b-[2px] border-gray-300 text-sm md:text-xl text-center">
          <p>Digital Marketing</p>
          <p>8000</p>
          <p>1 hour</p>
          <p className="text-center flex items-center justify-center text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 19H5V5h10V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8h-2m-11.09-.92L6.5 11.5L11 16L21 6l-1.41-1.42L11 13.17z"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentCourseInfo;
