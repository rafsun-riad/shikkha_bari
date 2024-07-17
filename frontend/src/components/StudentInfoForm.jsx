function StudentInfoForm() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-y-scroll pt-24">
      <h2 className="text-4xl my-7 underline">Student Information Form</h2>
      <form action="" className="w-full h-full p-10">
        <label htmlFor="fullName" className="text-2xl">
          Student Full Name:{' '}
        </label>
        <input
          placeholder="Enter your full name"
          className="p-3 w-[35%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500 "
          type="text"
          id="fullName"
        />

        <div className="grid grid-cols-2 gap-5 mt-5 w-full">
          <div className="">
            <label htmlFor="fatherName" className="text-2xl ">
              Father&apos;s Name:{' '}
            </label>
            <input
              placeholder="Enter your father's name"
              className="p-3 w-[65%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500"
              type="text"
              id="fatherName"
            />
          </div>

          <div className="">
            <label htmlFor="fullName" className="text-2xl">
              Mother&apos;s Name:{' '}
            </label>
            <input
              placeholder="Enter your mother's name"
              className="p-3 w-[65%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500 "
              type="text"
              id="motherName"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5 w-full">
          <div className="">
            <label htmlFor="email" className="text-2xl ">
              Email Address:{' '}
            </label>
            <input
              placeholder="Enter your email address"
              className="p-3 w-[65%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500"
              type="email"
              id="email"
            />
          </div>

          <div className="">
            <label htmlFor="fullName" className="text-2xl">
              Phone Number:{' '}
            </label>
            <input
              placeholder="01XXXXXXXXX"
              className="p-3 w-[65%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500 "
              type="tel"
              id="phoneNumber"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5 w-full py-3">
          <div className="flex items-center gap-3">
            <p className="text-2xl ">Gender: </p>
            <div>
              <input
                className="text-xl"
                type="radio"
                name="gender"
                value="male"
                id="male"
              />
              <label htmlFor="male" className="text-2xl pl-2">
                Male
              </label>
            </div>
            <div>
              <input
                className="text-xl"
                type="radio"
                name="gender"
                value="female"
                id="female"
              />
              <label htmlFor="male" className="text-2xl pl-2">
                Female
              </label>
            </div>
          </div>

          <div className="">
            <label htmlFor="birthday" className="text-2xl">
              Date of birth:{' '}
            </label>
            <input
              className="text-2xl focus:outline-none border-b-[2px] border-gray-500 "
              type="date"
              id="birthday"
            />
          </div>
        </div>

        <div className="text-2xl mt-5 py-3 flex items-center gap-3">
          <div>
            <label htmlFor="course-type">Select Course Type: </label>
            <select
              className="border-[2px] border-gray-400"
              name="course-type"
              id="course-type"
            >
              <option value="6 months">6 Months</option>
              <option value="3 months">3 Months</option>
              <option value="Special">Special Course</option>
            </select>
          </div>

          <div>
            <label htmlFor="course-name">Course Name: </label>
            <select
              className="border-[2px] border-gray-400"
              name="course-name"
              id="course-name"
            >
              <option value="web-design">Web Design & Development</option>
            </select>
          </div>
        </div>
        <div className="text-2xl mt-5">
          <label className="text-2xl" htmlFor="nid">
            NID:{' '}
          </label>
          <input
            type="text"
            id="nid"
            placeholder="Enter NID number"
            className="p-3 w-[35%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500 "
          />
        </div>
        <div className="text-2xl mt-5">
          <label className="text-2xl" htmlFor="presentAddress">
            Present Address:{' '}
          </label>
          <input
            type="text"
            id="presentAddress"
            placeholder="Enter Present Address"
            className="p-3 w-[50%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500 "
          />
        </div>
        <div className="text-2xl mt-5">
          <label className="text-2xl" htmlFor="parmanentAddress">
            Parmanent Address:{' '}
          </label>
          <input
            type="text"
            id="parmanentAddress"
            placeholder="Enter Parmanent Address"
            className="p-3 w-[50%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500 "
          />
        </div>
        <div className="text-2xl mt-5">
          <label className="text-2xl" htmlFor="education">
            Education:{' '}
          </label>
          <input
            type="text"
            id="education"
            placeholder="Enter Edcational Qualification"
            className="p-3 w-[50%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500 "
          />
        </div>

        <div className="text-2xl mt-5">
          <label className="text-2xl" htmlFor="facebookId">
            Facebook ID Link:{' '}
          </label>
          <input
            type="url"
            id="facebookId"
            placeholder="Enter Facebook Id link"
            className="p-3 w-[50%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500 "
          />
        </div>

        <div className="text-2xl mt-5 pb-24">
          <label className="text-2xl" htmlFor="guardianNumber">
            Guardian Number:{' '}
          </label>
          <input
            type="tel"
            id="guardianNumber"
            placeholder="01XXXXXXXXX"
            className="p-3 w-[50%] text-2xl placeholder:text-xl focus:outline-none border-b-[2px] border-gray-500 "
          />
        </div>
      </form>
    </div>
  );
}

export default StudentInfoForm;
