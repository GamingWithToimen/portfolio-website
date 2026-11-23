import type { Dictionary } from "../types";

const fi: Dictionary = {
  meta: {
    title: "Tijme Vervoort — Portfolio",
    description:
      "Tijme Vervoortin portfolio. Full stack -kehittäjä Innovawaressa, joka rakentaa ERP-järjestelmiä C#:lla, TypeScriptillä ja React Nativella.",
  },
  nav: {
    home: "Etusivu",
    portfolio: "Portfolio",
    internship1: "Harjoittelu 1",
    internship2: "Harjoittelu 2",
    language: "Kieli",
  },
  footer: { rights: "Kaikki oikeudet pidätetään." },
  home: {
    eyebrow: "Portfolio",
    iAm: "Olen",
    explore: "Tutustu",
    internships: "Harjoittelut",
    aboutLabel: "Tijme",
    aboutTitle: "Tietoa minusta",
    selectedLabel: "Valikoima",
    projectsTitle: "Projektit",
    photoAlt: "Tijme Vervoortin muotokuva",
  },
  profile: {
    tagline:
      "Full Stack -kehittäjä Innovawaressa, rakennan ERP-järjestelmiä C#:lla ja TypeScriptillä sekä mobiilisovelluksia React Nativella.",
    bio1: "Olen 22-vuotias ja työskentelen kokoaikaisena full stack -kehittäjänä Innovawaressa. Valmistuin ohjelmistokehittäjäksi (MBO-taso 4) KW1C:stä 's-Hertogenboschissa, kun olin vaihtanut rakennusalalta. Nyt rakennan ERP-järjestelmiä C#:lla ja TypeScriptillä sekä mobiilisovellusta React Nativella.",
    bio2: "Opintojeni aikana suoritin kaksi harjoittelua, Omnilanilla ja AB Transportilla, joissa työskentelin Pythonilla ja Djangolla. Rakensin myös kokonaisen verkkosivuston urheiluseuralle sekä useita verkkoprojekteja. Aiemmat rakennusalan opintoni antoivat myös käytännön projektikokemusta: teräsrunkoinen ravintola, 1930-luvun asuinrakennus ja nuorten vapaa-ajan tila.",
  },
  work: {
    label: "Innovaware",
    title: "Työ",
    role: "Full Stack Developer",
    period: "Nykyinen tehtävä",
    description:
      "Rakennan ERP-järjestelmiä C#:lla ja TypeScriptillä ja kehitän siihen liittyvän mobiilisovelluksen React Nativella.",
    skillsLabel: "Teknologiat",
  },
  stats: ["Vuotta", "Harjoittelua suoritettu", "Nykyinen painopiste", "Käytettyjä kieliä"],
  portfolio: {
    label: "Tijme",
    title: "Portfolioprojektit",
    projects: [
      {
        title: "Sateenkaariprojekti",
        description:
          "Span-luokkia ja visuaalisesti miellyttäviä asetteluja, joissa CSS-sijoittelulla ja väriteemoilla luotiin sateenkaarivaikutelma.",
      },
      {
        title: "Ottelutaulukko",
        description:
          "Jalkapallo-otteluiden tiedot esitettynä selkeästi HTML-taulukoilla ja CSS-tyyleillä.",
      },
      {
        title: "Taulukoiden tasaus CSS:llä",
        description:
          "Sekavasta HTML-tiedostosta tehtiin siisti esitys kohdennetulla CSS:llä.",
      },
      {
        title: "Rowspan ja colspan",
        description:
          "Kokeiltiin rowspania ja colspania monimutkaisten taulukkoasettelujen tekemiseen, tyylitettynä CSS-luokilla ja ID:illä.",
      },
    ],
  },
  internship1: {
    label: "Harjoittelu 1",
    roleTitle: "Roolini Omnilanilla",
    role: "Omnilanilla työskentelin ohjelmistokehittäjänä ja paransin sisäisiä järjestelmiä ja viestintävälineitä. Tärkeimmät tehtäväni olivat valaistuksen ohjausjärjestelmän kehittäminen ja parantaminen sekä työntekijöiden välisen sähköpostijärjestelmän sujuvoittaminen.",
    sections: [
      {
        heading: "Valaistusjärjestelmän kehitys",
        projects: [
          {
            title: "ISPConfig",
            description: "ISPConfigin pääkäyttöliittymä.",
          },
          {
            title: "Sähköpostidomainien hallinta",
            description:
              "Sähköpostidomainien luominen verkkosivuston osoitteille.",
          },
          {
            title: "Sähköpostiosoitteiden määrittäminen",
            description: "Sähköpostiosoitteiden luominen verkkosivuston domainille.",
          },
        ],
      },
      {
        heading: "Sähköpostijärjestelmän parantaminen",
        projects: [
          {
            title: "Rememberz",
            description: "Rememberz-käyttäjien pääasiallinen navigointinäkymä.",
          },
          {
            title: "Milight-ohjausjärjestelmä",
            description:
              "Käyttäjäasetukset valaistuksen ohjaukseen, mukaan lukien värien säätö.",
          },
          {
            title: "Rememberzin päänäkymä",
            description: "Rememberz-alustan keskeinen navigointikeskus.",
          },
        ],
      },
    ],
  },
  internship2: {
    label: "Harjoittelu 2",
    subtitle: "Verkkokehitys ja verkko-oppiminen",
    roleTitle: "Roolini AB Transportilla",
    role: "AB Transportilla työskentelin ohjelmistokehittäjänä IT-osastolla ja paransin yrityksen sähköpostijärjestelmiä ja niiden ulkoasua. Rakensin tyylikkäämpiä sähköpostipohjia ja käyttöliittymiä ja käytin aikaa jäsenneltyihin verkkokursseihin kehittääkseni Python-, verkkokehys- ja sähköpostisuunnitteluosaamistani.",
    sections: [
      {
        heading: "Verkkokehitys ja CMS-projektit",
        projects: [
          {
            title: "Wagtail CMS -kehitys",
            description:
              "Tutustuin Wagtail CMS:ään jäsenneltyjen verkkokurssien kautta ja rakensin dynaamisia sisällönhallintajärjestelmiä.",
          },
          {
            title: "Sisällönhallintajärjestelmät",
            description:
              "Rakensin interaktiivisia blogeja, joissa oli UKK-osioita ja dynaamisia karuselleja.",
          },
        ],
      },
      {
        heading: "Sähköpostijärjestelmän parantaminen",
        projects: [
          {
            title: "Bootstrap-sähköpostipohjat",
            description:
              "Suunnittelin responsiivisia sähköpostiallekirjoituksia ja asetteluja Bootstrap Emaililla AB Transportille.",
          },
        ],
      },
      {
        heading: "Ohjelmointitaidot",
        projects: [
          {
            title: "Ohjelmointialueet",
            description:
              "Tutustuin Pythoniin, JavaScriptiin, HTML:ään ja CSS:ään, SQL:ään ja muuhun jäsenneltyjen verkko-ohjelmien kautta.",
          },
          {
            title: "Codecademyn Python-kurssit",
            description:
              "Suoritin keskitason ja edistyneen tason Python-kursseja sekä Django-verkkokehitystä.",
          },
        ],
      },
    ],
  },
};

export default fi;
