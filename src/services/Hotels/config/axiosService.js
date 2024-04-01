import { API_POST_AVAILABILITY } from "./apiRoutesHotel";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

export const fetchPostHotels = async (requestBody) => {
  try {
    const response = await axiosWithInterceptor.post(
      API_POST_AVAILABILITY,
      requestBody
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchHotelDetailsByKeys = async (keys) => {
  const codes = keys.join(",");
  if (codes) {
    try {
      const response = await axiosWithInterceptor.get(`v1/hotels/${codes}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
