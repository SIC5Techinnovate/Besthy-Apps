import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { khodamList } from "../constants/Khodam.js";
const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
  try {
    const response = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        psikotes: true,
        profile: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msgk: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await prisma.users.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        psikotes: true,
        detakJantung: true,
      },
    });
    res.status(200).json(response);
  } catch (error) {}
};

export const createUser = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword) {
    return res
      .status(400)
      .json({ msg: "Password and confirm password do not match" });
  }

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
    function getRandomKhodam(khodamArray) {
      const randomIndex = Math.floor(Math.random() * khodamArray.length);
      return khodamArray[randomIndex];
    }

    // Contoh penggunaan:
    const randomKhodam = getRandomKhodam(khodamList);
    await prisma.profile.create({
      data: {
        jenisKhodam: randomKhodam,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  const user = await prisma.users.findUnique({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(405).json({ msg: "User not found" });
  const { name, email, password, confPassword } = req.body;
  let hashPassword;
  if (password === "" || password === null || password === undefined) {
    hashPassword = user.password;
  } else {
    const salt = await bcrypt.genSalt();
    hashPassword = await bcrypt.hash(password, salt);
  }
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password and confirm password do not match" });

  try {
    await prisma.users.update({
      where: {
        id: req.params.id,
      },
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
    res.status(200).json({ msg: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const user = await prisma.users.findUnique({
    where: {
      id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ msg: "User not found" });
  try {
    await prisma.users.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// PROOFILE
export const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { telp, jenisKelamin, birthdate, jenisKhodam, kepribadian } = req.body;

  try {
    const response = await prisma.users.findUnique({
      where: {
        id,
      },
      select: {
        profile: {
          select: {
            telp: true,
            jenisKelamin: true,
            birthdate: true,
            jenisKhodam: true,
            kepribadian: true,
          },
        },
      },
    });
    await prisma.profile.update({
      where: {
        userId: id,
      },
      data: {
        telp: telp || response.profile.telp,
        jenisKelamin: jenisKelamin || response.profile.jenisKelamin,
        birthdate: birthdate || response.profile.birthdate,
        jenisKhodam: jenisKhodam || response.profile.jenisKhodam,
        kepribadian: kepribadian || response.profile.kepribadian,
      },
    });
    res.status(200).json({ msg: "Profile updated successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
