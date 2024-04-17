import Image from "next/image";

export function CardTopActivitiesSkeleton() {
    return (
        <>
            <div className="w-full h-[216px] rounded-t-lg animate-[skeletonLoading_1s_linear_infinite_alternate]"></div>

            <div className="bottom-0 w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
                {/* <div className="h-[12px] w-[3rem] animate-[skeletonLoading_1s_linear_infinite_alternate]" /> */}



                <div className="flex gap-1 mb-[11px] items-center">
                    <Image
                        className="backdrop-grayscale w-[14px] h-[18px]"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
                        alt="location icon"
                        width={11}
                        height={14}
                    />
                    <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[4rem] h-[12px]" />
                </div>

                <div className="flex justify-between border-t border-[#ebebeb] pt-[11px] items-center">
                    <div className="flex flex-col gap-y-2">
                        <span className="w-[1rem] h-[8px] animate-[skeletonLoading_1s_linear_infinite_alternate]" />
                        <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[2rem] h-[12px]" />
                    </div>

                    <button className="m-s-b text-bl-100 text-fs-12 min-h-8 rounded-3xl px-4 py-2 animate-[skeletonLoading_1s_linear_infinite_alternate] w-[107px]" />
                </div>
            </div>
        </>
    );
}