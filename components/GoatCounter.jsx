import Script from 'next/script';
import { GOATCOUNTER_CODE } from '../data/site';

// GoatCounter's recommended tag (goatcounter.com/help/start), loaded after the page is
// interactive. It sets no cookies, and count.js binds a click event to every element with a
// data-goatcounter-click attribute (goatcounter.com/help/events). Production builds only.
export default function GoatCounter() {
    if (!GOATCOUNTER_CODE || process.env.NODE_ENV !== 'production') return null;
    return (
        <Script
            data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
            src="https://gc.zgo.at/count.js"
            strategy="afterInteractive"
        />
    );
}
