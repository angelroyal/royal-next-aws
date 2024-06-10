import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export async function getCatalogueTransport(){
    try {
        const response = await axiosWithInterceptor.get("v1/transport-catalogue");
        return response;
    } catch (error) {
        console.log("There was an error fetching the transport data!", error);
        throw error;
    }
}