import axiosInstance from "../config/axios.config";
import type { User } from "../types/user";

export async function fetchUsers(): Promise<User[]> {
  try {
    const response = await axiosInstance.get<User[]>("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
