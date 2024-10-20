"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@/components/Card";
import { submitQuizAnswers } from "./redux/reduxSlice";
import { register } from "./redux/reduxSlice";
import { Success } from "@/components/Success";

const QuizPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.quiz);
  const [answers, setAnswers] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    courseName: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  //Function for handling form
  const handleSubmitRegForm = async (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitQuizAnswers(answers))
      .then(() => {
        setSuccessMessage("Quiz submitted successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((err) => {
        console.error("Submission error:", err);
      });
  };

  const renderQuestion = (id, question, isTextArea = false) => (
    <div className="mt-3 md:mt-6">
      <Card>
        <h1 className="font-bold pl-2">{question}</h1>
        {isTextArea ? (
          <textarea
            className="qes-input h-16 pb-3"
            onChange={(e) => handleInputChange(id, e.target.value)}
          />
        ) : (
          <input
            type="text"
            className="qes-input"
            onChange={(e) => handleInputChange(id, e.target.value)}
          />
        )}
      </Card>
    </div>
  );

  return (
    <div>
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

          {error && <div className="text-red-500 mt-2 mb-2">{error}</div>}

          <form onSubmit={handleSubmitRegForm} className="mt-3 md:ml-10">
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
              <label
                htmlFor="courseName"
                className="text-start pl-2 font-semibold"
              >
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

{/**WE don't need this button since the question button will submit all.... */}
            {/* <button
              type="submit"
              disabled={isLoading}
              className={`button mt-4 border-2 border-black rounded-md w-[200px] ml-12 py-1 md:ml-32 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button> */}
          </form>
        </div>
      </div>

      <div className="overall mt-10 ml-2">
        <p className="font-semibold md:text-3xl">
          Please read your answers through before clicking the submit button.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="question mt-10">
            <h1 className="font-bold uppercase text-center underline md:text-3xl">
              questions
            </h1>
            <div className="py-6 question-div md:ml-20 lg:ml-44 xl:ml-80">
              {renderQuestion(
                "q1",
                "1. Who is the current General Overseer of the RCCG?"
              )}
              {renderQuestion(
                "q2",
                "2. List three of the promises of God concerning RCCG.",
                true
              )}
              {renderQuestion(
                "q3a",
                "3a. For whom is the worker in this mission working for?"
              )}
              {renderQuestion("q3b", "3b. Who rewards the worker?")}
              {renderQuestion("q3c", "3c. Why do you want to be a worker?")}
              {renderQuestion(
                "q3d",
                "support this answer above with a scripture.",
                true
              )}
              {renderQuestion(
                "q4",
                "4. Mention the major department of service in this mission."
              )}
              {renderQuestion(
                "q5",
                "5. List ten points that a worker is supposed to pray about regularly.",
                true
              )}
              {renderQuestion(
                "q6",
                "6. List four financial responsibilities of a worker.",
                true
              )}
              {renderQuestion(
                "q7a",
                "7a. What is the expectation of the worker towards soul winning?"
              )}
              {renderQuestion(
                "q7b",
                "7b. List two effective ways of 'evangelism and follow up'.",
                true
              )}
              {renderQuestion(
                "q8",
                "8. List five qualifications of a worker?",
                true
              )}
              {renderQuestion(
                "q9",
                "9. List four ways by which it can be known that a worker is totally submissive to the constituted authorities of the mission.",
                true
              )}
              {renderQuestion(
                "q10a",
                "10a. When there is a doubt about the correct way of dressing, to whom should the worker give the benefit of doubt?"
              )}
              {renderQuestion(
                "q10b",
                "10b. How late is the worker allowed to come for meeting?"
              )}
              {renderQuestion(
                "q11a",
                "11a. What is the basis for discipline a worker? Quote with a scripture reference.",
                true
              )}
              {renderQuestion(
                "q11b",
                "11b. During the period of discipline, what is expected of the worker?"
              )}
              {renderQuestion(
                "q12a",
                "12a. Which categories of people are lower than the worker in the hierarchy of the RCCG?"
              )}
              {renderQuestion(
                "q13",
                "13. Why did Jesus decide to choose the twelve?"
              )}
              {renderQuestion(
                "q14",
                "14. List twelve disciples of the Lord Jesus Christ.",
                true
              )}
              {renderQuestion(
                "q15",
                "15. Who did Jesus Christ refer to as son of perdition?"
              )}
              {renderQuestion("q16", "16. Write Hebrews 13:8")}
              {renderQuestion("q17", "17. State Acts 1:8")}
              {renderQuestion(
                "q18",
                "18. Who was the king who led Israel into victory with praise?"
              )}
              {renderQuestion(
                "q19",
                "19. What is the difference between tithes and offering?"
              )}
              {renderQuestion(
                "q20",
                "20. Give 3 responsibilities of an Usher.",
                true
              )}
              {renderQuestion(
                "q21",
                "21. Give 2 functions of the technical department.",
                true
              )}
              {renderQuestion("q22", "22. What does Matthew 28:18-20 say?")}
              {renderQuestion(
                "q23",
                "23. What is the theme of the Church for the year 2012. Which verse in the book of Psalm is it taken from?"
              )}
              {renderQuestion(
                "q24",
                "24. What is the theme of the youth service this month?"
              )}
              {renderQuestion(
                "q25",
                "25. What is the name of the pastor of RCCG fountain of God's Glory?"
              )}
              {renderQuestion(
                "q26",
                "26. What is the name of the founder of the RCCG?"
              )}
              {renderQuestion(
                "q27",
                "27. Mention 3 units you will like to function in the church",
                true
              )}
              {renderQuestion("q28", "28. What does holiness mean?")}
              {renderQuestion("q29", "29. What does holy communion signify?")}

              <div className="mt-10 text-center mb-28">
                <button
                  type="submit"
                  className="submit text-xl border-2 px-6 py-1 rounded-md font-bold text-white bg-gray-200 border-white shadow-lg inset-2 xl:px-12 xl:ml-[-350px]"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
                {error && (
                    <p className="text-red-500 text-center mt-4">Failed</p>
                  ) &&
                  console.log(error)}

                {successMessage && (
                  <p className="text-green-500 text-center mt-4">
                    {successMessage}
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizPage;
