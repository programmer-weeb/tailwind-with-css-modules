// pages/exams.js
import Head from 'next/head';

const ExamsPage = () => {
  const exams = [
    {
      id: 1,
      subject: 'Mathematics',
      date: '2024-06-20',
      time: '10:00 AM',
      location: 'Room 101',
    },
    {
      id: 2,
      subject: 'Science',
      date: '2024-06-21',
      time: '1:00 PM',
      location: 'Room 102',
    },
    {
      id: 2,
      subject: 'Science',
      date: '2024-06-21',
      time: '1:00 PM',
      location: 'Room 102',
    },
    {
      id: 2,
      subject: 'Science',
      date: '2024-06-21',
      time: '1:00 PM',
      location: 'Room 102',
    },
    {
      id: 2,
      subject: 'Science',
      date: '2024-06-21',
      time: '1:00 PM',
      location: 'Room 102',
    },
    {
      id: 2,
      subject: 'Science',
      date: '2024-06-21',
      time: '1:00 PM',
      location: 'Room 102',
    },
    {
      id: 2,
      subject: 'Science',
      date: '2024-06-21',
      time: '1:00 PM',
      location: 'Room 102',
    },
  ];

  const resources = [
    { id: 1, name: 'Mathematics Study Guide', link: '#' },
    { id: 2, name: 'Science Notes', link: '#' },
    { id: 2, name: 'Science Notes', link: '#' },
    { id: 2, name: 'Science Notes', link: '#' },
    { id: 2, name: 'Science Notes', link: '#' },
  ];

  return (
    <div>
      <Head>
        <title>Exams | School Management System</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Upcoming Exams</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {exams.map((exam) => (
            <div key={exam.id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{exam.subject}</h2>
              <p>Date: {exam.date}</p>
              <p>Time: {exam.time}</p>
              <p>Location: {exam.location}</p>
            </div>
          ))}
        </div>
        <div className="p-4 border rounded shadow mt-4">
          <h2 className="text-xl font-semibold">Study Materials</h2>
          <ul>
            {resources.map((resource) => (
              <li key={resource.id}>
                <a href={resource.link} className="text-blue-500 hover:underline">
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExamsPage;
