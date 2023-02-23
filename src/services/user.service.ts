import { User } from "@prisma/client";
import { client } from "../prisma";
import { CreateUser, UpdateUser } from "../types/user.type";

export class UserService {
  async getUsers(): Promise<User[]> {
    const users = await client.user.findMany({
      include: {
        messages: true,
      },
    });
    return users;
  }

  async getUserById(id: number): Promise<User | null> {
    const user = await client.user.findFirst({
      where: { id },
      include: { messages: true },
    });
    return user;
  }

  async checkIfUserExists(id: number): Promise<boolean> {
    return (await client.user.findFirst({ where: { id } })) ? true : false;
  }

  async createUser(data: CreateUser): Promise<User> {
    const newUser = await client.user.create({ data: data });
    return newUser;
  }

  async updateUser(id: number, data: UpdateUser): Promise<User | null> {
    const updatedUser = await client.user.update({
      where: { id },
      data,
    });
    return updatedUser;
  }

  async deleteUser(id: number): Promise<User | null> {
    const deletedUser = await client.user.delete({ where: { id } });
    return deletedUser;
  }

  async toggleStatus(id: number, isAdmin: boolean): Promise<User | null> {
    const updatedUser = await client.user.update({
      where: { id },
      data: {
        isAdmin: isAdmin ? false : true,
      },
    });
    return updatedUser;
  }
}
