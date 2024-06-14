"use server";

import { revalidatePath } from "next/cache";
import { Product, StudentModelSchema, User } from "./models/his-models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";
import { TeacherModelSchema } from "./models/teacher-model";

export const addStudent = async (formData) => {
  const { username, email, password, phone, address, parentName, parentEmail, parentPhone, image } =
    Object.fromEntries(formData);
  // const { username, email, password, phone, address, isAdmin, isActive } =
  //   Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new StudentModelSchema({
      username, email, password: hashedPassword, phone, address, parentName, parentEmail, parentPhone, img: image
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/students");
  redirect("/dashboard/students");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/students");
  redirect("/dashboard/students");
};
export const updateStudent = async (formData) => {
  const { id, username, email, password, phone, address, parentName, parentEmail, parentPhone, image, medicalRecords } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      parentName,
      parentEmail,
      parentPhone,
      img: image,
      medicalRecords
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await StudentModelSchema.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update student!");
  }

  revalidatePath(`/dashboard/students/edit/${id}`);
  redirect(`/dashboard/students/edit/${id}`);
};
export const updateTeacher = async (formData) => {
  const { id, username, email, password, phone, subject, qualification, about, address, experience, img } = Object.fromEntries(formData);
  console.log('klsdfjlkdsfjsdflkj ID', id)

  try {
    connectToDB()
    const updateFields = {
      username,
      email,
      password,
      phone,
      subject,
      qualification,
      about,
      address,
      experience,
      img
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await TeacherModelSchema.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(err);
    throw new Error("Failed to update student!");
  }
  revalidatePath(`/dashboard/teachers/edit/${id}`);
  redirect(`/dashboard/teachers/edit/${id}`);

};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/teachers");
  redirect("/dashboard/teachers");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/teachers");
  redirect("/dashboard/teachers");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/teachers");
};
export const deleteStudent = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await StudentModelSchema.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/students");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/teachers");
};

export const addTeacher = async (formData) => {
  const { username, email, password, phone, subject, qualification, about, address, experience } = Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newTeacher = new TeacherModelSchema({
      username, email, password: hashedPassword, phone, subject, qualification, about, address, experience
    });

    await newTeacher.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create teacher!");
  }

  revalidatePath("/dashboard/teachers");
  redirect("/dashboard/teachers");

}
export const deleteTeacher = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await TeacherModelSchema.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/teachers");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
