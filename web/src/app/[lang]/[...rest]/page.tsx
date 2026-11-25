import { notFound } from "next/navigation";

// This route only ever 404s, so it can't be validated for instant navigation.
export const instant = false;

// Any unknown path under a language (e.g. /nl/does-not-exist) shows the
// translated 404 page from [lang]/not-found.tsx, inside the site layout.
export default function CatchAll() {
  notFound();
}
