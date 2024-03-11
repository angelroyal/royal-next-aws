import Token from "@/components/General/Token";
import { TokenProvider } from "@/config/context/AuthContext";
import LanguageProvider from "@/language/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <TokenProvider>
        <Token />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>Holaa</div>
        </main>
      </TokenProvider>
    </LanguageProvider>
  );
}
