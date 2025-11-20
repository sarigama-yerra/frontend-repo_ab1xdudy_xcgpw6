function Projects({ projects = [
  { title: 'Website Toko', desc: 'E-commerce sederhana dengan fitur keranjang', link: '#' },
  { title: 'Dashboard Admin', desc: 'Visualisasi data bisnis realtime', link: '#' },
  { title: 'Aplikasi Catatan', desc: 'CRUD catatan dengan pencarian', link: '#' },
] }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-bold text-white mb-6">Proyek</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-slate-700/40 to-slate-900/60 flex items-center justify-center text-slate-300">Preview</div>
            <div className="p-5">
              <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">{p.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
