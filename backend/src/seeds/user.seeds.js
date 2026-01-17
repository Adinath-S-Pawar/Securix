import dotenv from "dotenv"
dotenv.config({ path: "../../.env" });
import { connectDB } from "../lib/db.js";
import User from "../models/user_model.js";


const seedUsers = [
  // Female Users
  {
    email: "aishwarya.sharma@example.com",
    fullName: "Aishwarya Sharma",
    password: "aishwarya@01",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "priya.verma@example.com",
    fullName: "Priya Verma",
    password: "priya@01",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "neha.patel@example.com",
    fullName: "Neha Patel",
    password: "neha@01",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "kavya.iyer@example.com",
    fullName: "Kavya Iyer",
    password: "kavya@01",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "ananya.reddy@example.com",
    fullName: "Ananya Reddy",
    password: "ananya@01",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "pooja.nair@example.com",
    fullName: "Pooja Nair",
    password: "pooja@01",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "sneha.kulkarni@example.com",
    fullName: "Sneha Kulkarni",
    password: "sneha@01",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "meera.singh@example.com",
    fullName: "Meera Singh",
    password: "meera@01",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "rahul.sharma@example.com",
    fullName: "Rahul Sharma",
    password: "rahul@01",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "arjun.verma@example.com",
    fullName: "Arjun Verma",
    password: "arjun@01",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "rohit.patel@example.com",
    fullName: "Rohit Patel",
    password: "rohit@01",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "vikram.iyer@example.com",
    fullName: "Vikram Iyer",
    password: "vikram@01",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "aman.reddy@example.com",
    fullName: "Aman Reddy",
    password: "aman@01",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "karan.nair@example.com",
    fullName: "Karan Nair",
    password: "karan@01",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "sahil.khan@example.com",
    fullName: "Sahil Khan",
    password: "sahil@01",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];


const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();