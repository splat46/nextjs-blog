import '../styles/globals.css'
import Header from '../components/elements/header'
import Footer from '../components/elements/footer'

export default function App({ Component, pageProps }) {
    return (
        <> 
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}