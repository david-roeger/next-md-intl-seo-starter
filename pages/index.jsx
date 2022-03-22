import { useRouter } from "next/router";
import { LOCALES } from "../lib/constants";

const renderContent = (locale) => {
  switch (locale) {
    case LOCALES.DE:
      return "Ich bin Thomas – Softwareingenieur 👨🏻‍💻Ich bin Backend Entwickler mit einem Gespür für gute User Experience aus Stuttgart. Robuster, eleganter und lesbarer Code sowie gut durchdachte User Interfaces machen mich glücklich. Ich strebe nach Einfachheit im komplexen Dingen.";
    default:
      return "Hey there, I'm Thomas – Software Engineer 👨🏻‍💻 I am a backend developer with a sense for good user experience based in Stuttgart. I greatly appreciate robust, elegant, readable code and well designed user interfaces. Always striving for simplicity in complex things.";
  }
};
const IndexPage = () => {
  const router = useRouter();
  const { locale } = router;

  return <div>{renderContent(locale)}</div>;
};
export default IndexPage;
