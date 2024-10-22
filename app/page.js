'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Card from '@/components/Card';
import { submitQuizAnswers, register, resetQuizState } from './redux/reduxSlice';

const QuizPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading, error, success, registrationComplete } = useSelector((state) => state.quiz);

  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    courseName: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.push('/Notification');
        dispatch(resetQuizState());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, router, dispatch]);

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Valid email is required';
    if (!/^\+?[\d\s-]{10,}$/.test(formData.phoneNumber)) errors.phoneNumber = 'Valid phone number is required';
    if (!formData.courseName.trim()) errors.courseName = 'Course name is required';
    return errors;
  };

  const handleInputChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value.trim()
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (validationErrors[id]) {
      setValidationErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      if (!registrationComplete) {
        await dispatch(register(formData)).unwrap();
      }
      await dispatch(submitQuizAnswers({ formData, answers })).unwrap();
    } catch (err) {
      console.error('Submission failed:', err);
    }
  };

  const renderQuestion = (id, question, isTextArea = false) => (
    <div className="mt-3 md:mt-6">
      <Card>
        <h1 className="font-bold pl-2">{question}</h1>
        {isTextArea ? (
          <textarea
            className="qes-input h-16 pb-3 w-full p-2 border rounded"
            value={answers[id] || ''}
            onChange={(e) => handleInputChange(id, e.target.value)}
            required
          />
        ) : (
          <input
            type="text"
            className="qes-input w-full p-2 border rounded"
            value={answers[id] || ''}
            onChange={(e) => handleInputChange(id, e.target.value)}
            required
          />
        )}
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative hero-section">
        <img
          src="/heroImage.jpg"
          className="w-full h-64 md:h-96 object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 py-20 text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Welcome To Your Exam
            </h1>
            <p className="text-lg text-center">
              Please read your answers carefully before submission.
              Only one submission is allowed.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-bold text-center mb-8">
            Registration Details
          </h2>

          {error && (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
    {error.message || error}
  </div>
)}

          <form onSubmit={handleSubmit} className="space-y-6">
            {Object.entries(formData).map(([id, value]) => (
              <div key={id}>
                <label htmlFor={id} className="block font-semibold mb-1">
                  {id.charAt(0).toUpperCase() + id.slice(1).replace(/([A-Z])/g, ' $1')}:
                </label>
                <input
                  type={id === 'email' ? 'email' : 'text'}
                  id={id}
                  value={value}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${
                    validationErrors[id] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {validationErrors[id] && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors[id]}</p>
                )}
              </div>
            ))}

            <div className="questions-section mt-12">
              <h2 className="text-2xl font-bold text-center mb-8 uppercase">
                Questions
              </h2>
              <div className="space-y-6">
                  {[
                    { id: 'q1', question: '1. Who is the current General Overseer of the RCCG?' },
                    { id: 'q2', question: '2. List three of the promises of God concerning RCCG.', isTextArea: true },
                    { id: 'q3a', question: '3a. For whom is the worker in this mission working for?' },
                    { id: 'q3b', question: '3b. Who rewards the worker?' },
                    { id: 'q3c', question: '3c. Why do you want to be a worker?' },
                    { id: 'q3d', question: '3d. Support this answer above with a scripture.', isTextArea: true },
                    { id: 'q4', question: '4. Mention the major department of service in this mission.' },
                    { id: 'q5', question: '5. List ten points that a worker is supposed to pray about regularly.', isTextArea: true },
                    { id: 'q6', question: '6. List four financial responsibilities of a worker.', isTextArea: true },
                    { id: 'q7a', question: '7a. What is the expectation of the worker towards soul winning?' },
                    { id: 'q7b', question: '7b. List two effective ways of evangelism and follow up.', isTextArea: true },
                    { id: 'q8', question: '8. List five qualifications of a worker?', isTextArea: true },
                    { id: 'q9', question: '9. List four ways by which it can be known that a worker is totally submissive to the constituted authorities of the mission.', isTextArea: true },
                    { id: 'q10a', question: '10a. When there is a doubt about the correct way of dressing, to whom should the worker give the benefit of doubt?' },
                    { id: 'q10b', question: '10b. How late is the worker allowed to come for meeting?' },
                    { id: 'q11a', question: '11a. What is the basis for discipline a worker? Quote with a scripture reference.', isTextArea: true },
                    { id: 'q11b', question: '11b. During the period of discipline, what is expected of the worker?' },
                    { id: 'q12a', question: '12a. Which categories of people are lower than the worker in the hierarchy of the RCCG?' },
                    { id: 'q13', question: '13. Why did Jesus decide to choose the twelve?' },
                    { id: 'q14', question: '14. List twelve disciples of the Lord Jesus Christ.', isTextArea: true },
                    { id: 'q15', question: '15. Who did Jesus Christ refer to as son of perdition?' },
                    { id: 'q16', question: '16. Why do workers get rewarded?' },
                    { id: 'q17', question: '17. Mention two places in the New Testament where the Church was referred to as the body of Christ.' },
                    { id: 'q18', question: '18. What are the three responsibilities of a church worker?', isTextArea: true },
                    { id: 'q19', question: '19. How many hours is a worker expected to pray daily?', isTextArea: true },
                    { id: 'q20', question: '20. What should be the prayer of a worker?', isTextArea: true }
                  ].map(({ id, question, isTextArea }) => renderQuestion(id, question, isTextArea))}
                </div>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className={`bg-black text-white px-8 py-3 rounded-lg ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;