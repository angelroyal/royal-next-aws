import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

const API_ENDPOINT_ROOMS = "v1/rooms/availability";

export const postRoomsToAPI = async (requestBody) => {
  try {
    const response = await axiosWithInterceptor.post(
      API_ENDPOINT_ROOMS,
      requestBody
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
