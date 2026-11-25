"use client";

import { useParams } from "next/navigation";
import ErrorScreen from "@/components/ErrorScreen";
import { errorTexts } from "@/i18n/errors";

// Shown inside the normal layout (header + contact footer) for unknown pages.
export default function NotFound() {
  const params = useParams<{ lang?: string }>();
  const { lang, t } = errorTexts(params?.lang);

  return (
    <ErrorScreen
      code="404"
      title={t.notFoundTitle}
      text={t.notFoundText}
      homeHref={`/${lang}`}
      homeLabel={t.home}
    />
  );
}
