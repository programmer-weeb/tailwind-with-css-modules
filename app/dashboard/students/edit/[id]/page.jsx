import { updateStudent, updateUser } from "@/app/lib/actions";
import { fetchStudent, fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleStudentPage = async ({ params }) => {
  
  const { id } = params;
  const student = await fetchStudent(id);
	console.log(student);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={student.img || "/noavatar.png"} alt="" fill />
        </div>
        {student.username}
      </div>
      <div className={styles.formContainer}>
				<form action={updateStudent} className={styles.form}>
					<input type="hidden" name="id" value={student.id}/>
					<label>Username</label>
					<input type="text" name="username" placeholder={student.username}/>
					<label>Email</label>
					<input type="email" name="email" placeholder={student.email}/>
					<label>Password</label>
					<input type="password" name="password"/>

					<label>Medical records</label>
					<input type="text" name="medicalRecords" id="medicalRecords" placeholder={student.medicalRecords}/>

					<label>Parent Name</label>
					<input type="text" name="parentName" placeholder={student.parentName}/>
					<label>Parent Email</label>
					<input type="text" name="parentEmail" placeholder={student.parentEmail}/>
					<label>Parent Phone</label>
					<input type="text" name="parentPhone" placeholder={student.parentPhone}/>

					<button>Update</button>
				</form>
			</div>
		</div>
	);
};

export default SingleStudentPage;
