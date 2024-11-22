"use client";
import { useState } from "react";
import { PiEyeSlashThin, PiEyeThin } from "react-icons/pi";
import Link from "next/link";

export default function register() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const [showPasswords, setShowPasswords] = useState(false);
  const toggleShowPasswords = () => setShowPasswords(!showPasswords);

  const [Field, setField] = useState([
    {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  ]);

  const changeFieldHandler = (e) => {
    setField({
      ...Field,
      [e.target.name]: e.target.value,
    });
    console.log(Field);
  };

  const onSubmitChange = async (e, Field) => {
    e.preventDefault();
    setField(Field);
    console.log(Field);
  };

  return (
    <div>
      <div className="relative flex items-center justify-end min-h-screen bg-[#20a68a]">
        {/* Background Image */}
        <img
          src="/images/login.jpg"
          alt="พื้นหลัง"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Top Left Icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/th/8/8f/Logo_of_Prapokklao_Hospital.png"
          alt="ไอคอน"
          className="absolute top-4 left-4 w-[120px] h-[120px] z-10 hidden lg:block"
        />

        {/* Register Box */}
        <div className="relative bg-white p-8 w-full max-w-md rounded-lg shadow-lg text-center z-10 mr-8 lg:mr-16">
          {/* User Icon as an Image */}
          <img
            src="/images/icon+.png"
            alt="ไอคอนผู้ใช้"
            className="w-16 h-16 mx-auto mb-4"
          />

          <h1 className="text-2xl font-bold mb-4 text-[#20a68a]">
            สมัครสมาชิก
          </h1>
          <form className="space-y-4">
            <div>
              <label className="block text-left font-semibold mb-1 text-[#20a68a]">
                ชื่อผู้ใช้
              </label>
              <input
                name="name"
                type="email"
                placeholder="กรอกชื่อผู้ใช้"
                className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae]"
                onClick={(e) => changeFieldHandler(e)}
              />
            </div>
            <div>
              <label className="block text-left font-semibold mb-1 text-[#20a68a]">
                อีเมล
              </label>
              <input
                name="email"
                type="email"
                placeholder="กรอกอีเมลของคุณ"
                className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae]"
                onClick={(e) => changeFieldHandler(e)}
              />
            </div>
            <div className="relative">
              <label className="block text-left font-semibold mb-1 text-[#20a68a]">
                รหัสผ่าน
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="กรอกรหัสผ่านของคุณ"
                className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae]"
                onClick={(e) => changeFieldHandler(e)}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute top-2/4 right-3 transform -translate-y-1/2 text-gray-500 mt-3"
              >
                {showPassword ? (
                  <PiEyeThin size={20} />
                ) : (
                  <PiEyeSlashThin size={20} />
                )}
              </button>
            </div>

            <div className="relative">
              <label className="block text-left font-semibold mb-1 text-[#20a68a]">
                ยืนยันรหัสผ่าน
              </label>
              <input
                name="confirm_password"
                type={showPasswords ? "text" : "password"}
                placeholder="ยืนยันรหัสผ่านของคุณ"
                className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae]"
                onClick={(e) => changeFieldHandler(e)}
              />
              <button
                type="button"
                onClick={toggleShowPasswords}
                className="absolute top-2/4 right-3 transform -translate-y-1/2 text-gray-500 mt-3"
              >
                {showPasswords ? (
                  <PiEyeThin size={20} />
                ) : (
                  <PiEyeSlashThin size={20} />
                )}
              </button>
            </div>

            {/* Flex Container for Login Link */}
            <div className="flex justify-end items-center">
              <Link
                href="/login"
                className="text-sm text-[#20a68a] hover:underline"
              >
                เข้าสู่ระบบ
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#20a68a] text-white font-semibold rounded hover:bg-[#31cfae] mt-4"
              onClick={(e) => onSubmitChange(e,Field)}
            >
              สมัครสมาชิก
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
