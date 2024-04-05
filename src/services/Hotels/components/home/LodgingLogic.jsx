
"use client"
import { lodgings } from "../../Api/requestHotel";
import { useToken } from "@/config/context/AuthContext";
import { LodgingsView } from "./LodgingView";
import { useState } from "react";

export default function LodgingHotel({ selectionId }) {
  // const tour = homeRecommendedTour;
  const token = useToken();
  // var responseTest = null
  const [test, setTest]= useState(null);

  const getLodgingsHotels = async () => {
    try {
      // const responseTest = ;
      const responseTest = await lodgings(token.token, selectionId);
      // console.log(responseTest);
      setTest(responseTest);
    } catch (error) {
      console.log(error);
    }
  };
  getLodgingsHotels();

  console.log(test);

  return <LodgingsView test={test}/>;
}
