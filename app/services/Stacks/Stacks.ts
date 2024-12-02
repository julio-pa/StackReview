import { Stack } from "~/routes/stacks/_index/types";
import AxiosInstance from "../axios";
import { RequestStack } from "~/routes/dashboard/types";

export async function createStack(data: RequestStack): Promise<Stack> {
  try {
    const response = await AxiosInstance.post<Stack>("/stacks/create", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching stacks:", error);
    throw error;
  }
}
export async function getAllStacks(): Promise<Stack[]> {
  try {
    const response = await AxiosInstance.get<Stack[]>("/stacks/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching stacks:", error);
    throw error;
  }
}

export async function getStackById(id: string): Promise<Stack> {
  try {
    const response = await AxiosInstance.get<Stack>(`/stacks/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching stack:", error);
    throw error;
  }
}

export async function getUserStacks(userId: string) {
  try {
    const response = await AxiosInstance.get<Stack[]>("/stacks/user-stacks", {
      params: { userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stacks:", error);
    throw error;
  }
}
