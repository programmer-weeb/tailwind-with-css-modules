import Head from 'next/head';

const AssignmentsPage = ({ role }) => {
  const assignments = [
    {
      id: 1,
      title: 'Math Homework',
      subject: 'Mathematics',
      dueDate: '2024-06-15',
      details: 'Complete exercises 5-10 on page 32.',
    },
    {
      id: 2,
      title: 'Science Project',
      subject: 'Science',
      dueDate: '2024-06-18',
      details: 'Prepare a model of the solar system.',
    },
  ];

  const resources = [
    { id: 1, name: 'Math Homework Guidelines', link: '#' },
    { id: 2, name: 'Science Project Instructions', link: '#' },
  ];

  return (
    <div>
      <Head>
        <title>Assignments | School Management System</title>
      </Head>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Upcoming Assignments</h1>
          {role === 'teacher' && <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Assignment
          </button>}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{assignment.title}</h2>
              <p>Subject: {assignment.subject}</p>
              <p>Due Date: {assignment.dueDate}</p>
              <p>Details: {assignment.details}</p>
            </div>
          ))}
        </div>
        <div className="p-4 border rounded shadow mt-4">
          <h2 className="text-xl font-semibold">Assignment Materials</h2>
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

export default AssignmentsPage;
