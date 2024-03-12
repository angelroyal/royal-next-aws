import {
  Container,
  // Nav,
  Navbar,
} from "react-bootstrap";
import React, { useContext } from "react";

import LanguageContext from "../../language/LanguageContext";

import Logo from "../../assets/images/logos/logo-royal-vacations-text.png";
import { ReactComponent as IconWhatSapp } from "../../assets/icons/utils/footer/whatsapp.svg";
import { ReactComponent as IconInsta } from "../../assets/icons/utils/footer/royal-instagram.svg";
import IconCallCenter from "../../assets/icons/utils/navigation/call-w.svg";
import { ReactComponent as IconFaceBook } from "../../assets/icons/utils/footer/royal-facebook.svg";

import NavigationOptions from "../../pages/others/RouterPages";
import Cart from "@/hooks/Cart";
import Currency from "../../config/Others/Currency";
import LanguageSelector from "@/language/LanguageSelector";
import Image from "next/image";
import HeaderBlue from "./HeaderBlue";

// const Cart = lazy(() => import("../../hooks/Cart"));
// const Currency = lazy(() => import("../../config/Others/Currency"));
// const LanguagePage = lazy(() => import("../../language/LanguageSelector"));

export default function NavigationDesktop() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="md:h-[140px] mb-2">
      <HeaderBlue />
    </div>

    // <Container className="container-nav">
    //   <div
    //     className="d-flex justify-content-between align-items-center"
    //     style={{ height: "2.6rem" }}
    //   >
    //     <div className="container-navbar-bl">
    //       <div className="container-contact" />
    //     </div>

    //     <div className="container-call-icons-nav">
    //       <a
    //         className="description-contact-nav"
    //         href="tel:8009530342"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
            
    //         <Image
    //           className="icon-call-nav-bar"
    //           width="auto"
    //           height="auto"
    //           src={IconCallCenter}
    //           alt="Logo name Royal"
    //         />

    //         <div className="call-number-nav">
    //           <span className="contact-text-nav">
    //             {languageData.alertHelp.contact}
    //           </span>

    //           <span className="contact-number-nav">800 953 0342</span>
    //           <div className="line-description-dev"></div>
    //         </div>
    //       </a>

    //       <div className="networks-nav">
    //         <a
    //           href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
              
    //         </a>

    //         <a
    //           href="https://www.facebook.com/RoyalVacationsMx"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
              
    //         </a>

    //         <a
    //           href="https://www.instagram.com/royalvacationsmx/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
              
    //         </a>
    //       </div>
    //     </div>

    //     <div className="d-flex align-items-center">
    //       <div className="element-navigation-currency">
            
    //       </div>{" "}
    //       |
    //       <div className="container-element-navigation">
            
    //       </div>{" "}
    //       <div><Cart /></div>
    //     </div>
    //   </div>

    //   <div className="d-flex justify-content-between align-items-center">
    //     <Navbar.Brand href={`${process.env.REACT_APP_BASE_URL}`}>
    //       <Image
    //         className="name-logo m-0"
    //         width="auto"
    //         height="auto"
    //         src={Logo}
    //         alt="Logo name Royal"
    //       />
    //     </Navbar.Brand>

    //     <NavigationOptions />
    //   </div>
    // </Container>
  );
}
