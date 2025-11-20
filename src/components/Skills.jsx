function Skills({ skills = ['JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'FastAPI', 'MongoDB'] }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-bold text-white mb-6">Keahlian</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((s) => (
          <div key={s} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 text-sm">
            {s}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
