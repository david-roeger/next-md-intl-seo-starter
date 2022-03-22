// import App from 'next/app'
import {
  ThemeProvider,
  useTheme,
  BaseStyles,
  SSRProvider,
} from "@primer/react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { COLOR_MODES, DEFAULT_LOCALE } from "../lib/constants";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  const emojis = [
    "🍋",
    "🥛",
    "☕",
    "🍦",
    "💭",
    "📎",
    "🍥",
    "🧸",
    "🍉",
    " ☁",
    "⛓",
    "🧿",
    "🍨",
  ];

  return (
    <>
      <SSRProvider>
        <ThemeProvider colorMode={COLOR_MODES.DAY} preventSSRMismatch>
          {/* https://github.com/garmeeh/next-seo#nextseo-options */}
          <DefaultSeo
            titleTemplate={`${locale} ${
              emojis[Math.floor(Math.random() * emojis.length)]
            } | %s`}
            title="Thomas tolle Seite"
          />
          <BaseStyles>
            <Navigation locale={pageProps.locale ?? DEFAULT_LOCALE} />
            <Component {...pageProps} />
            <Footer locale={pageProps.locale ?? DEFAULT_LOCALE} />
          </BaseStyles>
        </ThemeProvider>
      </SSRProvider>
    </>
  );
};

export default MyApp;
