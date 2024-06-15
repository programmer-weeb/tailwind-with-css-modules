import { addStudent } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddStudentPage = () => {
  return (
    <div className={styles.container}>
      <form action={addStudent} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />

        <input type="text" placeholder="parentName" name="parentName" required />
        <input type="text" placeholder="parentEmail" name="parentEmail" required />
        <input type="text" placeholder="parentPhone" name="parentPhone" required />
        <input type="text" name="image" id="studentImg" placeholder="img: put URL" />

        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudentPage;
