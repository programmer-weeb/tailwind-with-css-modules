// "use client";

import { fetchTeacher } from "../../../lib/data.js";

const TeacherDetails = async ({ params }) => {

	const teacherId = params.id;
	const teacher = await fetchTeacher(teacherId);

	return (
		<div>
			<h1 className="mt-6 ml-6 text-3xl antialiased mb-0">Teacher Details</h1>
			<div className="text-white flex items-center justify-center mt-28 mb-28">
				<div className="rounded-lg shadow-lg w-full max-w-6xl h-full flex flex-col justify-center">
					<div className="flex items-center space-x-6 mb-8">
						<img
							src={teacher.img}
							alt={teacher.username}
							className="w-32 h-32 rounded-full border-4 border-gray-700"
						/>
						<div>
							<h2 className="text-3xl font-semibold">{teacher.username}</h2>
							<p className="text-gray-400">{teacher.email}</p>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						<div>
							<p className="text-gray-400">Phone:</p>
							<p className="text-white">{teacher.phone}</p>
						</div>
						<div>
							<p className="text-gray-400">Address:</p>
							<p className="text-white">{teacher.address}</p>
						</div>
						<div>
							<p className="text-gray-400">Subject:</p>
							<p className="text-white">{teacher.subject}</p>
						</div>
						<div>
							<p className="text-gray-400">Qualification:</p>
							<p className="text-white">{teacher.qualification}</p>
						</div>
						<div>
							<p className="text-gray-400">Experience:</p>
							<p className="text-white">{teacher.experience} years</p>
						</div>
					</div>
					<div>
						<h3 className="text-2xl font-semibold mb-2 text-gray-400">About</h3>
						<p className="text-white">{teacher.about}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeacherDetails;
