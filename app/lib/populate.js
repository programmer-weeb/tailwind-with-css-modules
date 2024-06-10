// import {connectToDB} from "@/app/lib/utils.js";
import {connectToDB} from "../lib/utils.js";
import bcrypt from "bcrypt";
// import {User} from "@/app/lib/models.js";
import {LoginModelSchema, User, StudentModelSchema} from "./models/his-models.js";
import { TeacherModelSchema } from './models/teacher-model.js';

// addStudent({
//   username: 'student14',
//   password: 'student14',
//   email: 'student14@g',
//   parentName: 'student14-parent',
//   parentEmail: 'student14-parent@g',
//   parentPhone: '999999999'
// })


async function addStudent(studentData) {
  const { username, email, password, role, parentEmail, parentName, parentPhone } = {...studentData}

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new StudentModelSchema ({
      username,
      email,
      password: hashedPassword,
      role,
      parentEmail, parentName, parentPhone
    });

    await newUser.save();

    console.log({
      newUser
    })
  }catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }
  
}
addTeacher({
  username: 'teacher13',
  email: 'teacher13@g',
  password: 'teacher13',
  phone: '999999999',
  address: 'teacher13-address',
  subject: 'teacher13-subject',
  qualification: 'teacher13-qualification',
  experience: 'teacher13-experience',
  about: 'teacher13-about'
})
async function addTeacher(teacherData) {
  const { username, email, password, phone, address, subject, qualification, experience, about } = {...teacherData}

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new  TeacherModelSchema({
      username, email, password: hashedPassword, phone, address, subject, qualification, experience, about
    });

    await newUser.save();

    console.log({
      newUser
    })
  }catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }
  
}
async function addUserWithLoginSchema(userData)  {
  const { username, email, password, role } = {...userData}
  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new LoginModelSchema({
      username,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    console.log({
      newUser
    })
  }catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

}
async function addUser(userData) {
  const { username, email, password, img, role, phone, address } = {
    ...userData,
  }    

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      role,
      phone,
      address,
    });

    await newUser.save();

    console.log({
      newUser
    })
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

};