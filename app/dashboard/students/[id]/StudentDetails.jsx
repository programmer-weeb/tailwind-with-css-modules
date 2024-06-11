"use client";

import React, { useState } from "react";
import Link from "next/link";
import BusLocation from "../../../ui/student-details-stuff/BusLocation.jsx";
import ExamsComponent from "../../../ui/student-details-stuff/ExamsComponent.jsx";
const StudentDetails = ({ currentStudent }) => {

  const [activeTab, setActiveTab] = useState("general");

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <div>General Content</div>;
      case "quiz":
        return <div>Quiz Content</div>;
      case "exam":
        return <div><ExamsComponent /></div>;
      case "assignment":
        return <div>Assignment Content</div>;
      case "classes":
        return <div>Classes Content</div>;
      case "medicalRecords":
        return <div>Medical Records Content</div>;
      case "busLocation":
        return (<BusLocation />);
      default:
        return <div>General Content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-10">
      <header className="w-full flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold text-white">Student Details</h2>
        <div className="flex items-center space-x-4">
          {/* <input
						type="text"
						placeholder="Search here..."
						className="p-2 rounded bg-gray-800 text-gray-300"
					/> */}
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-800 rounded">🔔</button>
            <div className="p-2 bg-gray-800 rounded flex items-center space-x-2">
              <span>{currentStudent.username}</span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-gray-800 p-6 rounded-lg shadow w-full">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-24 h-24 rounded-full bg-purple-400"></div>
            <div>
              <h3 className="text-2xl font-semibold text-white">
                {currentStudent.username}
              </h3>
              <p className="text-gray-400">History Teacher</p>
            </div>
          </div>
          <div className="flex items-center space-x-8 mb-6">
            <div className="flex items-center space-x-2">
              <span className="material-icons">location_on</span>
              <p className="text-gray-400">EG, Alex</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons">phone</span>
              <p className="text-gray-400">+12 345 6789 0</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons">email</span>
              <p className="text-gray-400">{currentStudent.email}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-2 text-white">
              Medical Records:
            </h4>
            <ul className="text-gray-400 list-disc pl-5">
              <li>{currentStudent.medicalRecords}</li>
              <li>Height: 5' 7"</li>
              <li>Weight: 70 kg</li>
              <li>Blood Group: A+</li>
              <li>Eye Color: Brown</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2 text-white">
              Parent Details:
            </h4>
            <p className="text-gray-400 list-disc pl-5">
              <ul>
                <li>{currentStudent.parentName}</li>
                <li>{currentStudent.parentEmail}</li>
                <li>{currentStudent.parentPhone}</li>
              </ul>
            </p>
          </div>
          <div className="my-6">
            <h4 className="text-xl font-semibold mb-2 text-white">About:</h4>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow w-full ">
          <h4 className="text-xl font-semibold mb-4 text-white">
            Schedule Details
          </h4>
          <div className="mb-4">
            <p className="text-gray-400">Thursday, 10th April, 2021</p>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-500 p-4 rounded-lg">
              <p className="text-purple-900">English</p>
              <p className="text-gray-300">Class VII-B</p>
              <p className="text-gray-300">March 20, 2021</p>
              <p className="text-gray-300">09:00 - 10:00 AM</p>
            </div>
            <div className="bg-orange-500 p-4 rounded-lg">
              <p className="text-orange-900">Arabic</p>
              <p className="text-gray-300">Class VII-A</p>
              <p className="text-gray-300">March 20, 2021</p>
              <p className="text-gray-300">09:00 - 10:00 AM</p>
            </div>
            <div className="bg-yellow-500 p-4 rounded-lg">
              <p className="text-yellow-900">Math</p>
              <p className="text-gray-300">Class VIII-A</p>
              <p className="text-gray-300">March 20, 2021</p>
              <p className="text-gray-300">09:00 - 10:00 AM</p>
            </div>
            <div className="bg-blue-500 p-4 rounded-lg">
              <p className="text-blue-900">Science</p>
              <p className="text-gray-300">Class VII-C</p>
              <p className="text-gray-300">March 20, 2021</p>
              <p className="text-gray-300">09:00 - 10:00 AM</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
              View More
            </button>
          </div>
        </div>
      </main>

      {/* new bottom buttons */}
      <div>
        <div className="flex justify-around my-4 ml-0 mr-60">
          <button
            onClick={() => setActiveTab("general")}
            className={`p-2 border rounded ${
              activeTab === "general"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`p-2 border rounded ${
              activeTab === "quiz"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            Quiz
          </button>
          <button
            onClick={() => setActiveTab("exam")}
            className={`p-2 border rounded ${
              activeTab === "exam"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            Exams
          </button>
          <button
            onClick={() => setActiveTab("assignment")}
            className={`p-2 border rounded ${
              activeTab === "assignment"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            Assignment
          </button>
          <button
            onClick={() => setActiveTab("classes")}
            className={`p-2 border rounded ${
              activeTab === "classes"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            Classes
          </button>
          <button
            onClick={() => setActiveTab("medicalRecords")}
            className={`p-2 border rounded ${
              activeTab === "medicalRecords"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            Medical Records
          </button>
          <button
            onClick={() => setActiveTab("busLocation")}
            className={`p-2 border rounded ${
              activeTab === "busLocation"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            Bus Location
          </button>
        </div>
        <div className="bg-gray-800 p-4 rounded">{renderContent()}</div>
      </div>
    </div>
  );
};

export default StudentDetails;
