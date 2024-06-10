
const navigation = [
  {
    id: "",
    label: "hotel",
    imageSrc: `${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-b.svg`,
    activeImageSrc: `${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-b-o.svg`,
  },
  {
    id: "tour",
    label: "tour",
    imageSrc: `${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`,
    activeImageSrc: `${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b-o.svg`,
  },
];

// if (process.env.REACT_APP_DEV === "true") {
//   navigation.push(
//     {
//       id: "transportation",
//       label: "transportation",
//       imageSrc: IconTransportation,
//       activeImageSrc: IconTransportationActive,
//     }
//   );
// }

export { navigation };
