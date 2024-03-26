import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

const API_ENDPOINT_ROOMS = "v1/rooms/availability";
const API_SAVE_CART = `v1/carts/hotel`;

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

export const saveToCart = async (requestData) => {
  try {
    const response = await axiosWithInterceptor.post(API_SAVE_CART, requestData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
