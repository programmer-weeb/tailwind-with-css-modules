import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts, fetchTeacher, fetchTeachers } from "@/app/lib/data";
import { deleteProduct, deleteTeacher } from "@/app/lib/actions";

const TeachersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  // const { count, products } = await fetchProducts(q, page);
  const { count, teachers } = await fetchTeachers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/teachers/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={teacher.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {teacher.username}
                </div>
              </td>
              <td>{teacher.email}</td>
              {/* <td>${teacher.price}</td> */}
              <td>{teacher.createdAt?.toString().slice(4, 16)}</td>
              {/* <td>{teacher.stock}</td> */}
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/teachers/edit/${teacher.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Edit
                    </button>
                  </Link>
                  <Link href={`/dashboard/teachers/${teacher.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteTeacher}>
                    <input type="hidden" name="id" value={teacher.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
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

export default TeachersPage;
