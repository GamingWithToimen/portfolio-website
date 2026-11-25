"use client";

import { useParams } from "next/navigation";
import ErrorScreen from "@/components/ErrorScreen";
import { errorTexts } from "@/i18n/errors";

// Shown when something on a page throws; keeps the header and footer.
export default function Error({ reset }: { error: Error; reset: () => void }) {
  const params = useParams<{ lang?: string }>();
  const { lang, t } = errorTexts(params?.lang);

  return (
    <ErrorScreen
      code=":("
      title={t.errorTitle}
      text={t.errorText}
      homeHref={`/${lang}`}
      homeLabel={t.home}
    >
      <button
        type="button"
        onClick={reset}
        className="block border-2 border-line px-6 py-3.5 uppercase transition-colors hover:border-accent hover:text-accent"
      >
        {t.retry}
      </button>
    </ErrorScreen>
  );
}
