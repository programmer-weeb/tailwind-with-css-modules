import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    // isAdmin: {
    //   type: Boolean,
    //   default: false,
    // },
    // role can just be ['student', 'admin', 'teacher', 'parent']
    role: {
      type: String,
      enum: ['student', 'admin', 'teacher', 'parent'],
      required: true
    },

    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  parentName: {
    type: String,
    required: true,
  },
  parentEmail: {
    type: String,
    required: true,
  },
  parentPhone: {
    type: String,
    required: true,
  },
    
}, {timestamps: true})

const loginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    enum: ['student', 'admin', 'teacher', 'parent'],
    required: true
  },
}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model("User", userSchema);
// export const User = mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
// export const Product = mongoose.model("Product", productSchema);

export const LoginModelSchema = mongoose.models.LoginModelSchema || mongoose.model("LoginModelSchema", loginSchema)
export const StudentModelSchema = mongoose.models.StudentModelSchema || mongoose.model("StudentModelSchema", studentSchema)
