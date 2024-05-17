export default function SkeletonPay() {
  return (
    <div className="flex ">
      <div className="w-full lg:w-[68%] xl:w-[90%] pr-[20px]">
        <StepsSkeleton />
        <StepsSkeletonMobile />
        <CartsReservationSkeleton />
        <CartDetailsSkeleton />
      </div>

      <div className=" hidden lg:flex lg:w-[35%] xl:pl-[49px] pl-[9px] bg-white">
        <DetailsReservationSkeleton />
      </div>
    </div>
  );
}

function StepsSkeletonMobile() {
  return (
    <div className="xl:hidden lg:flex md:hidden flex mt-[3.3rem] mb-[1.6rem] flex items-center justify-center">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className="w-[32px] h-[32px] rounded-full animate-[skeletonLoading_1s_linear_infinite_alternate]" />
            <div
              className={`animate-[skeletonLoading_1s_linear_infinite_alternate] h-[18px] ${
                index === 0 || index === 2 ? "w-[77px]" : "w-[50px]"
              }`}
            />
          </div>

          {3 - 1 !== index && (
            <div className="w-[39px] h-[2px] animate-[skeletonLoading_1s_linear_infinite_alternate] border-dashed border-2" />
          )}
        </div>
      ))}
    </div>
  );
}
function StepsSkeleton() {
  return (
    <div className="xl:flex lg:hidden md:flex hidden mt-[4rem] mb-[6rem] w-full max-lg:justify-center items-center">
      {[...Array(3)].map((_, index) => (
        <div className="flex items-center" key={index}>
          <div
            className={`rounded-full h-[37px] relative animate-[skeletonLoading_1s_linear_infinite_alternate] before:content-[' '] before:z-[3] before:absolute before:left-0 before:top-0 before:bottom-0 before:my-auto before:rounded-full before:h-[44px] before:w-[44px] before:animate-[skeletonLoading_1s_linear_infinite_alternate] ${
              index === 0 ? "w-[191px]" : "w-[228px]"
            }`}
          ></div>
          {3 - 1 !== index && (
            <div className="border-dashed border-2 w-[39px] animate-[skeletonLoading_1s_linear_infinite_alternate]" />
          )}
        </div>
      ))}
    </div>
  );
}

function CartsReservationSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[36px] w-[163px] mb-[2px]" />
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[18px] w-[177px] mb-[2rem]" />
    </div>
  );
}

function CartDetailsSkeleton() {
  return [...Array(2)].map((_, index) => (
    <div className="flex items-start gap-x-[0.5rem] mb-[15px]" key={index}>
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[182px] w-[16px]" />

      <div className="flex flex-col gap-y-[1.25rem] w-full">
        <div className="flex gap-x-[1rem]">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[25px] w-[205px]" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[25px] w-[210px]" />
        </div>

        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[275px] xl:w-[732px] w-full rounded-lg shadow-3xl"></div>
      </div>
    </div>
  ));
}

function DetailsReservationSkeleton() {
  return (
    <div className="w-full block sticky top-0 mt-[4rem] h-max">
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[29px] w-full mb-[40px]" />

      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[173px] w-full mb-[40px]" />

      <div className="flex flex-col items-center">
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[29px] w-[80%] mb-[1rem]" />
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[24px] w-[60%] mb-[12px]" />
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[52px] w-[60%] rounded-full" />
      </div>
    </div>
  );
}
