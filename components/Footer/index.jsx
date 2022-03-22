import Link from "next/link";
import { Link as PrimerLink } from "@primer/react";
import { useRouter } from "next/router";
import { LOCALES, SITE_URL } from "../../lib/constants";

const Footer = ({}) => {
  const router = useRouter();

  return (
    <footer>
      © 2022 Thomas Hartwig{" "}
      <Link href={`${SITE_URL}/imprint`} locale={router.locale} passHref>
        <PrimerLink>
          {router.locale === LOCALES.DE ? "Impressum" : "imprint"}
        </PrimerLink>
      </Link>
    </footer>
  );
};

export default Footer;
