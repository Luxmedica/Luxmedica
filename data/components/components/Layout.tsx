import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header style={{ background: '#0070f3', padding: '1rem', color: 'white' }}>
        <h1>Luxmedica</h1>
      </header>
      <main style={{ maxWidth: '960px', margin: '2rem auto', padding: '0 1rem' }}>
        {children}
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #ddd' }}>
        <p>© 2025 Luxmedica — Beauty & Physio Devices</p>
      </footer>
    </>
  )
}
