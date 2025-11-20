function About({ bio = 'Saya seorang developer yang antusias membangun produk digital yang berdampak. Fokus pada pengalaman pengguna, performa, dan kualitas kode.' }) {
  const items = [
    { label: 'Pengalaman', value: '3+ tahun' },
    { label: 'Domisili', value: 'Indonesia' },
    { label: 'Fokus', value: 'Frontend & Backend' },
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white">Tentang Saya</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">{bio}</p>
        </div>
        <div className="grid gap-3">
          {items.map((it) => (
            <div key={it.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-400 text-sm">{it.label}</p>
              <p className="text-white font-semibold">{it.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
