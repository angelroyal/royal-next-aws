import Image from "next/image";

export function AlertTourDetails({ alertInfo }) {
  const icons = {
    success: "success.svg",
    warning: "warning.svg",
    error: "error.svg",
    info: "info.svg",
  };

  const iconsAlert = () => {
    switch (alertInfo.type) {
      case "error":
        return icons.error;
      case "warning":
        return icons.warning;
    }
  };

  const bgColor = () => {
    switch (alertInfo.type) {
      case "error":
        return "red-50";
      case "warning":
        return "yw-50";
    }
  };

  const colorTitle = () => {
    switch (alertInfo.type) {
      case "error":
        return "red-800";
      case "warning":
        return "black";
    }
  };

  const colorMessage = () => {
    switch (alertInfo.type) {
      case "error":
        return "red-700";
      case "warning":
        return "gry-100";
    }
  };

  return (
    <div
      className={`absolute rounded-md p-4 w-[25rem] z-[3] left-0 top-0 bottom-0 h-max my-auto bg-${bgColor()}`}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}/notifications/${iconsAlert()}`}
            alt={iconsAlert()}
            width={16}
            height={16}
          />
        </div>

        <div className="ml-3">
          <h3 className={`text-sm font-medium text-${colorTitle()}`}>
            {alertInfo.title}
          </h3>

          <div className={`mt-2 text-sm text-${colorMessage()}`}>
            <p className="m-0 text-wrap">{alertInfo.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
