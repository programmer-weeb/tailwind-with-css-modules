import {fetchStudent} from "../../../lib/data.js";
import StudentDetails from "./StudentDetails";
import {auth} from "../../../auth.js";

const StudentDetailsServer = async ({ params }) => {
	const currentStudentWithAllProps = await fetchStudent(params.id);
	const {username, email, medicalRecords, parentName, parentEmail, parentPhone} = currentStudentWithAllProps
	const currentStudent = {username, email, medicalRecords, parentName, parentEmail, parentPhone}
	console.log(params);
	console.log(currentStudent);

	const { user } = await auth();
	const role = user.role
	return (
		<StudentDetails currentStudent={currentStudent} role={role} />
		// <h1>student details</h1>
	)
};

export default StudentDetailsServer;
