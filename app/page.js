"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import { Success } from "@/components/Success";
import { useSelector, useDispatch } from "react-redux";
import { register } from "./redux/reduxSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.quiz);
  

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    courseName: ""
  });
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(register(formData)).unwrap();
      
      if (result) {
        window.location.href = "/Notification";
      }
    } catch (err) {
    
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="text-center">
      <div className="relative">
        <div className="relative top-[-80px] md:w-[768px] lg:w-[1024px]">
          <img
            src="/heroImage.jpg"
            className="hero md:w-[768px] lg:w-[1024px]"
            alt="Hero"
          />
          <div className="overlay md:w-[768px] lg:w-[1024px]"></div>
        </div>
        <div className="relative z-20 ml-3 text-white">
          <h1 className="uppercase mt-20 pt-10 font-bold md:text-center">
            Welcome To Your Exam
          </h1>
          <p className="text-start px-2">
            Please read your answers through before clicking the submit button.
            You can only submit the exam once. Any other submissions will be
            disregarded. <br />
            Please give your correct contact details as indicated in your
            registration form.
          </p>
        </div>
      </div>

      <div className="big-form-div mt-24 mb-56 md:mt-36 md:h-[60vh] lg:h-[50vh]">
        <div className="sec-form-div bg-gray-200 w-[330px] ml-8 pl-4 rounded-lg shadow-xl py-2 md:w-[600px] md:ml-20 lg:ml-48">
          <h1 className="font-bold text-2xl md:ml-40">
            Fill in correct details
          </h1>
          
          {error && (
            <div className="text-red-500 mt-2 mb-2">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-3 md:ml-10">
            <div className="text-start">
              <label htmlFor="fullName" className="pl-2 font-semibold">
                Full name:
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="border-2 border-black w-[300px] rounded-lg pl-1 md:w-[380px]"
                required
              />
            </div>

            <div className="mt-3 text-start flex flex-col md:flex-row">
              <label htmlFor="email" className="pl-2 font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-black w-[300px] rounded-lg md:w-[410px]"
                required
              />
            </div>

            <div className="mt-3 text-start">
              <label htmlFor="phoneNumber" className="pl-2 font-semibold">
                Phone number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border-2 border-black w-[300px] rounded-lg md:w-[340px]"
                required
              />
            </div>

            <div className="mt-3 text-start">
              <label htmlFor="courseName" className="text-start pl-2 font-semibold">
                Name of course:
              </label>
              <input
                type="text"
                id="courseName"
                value={formData.courseName}
                onChange={handleChange}
                className="border-2 border-black w-[300px] rounded-lg md:w-[330px]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`button mt-4 border-2 border-black rounded-md w-[200px] ml-12 py-1 md:ml-32 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}