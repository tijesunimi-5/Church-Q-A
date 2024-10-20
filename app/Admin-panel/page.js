"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@/components/Card";
import { fetchQuizAnswers } from "../redux/reduxSlice";

const QuizPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, answerResult } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchQuizAnswers());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? "Invalid Date" : date.toLocaleString();
  };

  const renderAnswers = (answers) => {
    if (!answers) return null; // Check if answers is defined

    return Object.entries(answers).map(([questionId, answer]) => (
      <div key={questionId} className="pl-4">
        <h3>
          {questionId}: {answer}
        </h3>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overall mt-10">
        <h1 className="font-bold uppercase text-center underline md:text-3xl">
          Submitted Answers
        </h1>

        {isLoading && <p className="text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">Failed to load</p>}

        {answerResult && answerResult.length > 0 ? (
          <div className="py-6">
            {answerResult.map(({ _id, answers, submittedAt }) => (
              <Card key={_id} className="mb-4 p-4">
                <h2 className="font-bold">Submission ID: {_id}</h2>
                <div className="answers">
                  {renderAnswers(answers)} {/* Safeguard against undefined */}
                </div>
                <p className="mt-2">Submitted At: {formatDate(submittedAt)}</p>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center">No submitted answers available.</p>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
