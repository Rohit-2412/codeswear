import Footer from '../components/Footer'
import Nabvar from '../components/Navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return <>
        <Nabvar />
        <Component {...pageProps} />
        <Footer />
    </>

}
