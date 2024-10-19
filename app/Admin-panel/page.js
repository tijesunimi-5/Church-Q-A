"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "@/components/Card";
import { submitQuizAnswers } from "../redux/reduxSlice";

const AdminPanel = () => {
  const dummyData = {
    id: "q1",
    question: "3a. For whom is the worker in this mission working for?",
    answer: "For God",
  };
  return (
    <div>
      <div className='mt-10 '>
        <h1 className='text-2xl font-bold uppercase text-center'>Admin Panel</h1>


        {/**UI for the rendering of each user's details and answer */}
        <div className='ml-2 mt-5'>
          <Card>
            {/**Users personal info */}
            <div className='ml-10'>
              <h1 className='font-bold'>Name: Tijesunimi Samuel</h1>
              <h2 className='font-medium'>Email: tijesunimiidowu16@gmail.com</h2>
              <p>Phone number: 07018268171</p>
              <p>Course: Computer Science</p>
            </div>

            {/** Question and User's answer page */}
            <div>
              <h1 className='text-center mt-5 font-bold underline'>Answers</h1>

              <ul>
                {/**Can map li for each Q/A */}
                <li>Question: {dummyData.question}</li>
                <li>Answer: {dummyData.answer}</li>
              </ul>
            </div>
          </Card>
        </div>
        </div>      
    </div>
  )
}

export default AdminPanel;