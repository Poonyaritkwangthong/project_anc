'use client';
import React, { useState } from 'react';

export default function page() {
  const [Field, setField] = useState([
    {
      asset_id: '',
      asset_name: '',
      unit_id: '',
      quantity: '',
      price: '',
      image: '',
    },
  ]);

  const changeFieldHandler = (e) => {
    setField({
      ...Field,
      [e.target.name]: e.target.value,
    });
    console.log(Field);
  };

  const onSubmitChange = (e, Field) => {
    e.preventDefault();
    setField(Field);
    console.log(Field);
  };

  return (
    <div>
      <div className='mt-[10rem]'>
        <form className='w-[35rem] mx-auto border p-4'>
          <div>
            <h1 className='text-[#20a68a] text-3xl mb-[2rem] pl-4 mt-[1rem] font-bold'>
              Edit Asset Detail
            </h1>
          </div>

          <div className=' p-4 w-[33rem] mx-auto'>
            <div className='mb-4'>
              <label htmlFor='asset_id' className='text-[#20a68a] font-bold'>
                Asset ID :
              </label>
              <br />
              <input
              name='asset_id'
                type='text'
                className='border-[#20a68a] border rounded w-full px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#20a68a]'
                placeholder='Asset ID'
                onClick={(e) => changeFieldHandler(e)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='asset_name' className='text-[#20a68a] font-bold'>
                Asset Name :
              </label>
              <br />
              <input
              name='asset_name'
                type='text'
                className='border-[#20a68a] border rounded w-full px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#20a68a]'
                placeholder='Asset Name'
                onClick={(e) => changeFieldHandler(e)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='unit_name' className='text-[#20a68a] font-bold'>
                Unit Name :
              </label>
              <br />
              <input
              name='unit_name'
                type='text'
                className='border-[#20a68a] border rounded w-full px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#20a68a]'
                placeholder='Unit Name'
                onClick={(e) => changeFieldHandler(e)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='quantity' className='text-[#20a68a] font-bold'>
                Quantity :
              </label>
              <br />
              <input
              name='quantity'
                type='number'
                className='border-[#20a68a] border rounded w-full px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#20a68a]'
                placeholder='Quantity'
                onClick={(e) => changeFieldHandler(e)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='price' className='text-[#20a68a] font-bold'>
                Price :
              </label>
              <br />
              <input
              name='price'
                type='text'
                className='border-[#20a68a] border rounded w-full px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#20a68a]'
                placeholder='Price'
                onClick={(e) => changeFieldHandler(e)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='image' className='text-[#20a68a] font-bold'>
                Image :
              </label>
              <br />
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='dropzone-file'
                  className='flex flex-col items-center justify-center w-full h-64 border-2 border-[#20a68a]  rounded-lg cursor-pointer bg-white hover:bg-[#20a68a]/15 '
                >
                  <div className='flex flex-col items-center justify-center pt-5 pb-6 hover:text-white'>
                    <svg
                      className='w-8 h-8 mb-4 text-[#20a68a]'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 16'
                    >
                      <path
                       stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                        d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                      />
                    </svg>
                    <p className='mb-2 text-sm text-[#20a68a]'>
                      <span className='font-semibold'>Click to upload</span> or
                      drag and drop
                    </p>
                    <p className='text-xs text-[#20a68a]'>
                      SVG, PNG, JPG or GIF
                    </p>
                  </div>
                  <input name='image' id='dropzone-file' type='file' className='hidden' onClick={(e) => changeFieldHandler(e)}/>
                </label>
              </div>
            </div>
          </div>
          <div className='mt-2 flex gap-2 justify-end'>
            <button
              type='cancel'
              className='text-black hover:text-white bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
              data-dismiss-target='#toast-success'
              aria-label='Close'
            >
              Close
            </button>
            <button
              type='submit'
              className='text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={(e) => onSubmitChange(e)}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
