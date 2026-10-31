'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { CLARITY_PROJECT_ID } from '../data/site';

// Microsoft Clarity's manual install snippet (Clarity docs, "Install manually"), loaded once
// after the page is interactive so it stays off the critical rendering path. Production
// builds only, so local development sessions are not recorded.
const CLARITY_SNIPPET = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_PROJECT_ID}");`;

// Reports a click on any element marked data-clarity-event as a Clarity custom event
// (window.clarity("event", name)), so components stay server-rendered.
export default function ClarityAnalytics() {
    useEffect(() => {
        const onClick = event => {
            const target = event.target instanceof Element ? event.target.closest('[data-clarity-event]') : null;
            if (target && typeof window.clarity === 'function') {
                window.clarity('event', target.dataset.clarityEvent);
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    if (process.env.NODE_ENV !== 'production') return null;
    return <Script id="ms-clarity" strategy="afterInteractive">{CLARITY_SNIPPET}</Script>;
}
