import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import axios from "axios";

const API_ENDPOINT_ROOMS = "v1/rooms/availability";
const API_SAVE_CART = `v1/carts/hotel`;

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

export async function GetReviewsTripe(locationId) {
  // const options = {
  //   method: "GET",
  //   url: `https://api.content.tripadvisor.com/api/v1/location/${locationId}/reviews`,
  //   params: { key: "2267BAB9C20C49D88CBF1F6DB6478E0C", language: "en" },
  //   headers: { accept: "application/json" },
  // };

  try {
    const response = await axios.get(
      `https://staywuw.com/api2?locationId=${locationId}&endPoint=reviews`
    );
    // const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function GetLocationDetails(locationId) {
  // const options = {
  //   method: "GET",
  //   url: `https://api.content.tripadvisor.com/api/v1/location/${locationId}/details`,
  //   params: {
  //     key: "2267BAB9C20C49D88CBF1F6DB6478E0C",
  //     language: "en",
  //     currency: "USD",
  //   },
  //   headers: { accept: "application/json" },
  // };
  try {
    const response = await axios.get(`https://staywuw.com/api2?locationId=${locationId}&endPoint=details`);
    // const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// export const lodgings = async (id) => {
//   try {
//     let response = await axiosWithInterceptor.get(
//       `v1/hotels/shuffle?items=12`,
//       {
//         params: {
//           hotelType: id,
//         },
//       }
//     );
//     if (response.data) {
//       return response.data;
//     }
//   } catch (error) {
//     console.eror(error);
//     throw error;
//   }
// };
