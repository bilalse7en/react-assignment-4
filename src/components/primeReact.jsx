import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Import a PrimeReact theme
import 'primereact/resources/primereact.min.css';                  // Import PrimeReact core CSS
import 'primeicons/primeicons.css';                                // Import PrimeIcons
import '../styles/globals.css'; // Import global styles if you have any

function PrimeReact ({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
            <App {...pageProps} />
        </PrimeReactProvider>
    );
}

export default PrimeReact;