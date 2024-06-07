import React from 'react'

export default function SkeletonActivitiesTourPT() {
  return (
    <div className='py-[32px] px-[24px] w-full rounded-[19px] bg-white mt-10 flex flex-col gap-2'>
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[40%] h-[30px] rounded" />
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[2rem] h-[2rem] " />
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[1.3rem] rounded" />
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[178px] rounded" />
    </div>
  )
}
