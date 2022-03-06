import '../styles/globals.css'
import Footer from '../components/elements/footer'

export default function App({ Component, pageProps }) {
    return (
        <> 
            <Component {...pageProps} />
            <Footer />
        </>
    )
}