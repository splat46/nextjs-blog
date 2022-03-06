import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className='text-3xl font-bold text-blue-500'>Waar wil je naartoe?</h1>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/first-post">
                            <a>Blog Post</a>
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    )
}
