
export default function BannerHomeBlog() {
  return (
    <>
      <div className="w-full h-[192px] bg-blue-800 relative flex items-center">

        <img
        src={`${process.env.NEXT_PUBLIC_URL}img/blog//banner-home-blog.jpg`}
        
          alt="banner home blog"
          className="w-full h-full max-lg:object-cover"
        />

        <div className="absolute flex flex-col pl-[12rem]  max-2xl:pl-[11rem] max-lg:pl-[20px] max-md:pl-[15px] gap-4">
          <span className="m-m text-white text-fs-32 max-sm:text-fs-16">
            Explora México a través de nuestro Blog
          </span>

          <span className="text-white text-fs-16 ">
            Descubre consejos, historias y experiencias imperdibles para tu
            próxima escapada por este hermoso país.
          </span>
        </div>
      </div>
    </>
  );
}
