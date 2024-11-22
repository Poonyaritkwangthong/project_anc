"use client";

import { useState } from "react";

export default function MedicalForm() {
  const [Field, setField] = useState([
    {
      asset_id: "",
      id_icd: "",
      asset_name: "",
      cc: "",
      hn: "",
      unit_name: "",
      deposit_price: "",
      quantity: "",
      deposit_status: "",
      patient_name: "",
      borrowing_date: "",
      return_date: "",
      full_name: "",
      phone_number: "",
      phone_number: "",
      address: "",
      image: "",
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
    <div className="relative max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold"
        aria-label="Close"
        onClick={() => console.log("Close button clicked")}
      >
        &times;
      </button>

      {/* Header */}
      <div className="text-center mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/th/8/8f/Logo_of_Prapokklao_Hospital.png"
          alt="Logo"
          className="w-[160px] h-[140px] mx-auto mb-2"
        />
        <h2 className="text-2xl font-bold text-[#206e5d]">เพิ่มข้อมูล</h2>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {/* Form fields... */}

        {/* Left Column */}
        <div>
          <label className="block text-[#20a68a] font-semibold">
            รหัสครุภัณฑ์
          </label>
          <input
            name="asset_id"
            type="text"
            placeholder="Enter Asset ID"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">ICD10</label>
          <input
            name="id_icd"
            type="text"
            placeholder="Enter ICD10"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">
            รายการครุภัณฑ์เครื่องมือแพทย์
          </label>
          <input
            name="asset_name"
            type="text"
            placeholder="Enter Asset Name"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">CC</label>
          <textarea
          name="cc"
            placeholder="Enter CC"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          ></textarea>
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">HN</label>
          <input
          name="hn"
            type="text"
            placeholder="Enter HN"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">หน่วย</label>
          <input
          name="unit"
            type="text"
            placeholder="Enter Unit Name"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">ราคายืม</label>
          <input
          name="deposit_price"
            type="number"
            placeholder="Enter Deposit Price"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">จำนวน</label>
          <input
          name="quantity"
            type="number"
            placeholder="Enter Quantity"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">
            สถานะการจ่าย
          </label>
          <input
          name="deposit_status"
            type="text"
            placeholder="Enter Deposit Status"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">
            ชื่อผู้ป่วย
          </label>
          <input
          name=" patient_name"
            type="text"
            placeholder="Enter Patient Name"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <label className="block text-[#20a68a] font-semibold">
              วันที่ยืม
            </label>
            <input
            name=" borrowing_date"
              type="date"
              placeholder="Enter Borrowing date"
              className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
              onChange={(e) => changeFieldHandler(e)}
            />
          </div>

          <div>
            <label className="block text-[#20a68a] font-semibold">
              วันที่รับคืน
            </label>
            <input
            name="return_date"
              type="date"
              placeholder="Enter Return date"
              className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
              onChange={(e) => changeFieldHandler(e)}
            />
          </div>
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">
            ชื่อผู้ยืม
          </label>
          <input
          name="full_name"
            type="text"
            placeholder="Enter Full Name"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">เบอร์โทร</label>
          <input
          name="phone_number"
            type="text"
            placeholder="Enter Phone Number"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-semibold">ที่อยู่</label>
          <input
          name="address"
            type="text"
            placeholder="Enter Address"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
        </div>

        <div>
          <label className="block text-[#20a68a] font-">รูปภาพครุภัณฑ์</label>
          <input
          name="image"
            type="file"
            className="w-full px-4 py-2 border border-[#20a68a] rounded focus:outline-none focus:ring-2 focus:ring-[#31cfae] text-[#20a68a]"
            onChange={(e) => changeFieldHandler(e)}
          />
          <div className="overflow-hidden w-[240px] h-[240px] mt-2">
            <img
              className=" w-full h-full object-cover"
              src="/images/noimage.png"
              alt=""
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-right mt-4">
          <button
            type="submit"
            className="bg-[#e63030] text-white px-6 py-2 rounded font-semibold hover:bg-[#e66b6b] mr-2"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            className="bg-[#20a68a] text-white px-6 py-2 rounded font-semibold hover:bg-[#31cfae]"
            onClick={(e) => onSubmitChange(e, Field)}
          >
            บันทึก
          </button>
        </div>
      </form>
    </div>
  );
}
