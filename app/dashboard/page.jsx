import { cards } from "../lib/data";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import {auth} from "../auth.js";

const Dashboard = async () => {
	const { user } = await auth();
	const role = user.role
  switch (role) {
		case 'admin':
			return <AdminDashboard />;
		case 'teacher':
			return <TeacherDashboard />;
		case 'student':
			return <StudentDashboard/>;
		default:
			return <h1>Invalid Role</h1>;
	}
};

export default Dashboard;

function AdminDashboard() {
	return (
		<div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
	);
}

function TeacherDashboard() {
	return (
		<h1>Teacher Dashboard</h1>
	)
}

function StudentDashboard() {
	return (
		<h1>Student Dashboard</h1>
	)
}