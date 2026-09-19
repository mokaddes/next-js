import Link from 'next/link'

export const metadata = { title: 'About | Todo Creator' }

export default function AboutPage() {
  return (
    <section>
      <Link href="/" className="text-cyan-300">← Back home</Link>
      <h1 className="mt-8 text-3xl font-bold">What this demonstrates</h1>
      <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-300">
        <li>Folders inside app/ become routes.</li>
        <li>Server Components load the initial todo data.</li>
        <li>TodoCreator is a Client Component for browser interaction.</li>
        <li>Route Handlers expose a small API under /api/todos.</li>
      </ul>
    </section>
  )
}
