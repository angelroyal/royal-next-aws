import { Baggage } from "./Baggages";
import { PriceTransport } from "./PriceTransport";
import { TitleTransport } from "./TitleTransport";
import { TripeType } from "./TripeType";

export function ContainerInformation({ transportInfo }) {
  return (
    <div className="flex flex-col w-[78%]">
      <TitleTransport transportInfo={transportInfo} />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Baggage transportInfo={transportInfo} />

        <div className="max-lg:hidden grid grid-cols-2 ">
            <TripeType transportInfo={transportInfo}/>

            <PriceTransport transportInfo={transportInfo}/>
        </div>
      </div>
    </div>
  );
}
