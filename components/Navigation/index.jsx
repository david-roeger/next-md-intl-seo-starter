import Link from "next/link";
import { Header, Select, useTheme } from "@primer/react";
import { COLOR_MODES, LOCALES, SITE_URL } from "../../lib/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);

  useEffect(() => {
    const { pathname, query, asPath } = router;
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; SameSite=Strict; Secure`;
    router.replace({ pathname, query }, asPath, { locale: locale });
  }, [locale]);

  return (
    <nav>
      <Header>
        <Header.Item>
          <Link href={`${SITE_URL}/`} locale={router.locale} passHref>
            <Header.Link fontSize={2}>
              <span>Thomas Hartwig</span>
            </Header.Link>
          </Link>
        </Header.Item>

        <Header.Item>
          <Select
            id="basic"
            value={locale}
            onInput={(e) => {
              setLocale(e.target.value);
            }}
          >
            <Select.Option value={LOCALES.DE}>🇩🇪 de</Select.Option>
            <Select.Option value={LOCALES.EN}>🇺🇸 en</Select.Option>
          </Select>
        </Header.Item>
      </Header>
    </nav>
  );
};

export default Navigation;
