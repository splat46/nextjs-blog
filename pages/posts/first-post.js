import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Blog Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <div>   
                <Image 
                    src="/images/profile.jpeg"
                    width='100px'
                    height='100px'
                    alt="Your Name"
                />         
                <h1>First Blog Post</h1>
                <Link href="/">
                    <a>Terug naar Home</a>
                </Link>
            </div>
        </>
    )
}