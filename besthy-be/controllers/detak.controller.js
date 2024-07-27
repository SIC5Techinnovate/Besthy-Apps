import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDetak = async (req, res) => {
  try {
    const detak = await prisma.detakJantung.findMany({
      where: {
        userId: req.params.id,
      },
      select: {
        id: true,
        detak: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(detak);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createDetak = async (req, res) => {
  const { detak, userId } = req.body;
  try {
    // Check if the user exists
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Check the number of existing records for the user
    const existingRecords = await prisma.detakJantung.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
    });

    if (existingRecords.length >= 5) {
      // Delete the oldest record
      await prisma.detakJantung.delete({
        where: { id: existingRecords[0].id },
      });
    }

    // Create the new DetakJantung record
    const newDetak = await prisma.detakJantung.create({
      data: {
        detak,
        userId,
      },
    });
    res.status(201).json({ msg: "Detak created successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
