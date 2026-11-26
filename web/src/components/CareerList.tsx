import Link from "next/link";

export type CareerItem = {
  org: string;
  role: string;
  description: string;
  period: string;
  href?: string;
  more?: string;
};

// Career timeline for a white section: period on the left, role · organisation
// and a short description on the right, separated by black rules.
export default function CareerList({ items, label }: { items: CareerItem[]; label: string }) {
  return (
    <ol aria-label={label} className="flex flex-col border-b border-black">
      {items.map((item) => (
        <li key={item.org} className="flex flex-wrap gap-x-8 gap-y-2 border-t border-black py-6">
          <span className="shrink-0 basis-36 pt-1 font-mono text-[0.8125rem] text-[#555] uppercase">
            {item.period}
          </span>
          <div className="min-w-0 flex-[1_1_17.5rem]">
            <h3 className="mb-1.5 font-display text-xl font-extrabold">
              {item.role} · <span className="font-normal">{item.org}</span>
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-[#444]">{item.description}</p>
            {item.href && item.more && (
              <Link
                href={item.href}
                className="group mt-2.5 inline-flex min-h-8 items-center font-display text-xs font-extrabold tracking-[0.12em] text-black uppercase"
              >
                {item.more}
                <span aria-hidden className="ml-1.5 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
