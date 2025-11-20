import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Mengirim...')

    try {
      // In real use, connect to backend or form service
      await new Promise((res) => setTimeout(res, 800))
      setStatus('Terkirim! Saya akan segera menghubungi Anda.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Gagal mengirim. Coba lagi ya.')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white">Kontak</h2>
          <p className="text-slate-300 mt-3">Ingin bekerja sama atau punya pertanyaan? Kirim pesan melalui formulir ini.</p>
          <div className="mt-6 space-y-2 text-slate-300 text-sm">
            <p>Email: <a className="text-blue-300 hover:underline" href="mailto:you@email.com">you@email.com</a></p>
            <p>LinkedIn: <a className="text-blue-300 hover:underline" href="#">linkedin.com/in/username</a></p>
            <p>GitHub: <a className="text-blue-300 hover:underline" href="#">github.com/username</a></p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4">
            <div>
              <label className="block text-slate-300 text-sm mb-1">Nama</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-slate-300 text-sm mb-1">Pesan</label>
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="inline-flex justify-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-3 transition-colors">Kirim</button>
            {status && <p className="text-slate-300 text-sm">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
