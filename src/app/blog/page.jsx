// import FooterT from "../config/FooterT";
// import Navigation from "../config/Navigation/Navigation";
// import ListingBlog from "@/services/blog/components/content/home/ListingBlog";
import NewsHomeBlog from "@/services/blog/components/content/home/NewsHomeBlog";
import BannerHomeBlog from "@/services/blog/components/content/home/BannerHomeBlog";
import SearchHomeBlog from "@/services/blog/components/content/home/SearchHomeBlog";
import FilterHomeBlog from "@/services/blog/components/content/home/FilterHomeBlog";
import { LanguageProvideContext } from "@/services/blog/Context/LanguageContext";
import Navigation from "@/components/Navigation/Navigation";
import FooterT from "@/components/Footer/FooterT";
import { Container } from "@/config/Others/Container";
import ListingBlog from "@/services/blog/components/content/home/ListingBlog";
import LanguageProvider from "@/language/LanguageProvider";
import { TokenProvider } from "@/config/context/AuthContext";
import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import { BlogProviderContext } from "@/services/blog/Context/BlogContext";

export default function Blog() {
  return (
    <LanguageProvider>
      <BlogProviderContext>
        {/* 4 */}
        <TokenProvider>
          <CartAxiosProvider>
            <LanguageProvideContext>
              <Navigation />
              <BannerHomeBlog />
              <Container>
                <div className="flex flex-col xl:flex-row md:justify-between">
                  <div className="w-full xl:w-[28%] 2xl:w-[24%] mt-[47px] mb-11 max-md:mb-2">
                    <SearchHomeBlog />
                    <FilterHomeBlog />
                    <NewsHomeBlog />
                  </div>

                  <div className="flex flex-col w-full xl:w-[80%] max-xl:mx-0 ml-16 h-full mb-4">
                    <ListingBlog />
                  </div>
                </div>
              </Container>
              <FooterT />
            </LanguageProvideContext>
          </CartAxiosProvider>
        </TokenProvider>
      </BlogProviderContext>
    </LanguageProvider>
  );
}
