function StudentInfoForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-y-scroll pt-24">
      <h2 className="text-2xl md:text-4xl my-7 underline">
        Student Information Form
      </h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full h-full md:p-10 p-4"
      >
        <label htmlFor="fullName" className="text-xl md:text-2xl block mb-2">
          Student Full Name:{' '}
        </label>
        <input
          placeholder="Enter your full name"
          className="p-3 w-full md:w-[49%] text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
          type="text"
          required
          id="fullName"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 w-full">
          <div className="">
            <label
              htmlFor="fatherName"
              className="text-xl md:text-2xl block mb-2"
            >
              Father&apos;s Name:{' '}
            </label>
            <input
              placeholder="Enter your father's name"
              className="p-3 w-full text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
              type="text"
              id="fatherName"
              required
            />
          </div>

          <div className="">
            <label
              htmlFor="fullName"
              className="text-xl md:text-2xl block mb-2"
            >
              Mother&apos;s Name:{' '}
            </label>
            <input
              placeholder="Enter your mother's name"
              className="p-3 w-full text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
              type="text"
              id="motherName"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 w-full">
          <div className="">
            <label htmlFor="email" className="text-xl md:text-2xl block mb-2">
              Email Address:{' '}
            </label>
            <input
              placeholder="Enter your email address"
              className="p-3 w-full text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
              type="email"
              id="email"
              required
            />
          </div>

          <div className="">
            <label
              htmlFor="fullName"
              className="text-xl md:text-2xl block mb-2"
            >
              Phone Number:{' '}
            </label>
            <input
              placeholder="01XXXXXXXXX"
              className="p-3 w-full text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
              type="tel"
              id="phoneNumber"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 w-full py-3">
          <div className="flex items-center gap-3">
            <p className="text-xl md:text-2xl ">Gender: </p>
            <div>
              <input
                className="text-xl md:text-2xl"
                type="radio"
                name="gender"
                value="male"
                id="male"
                required
              />
              <label htmlFor="male" className="text-xl md:text-2xl pl-2">
                Male
              </label>
            </div>
            <div>
              <input
                className="text-xl md:text-2xl"
                type="radio"
                name="gender"
                value="female"
                id="female"
                required
              />
              <label htmlFor="male" className=" text-xl md:text-2xl pl-2">
                Female
              </label>
            </div>
          </div>

          <div className="">
            <label htmlFor="birthday" className=" text-xl md:text-2xl">
              Date of birth:{' '}
            </label>
            <input
              className="text-xl md:text-2xl focus:outline-none border-[2px] border-gray-500 rounded-md p-3"
              type="date"
              id="birthday"
              required
            />
          </div>
        </div>

        <div className="text-xl md:text-2xl mt-5 py-3 sm:flex items-center gap-6 space-y-6">
          <div>
            <label htmlFor="course-type">Select Course Type: </label>
            <select
              className="border-[2px] border-gray-400 p-3 rounded-md"
              name="course-type"
              id="course-type"
              required
            >
              <option value="6 months">6 Months</option>
              <option value="3 months">3 Months</option>
              <option value="Special">Special Course</option>
            </select>
          </div>

          <div>
            <label htmlFor="course-name">Course Name: </label>
            <select
              className="border-[2px] border-gray-400 p-3 rounded-md"
              name="course-name"
              id="course-name"
              required
            >
              <option value="web-design">Web Design & Development</option>
            </select>
          </div>
        </div>
        <div className="text-xl md:text-2xl mt-5">
          <label className=" text-xl md:text-2xl block mb-2" htmlFor="nid">
            NID:{' '}
          </label>
          <input
            type="text"
            id="nid"
            placeholder="Enter NID number"
            className="p-3 w-full md:w-[50%] text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
            required
          />
        </div>
        <div className="text-xl md:text-2xl mt-5 ">
          <label
            className="text-xl md:text-2xl block mb-2"
            htmlFor="presentAddress"
          >
            Present Address:{' '}
          </label>
          <input
            type="text"
            id="presentAddress"
            placeholder="Enter Present Address"
            className="p-3 w-full md:w-[50%] text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
            required
          />
        </div>
        <div className=" text-xl md:text-2xl mt-5 ">
          <label
            className=" text-xl md:text-2xl block mb-2"
            htmlFor="parmanentAddress"
          >
            Parmanent Address:{' '}
          </label>
          <input
            type="text"
            id="parmanentAddress"
            placeholder="Enter Parmanent Address"
            className="p-3 w-full md:w-[50%] text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
            required
          />
        </div>
        <div className=" text-xl md:text-2xl mt-5 ">
          <label
            className=" text-xl md:text-2xl block mb-2"
            htmlFor="education"
          >
            Education:{' '}
          </label>
          <input
            type="text"
            id="education"
            placeholder="Enter Edcational Qualification"
            className="p-3 w-full md:w-[50%] text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
            required
          />
        </div>

        <div className="text-xl md:text-2xl mt-5">
          <label
            className="text-xl md:text-2xl block mb-2"
            htmlFor="facebookId"
          >
            Facebook ID Link:{' '}
          </label>
          <input
            type="url"
            id="facebookId"
            placeholder="Enter Facebook Id link"
            className="p-3 w-full md:w-[50%] text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
            required
          />
        </div>

        <div className=" text-xl md:text-2xl mt-5 ">
          <label
            className=" text-xl md:text-2xl block mb-2"
            htmlFor="guardianNumber"
          >
            Guardian Number:{' '}
          </label>
          <input
            type="tel"
            id="guardianNumber"
            placeholder="01XXXXXXXXX"
            className="p-3 w-full md:w-[50%] text-xl md:text-2xl placeholder:text-xl focus:outline-none border-[2px] border-gray-500 rounded-md"
            required
          />
        </div>
        <div className="flex items-center justify-center mt-10">
          <button
            type="submit"
            className="inline-block px-8 py-4 bg-green-600 text-white text-center  text-lg md:text-xl w-full md:w-1/4 rounded-md hover:bg-green-800 active:translate-y-1 transition-all duration-100"
          >
            Submit
          </button>
        </div>
        <div className="h-24"></div>
      </form>
    </div>
  );
}

export default StudentInfoForm;
