import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import ReactMarkdown from "react-markdown";
import { LOCALES } from "../../lib/constants";

import imprint from "../../markdown/imprint.md";
import impressum from "../../markdown/impressum.md";

const ImprintPage = () => {
  const { locale } = useRouter();

  let content;
  switch (locale) {
    case LOCALES.DE:
      content = impressum;
      break;

    default:
      content = imprint;
      break;
  }

  return (
    <>
      {/* https://github.com/garmeeh/next-seo#nextseo-options */}
      <NextSeo title={`Impressum`} />
      <ReactMarkdown children={content} />
    </>
  );
};

export default ImprintPage;
