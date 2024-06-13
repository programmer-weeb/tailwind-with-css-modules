import StudentsPage from "../../dashboard/students/page.jsx";
import ExamsPage from "../../dashboard/exams/page.jsx";
import AssignmentsPageServer from "../../dashboard/assignments/page.jsx";

export default async function TeacherDashboard() {
	return (
		<div>
			<div className="flex">
				<div className="w-1/2">
					<ExamsPage/>
				</div>
				<div className="w-1/2">
					<AssignmentsPageServer/>
				</div>
			</div>
			<div className="mt-4">
				<StudentsPage/>
			</div>
		</div>
	)
}