import React from 'react'

export function BannerListingSkeleton() {
    return (
        <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[13rem]' />
    )
}

export function WeFoundTourSkeleton() {
    return (
        <div className="flex justify-between items-center my-8">
            <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[50%] h-[20px]' />
            <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[180px] h-[50px] max-md:w-[150px] rounded-lg' />
        </div>
    )
}

export function CardTourSkeleton() {
    return (
        <div className="flex justify-between items-center my-8">
            <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[50%] h-[20px]' />
            <div className='animate-[skeletonLoading_1s_linear_infinite_alternate] w-[180px] h-[50px] max-md:w-[150px] rounded-lg' />
        </div>
    )
}