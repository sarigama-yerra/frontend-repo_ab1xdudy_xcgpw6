import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_55%)]" />

      <Navbar />

      <main className="pt-16">
        <Hero name="Nama Anda" role="Web Developer" summary="Saya membangun website modern, cepat, dan responsif. Berfokus pada pengalaman pengguna dan kualitas kode." />
        <About bio="Saya seorang developer yang antusias membangun produk digital yang berdampak. Terbiasa dengan pengembangan frontend dan backend, kolaborasi tim, serta praktik terbaik dalam pengembangan perangkat lunak." />
        <Skills skills={[
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'Tailwind CSS',
          'Node.js',
          'FastAPI',
          'MongoDB',
        ]} />
        <Projects projects={[
          { title: 'Website Toko', desc: 'E-commerce sederhana dengan fitur keranjang', link: '#' },
          { title: 'Dashboard Admin', desc: 'Visualisasi data bisnis realtime', link: '#' },
          { title: 'Aplikasi Catatan', desc: 'CRUD catatan dengan pencarian', link: '#' },
        ]} />
        <Contact />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-400">
          © {new Date().getFullYear()} • Portofolio • Dibuat dengan cinta 💙
        </div>
      </footer>
    </div>
  )
}

export default App
