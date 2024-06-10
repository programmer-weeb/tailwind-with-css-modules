import { updateTeacher, updateUser } from "@/app/lib/actions";
import { fetchStudent, fetchTeacher } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  
  const { id } = params;
  const teacher = await fetchTeacher(id);
	console.log(teacher)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={teacher.img || "/noavatar.png"} alt="" fill />
        </div>
        {teacher.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateTeacher} className={styles.form}>
				<input type="text" placeholder={`${teacher.username}`} name="username" required />
        <input type="email" placeholder={`${teacher.email}`} name="email" required />
        <input type="phone" placeholder={`${teacher.phone}`} name="phone" />
        <input type="text" placeholder={`${teacher.subject}`} name="subject" />

				<textarea
          name="qualification"
          id="qualification"
          rows="4"
          placeholder={`${teacher.qualification}`}
        ></textarea>
				<textarea
          name="experience"
          id="experience"
          rows="4"
          placeholder={`${teacher.experience}`}
        ></textarea>
				<textarea
          name="about"
          id="about"
          rows="4"
          placeholder={`${teacher.about}`}
        ></textarea>
				<textarea
          name="address"
          id="address"
          rows="4"
          placeholder={`${teacher.address}`}
        ></textarea>
          
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
