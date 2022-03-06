import Container from "../container"

export default function Footer () {
    return (
        <footer className="mt-20">
            <Container>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by in7dagen.online{' '}
                </a>
            </Container>
        </footer>
    )
}