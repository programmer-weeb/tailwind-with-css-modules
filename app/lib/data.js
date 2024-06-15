import { LoginModelSchema, Product, StudentModelSchema } from "./models/his-models";
import { connectToDB } from "./utils";
import { TeacherModelSchema } from './models/teacher-model';

export const fetchStudents = async (q, page) => {

  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await StudentModelSchema.find({ username: { $regex: regex } }).count();
    const users = await StudentModelSchema.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }

}

export const fetchStudent = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await StudentModelSchema.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchTeacher = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const teacher = await TeacherModelSchema.findById(id);
    return teacher;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchTeachers = async (q, page) => {

  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await TeacherModelSchema.find({ username: { $regex: regex } }).count();
    const teachers = await TeacherModelSchema.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, teachers };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }

}

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
