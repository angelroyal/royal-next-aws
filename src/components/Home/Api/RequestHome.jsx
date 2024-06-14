import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export async function getActivitiesHome() {
  try {
    const response = await axiosWithInterceptor.get("v1/activities/featured");
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
