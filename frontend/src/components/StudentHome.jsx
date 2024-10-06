function StudentHome() {
  return (
    <div className="flex flex-col text-center items-center justify-center h-full w-full overflow-y-scroll">
      <img
        className="h-32 w-32 md:h-60 md:w-60"
        src="/images/profileDefault.jpg"
        alt="profile default"
      />

      <p className="mt-5 md:text-xl text-base">Name: Md Rafsun Ul Haque</p>

      <div className="md:flex md:gap-6 md:mt-3 md:text-xl text-base">
        <p>Father&apos;s Name: Md Mostayedul Haque</p>
        <p>Mother&apos;s Name: Ainun Nahar</p>
      </div>

      <div className="md:flex md:gap-6 md:mt-3 md:text-xl text-base">
        <p>Email: mruhauqer@gmail.com</p>
        <p>Mobile No: 01726540797</p>
      </div>

      <div className="md:flex md:gap-6 md:mt-3 md:text-xl text-base">
        <p>Gender: Male</p>
        <p>Date of Birth: 3rd January, 1996</p>
      </div>

      <div className="md:flex items-center md:mt-3 md:text-xl md:gap-3 text-base">
        <p>Batch No: 1</p>
        <p>Course: Web development (6 Months)</p>
        <p>NID:3308230808432</p>
      </div>

      <p className="md:mt-3 md:text-xl text-base">
        Present Address: 181/2 Fazlulbari Chowdhuri Road, Mathpara, Upozila,
        Kushtia
      </p>
      <p className="md:mt-3 md:text-xl text-base">
        Permanent Address: 181/2 Fazlulbari Chowdhuri Road, Mathpara, Upozila,
        Kushtia
      </p>
      <p className="md:mt-3 md:text-xl text-base">
        Education: MSc in Computer Science and Engineering
      </p>
      <p className="md:mt-3 md:text-xl text-base">
        Facebook Id Link: https://www.facebook.com/
      </p>
      <p className="md:mt-3 md:text-xl text-base">
        Guardian Phone Number: 01726540797
      </p>
    </div>
  );
}

export default StudentHome;
