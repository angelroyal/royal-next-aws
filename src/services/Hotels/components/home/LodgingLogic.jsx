"use client";
import { lodgings } from "../../Api/requestHotel";
import { useToken } from "@/config/context/AuthContext";
import { LodgingsView } from "./LodgingView";
import { useEffect, useState } from "react";

export default function LodgingHotel({ selectionId }) {
  const token = useToken();

  const [shuffleHotel, setShuffleHotel] = useState(null);

  useEffect(() => {
    const getLodgingsHotels = async () => {
      setShuffleHotel(null);
      try {
        if (token.token) {
          const responseTest = await lodgings(selectionId);
          setShuffleHotel(responseTest);
        }
      } catch (error) {
        console.eror(error);
      }
    };
    getLodgingsHotels();
  }, [token, selectionId]);

  return <LodgingsView hotels={shuffleHotel} />;
}
