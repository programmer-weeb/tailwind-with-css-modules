// pages/exams.js
import Head from 'next/head';
import ExamsComponent from "../../ui/student-details-stuff/ExamsComponent.jsx";
import {auth} from "../../auth.js";

const ExamsPage = async () => {

	const { user } = await auth();
	const role = user.role

  return (
    <div>
      <ExamsComponent role={role} />
    </div>
  );
};

export default ExamsPage;
