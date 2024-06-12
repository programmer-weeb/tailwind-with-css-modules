import {fetchStudent} from "../../../lib/data.js";
import StudentDetails from "./StudentDetails";

const StudentDetailsServer = async ({ params }) => {
	const currentStudentWithAllProps = await fetchStudent(params.id);
	const {username, email, medicalRecords, parentName, parentEmail, parentPhone} = currentStudentWithAllProps
	const currentStudent = {username, email, medicalRecords, parentName, parentEmail, parentPhone}
	console.log(params);
	console.log(currentStudent);
	return (
		<StudentDetails currentStudent={currentStudent} />
		// <h1>student details</h1>
	)
};

export default StudentDetailsServer;
