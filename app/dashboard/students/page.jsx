import { deleteStudent } from "@/app/lib/actions";
import { fetchStudents } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../auth.js";

const StudentsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  // const { count, users } = await fetchUsers(q, page);
  const { count, users } = await fetchStudents(q, page);

  const { user } = await auth();
  const role = user.role

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        {role === 'admin' && <Link href="/dashboard/students/add">
          <button className={styles.addButton}>Add New</button>
        </Link>}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            {role === 'admin' && <td>Created At</td>}
            {/* <td>Role</td>
            <td>Status</td> */}
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              {role === 'admin' && <td>{user.createdAt?.toString().slice(4, 16)}</td>}
              {/* <td>{user.isAdmin ? "Admin" : "Client"}</td> */}
              {/* <td>{user.isActive ? "active" : "passive"}</td> */}
              <td>
                <div className={styles.buttons}>
                  {role === 'admin' && <Link href={`/dashboard/students/edit/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Edit
                    </button>
                  </Link>}
                  <Link href={`/dashboard/students/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  {role === 'admin' && <form action={deleteStudent}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default StudentsPage;

// const Page = async () => {
//   const { user } = await auth();
//   const role = user.role
//   console.log('newklsdjfkl', role)
//   switch (role) {
//     case 'admin':
//       return <AdminStudentsPage />
//     case 'teacher':
//       return "TeacherStudentsPage"
//   }
// }
// export default Page