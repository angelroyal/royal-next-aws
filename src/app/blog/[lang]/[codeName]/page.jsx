import { CartAxiosProvider } from "@/components/Cart/CartAxios";
import FooterT from "@/components/Footer/FooterT";
import Token from "@/components/General/Token";
import Navigation from "@/components/Navigation/Navigation";
import { TokenProvider } from "@/config/context/AuthContext";
import { Container } from "@/config/Others/Container";
import LanguageProvider from "@/language/LanguageProvider";
import OpenBlog from "@/services/blog/components/BlogGeneric/General/OpenBlog";
import { LanguageProvideContext } from "@/services/blog/Context/LanguageContext";

export default function Blog({ params }) {

  return (
    <>
      <LanguageProvider>
        <TokenProvider>
          <CartAxiosProvider>
            <Token />
            <LanguageProvideContext>
              <Navigation />
              <Container>
                <OpenBlog address={params} />
              </Container>
              <FooterT />
            </LanguageProvideContext>
          </CartAxiosProvider>
        </TokenProvider>
      </LanguageProvider>
    </>
  );
}
