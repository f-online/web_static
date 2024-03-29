import React from 'react';
import { IoShieldCheckmark } from 'react-icons/io5';

export default function Question({ question }) {
  return (
    <div className="flex flex-col max-w-2xl mx-auto gap-4">

      {/* Question ID */}
      <div className="font-medium text-gray-500">
        {`Frage ${question.id}`}
      </div>

      {/* Question + Tags */}
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">{question.question}</h1>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="flex items-center px-2 py-1 text-xs font-medium text-white bg-fonline-500 rounded-full">
            <IoShieldCheckmark className="w-4 h-4 mr-2 text-white" />
            {' '}
            Offizielle Frage
          </span>
        </div>
      </div>

      {/* Answers + Image */}
      {question.image != null ? (
        <img
          src={`https://img.f-online.at/${question.image}.jpg`}
          alt={`Bild zur Frage ${question.id}`}
          className="rounded-l-xl rounded-t-xl my-4"
        />
      ) : ''}

      <div className="grid gap-4">
        {question.answers.map((answer, index) => (
          <div className={`relative flex items-start px-4 py-4 rounded-l-xl rounded-t-xl ${question.correctAnswers.includes(index) ? 'bg-emerald-100' : 'bg-red-100'}`}>
            <div className="flex h-6 items-center">
              <input
                id={`answer-${index}`}
                aria-describedby={`Antwort ${index + 1}: ${answer}`}
                name={`answer-${index}`}
                type="checkbox"
                disabled
                checked={question.correctAnswers.includes(index)}
                className="h-4 w-4 rounded text-emerald-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor={`answer-${index}`} className="font-bold text-gray-900">
                {answer}
              </label>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
