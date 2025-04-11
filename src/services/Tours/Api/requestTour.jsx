import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export async function getAvailabilityTour(id, searchParams) {
  try {
    const response = await axiosWithInterceptor.get(
      `v1/activities/${id}/availability?dateFrom=${searchParams.dateStart}&days=5&provider=ct`
    );
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Failed to fetch tour data:", error);
  }
}

export async function GetActivities(codeNameTour) {
  try {
    const response = await axiosWithInterceptor.get(
      `v1/destinations/${codeNameTour}/activities`
    );

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
