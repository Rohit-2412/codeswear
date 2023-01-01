import Footer from '../components/footer'
import Nabvar from '../components/navbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return <>
        <Nabvar />
        <Component {...pageProps} />
        <Footer />
    </>

}
