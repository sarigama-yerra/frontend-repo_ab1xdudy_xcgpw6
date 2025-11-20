function Hero({ name = 'Nama Anda', role = 'Web Developer', summary = 'Saya membangun website modern, cepat, dan responsif.' }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-400 font-medium">Halo, saya</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-2">
              {name}
            </h1>
            <p className="text-xl text-slate-300 mt-3">{role}</p>
            <p className="text-slate-300 mt-6 leading-relaxed">{summary}</p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="inline-flex items-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-3 transition-colors">Lihat Proyek</a>
              <a href="#contact" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 transition-colors">Kontak</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 via-slate-700/30 to-slate-900/60 border border-white/10 p-3">
              <div className="w-full h-full rounded-2xl bg-slate-900/50 flex items-center justify-center text-slate-300">
                Foto/Ilustrasi
              </div>
            </div>
            <div className="absolute -z-10 -top-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
