import Link from "next/link";
import { Link as PrimerLink } from "@primer/react";
import { useRouter } from "next/router";
import { LOCALES, SITE_URL } from "../../lib/constants";
import { t } from "../../lib/translation";

const Footer = ({}) => {
  const router = useRouter();

  return (
    <footer>
      © 2022 Thomas Hartwig{" "}
      <Link href={`${SITE_URL}/imprint`} locale={router.locale} passHref>
        <PrimerLink>{t("TRANSLATION_IMPRINT", router.locale)}</PrimerLink>
      </Link>
    </footer>
  );
};

export default Footer;
