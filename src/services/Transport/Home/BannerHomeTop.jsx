export function BannerHomeTop(){
    return(
        <div className='relative flex items-center justify-center h-[442px] md:h-72 2xl:h-[480px] w-full '>
            <img
                src={`${process.env.NEXT_PUBLIC_URL}banners/transport/Banner-transport-home-top.webp`}
                width="1366px"
                height="480px"
                alt="Banner-transport-home-top"
                className='w-full h-full object-cover select-none'>

            </img>
        </div>
    )
}