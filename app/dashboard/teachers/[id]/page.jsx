// "use client";

import {fetchTeacher} from "../../../lib/data.js";
import React from "react";

const TeacherDetails = async ({params}) => {

	const teacherId = params.id;
	const teacher = await fetchTeacher(teacherId);

	return (
		<div>
			<div className="min-h-screen bg-gray-900 text-gray-300 p-10">
				<header className="w-full flex justify-between items-center mb-10">
					<h2 className="text-3xl font-semibold text-white">Teacher Details</h2>
					<div className="flex items-center space-x-4">
						
						<div className="flex items-center space-x-2">
							<button className="p-2 bg-gray-800 rounded">🔔</button>
							<div className="p-2 bg-gray-800 rounded flex items-center space-x-2">
								<span>{teacher.username}</span>
								<span>Admin</span>
							</div>
						</div>
					</div>
				</header>
				<main className="w-full grid grid-cols-3 gap-6">
					<div className="col-span-2 bg-gray-800 p-6 rounded-lg shadow w-full">
						<div className="flex items-center space-x-4 mb-6">
							<div className="w-24 h-24 rounded-full bg-purple-400"></div>
							<div>
								<h3 className="text-2xl font-semibold text-white">
									{/* Maria Historia */}
									{teacher.username}
								</h3>
								<p className="text-gray-400">{teacher.subject}</p>
							</div>
						</div>
						<div className="flex items-center space-x-8 mb-6">
							<div className="flex items-center space-x-2">
								<span className="material-icons">location_on</span>
								<p className="text-gray-400">Jakarta, Indonesia</p>
							</div>
							<div className="flex items-center space-x-2">
								<span className="material-icons">phone</span>
								<p className="text-gray-400">{teacher.phone}</p>
							</div>
							<div className="flex items-center space-x-2">
								<span className="material-icons">email</span>
								<p className="text-gray-400">{teacher.email}</p>
							</div>
						</div>
						<div className="mb-6">
							<h4 className="text-xl font-semibold mb-2 text-white">About:</h4>
							<p className="text-gray-400">{teacher.about}</p>
						</div>
						<div className="mb-6">
							<h4 className="text-xl font-semibold mb-2 text-white">
								Education:
							</h4>
							<ul className="text-gray-400 list-disc pl-5">
								{teacher.qualification}
							</ul>
						</div>
						<div>
							<h4 className="text-xl font-semibold mb-2 text-white">
								Expertise:
							</h4>
							<p className="text-gray-400">
								{teacher.experience}
							</p>
						</div>
					</div>
					<div className="bg-gray-800 p-6 rounded-lg shadow w-full ">
						<h4 className="text-xl font-semibold mb-4 text-white">
							Schedule Details
						</h4>
						<div className="mb-4">
							<p className="text-gray-400">Thursday, 10th April, 2021</p>
						</div>
						<div className="space-y-4">
							<div className="bg-purple-500 p-4 rounded-lg">
								<p className="text-purple-900">{teacher.subject}</p>
								<p className="text-gray-300">Class VII-B</p>
								<p className="text-gray-300">March 20, 2021</p>
								<p className="text-gray-300">09:00 - 10:00 AM</p>
							</div>
							<div className="bg-orange-500 p-4 rounded-lg">
								<p className="text-orange-900">{teacher.subject}</p>
								<p className="text-gray-300">Class VII-A</p>
								<p className="text-gray-300">March 20, 2021</p>
								<p className="text-gray-300">09:00 - 10:00 AM</p>
							</div>
							<div className="bg-yellow-500 p-4 rounded-lg">
								<p className="text-yellow-900">{teacher.subject}</p>
								<p className="text-gray-300">Class VIII-A</p>
								<p className="text-gray-300">March 20, 2021</p>
								<p className="text-gray-300">09:00 - 10:00 AM</p>
							</div>
							<div className="bg-blue-500 p-4 rounded-lg">
								<p className="text-blue-900">{teacher.subject}</p>
								<p className="text-gray-300">Class VII-C</p>
								<p className="text-gray-300">March 20, 2021</p>
								<p className="text-gray-300">09:00 - 10:00 AM</p>
							</div>
						</div>
						<div className="mt-4 text-center">
							<button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
								View More
							</button>
						</div>
					</div>
				</main>

			</div>
		</div>
	);
};

export default TeacherDetails;
