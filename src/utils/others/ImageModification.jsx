import axios from "axios";
import { ImageNotFoundType } from "./ImageNotFoundType";

export async function ImageModification(roomsInfo, language) {
  roomsInfo.rooms = await Promise.all(
    roomsInfo.rooms.map(async (room) => {
      try {
        let hasImage = await isImageURLValid(room.image);
        room = {
          ...room,
          image: hasImage ? room.image : ImageNotFoundType("hotel", language),
        };
        return room;
      } catch (error) {
        console.log(error);
      }
    })
  );

  return roomsInfo;
}

function isImageURLValid(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true); // Si la imagen se carga, es válida
    img.onerror = () => resolve(false); // Si hay un error al cargar, no es válida
    img.src = url;
  });
}
