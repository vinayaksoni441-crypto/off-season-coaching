export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-sm text-zinc-500 sm:py-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="text-base font-semibold uppercase tracking-[0.35em] text-white">OFF SEASON</p>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Premium online coaching for people who want strength, discipline, and a long-term physique without compromise.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a href="https://www.instagram.com/vinayakk.liftss?igsh=MTd5aXJyazgyZ3J4Yw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="transition hover:text-white">
            Instagram
          </a>
          <a href="https://youtube.com/@vinayakliftss?si=fKjeIXBIFlLygnfL" target="_blank" rel="noreferrer" className="transition hover:text-white">
            YouTube
          </a>
          <a href="mailto:vinayaksoni8818@gmail.com" className="transition hover:text-white">
            Email
          </a>
          <p className="text-zinc-600">© 2026 Off Season Coaching</p>
        </div>
      </div>
    </footer>
  );
}
