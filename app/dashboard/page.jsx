import { auth } from "../auth.js";
import StudentDashboard from '../ui/myDashboard/StudentDashboard';
import TeacherDashboard from "../ui/myDashboard/TeacherDashboard.jsx";
import AdminDashboard from '../ui/myDashboard/AdminDashboard';

const Dashboard = async () => {
  const { user } = await auth();
  const role = user.role
  switch (role) {
    case 'admin':
      return <AdminDashboard />;
    case 'teacher':
      return <TeacherDashboard />;
    case 'student':
      return <StudentDashboard />;
    default:
      return <h1>Invalid Role</h1>;
  }
};

export default Dashboard;
