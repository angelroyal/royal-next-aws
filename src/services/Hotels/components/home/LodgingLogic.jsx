"use client";
import { lodgings } from "../../Api/requestHotel";
import { useToken } from "@/config/context/AuthContext";
import { LodgingsView } from "./LodgingView";
import { useEffect, useState } from "react";

export default function LodgingHotel({ selectionId }) {
  // const tour = homeRecommendedTour;
  const token = useToken();
  // var responseTest = null
  const [test, setTest] = useState(null);

  useEffect(() => {
    const getLodgingsHotels = async () => {
      try {
        if (token.token) {
          const responseTest = await lodgings(selectionId);
          setTest(responseTest);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLodgingsHotels();
  }, [token, selectionId]);

  return <LodgingsView tour={test} />;
}
