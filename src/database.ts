import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const addUser = async (id: string, startingRoom: string) => {
  const user = await prisma.user.create({
    data: {
      id,
      channels: {
        create: {
          name: startingRoom,
        },
      },
    },
  });
  return user;
};

export const changeRooms = async (
  id: string,
  addedRooms: string[],
  removedRooms: string[]
) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      channels: {
        createMany: {
          data: addedRooms.map((room) => ({ name: room })),
        },
        deleteMany: {
          name: {
            in: removedRooms,
          },
        },
      },
    },
  });
  return user;
};

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    include: {
      channels: true,
    },
  });
  return users;
};
