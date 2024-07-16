import { Link } from 'react-router-dom';
import Button from '../components/Button';
import shikkhabariblack_slogan from '../assets/shikkhabariblack_slogan.png';

function Register() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className=" bg-backgroundPrimary flex flex-col gap-2 items-center justify-center h-screen w-screen">
      <img
        className="h-52 w-52"
        src={shikkhabariblack_slogan}
        alt="shikkha bari black slogan"
      />
      <div className=" p-4 md:p-8 bg-white rounded-md w-96 shadow-lg">
        <h2 className="text-center text-4xl font-bold mb-4">Sign Up</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl pb-1">
              Email Address
            </label>
            <input
              id="email"
              className=" w-full p-3 focus:outline-none border rounded-md"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="phoneNumber" className="text-xl pb-1">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              className=" w-full p-3 focus:outline-none border rounded-md"
              type="tel"
              placeholder="01XXXXXXXXX"
            />
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="password" className="text-xl pb-1">
              Password
            </label>
            <input
              id="password"
              className=" w-full p-3 focus:outline-none border rounded-md"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="confirmPassword" className="text-xl pb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              className=" w-full p-3 focus:outline-none border rounded-md"
              type="password"
              placeholder="Enter your confirm password"
            />
          </div>

          <Button btnTertiary type="submit" extraClass=" w-full mt-4">
            Sign Up
          </Button>
        </form>
        <div className="h-[1px] bg-gray-300 my-4"></div>
        <p className="text-center text-sm">
          Already have an account? Click here{' '}
          <Link className="text-blue-600 hover:underline" to="/">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
