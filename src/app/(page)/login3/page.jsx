"use client";
import React, { useState } from "react";
import { MdEmail, MdNoEncryptionGmailerrorred } from "react-icons/md";
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // เพิ่ม logic จัดการการส่งข้อมูลที่นี่
    console.log("Form Submitted");
  };

  return (
    <div className="w-screen h-screen bg-[#20a68a] flex items-center justify-center">
      <div className="border border-white bg-white w-[20rem] p-4">
        <div className="mb-[3rem] mt-[1rem]">
          <h1 className="text-3xl text-[#20a68a] text-center">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="relative z-0 w-full group">
            <input
              type="email"
              name="email"
              id="email"
              className="block p-2 pt-3 px-5 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#20a68a] peer"
              placeholder=""
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-xl text-black duration-300 transform -translate-y-8 scale-100 top-3 origin-[0] peer-focus:text-[#20a68a] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex items-center gap-2"
            >
              <MdEmail /> Email
            </label>
          </div>
          {/* Password Field */}
          <div className="relative z-0 w-full group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="block p-2 pt-3 px-5 w-full text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#20a68a] peer"
              placeholder=""
              required
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute top-2/4 right-3 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <PiEyeThin size={20} /> : <PiEyeSlashThin size={20} />}
            </button>
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-xl text-black duration-300 transform -translate-y-8 scale-100 top-3 origin-[0] peer-focus:text-[#20a68a] peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex items-center gap-2"
            >
              <MdNoEncryptionGmailerrorred /> Password
            </label>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#20a68a] rounded-lg text-xl text-white font-bold hover:bg-[#179d7f]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
