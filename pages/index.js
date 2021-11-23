import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kai Mavyn & Next.js!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome!" />
        <p className="description">
          This is my first go with <code>next.js</code>
        </p>
      </main>

      <h1 className="title">
      Read{' '}
      <Link href="/posts/technicalexercise">
        <a>this page!</a>
        </Link>
      </h1>

      <Footer />
    </div>
  )
}
