import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "@/app/auth";

const AdminSideBtns = [
	{
		title: "Dashboard",
		path: "/dashboard",
		icon: <MdDashboard />,
	},
	{
		title: "Students",
		path: "/dashboard/students",
		icon: <MdSupervisedUserCircle />,
	},
	{
		title: "Teachers",
		path: "/dashboard/teachers",
		icon: <MdShoppingBag />,
	},
	// {
	// 	title: "Exams",
	// 	path: "/dashboard/exams",
	// 	icon: <MdAttachMoney />,
	// },
	// {
	// 	title: "Assignments",
	// 	path: "/dashboard/assignments",
	// 	icon: <MdAttachMoney />,
	// },
	// {
	// 	title: "Subjects",
	// 	path: "/dashboard/subjects",
	// 	icon: <MdAttachMoney />,
	// },
	{
		title: "Events",
		path: "/dashboard/events",
		icon: <MdAttachMoney />,
	},
]
const teacherSideBtns = [
	{
		title: "Dashboard",
		path: "/dashboard",
		icon: <MdDashboard />,
	},
	{
		title: "Students",
		path: "/dashboard/students",
		icon: <MdSupervisedUserCircle />,
	},
	
	{
		title: "Exams",
		path: "/dashboard/exams",
		icon: <MdAttachMoney />,
	},
	{
		title: "Assignments",
		path: "/dashboard/assignments",
		icon: <MdAttachMoney />,
	},
	{
		title: "Events",
		path: "/dashboard/events",
		icon: <MdAttachMoney />,
	},
]
const adminMenuItems = [
  {
    // title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Students",
        path: "/dashboard/students",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Teachers",
        path: "/dashboard/teachers",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  // {
  //   title: "Analytics",
  //   list: [
  //     {
  //       title: "Revenue",
  //       path: "/dashboard/revenue",
  //       icon: <MdWork />,
  //     },
  //     {
  //       title: "Reports",
  //       path: "/dashboard/reports",
  //       icon: <MdAnalytics />,
  //     },
  //     {
  //       title: "Teams",
  //       path: "/dashboard/teams",
  //       icon: <MdPeople />,
  //     },
  //   ],
  // },
  {
    // title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();
	const role = user.role
	switch (role) {
		case "admin":
			return <Side ArrOfSideBtns={AdminSideBtns} user={user} role={role}/>
			break;
		case 'teacher':
			return <Side ArrOfSideBtns={teacherSideBtns} user={user} role={role}/>
	
		default:
			break;
	}
  return (
    <Side ArrOfSideBtns={teacherSideBtns} user={user} role={role}/>
  );
};

export default Sidebar;

const Side = ({ArrOfSideBtns, user, role}) => {
	return(
		<div className={styles.container}>
			{/* <div>{JSON.stringify({user})}</div> */}
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.img || "/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>role: {role}</span>
        </div>
      </div>
      <ul className={styles.list}>
				{ArrOfSideBtns.map(e => (
					<li key={e.title}>
						<MenuLink item={e} key={e.title} />
					</li>
				))}        
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
	)
}