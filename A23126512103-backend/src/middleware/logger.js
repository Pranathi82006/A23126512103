import axios from "axios";

export const Log = async (
  stack,
  level,
  packageName,
  message,
  token
) => {
  try {
    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  } catch (error) {
    console.error("Logging failed:", error.message);
  }
};