# Example app showcasing how to parse MD, do SEO stuff and use i18n


## develop
```npm run dev```

## npm run build
```npm run build```

### Cause it´s using next i118 this cant be statically rendered

---

- Markdown files are in the ./markdown directory
- See `imprint/index.js` for an example on how to use Markdown in the project

---

- SEO uses [next-seo](https://github.com/garmeeh/next-seo) (it´s really powerfull so checkout the documentation)
- Defaultvalues are set in `_app.jsx` and can be overwritten in every file in the page directory

---

- i18n uses the next/i18n routing and is configured in `next.config.js`
- the locale, defaultLocale, ... is available using the `useRouter()` hook
- for nicer translation you could put all the translations in a lookup table

