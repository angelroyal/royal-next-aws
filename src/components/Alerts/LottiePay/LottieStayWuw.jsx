import React from 'react'

export default function LottieStayWuw() {
    return (
        <div className='bg-white rounded-lg shadow-3xl px-[24px] pt-[24px] pb-[48px] w-[423px] h-[485px] flex flex-col items-center relative justify-end max-sm:w-full'>

            <img
                src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-70.svg`}
                width={12}
                height={12}
                alt="icon-close"
                className="cursor-pointer absolute top-[20px] right-[20px]"
            />

            <img
                src={`${process.env.NEXT_PUBLIC_URL}/icons/general/infotipo-staywuw.svg`}
                alt="icon-logo"
                width={145}
                height={145}
                className='pb-[56px]'
            />

            {/* <Lottie className="w-[300px] h-[300px]" animationData={animationLoading} /> */}

            <span className='text-fs-20 m-s-b mb-[8px]'>Lorem ipsum.</span>

            <p className='text-fs-12 text-gry-100 m-m text-center mb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit</p>

            <button className='text-white bg-bl-100 px-[16px] py-[14px] text-fs-12 m-s-b rounded-full hover:bg-bl-110'>Button Label</button>
        </div>
    )
}
