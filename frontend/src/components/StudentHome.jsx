import profileDefault from '../assets/profileDefault.jpg';

function StudentHome() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-y-scroll">
      <img className="h-60 w-60" src={profileDefault} alt="profile default" />
      <p className="mt-5 text-xl">Name: Md Rafsun Ul Haque</p>
      <div className="flex gap-6 mt-3 text-xl">
        <p>Father&apos;s Name: Md Mostayedul Haque</p>
        <p>Mother&apos;s Name: Ainun Nahar</p>
      </div>
      <div className="flex gap-6 mt-3 text-xl">
        <p>Email: mruhauqer@gmail.com</p>
        <p>Mobile No: 01726540797</p>
      </div>
      <div className="flex gap-6 mt-3 text-xl">
        <p>Gender: Male</p>
        <p>Date of Birth: 3rd January, 1996</p>
      </div>
      <div className="flex items-center mt-3 text-xl gap-3">
        <p>Batch No: 1</p>
        <p>Course: Web development (6 Months)</p>
        <p>NID:3308230808432</p>
      </div>
      <p className="mt-3 text-xl">
        Present Address: 181/2 Fazlulbari Chowdhuri Road, Mathpara, Upozila,
        Kushtia
      </p>
      <p className="mt-3 text-xl">
        Permanent Address: 181/2 Fazlulbari Chowdhuri Road, Mathpara, Upozila,
        Kushtia
      </p>
      <p className="mt-3 text-xl">
        Education: MSc in Computer Science and Engineering
      </p>
      <p className="mt-3 text-xl">
        Facebook Id Link: https://www.facebook.com/
      </p>
      <p className="mt-3 text-xl">Guardian Phone Number: 01726540797</p>
    </div>
  );
}

export default StudentHome;
