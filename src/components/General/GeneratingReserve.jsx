import { Container } from "@/config/Others/Container";
import React from "react";

export default function GeneratingReserve() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-5 my-10">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}royal/principal-logo.svg`}
          alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} logo`}
          width={200}
          height={100}
          className="max-sm:w-[140px] max-sm:h-[40px] select-none"
        />
        <h4 className="text-bl-100 m-b text-fs-26">¡Generando la reservación!</h4>

        <div
        className="fixed bottom-0 left-0 h-1"
        style={{
        //   width: `${progress}%`,
          width: `40%`,
          backgroundColor: colors["#2743A6"],
          transition: "width 0.1s linear",
        }}
      />
      </div>
    </Container>
  );
}
