import { useContext } from "react";
import LanguageContext from "../../language/LanguageContext";
import { Container } from "@/config/Others/Container";

export default function HeaderBlue() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="w-full flex items-center ">
      <div className="absolute left-0 p-6 flex items-center px-8 bg-bl-100 w-[100%] md:w-[60%] lg:w-[51%] h-12 top-0 border-b rounded-br-[5rem] p-6 z-[-3]"/>
        <Container>
          <div className="flex items-center gap-[44px] mt-[1rem]">
            <a
              className="flex gap-2 "
              href="tel:8009530342"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://sandboxmexico.com/assets/icons/call/call-w.svg"
                alt="call icon royal vacation"
                width={17}
                height={18}
              />
              <span className="text-fs-12 ms:text-fs-14 m-s-b text-white">
                {languageData.navBar.contact}{" "}
                <span className="m-b text-white">800 953 0342</span>
              </span>
            </a>

            <div className="flex gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-4 h-4"
                  src="https://sandboxmexico.com/assets/icons/whats/whats-w.svg"
                  alt="icon whatsapp royal vacation"
                />
              </a>

              <a
                href="https://www.facebook.com/RoyalVacationsMx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-4 h-4"
                  src="https://sandboxmexico.com/assets/icons/face/face-w.svg"
                  alt="icon facebook royal vacation"
                />
              </a>

              <a
                href="https://www.instagram.com/royalvacationsmx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-4 h-4"
                  src="https://sandboxmexico.com/assets/icons/insta/insta-w.svg"
                  alt="icon instagram royal vacation"
                />
              </a>
            </div>
          </div>
        </Container>
      {/* </div> */}
    </div>
  );
}
