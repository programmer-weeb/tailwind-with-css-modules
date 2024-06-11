import {fetchStudent} from "../../../lib/data.js";
import StudentDetails from "./StudentDetails";

const StudentDetailsServer = async ({ params }) => {
	const currentStudent = await fetchStudent(params.id);
	// console.log(currentStudent);
	console.log(params);
	console.log(currentStudent);
	return (
		<StudentDetails currentStudent={currentStudent} />
		// <h1>student details</h1>
	)
};

export default StudentDetailsServer;
