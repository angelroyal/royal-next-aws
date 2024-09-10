import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export async function getCatalogueTransport() {
  try {
    const response = await axiosWithInterceptor.get("v1/transport-catalogue");
    return response;
  } catch (error) {
    console.log("There was an error fetching the transport data!", error);
    throw error;
  }
}

export const fetchTopActivities = async () => {
  try {
    const response = await axiosWithInterceptor.get(`v1/activities/promotions`);

    if (response.data && response.status === 200) {
      const shuffledDestinations = response.data
        .slice(0, 10)
        .sort(() => 0.5 - Math.random());
      return shuffledDestinations;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
