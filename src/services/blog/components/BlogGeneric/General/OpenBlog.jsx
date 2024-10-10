import KnowsMelia from "../KnowsMelia";
import KnowsIxtapa from "../KnowsIxtapa";
import KnowsCancun from "../KnowsCancun";
import KnowsMerida from "../KnowsMerida";
import KnowsTampico from "../KnowsTampico";
import FindCancunAi from "../FindCancunAi";
import KnowsMazatlan from "../KnowsMazatlan";
import KnowsCayoCuba from "../KnowsCayoCuba";
import FindQueretaro from "../FindQueretaro";
import DiscoverCancun from "../DiscoverCancun";
import DiscoverMexico from "../DiscoverMexico";
import DiscoverDisney from "../DiscoverDisney";
import DiscoverHabana from "../DiscoverHabana";
import KnowsMiamiBeach from "../KnowsMiamiBeach";
import DiscoverNewYork from "../DiscoverNewYork";
import DiscoverAcapulco from "../DiscoverAcapulco";
import DiscoverMahahual from "../DiscoverMahahual";
import DiscoverHotelRiu from "../DiscoverHotelRiu";
import ExtenChiapasMagic from "../ExtenChiapasMagic";
import DiscoverGuayabitos from "../DiscoverGuayabitos";
import DiscoverCuernavaca from "../DiscoverCuernavaca";
import ExtenKnowsChetumal from "../ExtenKnowsChetumal";
import DiscoverRivieraMaya from "../DiscoverRivieraMaya";
import ExtenDiscoverAkumal from "../ExtenDiscoverAkumal";
import KnowsPuertoVallarta from "../KnowsPuertoVallarta";
import ExtenBarraDeNavidad from "../ExtenBarraDeNavidad";
import FindBestHotelIxtapa from "../FindTheBestHotelIxtapa";
import DiscoverNuevoVallarta from "../DiscoverNuevoVallarta";
import FindBestHotelLasVegas from "../FindBestHotelLasVegas";
import ExtenDiscoverChihuahua from "../ExtenDiscoverChihuahua";
import DiscoverNuevoVallartaAi from "../DiscoverNuevoVallartaAi";
import ExtenDiscoveringCampeche from "../ExtenDiscoveringCampeche";
import FindBestHotelPuntaCanaAi from "../FindBestHotelPuntaCanaAi";
import DiscoverLosCabosSanLucas from "../DiscoverLosCabosSanLucas";
import DiscoverGrutasTolantongo from "../DiscoverGrutasTolantongo";
import FindAcapulcoZonaDorada from "../FindBestHotelAcapulcoZonaDorada";
import FindHolbox from "../FindHolbox";
import FindPuertoEscondido from "../FindPuertoEscondido";
import FindCancunFamily from "../FindCancunFamily";
import FindPuertoVallarta from "../FindPuertoVallarta";
import FindVaraderoCuba from "../FindVaraderoCuba";
import ExtenBacalar from "../ExtenBacalar";
import ExtenGuideCatemaco from "../ExtenGuideCatemaco";
import ExtenSecretsCancun from "../ExtenSecretsCancun";
import ExtenAguascalientes from "../ExtenAguascalientes";
import ExtenComeAcapulco from "../ExtenComeAcapulco";

export default function OpenBlog({ address }) {
  let blog;
  const OpenB = address.codeName;

  switch (OpenB) {
    case "the-best-hotel-queretaro":
      {
        blog = <FindQueretaro />;
      }
      break;
    case "the-best-hotel-mazatlan":
      {
        blog = <KnowsMazatlan />;
      }
      break;
    case "the-best-hotel-miami":
      {
        blog = <KnowsMiamiBeach />;
      }
      break;
    case "the-best-hotel-puerto-vallarta":
      {
        blog = <KnowsPuertoVallarta />;
      }
      break;
    case "the-best-hotel-tampico":
      {
        blog = <KnowsTampico />;
      }
      break;
    case "the-best-hotel-cancun":
      {
        blog = <KnowsCancun />;
      }
      break;
    case "the-best-hotel-cayo":
      {
        blog = <KnowsCayoCuba />;
      }
      break;
    case "the-best-hotel-ixtapa":
      {
        blog = <KnowsIxtapa />;
      }
      break;
    case "the-best-hotel-merida":
      {
        blog = <KnowsMerida />;
      }
      break;
    case "the-best-hotel-melia":
      {
        blog = <KnowsMelia />;
      }
      break;
    case "the-best-hotel-acapulco":
      {
        blog = <DiscoverAcapulco />;
      }
      break;
    case "the-best-hotel-cancun-kids":
      {
        blog = <DiscoverCancun />;
      }
      break;
    case "the-best-hotel-riviera-maya":
      {
        blog = <DiscoverRivieraMaya />;
      }
      break;
    case "the-best-hotel-mexico":
      {
        blog = <DiscoverMexico />;
      }
      break;
    case "the-best-hotel-nuevo-vallarta":
      {
        blog = <DiscoverNuevoVallarta />;
      }
      break;
    case "the-best-hotel-disney":
      {
        blog = <DiscoverDisney />;
      }
      break;
    case "the-best-hotel-cuernavaca":
      {
        blog = <DiscoverCuernavaca />;
      }
      break;
    case "the-best-hotel-guayabitos":
      {
        blog = <DiscoverGuayabitos />;
      }
      break;
    case "the-best-hotel-habana":
      {
        blog = <DiscoverHabana />;
      }
      break;
    case "the-best-hotel-tolantongo":
      {
        blog = <DiscoverGrutasTolantongo />;
      }
      break;
    case "the-best-hotel-los-cabos-san-lucas":
      {
        blog = <DiscoverLosCabosSanLucas />;
      }
      break;
    case "the-best-hotel-mahahual":
      {
        blog = <DiscoverMahahual />;
      }
      break;
    case "the-best-hotel-new-york":
      {
        blog = <DiscoverNewYork />;
      }
      break;
    case "the-best-hotel-riu-cancun":
      {
        blog = <DiscoverHotelRiu />;
      }
      break;
    case "discovering-akumal":
      {
        blog = <ExtenDiscoverAkumal />;
      }
      break;
    case "discovering-chihuahua":
      {
        blog = <ExtenDiscoverChihuahua />;
      }
      break;
    case "discovering-campeche":
      {
        blog = <ExtenDiscoveringCampeche />;
      }
      break;
    case "know-chetumal":
      {
        blog = <ExtenKnowsChetumal />;
      }
      break;
    case "barra-de-navidad":
      {
        blog = <ExtenBarraDeNavidad />;
      }
      break;
    case "chiapas-magic":
      {
        blog = <ExtenChiapasMagic />;
      }
      break;
    case "discovering-all-inclusive-nuevo-vallarta":
      {
        blog = <DiscoverNuevoVallartaAi />;
      }
      break;
    case "find-all-inclusive-acapulco-zona-dorada":
      {
        blog = <FindAcapulcoZonaDorada />;
      }
      break;
    case "find-all-inclusive-cancun":
      {
        blog = <FindCancunAi />;
      }
      break;
    case "find-all-inclusive-ixtapa":
      {
        blog = <FindBestHotelIxtapa />;
      }
      break;
    case "find-las-vegas":
      {
        blog = <FindBestHotelLasVegas />;
      }
      break;
    case "find-punta-cana":
      {
        blog = <FindBestHotelPuntaCanaAi />;
      }
      break;
    case "find-the-best-holbox":
      {
        blog = <FindHolbox />;
      }
      break;
    case "find-puerto-escondido":
      {
        blog = <FindPuertoEscondido />;
      }
      break;
    case "find-cancun-hotel-family":
      {
        blog = <FindCancunFamily />;
      }
      break;
    case "find-puerto-vallarta":
      {
        blog = <FindPuertoVallarta />;
      }
      break;
    case "find-varadero-cuba":
      {
        blog = <FindVaraderoCuba />;
      }
      break;
    case "bacalar-riviera-maya":
      {
        blog = <ExtenBacalar />;
      }
      break;
    case "guide-catemaco-veracruz":
      {
        blog = <ExtenGuideCatemaco />;
      }
      break;
    case "secrets-cancun":
      {
        blog = <ExtenSecretsCancun />;
      }
      break;
    case "everything-you-need-to-know-aguascalientes":
      {
        blog = <ExtenAguascalientes />;
      }
      break;
    case "come-and-see-acapulco":
      {
        blog = <ExtenComeAcapulco />;
      }
      break;
  }

  return <div className="my-6">{blog}</div>;
}
