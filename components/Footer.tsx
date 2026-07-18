export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-sm text-zinc-500">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-white">OFF SEASON</p>
          <p className="mt-2">© 2026 Off Season Coaching</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            Instagram
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
            YouTube
          </a>
          <a href="mailto:hello@offseasoncoaching.com" className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
