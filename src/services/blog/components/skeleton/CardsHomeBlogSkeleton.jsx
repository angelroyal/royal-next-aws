import React from 'react'

export default function CardsHomeBlogSkeleton() {
  return (
    <div className='flex flex-wrap gap-4 max-lg:justify-center'>
       {[...Array(6)].map((_, index) => (
      <div key={index} className='bg-gry-30 w-[332px] h-[372px] rounded-lg shadow-3xl px-4 pt-4 pb-6 gap-4 flex flex-col max-xl:w-[309px]  max-md:w-full justify-between'>
        <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] h-[150px] rounded-lg '></div>

        <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[22%] h-[10px]'/>
        <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[20px]'/>
        <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[60px]'/>

        <div className='flex gap-2'>
            <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[50px] h-[25px] rounded-full'/>
            <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[50px] h-[25px] rounded-full'/>
        </div>
      </div>
       ))}
    </div>
  )
}
