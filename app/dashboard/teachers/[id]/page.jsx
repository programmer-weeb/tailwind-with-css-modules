"use client";

import React, { useState } from "react";

const TeacherDetails = ({ params }) => {
	return (
		<div>
			<h1>Teacher Details</h1>
			<p>Teacher ID: {params.id}</p>
		</div>
	);
};

export default TeacherDetails;
