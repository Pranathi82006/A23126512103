import axios from "axios";
import { Log } from "../middleware/logger.js";

const BASE_URL = "http://4.224.186.213/evaluation-service";

export const getUsers = async (token) => {
  try {
    await Log(
      "backend",
      "info",
      "service",
      "Fetching users",
      token
    );

    const response = await axios.get(
      `${BASE_URL}/users`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    await Log(
      "backend",
      "error",
      "service",
      error.message,
      token
    );
    throw error;
  }
};

export const getPosts = async (userId, token) => {
  try {
    await Log(
      "backend",
      "info",
      "service",
      `Fetching posts for user ${userId}`,
      token
    );

    const response = await axios.get(
      `${BASE_URL}/users/${userId}/posts`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    await Log(
      "backend",
      "error",
      "service",
      error.message,
      token
    );
    throw error;
  }
};

export const getComments = async (postId, token) => {
  try {
    await Log(
      "backend",
      "info",
      "service",
      `Fetching comments for post ${postId}`,
      token
    );

    const response = await axios.get(
      `${BASE_URL}/posts/${postId}/comments`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    await Log(
      "backend",
      "error",
      "service",
      error.message,
      token
    );
    throw error;
  }
};