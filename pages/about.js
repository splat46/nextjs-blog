import Link from "next/link"
import Image from 'next/image'
import Head from "next/head"

export default function About () {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <div>
                <div>
                    <Image 
                        src="/images/profile.jpeg"
                        width='100px'
                        height='100px'
                        alt="Your Name"
                    />
                </div>
                
                <h1>About Us</h1>

                <Link href="/">
                    Terug naar Home
                </Link>
            </div>
        </>
    )
}