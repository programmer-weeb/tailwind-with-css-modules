// import {connectToDB} from "@/app/lib/utils.js";
import {connectToDB} from "../lib/utils.js";
import bcrypt from "bcrypt";
// import {User} from "@/app/lib/models.js";
import {User} from "./models/his-models.js";

addUser({
  username: "ahmedd",
  email: "ahmed@b.b",
  password: "2222",
  img: '',
  role: 'admin',
  phone: "123456789",
  address: "address",  
})

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