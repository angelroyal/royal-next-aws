import { PluralPeople } from "@/payment/Utils/PluralPeople";

export function CenterInformation({ tourInfo }) {
  return (
    <div className="flex gap-x-6 items-start w-1/2 max-lg:w-full">
      {/* LEFT INFORMATION */}
      <div className="flex flex-col gap-y-[1] w-full gap-2">
        <div className="flex gap-x-1 items-start">
          <img
            className="w-[11px] h-[14px]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
            alt="LocationIcon"
            width={11}
            height={14}
          />

          <span className="m-s-b text-fs-10 text-gry-100">
            {tourInfo.address}
          </span>
        </div>

        <div className="flex gap-x-1 items-center">
          <img
            className="w-[14px] h-[14px]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
            alt="icon-adult"
            width={14}
            height={14}
          />

          <span className="m-s-b text-fs-10 text-gry-100">
            {tourInfo.peoples} <PluralPeople people={tourInfo.peoples} />
          </span>
        </div>
      </div>
    </div>
  );
}
