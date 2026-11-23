export default function Footer({ rights }: { rights: string }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted">
        <p className="font-display text-lg uppercase tracking-wider text-text">
          Tijme Vervoort
        </p>
        <p className="mt-2">© 2026 Tijme Vervoort. {rights}</p>
      </div>
    </footer>
  );
}
