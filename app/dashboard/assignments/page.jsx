import AssignmentsPage from "../../ui/student-details-stuff/AssignmentsPage.jsx";
import {auth} from "../../auth.js";

export default async function Page() {
  const { user } = await auth();
  const role = user.role
  return(
    <AssignmentsPage role={role} />
  )
}