export function CartActivities() {
  return (
    <div className="shadow-3xl colum-one rounded-lg">
      <div className="w-full h-[241px] overflow-hidden rounded-t-lg animate-[skeletonLoading_1s_linear_infinite_alternate]" />
      <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col h-[109px]">
        <p className="m-0 w-[77%] h-[25px] pt-1 mb-[4px] animate-[skeletonLoading_1s_linear_infinite_alternate]" />

        <div className="h-[14px] w-[50%] animate-[skeletonLoading_1s_linear_infinite_alternate]" />

        <div className="flex justify-between mt-[4px]">
          <div className="flex flex-col w-[60%] gap-y-[2px]">
            <div className="h-[14px] w-[60%] animate-[skeletonLoading_1s_linear_infinite_alternate]" />
          </div>

          <div className="flex flex-col w-[30%] gap-y-[3px]">
            <div className="h-[18px] w-[50%] animate-[skeletonLoading_1s_linear_infinite_alternate]" />
            <div className="h-[24px] w-[80%] animate-[skeletonLoading_1s_linear_infinite_alternate]" />
          </div>
        </div>
      </div>
    </div>
  );
}


export function BannerActivity(){
    return(
        <div className="w-full h-full animate-[skeletonLoading_1s_linear_infinite_alternate]"/>
    )
}
