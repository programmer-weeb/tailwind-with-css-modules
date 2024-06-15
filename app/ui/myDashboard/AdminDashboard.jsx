import Card from "../dashboard/card/card";
import Chart from "../dashboard/chart/chart";
import Rightbar from "../dashboard/rightbar/rightbar";
import Transactions from "../dashboard/transactions/transactions";
import styles from "../dashboard/dashboard.module.css";
import { cards } from "@/app/lib/data";

export default function AdminDashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}