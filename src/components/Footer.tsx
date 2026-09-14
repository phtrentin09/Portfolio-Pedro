export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row md:px-10">
        <span>© {year} Pedro Trentin</span>
        <span>Desenhado e construído por Pedro Trentin</span>
      </div>
    </footer>
  );
}
