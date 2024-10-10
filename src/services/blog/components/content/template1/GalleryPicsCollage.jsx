export default function GalleryPicsCollage() {
    return (
        <>
            <div className="flex w-full h-[383px] gap-2 mt-6 max-lg:flex-col max-lg:h-auto">
                <div className="w-1/2 h-full max-xl:w-[40%] max-lg:w-full">
                    <img
                        src="/hotel-krystal-cancun.png"
                        alt="gallery-blog"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="w-1/2 max-xl:w-[60%] h-full grid grid-cols-2 gap-2 max-lg:w-full">
                    {[...Array(4)].map((_, index) => (
                        <div className="w-full h-[187px]">
                            <img
                                key={index}
                                src="/hotel-krystal-cancun.png"
                                alt="gallery-blog"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};