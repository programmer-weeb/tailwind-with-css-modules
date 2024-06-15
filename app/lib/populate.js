import { connectToDB } from "./utils.js";
import bcrypt from "bcrypt";
import { LoginModelSchema, StudentModelSchema } from "./models/his-models.js";
import { TeacherModelSchema } from "./models/teacher-model.js";

// addStudent({
//   username: 'student16',
//   password: 'student16',
//   email: 'student16@g',
//   parentName: 'student16-parent',
//   parentEmail: 'student16-parent@g',
//   parentPhone: '999999999',
//   medicalRecords: 'student16-medicalRecords'
// })
// addTeacher({
//   username: 'teacher13',
//   email: 'teacher13@g',
//   password: 'teacher13',
//   phone: '999999999',
//   address: 'teacher13-address',
//   subject: 'teacher13-subject',
//   qualification: 'teacher13-qualification',
//   experience: 'teacher13-experience',
//   about: 'teacher13-about'
// })
// addUserWithLoginSchema({
//   username: 'teacher',
//   email: 'teacher@t',
//   password: 'teacher',
//   role: 'teacher'
// })
// addUserWithLoginSchema({
//   username: 'student1',
//   email: 'student1@t',
//   password: 'student1',
//   role: 'student'
// })


(async () => {
  try {
    await connectToDB();
    // get user by email
    const user = await LoginModelSchema.findOne({ email: 'teacher@t' });
    console.log(user);
  } catch (err) {
    console.log('err');
  }
})();

async function addStudent(studentData) {
  const { username, email, password, parentEmail, parentName, parentPhone, medicalRecords } = { ...studentData }

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new StudentModelSchema({
      username,
      email,
      password: hashedPassword,
      parentEmail, parentName, parentPhone,
      medicalRecords
    });

    await newUser.save();

    console.log({
      newUser
    })
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

}

async function addTeacher(teacherData) {
  const { username, email, password, phone, address, subject, qualification, experience, about } = { ...teacherData }

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new TeacherModelSchema({
      username, email, password: hashedPassword, phone, address, subject, qualification, experience, about
    });

    await newUser.save();

    console.log({
      newUser
    })
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

}

async function addUserWithLoginSchema(userData) {
  const { username, email, password, role } = { ...userData }
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
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

}
// async function addUser(userData) {
//   const { username, email, password, img, role, phone, address } = {
//     ...userData,
//   }
//
//   try {
//     await connectToDB();
//
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//       img,
//       role,
//       phone,
//       address,
//     });
//
//     await newUser.save();
//
//     console.log({
//       newUser
//     })
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to create user!");
//   }
//
// };