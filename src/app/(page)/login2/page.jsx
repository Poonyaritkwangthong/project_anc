"use client"
import { useState } from 'react';
import { PiEyeThin, PiEyeSlashThin } from 'react-icons/pi';
import Link from 'next/link';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="relative flex items-center justify-end min-h-screen">
      {/* Background Image */}
      <img src="/images/login.jpg" alt="พื้นหลัง" className="absolute inset-0 w-full h-full object-center" />

      {/* Top Left Icon */}
      <img src="https://upload.wikimedia.org/wikipedia/th/8/8f/Logo_of_Prapokklao_Hospital.png" alt="ไอคอน" className="absolute top-4 left-4 w-[120px] h-[120px] z-10 hidden lg:block" />

      {/* Login Box */}
      <div className="relative bg-white p-8 w-full max-w-md rounded-lg shadow-lg text-center z-10 mr-8 lg:mr-16 border-[#20a68a] border">
        {/* User Icon */}
        <img src="/images/icon.png" alt="ไอคอนผู้ใช้" className="w-16 h-16 mx-auto mb-4" />
        
        <h1 className="text-2xl font-bold mb-4 text-[#20a68a]">เข้าสู่ระบบ</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-left font-semibold mb-1 text-[#20a68a]">อีเมล</label>
            <input
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae]"
            />
          </div>
          
          <div className="relative">
            <label className="block text-left font-semibold mb-1 text-[#20a68a]">รหัสผ่าน</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="กรอกรหัสผ่านของคุุณ"
              className="w-full px-4 py-2 pr-10 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae]"
            />
            <button 
              type="button" 
              onClick={toggleShowPassword} 
              className="absolute top-2/4 right-3 transform -translate-y-1/2 text-gray-500 mt-3"
            >
              {showPassword ? <PiEyeThin size={20} /> : <PiEyeSlashThin size={20} />}
            </button>
          </div>

          <div className="flex justify-between items-center">
            <Link href="#" className="text-[#20a68a] text-sm hover:underline">ลืมรหัสผ่าน ?</Link>
          </div>

          <button type="submit" className="w-full py-2 bg-[#20a68a] text-white font-semibold rounded hover:bg-[#31cfae] mt-4">
            เข้าสู่ระบบ
          </button>

          <p className="text-sm mt-4">ยังไม่มีบัญชี ?</p>
          <Link href="/register">
          <button type="button" className="w-full py-2 bg-gray-500 text-white font-semibold rounded hover:bg-gray-600">
            สมัครสมาชิก
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}