import { addProduct, addTeacher } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddTeacherPage = () => {
  return (
    <div className={styles.container}>
      <form action={addTeacher} className={styles.form}>
				<input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <input type="text" placeholder="subject" name="subject" />

				<textarea
          name="qualification"
          id="qualification"
          rows="4"
          placeholder="Qualification"
        ></textarea>
				<textarea
          name="experience"
          id="experience"
          rows="4"
          placeholder="Experience"
        ></textarea>
				<textarea
          name="about"
          id="about"
          rows="4"
          placeholder="About"
        ></textarea>
				<textarea
          name="address"
          id="address"
          rows="4"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTeacherPage;
