"use client";
import React, { useState } from 'react';

const QUIZ_QUESTIONS = [
  { id: 'q1', question: 'Who is the current General Overseer of the RCCG?' },
  { id: 'q2', question: 'List three promises of God concerning RCCG', isTextArea: true },
  { id: 'q3', question: 'Who do you work for in this mission?', isTextArea: true },
  { id: 'q4', question: 'Mention the major departments of service in this mission', isTextArea: true },
  { id: 'q5', question: 'List ten points that a worker should pray about regularly', isTextArea: true },
  { id: 'q6', question: 'List four financial responsibilities of a worker', isTextArea: true },
  { id: 'q7', question: 'What are your expectations towards soul winning?', isTextArea: true },
  { id: 'q8', question: 'List five qualifications of a worker', isTextArea: true },
  { id: 'q9', question: 'List four ways to show submission to mission authorities', isTextArea: true },
  { id: 'q10', question: 'What are the dress code requirements?' },
  { id: 'q11', question: 'What is the basis for worker discipline?', isTextArea: true },
  { id: 'q12', question: 'Describe the RCCG hierarchy structure', isTextArea: true },
  { id: 'q13', question: 'Why did Jesus choose the twelve disciples?' },
  { id: 'q14', question: 'List the twelve disciples of Jesus Christ', isTextArea: true },
  { id: 'q15', question: 'Who was referred to as the son of perdition?' },
  { id: 'q16', question: 'Why do workers get rewarded?' },
  { id: 'q17', question: 'Where is the Church referred to as the body of Christ?' },
  { id: 'q18', question: 'List three responsibilities of a church worker', isTextArea: true },
  { id: 'q19', question: 'How many hours should a worker pray daily?' },
  { id: 'q20', question: 'What should be a worker\'s attitude towards sin?' }
];

export default function FormComponent() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    courseName: '',
    answers: Object.fromEntries(QUIZ_QUESTIONS.map(q => [q.id, '']))
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('q')) {
      setFormData(prev => ({
        ...prev,
        answers: { ...prev.answers, [name]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: '', type: '' });

    try {
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        throw new Error('Please enter a valid email address');
      }

      if (!formData.phoneNumber.match(/^\+?[\d\s-]{10,}$/)) {
        throw new Error('Please enter a valid phone number');
      }

      const response = await fetch('http://localhost:3001/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setMessage({ text: 'Form submitted successfully!', type: 'success' });
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        courseName: '',
        answers: Object.fromEntries(QUIZ_QUESTIONS.map(q => [q.id, '']))
      });
    } catch (err) {
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Course Registration Form</h1>

      {message.text && (
        <div className={`p-4 mb-4 rounded ${
          message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {[
            { id: 'fullName', label: 'Full Name', type: 'text' },
            { id: 'email', label: 'Email', type: 'email' },
            { id: 'phoneNumber', label: 'Phone Number', type: 'tel' },
            { id: 'courseName', label: 'Course Name', type: 'text' }
          ].map(field => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Quiz Questions</h2>
          {QUIZ_QUESTIONS.map(({ id, question, isTextArea }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                {question}
              </label>
              {isTextArea ? (
                <textarea
                  id={id}
                  name={id}
                  value={formData.answers[id]}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                />
              ) : (
                <input
                  type="text"
                  id={id}
                  name={id}
                  value={formData.answers[id]}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}