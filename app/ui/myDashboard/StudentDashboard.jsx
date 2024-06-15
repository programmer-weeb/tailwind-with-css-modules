'use client'
import Link from 'next/link';
import { useState } from 'react';

const initialStudentData = {
  name: 'student1',
  exams: [
    { id: 1, subject: 'Mathematics', date: '2024-06-20' },
    { id: 2, subject: 'Physics', date: '2024-06-22' },
  ],
  assignments: [
    { id: 1, title: 'Math Homework', dueDate: '2024-06-15' },
    { id: 2, title: 'Physics Lab Report', dueDate: '2024-06-18' },
  ],
  subjects: [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Physics' },
    { id: 3, name: 'Chemistry' },
  ],
  events: [
    { id: 1, name: 'Science Fair', date: '2024-06-25' },
    { id: 2, name: 'Sports Day', date: '2024-06-30' },
  ],
};

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(initialStudentData);
  const [deletedItems, setDeletedItems] = useState({
    exams: [],
    assignments: [],
    subjects: [],
    events: [],
  });

  const handleDelete = (category, id) => {
    setDeletedItems((prevDeletedItems) => ({
      ...prevDeletedItems,
      [category]: [...prevDeletedItems[category], id],
    }));
  };

  const isDeleted = (category, id) => deletedItems[category].includes(id);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome, {studentData.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-gray-800 p-6 rounded">
            <Link href={'/dashboard/exams'}>
              <h2 className="text-xl font-semibold mb-4">Upcoming Exams</h2>
            </Link>
            <ul>
              {studentData.exams.map((exam) => (
                <li key={exam.id} className="flex justify-between text-gray-400">
                  <span className={isDeleted('exams', exam.id) ? 'line-through' : ''}>
                    {exam.subject} - {exam.date}
                  </span>
                  <button
                    onClick={() => handleDelete('exams', exam.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Done
                  </button>
                </li>
              ))}
            </ul>
          </div>



          <div className="bg-gray-800 p-6 rounded">
            <Link href={'/dashboard/assignments'}>
              <h2 className="text-xl font-semibold mb-4">Pending Assignments</h2>
            </Link>
            <ul>
              {studentData.assignments.map((assignment) => (
                <li key={assignment.id} className="flex justify-between text-gray-400">
                  <span className={isDeleted('assignments', assignment.id) ? 'line-through' : ''}>
                    {assignment.title} - {assignment.dueDate}
                  </span>
                  <button
                    onClick={() => handleDelete('assignments', assignment.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Done
                  </button>
                </li>
              ))}
            </ul>
          </div>


          <div className="bg-gray-800 p-6 rounded">
            <Link href={'/dashboard/subjects'}>
              <h2 className="text-xl font-semibold mb-4">Subjects</h2>
            </Link>
            <ul>
              {studentData.subjects.map((subject) => (
                <li key={subject.id} className="flex justify-between text-gray-400">
                  <span className={isDeleted('subjects', subject.id) ? 'line-through' : ''}>
                    {subject.name}
                  </span>
                  <button
                    onClick={() => handleDelete('subjects', subject.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Done
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <Link href={'/dashboard'}>
            <div className="bg-gray-800 p-6 rounded">
              <h2 className="text-xl font-semibold mb-4">Recent Events</h2>
              <ul>
                {studentData.events.map((event) => (
                  <li key={event.id} className="flex justify-between text-gray-400">
                    <span className={isDeleted('events', event.id) ? 'line-through' : ''}>
                      {event.name} - {event.date}
                    </span>

                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
