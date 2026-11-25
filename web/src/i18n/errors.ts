import { hasLocale, type Locale } from "./config";

// Small set of strings for the 404 and error pages. Kept separate from the big
// dictionaries so the (client-side) error page doesn't have to load them.
type ErrorTexts = {
  notFoundTitle: string;
  notFoundText: string;
  errorTitle: string;
  errorText: string;
  retry: string;
  home: string;
};

const texts: Record<Locale, ErrorTexts> = {
  en: { notFoundTitle: "Page not found", notFoundText: "This page doesn't exist (anymore). Maybe the link is wrong, or the page has moved.", errorTitle: "Something went wrong", errorText: "The page couldn't be loaded. Try again, or go back to the home page.", retry: "Try again", home: "Back to home" },
  nl: { notFoundTitle: "Pagina niet gevonden", notFoundText: "Deze pagina bestaat niet (meer). Misschien klopt de link niet, of is de pagina verplaatst.", errorTitle: "Er ging iets mis", errorText: "De pagina kon niet worden geladen. Probeer het opnieuw of ga terug naar de homepage.", retry: "Opnieuw proberen", home: "Terug naar home" },
  fr: { notFoundTitle: "Page introuvable", notFoundText: "Cette page n'existe pas (ou plus). Le lien est peut-être erroné, ou la page a été déplacée.", errorTitle: "Une erreur s'est produite", errorText: "La page n'a pas pu être chargée. Réessayez ou revenez à l'accueil.", retry: "Réessayer", home: "Retour à l'accueil" },
  de: { notFoundTitle: "Seite nicht gefunden", notFoundText: "Diese Seite gibt es nicht (mehr). Vielleicht ist der Link falsch oder die Seite wurde verschoben.", errorTitle: "Etwas ist schiefgelaufen", errorText: "Die Seite konnte nicht geladen werden. Versuchen Sie es erneut oder gehen Sie zur Startseite.", retry: "Erneut versuchen", home: "Zur Startseite" },
  es: { notFoundTitle: "Página no encontrada", notFoundText: "Esta página no existe (o ya no existe). Puede que el enlace sea incorrecto o que la página se haya movido.", errorTitle: "Algo salió mal", errorText: "No se pudo cargar la página. Inténtalo de nuevo o vuelve al inicio.", retry: "Reintentar", home: "Volver al inicio" },
  it: { notFoundTitle: "Pagina non trovata", notFoundText: "Questa pagina non esiste (più). Forse il link è sbagliato o la pagina è stata spostata.", errorTitle: "Qualcosa è andato storto", errorText: "Impossibile caricare la pagina. Riprova o torna alla home.", retry: "Riprova", home: "Torna alla home" },
  no: { notFoundTitle: "Fant ikke siden", notFoundText: "Denne siden finnes ikke (lenger). Kanskje lenken er feil, eller siden er flyttet.", errorTitle: "Noe gikk galt", errorText: "Siden kunne ikke lastes. Prøv igjen, eller gå tilbake til forsiden.", retry: "Prøv igjen", home: "Til forsiden" },
  sv: { notFoundTitle: "Sidan hittades inte", notFoundText: "Den här sidan finns inte (längre). Kanske är länken fel, eller så har sidan flyttats.", errorTitle: "Något gick fel", errorText: "Sidan kunde inte laddas. Försök igen eller gå tillbaka till startsidan.", retry: "Försök igen", home: "Till startsidan" },
  da: { notFoundTitle: "Siden blev ikke fundet", notFoundText: "Denne side findes ikke (længere). Måske er linket forkert, eller siden er flyttet.", errorTitle: "Noget gik galt", errorText: "Siden kunne ikke indlæses. Prøv igen, eller gå tilbage til forsiden.", retry: "Prøv igen", home: "Til forsiden" },
  fi: { notFoundTitle: "Sivua ei löytynyt", notFoundText: "Tätä sivua ei ole (enää) olemassa. Linkki voi olla väärä tai sivu on siirretty.", errorTitle: "Jokin meni vikaan", errorText: "Sivua ei voitu ladata. Yritä uudelleen tai palaa etusivulle.", retry: "Yritä uudelleen", home: "Etusivulle" },
};

export function errorTexts(lang: string | undefined): { lang: Locale; t: ErrorTexts } {
  const l: Locale = lang && hasLocale(lang) ? lang : "en";
  return { lang: l, t: texts[l] };
}
