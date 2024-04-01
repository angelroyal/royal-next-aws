import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

const API_ENDPOINT_ROOMS = "v1/rooms/availability";
const API_SAVE_CART = `v1/carts/hotels`;

export const postRoomsToAPI = async (requestBody) => {

  const { code, ...bodyWithoutCode } = requestBody;

  try {
    const response = await axiosWithInterceptor.post(
      `v1/hotels/${requestBody.code}/rooms/availability`,
      bodyWithoutCode
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const saveToCart = async (requestData) => {
  try {
    const response = await axiosWithInterceptor.post(
      API_SAVE_CART,
      requestData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
