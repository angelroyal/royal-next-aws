import React from "react";

export default function page({ params }) {
  console.log(params.codeNameTour);
  return (
    <div>
      {params.codeNameTour}
      <div>NOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</div>
    </div>
  );
}
