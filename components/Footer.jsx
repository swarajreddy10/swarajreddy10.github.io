import { RESUME_PATH } from '../data/site';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-shell">
                <div>
                    <p className="footer-copy">&copy; {new Date().getFullYear()} Swaraj Chandra Reddy M.</p>
                    <p className="footer-note">
                        This site counts visits with GoatCounter, which sets no cookies and collects no personal data.{' '}
                        <a href="https://www.goatcounter.com/help/gdpr" target="_blank" rel="noopener noreferrer">How GoatCounter handles data</a>
                    </p>
                </div>
                <nav className="footer-links" aria-label="Footer navigation">
                    <a href={RESUME_PATH} download data-goatcounter-click="resume-download">Résumé</a>
                    <a href="https://linkedin.com/in/swarajreddy" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/swarajreddy10" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#home">Back to top</a>
                </nav>
            </div>
        </footer>
    );
}
