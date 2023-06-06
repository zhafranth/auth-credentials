import axios from "axios";

export const register = async (payload: object) => {
  const response = await axios("/api/register", {
    method: "POST",
    data: payload,
  });

  return response.data;
};
