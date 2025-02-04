import { EnvelopeSimple, LockKey } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import Image from 'next/image'
import Head from "../components/Head";
function SignUpBox() {
  return (

    <>
    <Head />

    
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[424px] h-[564px] relative">
        {/* Sign in Heading */}
        <h2 className="text-2xl text-[20px] text-gray-800 text-start mb-6">Sign In</h2>

        {/* Sign in Form */}
        <form className="flex flex-col space-y-4">

          {/* name input */}
          <div className="flex items-center  border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <LockKey size={24} color="black" className="mx-2" />

            <input
              type="password"
              id="password"
              placeholder="Password"
              className=" block w-full  py-2  sm:text-sm text-black focus:outline-none" />
          </div>
          {/* Email Input */}
          <div className="flex items-center border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ">
            <EnvelopeSimple size={24} color="black" className="mx-2 " />

            <input

              type="email"
              id="email"
              placeholder="Email"
              className=" block w-full py-2  sm:text-sm text-black focus:outline-none " />
          </div>

          {/* Password Input */}
          <div className="flex items-center  border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
            <LockKey size={24} color="black" className="mx-2" />

            <input
              type="password"
              id="password"
              placeholder="Password"
              className=" block w-full  py-2  sm:text-sm text-black focus:outline-none" />
          </div>



          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-custom-yellow bg-custom-yellow " />
            <label htmlFor="remember-me" className="ml-2 block text-[14px] text-custom-gray-1">
              Remember me
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-custom-yellow text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-all relative"
          >
            Sign Up
          </button>

          {/* Forgot Password Link */}
          <a
            href="#"
            className="text-sm text-custom-gray-3 hover:text-custom-yellow text-right mt-2"
          >
            Forgot Password?
          </a>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4 ">
          <div className="w-full h-[1px] bg-custom-gray-5"></div>
          <span className=" text-custom-gray-2 text-[14px] p-2 border border-custom-gray-5 ">OR</span>
          <div className="w-full h-[1px] bg-custom-gray-5"></div>
        </div>

        {/* Sign in with Google and Apple */}
        <div className="space-y-3">
          <button
            type="button"
            className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-200 transition-all"
          >
            <Image src={'/images/gimg.png'} height={26}
              width={26} alt=' logo' />
            <p>
              Sign In with Google
            </p>

          </button>

          <button
            type="button"
            className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md border border-gray-300  transition-all"
          >
            <Image src={'/images/appleimage.png'} height={26}
              width={26} alt=' logo' />           <p> Sign In with Apple</p>
          </button>
        </div>
      </div>
    </div></>
  );
}

export default SignUpBox;
