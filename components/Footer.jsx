import { RESUME_PATH } from '../data/site';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-shell">
                <div>
                    <p className="footer-copy">&copy; {new Date().getFullYear()} Swaraj Chandra Reddy M.</p>
                    <p className="footer-note">
                        This site uses Microsoft Clarity to see how visitors use it (clicks and scrolling), with sensitive content masked.{' '}
                        <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer">Microsoft Privacy Statement</a>
                    </p>
                </div>
                <nav className="footer-links" aria-label="Footer navigation">
                    <a href={RESUME_PATH} download data-clarity-event="resume_download">Résumé</a>
                    <a href="https://linkedin.com/in/swarajreddy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/swarajreddy10" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#home">Back to top</a>
                </nav>
            </div>
        </footer>
    );
}
