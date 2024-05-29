import React from "react";

export default function LoadingProgress({ width = null, height = null }) {
  return (
    <div class="relative w-fit">
      <svg
        class={`${width ? width : "w-[50px]"} ${height ? height : "h-[50px]"}"size-full"`}
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          class="stroke-current text-gry-50"
          stroke-width="2"
        ></circle>

        <g class="origin-center -rotate-90 transform">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            class="stroke-current text-bl-100"
            stroke-width="2"
            stroke-dasharray="100"
            stroke-dashoffset="10"
          ></circle>
        </g>

      </svg>

      <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span class="text-center text-2xl font-bold text-black">
          72%
        </span>
      </div>

    </div>
  );
}
