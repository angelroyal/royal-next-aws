import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

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


<<<<<<< HEAD
export const lodgings = async (token, id) =>{
  try {
    if(token){
      let response = await axiosWithInterceptor.get(`v1/hotels/shuffle?items=12`,{
        params:{
          hotelType: id
        }
      })

      console.log(response);
      if(response.data){
        return response.data
      }
    }
  } catch (error) {
    console.log(error);
    throw error
  }
}
=======
>>>>>>> 3d5dfff90f08f334823f08700603275fe995125a
