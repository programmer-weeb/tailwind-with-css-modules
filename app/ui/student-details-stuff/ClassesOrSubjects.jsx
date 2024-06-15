import Head from 'next/head';

const ClassesOrSubjects = () => {
  const subjects = [
    {
      id: 1,
      name: 'Mathematics',
      teacher: 'Mr. Smith',
      schedule: 'Mon, Wed, Fri - 10:00 AM to 11:00 AM',
    },
    {
      id: 2,
      name: 'Science',
      teacher: 'Ms. Johnson',
      schedule: 'Tue, Thu - 1:00 PM to 2:30 PM',
    },
    {
      id: 3,
      name: 'Mathematics',
      teacher: 'Mr. Smith',
      schedule: 'Mon, Wed, Fri - 10:00 AM to 11:00 AM',
    },
    {
      id: 2,
      name: 'Science',
      teacher: 'Ms. Johnson',
      schedule: 'Tue, Thu - 1:00 PM to 2:30 PM',
    },
  ];

  return (
    <div>
      <Head>
        <title>Subjects | School Management System</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Assigned Subjects</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {subjects.map((subject) => (
            <div key={subject.id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">{subject.name}</h2>
              <p>Teacher: {subject.teacher}</p>
              <p>Schedule: {subject.schedule}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesOrSubjects;
