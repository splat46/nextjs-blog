import Container from "../container"
import Link from "next/link"

export default function Header () {
    return (
        <header className="py-4 bg-blue-200 mb-12">
            <Container>
                <div className="flex items-center space-x-12">
                    <h1 className="text-2xl font-bold">My First Nextjs App</h1>
                    <ul className="flex items-center space-x-8">
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
                </div>
            </Container>
        </header>
    )
}