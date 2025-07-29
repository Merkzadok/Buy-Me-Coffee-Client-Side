'use client';
import React from 'react';

export function SignUp() {
  return (
     <div className="flex h-screen">
     
      <div className="w-1/2 bg-[#FBBF24] flex items-center justify-center">
        <div className="text-center px-10">
         
          <div className="mb-6">
            <div className="w-[240px] h-[240px] rounded-full mx-auto flex items-center justify-center bg-[#D97706]">
              <img src="illustration.png" alt='image' className='w-100%'></img>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-black ">
            Fund your creative work
          </h2>
          <p className="text-black text-base w-[455px]">
            Accept support. Start a membership. Set up a shop. It's easier than you think.
          </p>
        </div>
      </div>

     
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md w-full px-8">
          <h1 className="text-2xl font-semibold mb-6 text-black">Create Your Account</h1>
          <p className="text-sm mb-2 text-gray-600">Choose a username for your page</p>

          <input
            type="text"
            placeholder="Enter a username here"
            className="w-full px-4 py-2 border border-black/10 rounded-md mb-4 outline-none focus:ring-2 focus:ring-black text-black"
          />

          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}