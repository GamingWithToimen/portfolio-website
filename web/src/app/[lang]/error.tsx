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
        className="inline-flex min-h-12 items-center px-2 font-display text-[0.8125rem] font-extrabold tracking-[0.14em] text-white uppercase transition-colors hover:text-[#bdbdbd]"
      >
        {t.retry}
      </button>
    </ErrorScreen>
  );
}
